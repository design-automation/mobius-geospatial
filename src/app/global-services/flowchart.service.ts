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
import {MobiusService} from "./mobius.service";
import * as CircularJSON from 'circular-json';

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


	constructor(private $log: ConsoleService, 
              private _mb: MobiusService, 
              private _ms: ModuleService,
	            public dialog: MatDialog, 
              private http: HttpClient) { 
	};


  push_flowchart(fc: IFlowchart){
    this.fcX.next(fc);
  }

  push_node(node: IGraphNode){
    //console.log(`StartTime: ${new Date()}`);
    this.nX.next(node);
    //console.log(`EndTime: ${new Date()}`);
  }

  get flowchart(): IFlowchart{
    return this.fcX.getValue();
  }

  update_modules(): void{
    this._ms.load_modules();
  }

  update_code_generator(value): void{
    this._mb.code_generator = value;
  }

  // ------------ File Functions

  //
  // Creates a new flowchart
  // Handles authorship, updates Modules and Code Generator
  //
  new_flowchart(): void{
    let fc: IFlowchart = new Flowchart();
    // get author from MobiusService
    fc.author = this._mb.user;

    this.update_modules();

    this.push_flowchart(fc);
    this.push_node(undefined);

    this.$log.log(`New flowchart created. \nAuthor: ${fc.author}\nModule Count: ${this._ms.modules.length}\nCodeGenerator: ${this._mb.code_generator}`);
  }

  //
  // Loads a file from a string
  //
  load_flowchart_from_string(fileString: string): void{
      let _this = this;
      let jsonData: {language: string, flowchart: JSON, modules: JSON};
      let flowchart: IFlowchart;
      
      try{
        let data = CircularJSON.parse(fileString);

        this.update_code_generator(CodeFactory.getCodeGenerator(data["language"]));
        //TODO: this.update_modules();

        flowchart = FlowchartReader.read_flowchart_from_data(data["flowchart"]);
        // TODO: select a node
      }
      catch(err){
        console.log(err);
        this.$log.log(`Error loading file from string: ${err}`);
      }

      this.push_flowchart(flowchart);
  }

  //
  // Loads content from a URL and then passes a string, to be read as a flowchart
  //
  load_file_from_url(url: string): void{
      try{
          let fileString = this.http.get(url).subscribe(res => { 
              this.load_flowchart_from_string(JSON.stringify(res));
          });
      }
      catch(ex){
          this.$log.log("Error fetching file from from URL: ${url}");
      }
  }


  // ------------ Edge Utils
  addEdge(outputAddress: number[], inputAddress: number[]):  void{

      if(outputAddress[0] == inputAddress[0]){
        return;
      }

      try{
        this.fcX.next(FlowchartUtils.add_edge(this.flowchart, outputAddress, inputAddress));
        this.$log.log("New Edge was added");
      }
      catch(ex){
        this.$log.log(ex);
      }
  }

  disconnectPort(type: string, portIndex: number, nodeIndex: number): void{
    this.fcX.next(FlowchartUtils.disconnect_port(this._flowchart, type, portIndex, nodeIndex));
  }

  disconnectNode(nodeIndex: number): void{
    //this.fcX.next();
  }

  deletePort(type: string, portIndex: number): void{
    //this._flowchart.deletePort(type, portIndex, this._selectedNode);
  }

  deleteEdge(edgeIndex: number): void{
    FlowchartUtils.delete_edge(this._flowchart, edgeIndex);
    
    // print message to console
    this.$log.log("Edge was deleted");
  }

}



