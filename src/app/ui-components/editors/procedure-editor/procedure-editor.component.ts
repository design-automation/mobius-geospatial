import { Component, 
		 OnInit, OnDestroy,
		 ViewChild, HostListener} from '@angular/core';

import { NgModel } from '@angular/forms';

import {IGraphNode, NodeUtils} from '../../../base-classes/node/NodeModule';
import {IProcedure, ProcedureFactory, ProcedureTypes, ProcedureUtils} from '../../../base-classes/procedure/ProcedureModule';

import {FlowchartService} from '../../../global-services/flowchart.service';
import {LayoutService} from '../../../global-services/layout.service';
import {ConsoleService} from '../../../global-services/console.service';

import {ModuleUtils} from "../../../base-classes/code/CodeModule";

export enum KEY_CODE {
  CUT = 88,
  COPY = 67, 
  PASTE = 86,
  LEFT = 37,
  UP = 38,
  RIGHT = 39,
  DOWN = 40,
  DELETE = 46
}

abstract class ProcedureOptions{
	
}

/*
 *	Displays the drag-drop procedure for a node
 *
 * 	Updates on:
 * 	- selected_node is changed
 * 	- selected_node is updated
 */

@Component({
  selector: 'app-procedure-editor',
  templateUrl: './procedure-editor.component.html',
  styleUrls: ['./procedure-editor.component.scss']
})
export class ProcedureEditorComponent implements OnInit, OnDestroy{

	// ----- Private Variables
    private subscriptions = [];
    private active_node: IGraphNode;
  	_variableList: string[];
  	copiedProd: IProcedure;

    constructor(private _fs: FlowchartService, 
                private _ls: LayoutService,
                private $log: ConsoleService){}

    ngOnInit(){
      this.subscriptions.push(this._fs.node$.subscribe( (node) => {
      		this.$log.log("Active node updated in Procedure Editor");
       		this.active_node = node;
      }));
    }

    ngOnDestroy(){
      this.subscriptions.map(function(s){
        s.unsubscribe();
      })
    }

	onAction($event, procedure, type): void{
		console.log($event, procedure, type);
		if( !($event instanceof Event) ){
			this.active_node.active_procedure = $event;
		}
	}


	// ---- Cut / Copy / Paste Functions
	@HostListener('window:keyup', ['$event'])
		keyEvent(event: KeyboardEvent) {

			var key = event.keyCode
			var ctrlDown = event.ctrlKey || event.metaKey // Makey support
			var shiftDown = event.shiftKey;

			if((event.srcElement.className.indexOf("input") > -1)){	
				event.stopPropagation(); 
				return;	
			};

			if(ctrlDown){
				switch (key){
					case KEY_CODE.CUT:
						this.copiedProd = ProcedureUtils.copy_procedure(this.active_node.active_procedure);
						console.log(`Cut-Copied Producedure ${this.copiedProd.type}`);
						this.delete_procedure();
						break;
					case KEY_CODE.COPY:
						this.copiedProd = ProcedureUtils.copy_procedure(this.active_node.active_procedure);
						console.log(`Copied Producedure ${this.copiedProd.type}`);
						break;
					case KEY_CODE.PASTE:
						console.log(`Attempting to copy procedure ${this.copiedProd.type}`);
						if(this.copiedProd){
							NodeUtils.add_procedure(this.active_node, this.copiedProd);
							this.copiedProd = ProcedureUtils.copy_procedure(this.copiedProd);
						}
						else{
							this.$log.log("Procedure to copy not found");
						}
						break;
				}
			}
			else if(shiftDown){
				let child: IProcedure = this.active_node.active_procedure
				let parent: IProcedure|IGraphNode = child.parent;
				
				let position: number;
				let procedure_above: IProcedure;
				let procedure_below: IProcedure;

				console.log(`Procedure Above: ${procedure_above}`);
				console.log(`Procedure Below: ${procedure_below}`)

				if(parent == undefined){
					position = NodeUtils.get_child_position(this.active_node, child);
					procedure_above = this.active_node.children[position - 1];
					procedure_below = this.active_node.children[position + 1]
				}
				else{
					position = ProcedureUtils.get_child_position(parent, child);
					procedure_above = parent.children[position - 1];
					procedure_below = parent.children[position + 1]
				}

				switch (key){
					case KEY_CODE.LEFT:
						if(!this.active_node.active_procedure.parent){ /*do nothing*/ }
						else{
							let grandparent: IProcedure = parent.parent;
							if(grandparent){
								ProcedureUtils.shift_level_up(this.active_node.active_procedure);
							}
							else{
								ProcedureUtils.delete_child(parent, child);
								let position: number = NodeUtils.get_child_position(this.active_node, parent);
								NodeUtils.add_procedure_at_position(this.active_node, child, position+1);
							}
						}
						break;

					case KEY_CODE.RIGHT:
						if(position-1 < 0) return;
						
						if(procedure_above.hasChildren == false) return;

						if(parent == undefined){
							this.active_node = NodeUtils.delete_procedure(child);
						}
						else{
							parent = ProcedureUtils.delete_child(parent, child);
						}

						//ProcedureUtils.add_child(procedure_above, child);
						break;

					case KEY_CODE.DOWN:
						if(procedure_below){
							//this.onSelect(procedure_below);
						}
						else{

						}

					case KEY_CODE.UP:
						console.log("up", procedure_above);
						if(procedure_above){
							//this.onSelect(procedure_above);
						}
						else{
							
						}
						break;
				}
			}
			else if(key == KEY_CODE.DELETE){
				this.delete_procedure()
 			}
		}

	delete_procedure(): void{
		console.log(`Delete Procedure: ${this.active_node.active_procedure.type}`);
		NodeUtils.delete_procedure(this.active_node)
	}

}
