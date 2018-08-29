import { Component, OnInit, Injector, Input, 
		 ViewChild, ViewContainerRef, 
		 ComponentFactoryResolver } from '@angular/core';


import { IGraphNode } from '../../../base-classes/node/NodeModule';
import { FlowchartService } from '../../../global-services/flowchart.service';

import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../../store';
import { VIEWERS } from '../../../viewers.config'

@Component({
  selector: 'app-viewer-container',
  templateUrl: './viewer-container.component.html',
  styleUrls: ['./viewer-container.component.scss']
})
export class ViewerContainerComponent{

	@select() selected_node;

	@ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
	@Input() viewer_mode: boolean = false;

	viewers = VIEWERS;
    views = [];
	active_viewer: string = "info-viewer";

    constructor(private injector: Injector, private r: ComponentFactoryResolver){   }

    update_viewer(){
		// update the view
		if( !this.views[this.active_viewer] ){
			this.views[this.active_viewer] = this.createView(this.active_viewer);
		}

		this.vc.detach();
		this.vc.insert(this.views[ this.active_viewer ]);
    }

	showConsole(){
		this.active_viewer = "console-viewer";
	}

	showHelp(){
		this.active_viewer = "help-viewer";
	}

	private createView(component_name: string){
		console.log(component_name)
		let component = VIEWERS.filter((view) => view.name == component_name)[0].viewer;
		let factory = this.r.resolveComponentFactory(component);
   		let componentRef = factory.create(this.injector);
   		if(component_name == "cesium-viewer"){
   			componentRef.instance["mode"] = this.viewer_mode ? "viewer" : "editor";
   		}
    	let view = componentRef.hostView;
    	return view;
	}

}
