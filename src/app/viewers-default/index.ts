import { TextViewerComponent } from './text-viewer/text-viewer.component';
import { HelpViewerComponent } from './help-viewer/help-viewer.component';
//import {CodeViewerComponent} from './code-viewer/code-viewer.component';
//import {InfoViewerComponent} from './info-viewer/info-viewer.component';

export const DEFAULT_VIEWERS = [ 
		{
			name: "text-viewer",
			tip: "Text representation of the selected node",
			icon: "public",
			viewer: TextViewerComponent
		},
		{
			name: "help-viewer",
			tip: "Mobius Help",
			icon: "help",
			viewer: HelpViewerComponent
		}
		 //CodeViewerComponent,  
		 //ConsoleComponent,
		 //HelpViewerComponent, 
		 //InfoViewerComponent 
	   ]

export const DEFAULT_VIEWER_COMPONENTS = DEFAULT_VIEWERS.map((viewObj)=> viewObj.viewer);
