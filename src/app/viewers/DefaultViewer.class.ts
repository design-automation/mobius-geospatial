/*
 * Extend this class to create a new viewer.
 * The current active node from store.ts is availale as 
 * '_node' variable.
 * The viewer should override the display() function 
 * 
 */

import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { IGraphNode } from "../base-classes/node/NodeModule";

export class DefaultViewer{

	@select() selected_node;
	constructor(private ngRedux: NgRedux<IAppState>){}

}