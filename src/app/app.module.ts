import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

import { AppComponent } from './app.component';

import { CustomMaterialModule } from './custom-angular-modules/CustomMaterialModule';
import { AngularSplitModule } from 'angular-split';
import { AceEditorModule } from 'ng2-ace-editor';
import { TreeModule } from 'angular-tree-component';

import { FlowchartService } from './global-services/flowchart.service';
import { ConsoleService } from './global-services/console.service';
import { LayoutService } from './global-services/layout.service'; 
import { MobiusService } from './global-services/mobius.service'; 
import { ModuleService } from './global-services/module.service'; 
import { CodeService } from './global-services/code.service'; 
import { ExecuteService } from './global-services/execute.service'; 
import { NodeLibraryService } from './global-services/node-library.service'; 

import { FlowchartControlsComponent } from './ui-components/controls/flowchart-controls/flowchart-controls.component';
import { MenuComponent } from './ui-components/controls/main-menu/menu.component';

import { ProcedureEditorComponent } from './ui-components/editors/procedure-editor/procedure-editor.component';
import { ProcedureItemComponent } from './ui-components/editors/procedure-editor/procedure-item.component';

import { ParameterEditorComponent } from './ui-components/editors/parameter-editor/parameter-editor.component';
import { ParameterSettingsDialogComponent } from './ui-components/editors/parameter-editor/parameter-settings-dialog.component';
import { FlowchartViewerComponent } from './ui-components/editors/flowchart-viewer/flowchart-viewer.component';

import { ModuleViewerComponent } from './ui-components/viewers/module-viewer/module-viewer.component';
import { ParameterViewerComponent } from './ui-components/viewers/parameter-viewer/parameter-viewer.component';
import { ViewerContainerComponent } from './ui-components/viewers/viewer-container/viewer-container.component';
import { NodeLibraryComponent } from './ui-components/viewers/node-library/node-library.component';
import { ConsoleComponent } from './ui-components/console/console.component';

import { ModuleboxComponent } from './ui-components/controls/modulebox/modulebox.component';
import { EditorComponent } from './ui-components/editors/editor/editor.component';
import { PanelComponent } from './ui-components/layout/panel/panel.component';

import { GSViewer } from './gs-viewer/gs-viewer.module';
import { MobiusCesium } from './mobius-cesium/mobius-cesium.module';


import { FileLoadDialogComponent } from './ui-components/dialogs/file-load-dialog.component';
import { GraphEdgeComponent } from './ui-components/graph/graph-edge/graph-edge.component';
import { MobiusEditorComponent } from './ui-components/main/mobius-editor/mobius-editor.component';
import { MobiusViewerComponent } from './ui-components/main/mobius-viewer/mobius-viewer.component';
import { LandingComponent } from './ui-components/main/mobius-landing/landing.component';
import { MobiusGalleryComponent } from './ui-components/main/mobius-gallery/mobius-gallery.component';

import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { ShortNamePipe } from './pipes/short-name.pipe';
import { SimpleNamePipe } from './pipes/simple-name.pipe';
import { PortTypePipe } from './pipes/port-type-name.pipe';

import { PublishSettingsComponent } from './ui-components/controls/publish-settings/publish-settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DEFAULT_VIEWERS }  from './viewers-default';
//import * from './viewers-extras/index';

const appRoutes: Routes = [
  { path: 'editor', component: MobiusEditorComponent },
  { path: 'gallery', component: MobiusGalleryComponent },
  { path: 'viewer/:id',      component: MobiusViewerComponent },
  { path: '**', component: MobiusEditorComponent }
];


const DEFAULT_VIEWER_COMPONENTS = DEFAULT_VIEWERS.map((viewObj)=> viewObj.viewer);


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FlowchartViewerComponent,
    FlowchartControlsComponent,
    ModuleViewerComponent,
    ProcedureEditorComponent,
    ProcedureItemComponent,
    ParameterViewerComponent,
    ParameterEditorComponent,
    ModuleboxComponent,
    EditorComponent,
    ViewerContainerComponent,
    NodeLibraryComponent,
    PanelComponent,
    ParameterSettingsDialogComponent,
    FileLoadDialogComponent,
    GraphEdgeComponent,
    MobiusEditorComponent,
    MobiusViewerComponent,
    LandingComponent,
    MobiusGalleryComponent,
    ShortNamePipe,
    SimpleNamePipe,
    PortTypePipe,
    PublishSettingsComponent,
    ...DEFAULT_VIEWER_COMPONENTS
  ],
  entryComponents: [
    ModuleboxComponent,
    ParameterSettingsDialogComponent,
    FileLoadDialogComponent,
    PublishSettingsComponent,
    ParameterViewerComponent,
    ViewerContainerComponent,
    FlowchartViewerComponent,
    EditorComponent,
    ...DEFAULT_VIEWER_COMPONENTS
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule, 
    FormsModule,
    AceEditorModule,
    AngularSplitModule, 
    TreeModule,
    CustomMaterialModule,
    GSViewer, 
    MobiusCesium,
    NgxJsonViewerModule,
    NgReduxModule
  ],
  providers: [
              FlowchartService, 
              LayoutService, 
              ConsoleService, 
              MobiusService,
              ExecuteService, 
              ModuleService,
              CodeService, 
              NodeLibraryService
            ],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor (ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}
