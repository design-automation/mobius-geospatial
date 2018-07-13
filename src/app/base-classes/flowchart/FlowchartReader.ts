import { IFlowchart } from './IFlowchart';
import { Flowchart } from './Flowchart';
import { FlowchartUtils } from './FlowchartUtils';
import { FlowchartConnectionUtils } from './FlowchartConnectionUtils';

import { IGraphNode, GraphNode, IEdge, NodeUtils } from '../node/NodeModule';
import { FunctionProcedure } from '../procedure/FunctionProcedure';
import { ProcedureTypes } from '../procedure/ProcedureTypes';

export abstract class FlowchartReader{


	static read_flowchart_from_data(data: IFlowchart): IFlowchart{

	    // recreate the flowchart from data
	    let fc: IFlowchart = new Flowchart(data); 

	    let nodes_data: IGraphNode[] = data["_nodes"];
	    let edges_data: IEdge[] = data["_edges"];

	    console.log("original data: ", fc);

	    /// adding all nodes
	    for(let node_data of nodes_data){	
	    	let n: IGraphNode = NodeUtils.copy_node(node_data, true);
	    	fc.nodes.push(n);
	    	console.log(`Added ${n.name}`);
	    	//FlowchartUtils.add_node_from_data(fc, node_data);
	    }

	    /// adding all edges
	    for(let e_data of edges_data){
	    	let in_node = e_data.input_address[0];
	    	let out_node = e_data.output_address[0];

	    	console.log(`Attempt to add edge between ${in_node} and ${out_node} in the FlowchartReader`);
	    	
	    	let valid_input: boolean = (in_node  >= 0 && in_node < nodes_data.length);
	    	let valid_output: boolean = (out_node  >= 0 && out_node < nodes_data.length);

	    	if( valid_input && valid_output ){
	    		FlowchartUtils.add_edge(fc, e_data.output_address, e_data.input_address);
	    		console.log(`Created edge between ${in_node} and ${out_node}`)
	    	}
	    	else{
	    		console.warn(`Skipped creating edge between ${in_node} and ${out_node}`)
	    	}
	    }

		console.log("recreated fc: ", fc);

	    return fc;
	}

}