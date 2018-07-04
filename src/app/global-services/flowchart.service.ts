import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {IFlowchart, Flowchart, FlowchartReader, FlowchartUtils, FlowchartConnectionUtils} from '../base-classes/flowchart/FlowchartModule';
import {IGraphNode, GraphNode} from '../base-classes/node/NodeModule';
import {ICodeGenerator, CodeFactory, IModule, ModuleUtils} from "../base-classes/code/CodeModule";
import {IPort} from "../base-classes/port/PortModule";
import {IProcedure} from "../base-classes/procedure/IProcedure";

import {ConsoleService, EConsoleMessageType} from "./console.service";
import {ModuleService} from "./module.service";

//import {LayoutService} from "./layout.service";

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Injectable()
export class FlowchartService {

	private _user: string = "AKM";
	private _origData: any;
  private code_generator: ICodeGenerator = CodeFactory.getCodeGenerator("js");


  // Observable Data sources
  // fcX.next() <-- to update
  private _flowchart: IFlowchart;
  private _active_node: IGraphNode;
  private fcX = new BehaviorSubject<IFlowchart>(this._flowchart);
	private nX = new BehaviorSubject<IGraphNode>(this._active_node);

	// Observable data streams
	// flowchart$.subscribe() <-- to update
	public flowchart$ = this.fcX.asObservable();
	public node$ = this.nX.asObservable();


	constructor(private consoleService: ConsoleService, 
	          public dialog: MatDialog, private http: HttpClient) { 
	};

  push_flowchart(fc: IFlowchart){
    this.fcX.next(fc);
  }

  push_node(node: IGraphNode){
    this.nX.next(node);
  }

  get flowchart(): IFlowchart{
    return this.fcX.getValue();
  }

  //
  //
  //
  new_flowchart(user: string): void{
    let fc: IFlowchart = new Flowchart(user);
    this.push_flowchart(fc);
    this.push_node(undefined);
  }

  getCodeGenerator(): ICodeGenerator{
    console.log("shouldn't")
    return this.code_generator;
  }

  addEdge(outputAddress: number[], inputAddress: number[]):  void{

      if(outputAddress[0] == inputAddress[0]){
        return;
      }

      try{
         this.fcX.next(FlowchartUtils.add_edge(this._flowchart, outputAddress, inputAddress));
        this.consoleService.addMessage("New Edge was added");
      }
      catch(ex){
        this.consoleService.addMessage(ex, EConsoleMessageType.Error);
      }
  }

  disconnectPort(type: string, portIndex: number, nodeIndex: number): void{
    this.fcX.next(FlowchartUtils.disconnect_port(this._flowchart, type, portIndex, nodeIndex));
  }

  disconnectNode(nodeIndex: number): void{
    this.fcX.next(FlowchartConnectionUtils.disconnect_node(this._flowchart, nodeIndex));
  }

  deletePort(type: string, portIndex: number): void{
    //this._flowchart.deletePort(type, portIndex, this._selectedNode);
  }

  deleteEdge(edgeIndex: number): void{
    FlowchartUtils.delete_edge(this._flowchart, edgeIndex);
    
    // print message to console
    this.consoleService.addMessage("Edge was deleted");
  }

}



