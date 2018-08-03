import { CodeGenerator } from '../CodeGenerator';
import { IModule } from "../CodeModule";
 
import { IFlowchart, FlowchartUtils, FlowchartConnectionUtils } from "../../flowchart/FlowchartModule";
import { IGraphNode, IEdge } from "../../node/NodeModule";
import { IProcedure, ProcedureTypes, IComponent } from "../../procedure/ProcedureModule";
import { InputPort, OutputPort } from "../../port/PortModule";

import { ConsoleService } from "../../../global-services/console.service";

import * as ts from "typescript";

export class CodeGeneratorJS extends CodeGenerator{

		constructor(){ 	super("js");	}

		//
		//	gets the display code for the flowchart
		//
		get_code_display(flowchart: IFlowchart){

			let fn_calls :string[]= [];
			let code_defs: string[] = [];
			let connector_lines: any = [];
			let code_block: string = "";

			return "Currently Unavailable";
		}

		get_code_function_call(node: IGraphNode, params?: any, executionCode?: boolean): string{
			let fn_call: string = "";
			let param_values: string[] = [];

			let inputs = node.inputs;
			for(let i=0; i < inputs.length; i++ ){
				if(inputs[i].isConnected == true){
					let input_name:string = inputs[i].name;
					if( params ){

						if( executionCode == true){
							param_values.push( "params." + input_name );
						}
						else{
							let p =  params[ input_name ];
							param_values.push( p );
						}
					}
					else{
						param_values.push( input_name );
					}
				}
				else{
					let val = inputs[i].value;
					param_values.push(val);
				}
			}

			param_values = param_values.map(function(p){
				if(p === undefined){
					return "undefined";
				}
				else{
					return p;
				}
			});

			// make function call and assign to variable of same name
			fn_call = "let " + node.name +  "=" + node.name + node.version + "( " + param_values.join(", ") + " );" ;

			if(!node.enabled){
				fn_call = "/* " + fn_call + " */";
			}
			
			return fn_call;
		}

		get_code_node_def(node: IGraphNode): string{
			let fn_def: string = "";

			let params :string[] = [];
			let inputs = node.inputs;
			for(let i=0; i < inputs.length; i++ ){
				params.push(inputs[i].name);
			}

			// make function
			fn_def += "function " + node.name + node.version + "( " + params.join(", ") + " )() \n" ;
			
			return fn_def;
		}

		get_code_node(node: IGraphNode, prodArr?: number, withoutFnOutput?: boolean): string{ 	
			let nodeVars: string[] = [];
			let fn_code :string = "";

			// add initializations
			// get params
			let params :string[] = [];
			let initializations :string[] = [];
			let inputs :InputPort[] = node.inputs;
			for(let i=0; i < inputs.length; i++ ){

				let inp = inputs[i];
				nodeVars.push(inp.name);

				if( 1/*inp.isConnected() == true*/ ){
					params.push(inp.name);
				}
				
				let input_port_code: string = this.get_code_port_input(inp);
				if(input_port_code !== ""){
					//initializations.push( input_port_code );
				}

			}

			// make function
			fn_code += "function " + node.name + node.version + "( " + params.join(", ") + " ) { \n" ;
			fn_code += ( initializations.length > 0 ? initializations.join(";\n") + ";\n" : "" );
			
			// add outputs 
			let results :string[]= [], opInits :string[] = [];
			let outputs : OutputPort[] = node.outputs;
			for( let o=0; o < outputs.length; o++ ){
				let oname = outputs[o].name; 
				nodeVars.push(oname);
				results.push( oname + " : " + oname);
				opInits.push( this.get_code_port_output(outputs[o]) )
			}
			
			// add initialization for outputs
			fn_code += ( opInits.length > 0 ? "\n" + opInits.join(";\n") + ";\n" : ""); 

			// add procedure
			for( let line=0; line <  node.procedure.length; line ++ ){
				let procedure: IProcedure = node.procedure[line];

				// if procedure is disabled - skip
				if(!procedure.enabled){
					continue;
				}

				// if(prodArr)	fn_code += "\n" + "prodArr.push(" + procedure.id + ")";
				fn_code += "\n" +  this.get_code_procedure(procedure, nodeVars, undefined, prodArr); 

			}

			// add return object
			fn_code += "\n" + "return " + " { " + results.join(", ") + " } " + ";";

			// ending
			fn_code += "\n }\n"

			return fn_code;
		}

		get_code_node_io(node: IGraphNode, output_idx: number): string{
			return node.name + "." + node.outputs[output_idx].name; 
		}

		get_code_connection_line(destination_node: IGraphNode, destination_port: number, source_node: IGraphNode, source_port: number): string{

			let code :string = "let " + destination_node.inputs[destination_port].name + "="
								+ this.get_code_node_io(source_node, source_port) + ";";

			if(!destination_node.enabled || !source_node.enabled){
				code = "/* " + code + " */";
			}

			return code;
		}

		static existsInNodeVars(nodeVars: string[], name: string): boolean{

			let var_name: string = name;

			// check if name might be an array index
			let reg = new RegExp(/(\w*)(\[\w*\])/g)
			let result = reg.exec(name);

			if(result){
				var_name = result[1];
				// console.log(var_name, nodeVars);
			}
			else{
				// do nothing
			}

			return (nodeVars.indexOf( var_name ) > -1);
		}

		get_code_procedure(procedure: IProcedure, nodeVars: string[]=[], prodFn ?: any, prodArr?: number){

			// change based on type
			let code: string; 
			let prod_type = procedure.type;

			if(prodFn == undefined){
			 	prodFn = this.get_code_procedure;
			}

			if(prod_type == ProcedureTypes.Data || prod_type == ProcedureTypes.Function){
				let init: string;

				if( CodeGeneratorJS.existsInNodeVars(nodeVars, procedure.left.expression) == false ){
					init = "let ";
					nodeVars.push( procedure.left.expression );
				}
				else{
					init = "";
				}

				code =  init + procedure.left.expression + " = " + procedure.right.expression + ";";

				if(procedure.print){
					code = code + "\n" + "__MOBIUS_PRINT__(" + "\'" + procedure.left.expression + "\', " + procedure.left.expression + ");\n";
				}
			}
			else if(prod_type == ProcedureTypes.LoopContinue || prod_type == ProcedureTypes.LoopBreak){
				code = procedure.left.expression + ";";
			}
			else if(prod_type == ProcedureTypes.Action){
				let paramList :string[]= [];
				let params  = procedure.right.params;
				for( let p=0; p < params.length; p++){
					let param = params[p];
					if(param.value !== undefined){
						paramList.push(param.value)
					}
					else{
						paramList.push(param.type)
					}
				}

				let right :IComponent = procedure.right;

				let init: string;
				if( CodeGeneratorJS.existsInNodeVars(nodeVars, procedure.left.expression) == false ){
					init = "let ";
					nodeVars.push( procedure.left.expression );
				}
				else{
					init = "";
				}


				code = init + procedure.left.expression 
						+ " = " 
						+ "__MOBIUS_MODULES__."
						+ right.module.trim()
						+ "." + right.fn_name + "( " + paramList.join(",") + " );\n";

				if(procedure.print){
					code = code + "\n" + "__MOBIUS_PRINT__(" + "\'" + procedure.left.expression + "\', " + procedure.left.expression + ");\n";
				}

			}
			else if( procedure.hasChildren ){
				let codeArr = [];

				// add statement
				let statement: string = "";
				if(prod_type == ProcedureTypes.IfControl){
					statement = "if (" + procedure.left.expression + "){"
				}
				else if(prod_type == ProcedureTypes.ElseIfControl){
					statement = "else if (" + procedure.left.expression + "){"
				}
				else if(prod_type == ProcedureTypes.ElseControl){
					statement = "else {";
					// code = "prodArr.id = (\'" + procedure.id + "\');\n" + code; 
				}
				else if(prod_type == ProcedureTypes.ForLoopControl){
					statement = "for ( let " + procedure.left.expression + " of " + procedure.right.expression + "){"
					
					if( CodeGeneratorJS.existsInNodeVars(nodeVars, procedure.left.expression) == false ){
						nodeVars.push( procedure.left.expression );
					}
				
				}
				else if(prod_type == ProcedureTypes.WhileControl){
					statement = `while(${procedure.right.expression}){`;
					if( CodeGeneratorJS.existsInNodeVars(nodeVars, procedure.left.expression) == false ){
						nodeVars.push( procedure.left.expression );
					}	
				}
				else if(prod_type == ProcedureTypes.Comment){
					statement = `\/*${procedure.left.expression}*\/`;
				}
				codeArr.push(statement);


				// add children
				// children will have nodeVars from parents 
				// but parents should have childVars
				let childVars = nodeVars.map(function(s){ return s; });
				procedure.children.map(function(child){ 
					if(child.enabled){
						codeArr.push(prodFn(child, childVars, prodFn, prodArr));
					}
				});

				// add ending
				codeArr.push("}\n")
				code = codeArr.join("\n");
			}

			// add procedure id to track failing
			if(prodArr && prod_type != ProcedureTypes.ElseControl && prod_type !==ProcedureTypes.ElseIfControl){ 
				// code = "prodArr.id = (\'" + procedure.id + "\');\n" + code; 
			};

			return code;
		}

		//
		//	required for code generation
		//
		get_code_port_input(port: InputPort): string{
			if( port.isConnected == true ) 
				return "";

			return "let " + port.name + " = " + port.value; 
		}

		get_code_port_output(port: OutputPort): string{

			let prepend: string = "let ";
			return prepend + port.name + " = " + port.getDefaultValue(); 
		}

		execute_node(node: IGraphNode, params: any, __Mobius__Modules__: any, print: Function, globals?: any): any{

			let prodArr: any = {id: undefined};
			let str: string = "";

			if(globals){
				for(let g=0; g < globals.length; g++){
					str += "const " + globals[g].name  + " =" + globals[g].value + ";\n";
	 			}
			}

			str +=	this.get_code_node(node, prodArr) + "\n" + 
					this.get_code_function_call(node, [], true) + "\n" + 
					"return " + node.name + ";" 

			//ConsoleService.log_to_db(`Generated Script: ${str}`);

			let result: any;
			console.log(__Mobius__Modules__);

			try{
				result = (new Function('params', '__MOBIUS_MODULES__', '__MOBIUS_PRINT__', str))(params, __Mobius__Modules__, print);
				ConsoleService.log_to_db(`<code>${str}</code> <br><br><b>Successfully Executed</b>`)
			}
			catch(ex){

				ConsoleService.log_to_db(`<code>${str}</code> <br><br> <b>Execution Error:</b> <br>${ex}`)
				node.hasError = true;


				let prodWithError: number = prodArr;
				console.log("prodArr", prodArr);

				let markError = function(prod: IProcedure, id: number){
					if(prod.id && id && prod.id == id){
						prod.error = (true);
					}

					if(prod.hasChildren){
						prod.children.map(function(p){
							markError(p, id);
						});
					}

				}
				
				if(prodWithError){
					console.log(prodWithError);
					node.procedure.map(function(prod: IProcedure){

						if(prod.id == prodWithError){
							prod.error = (true);
						}

						if(prod.hasChildren){
							prod.children.map(function(p){
								markError(p, prodWithError);
							})
						}

					});
				}

				let error: Error;
				if(ex.toString().indexOf("Unexpected Identifier") > -1){
					error = new Error("Unexpected Identifier error. Did you declare everything? Check that your strings are enclosed in quotes (\")");
				}
				else if(ex.toString().indexOf("Unexpected token") > -1){
					error = new Error("Unexpected token error. Check for stray spaces or reserved keywords?");
				}
				else{
				 	error = new Error(ex);
				}
				throw error;
			}

			return result;
		}

};