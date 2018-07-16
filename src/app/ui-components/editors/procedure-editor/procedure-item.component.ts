import { Component, 
		 Input, Output, 
		 EventEmitter,
		 OnInit, OnDestroy,
		 ViewChild, HostListener} from '@angular/core';

import {IProcedure, ProcedureFactory, ProcedureTypes, ProcedureUtils} from '../../../base-classes/procedure/ProcedureModule';
import {NodeUtils, IGraphNode} from '../../../base-classes/node/NodeModule';

@Component({
  selector: 'app-procedure-item',
  templateUrl: './procedure-item.component.html', 
  styleUrls: ['procedure-item.component.scss']
})
export class ProcedureItemComponent implements OnInit, OnDestroy{

	@Input() prod: IProcedure;
	@Input() active_procedure: IProcedure;
	@Input() level: number;
	@Input() root: IGraphNode;

 	//@Output() action = new EventEmitter<{prod: IProcedure, type:string}>();
 	@Output() action = new EventEmitter<string>()

	ngOnInit(){ }  

	ngOnDestroy(){ }

	updateProcedure($event, prod, comp){
	}

	onSelect($event): void{
		this.root.active_procedure = this.prod;
	}

	trackByFn(procedure) {
	    return procedure.id; // or song.id
	}

	delete($event): void{
		this.onSelect($event);
		this.onAction("delete");
	}

	cut($event): void{
		this.onSelect($event);
		this.onAction("cut");
	}

	copy($event): void{
		this.onSelect($event);
		this.onAction("copy");
	}

	paste($event): void{
		this.onSelect($event);
		this.onAction("paste");
	}

	onAction(actionString: string){
		this.action.emit(actionString);
	}

 }