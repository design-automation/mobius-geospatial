webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AppComponent = class AppComponent {
    constructor() {
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_angular_modules_CustomMaterialModule__ = __webpack_require__("./src/app/custom-angular-modules/CustomMaterialModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_split__ = __webpack_require__("./node_modules/angular-split/esm2015/angular-split.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ace_editor__ = __webpack_require__("./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_tree_component__ = __webpack_require__("./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__global_services_console_service__ = __webpack_require__("./src/app/global-services/console.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__global_services_layout_service__ = __webpack_require__("./src/app/global-services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__global_services_mobius_service__ = __webpack_require__("./src/app/global-services/mobius.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__global_services_module_service__ = __webpack_require__("./src/app/global-services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__global_services_code_service__ = __webpack_require__("./src/app/global-services/code.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__global_services_execute_service__ = __webpack_require__("./src/app/global-services/execute.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__global_services_node_library_service__ = __webpack_require__("./src/app/global-services/node-library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ui_components_controls_flowchart_controls_flowchart_controls_component__ = __webpack_require__("./src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ui_components_controls_main_menu_menu_component__ = __webpack_require__("./src/app/ui-components/controls/main-menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ui_components_editors_procedure_editor_procedure_editor_component__ = __webpack_require__("./src/app/ui-components/editors/procedure-editor/procedure-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ui_components_editors_procedure_editor_procedure_item_component__ = __webpack_require__("./src/app/ui-components/editors/procedure-editor/procedure-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ui_components_editors_parameter_editor_parameter_editor_component__ = __webpack_require__("./src/app/ui-components/editors/parameter-editor/parameter-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ui_components_editors_parameter_editor_parameter_settings_dialog_component__ = __webpack_require__("./src/app/ui-components/editors/parameter-editor/parameter-settings-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ui_components_editors_flowchart_viewer_flowchart_viewer_component__ = __webpack_require__("./src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ui_components_viewers_code_viewer_code_viewer_component__ = __webpack_require__("./src/app/ui-components/viewers/code-viewer/code-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ui_components_viewers_geometry_viewer_geometry_viewer_component__ = __webpack_require__("./src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ui_components_viewers_cesium_viewer_cesium_viewer_component__ = __webpack_require__("./src/app/ui-components/viewers/cesium-viewer/cesium-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ui_components_viewers_module_viewer_module_viewer_component__ = __webpack_require__("./src/app/ui-components/viewers/module-viewer/module-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ui_components_viewers_parameter_viewer_parameter_viewer_component__ = __webpack_require__("./src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ui_components_controls_modulebox_modulebox_component__ = __webpack_require__("./src/app/ui-components/controls/modulebox/modulebox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ui_components_editors_editor_editor_component__ = __webpack_require__("./src/app/ui-components/editors/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ui_components_viewers_viewer_container_viewer_container_component__ = __webpack_require__("./src/app/ui-components/viewers/viewer-container/viewer-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ui_components_viewers_text_viewer_text_viewer_component__ = __webpack_require__("./src/app/ui-components/viewers/text-viewer/text-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ui_components_viewers_node_library_node_library_component__ = __webpack_require__("./src/app/ui-components/viewers/node-library/node-library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ui_components_layout_panel_panel_component__ = __webpack_require__("./src/app/ui-components/layout/panel/panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ui_components_console_console_component__ = __webpack_require__("./src/app/ui-components/console/console.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ui_components_help_info_viewer_info_viewer_component__ = __webpack_require__("./src/app/ui-components/help/info-viewer/info-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ui_components_help_help_viewer_help_viewer_component__ = __webpack_require__("./src/app/ui-components/help/help-viewer/help-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ui_components_help_info_viewer_help_template__ = __webpack_require__("./src/app/ui-components/help/info-viewer/help.template.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__gs_viewer_gs_viewer_module__ = __webpack_require__("./src/app/gs-viewer/gs-viewer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__mobius_cesium_mobius_cesium_module__ = __webpack_require__("./src/app/mobius-cesium/mobius-cesium.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ui_components_dialogs_file_load_dialog_component__ = __webpack_require__("./src/app/ui-components/dialogs/file-load-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ui_components_graph_graph_edge_graph_edge_component__ = __webpack_require__("./src/app/ui-components/graph/graph-edge/graph-edge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ui_components_main_mobius_editor_mobius_editor_component__ = __webpack_require__("./src/app/ui-components/main/mobius-editor/mobius-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ui_components_main_mobius_viewer_mobius_viewer_component__ = __webpack_require__("./src/app/ui-components/main/mobius-viewer/mobius-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ui_components_main_mobius_landing_landing_component__ = __webpack_require__("./src/app/ui-components/main/mobius-landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ui_components_main_mobius_gallery_mobius_gallery_component__ = __webpack_require__("./src/app/ui-components/main/mobius-gallery/mobius-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_ngx_json_viewer__ = __webpack_require__("./node_modules/ngx-json-viewer/ngx-json-viewer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pipes_short_name_pipe__ = __webpack_require__("./src/app/pipes/short-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pipes_simple_name_pipe__ = __webpack_require__("./src/app/pipes/simple-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pipes_port_type_name_pipe__ = __webpack_require__("./src/app/pipes/port-type-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ui_components_controls_publish_settings_publish_settings_component__ = __webpack_require__("./src/app/ui-components/controls/publish-settings/publish-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















































const appRoutes = [
    { path: 'editor', component: __WEBPACK_IMPORTED_MODULE_44__ui_components_main_mobius_editor_mobius_editor_component__["a" /* MobiusEditorComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_47__ui_components_main_mobius_gallery_mobius_gallery_component__["a" /* MobiusGalleryComponent */] },
    { path: 'viewer/:id', component: __WEBPACK_IMPORTED_MODULE_45__ui_components_main_mobius_viewer_mobius_viewer_component__["a" /* MobiusViewerComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_44__ui_components_main_mobius_editor_mobius_editor_component__["a" /* MobiusEditorComponent */] }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_19__ui_components_controls_main_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_24__ui_components_editors_flowchart_viewer_flowchart_viewer_component__["a" /* FlowchartViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_25__ui_components_viewers_code_viewer_code_viewer_component__["a" /* CodeViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_26__ui_components_viewers_geometry_viewer_geometry_viewer_component__["a" /* GeometryViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_27__ui_components_viewers_cesium_viewer_cesium_viewer_component__["a" /* CesiumViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_18__ui_components_controls_flowchart_controls_flowchart_controls_component__["a" /* FlowchartControlsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__ui_components_viewers_module_viewer_module_viewer_component__["a" /* ModuleViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ui_components_editors_procedure_editor_procedure_editor_component__["a" /* ProcedureEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_21__ui_components_editors_procedure_editor_procedure_item_component__["a" /* ProcedureItemComponent */],
            __WEBPACK_IMPORTED_MODULE_29__ui_components_viewers_parameter_viewer_parameter_viewer_component__["a" /* ParameterViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_22__ui_components_editors_parameter_editor_parameter_editor_component__["a" /* ParameterEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_30__ui_components_controls_modulebox_modulebox_component__["a" /* ModuleboxComponent */],
            __WEBPACK_IMPORTED_MODULE_31__ui_components_editors_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_32__ui_components_viewers_viewer_container_viewer_container_component__["a" /* ViewerContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_34__ui_components_viewers_node_library_node_library_component__["a" /* NodeLibraryComponent */],
            __WEBPACK_IMPORTED_MODULE_35__ui_components_layout_panel_panel_component__["a" /* PanelComponent */],
            __WEBPACK_IMPORTED_MODULE_23__ui_components_editors_parameter_editor_parameter_settings_dialog_component__["a" /* ParameterSettingsDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_38__ui_components_help_help_viewer_help_viewer_component__["a" /* HelpViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_37__ui_components_help_info_viewer_info_viewer_component__["a" /* InfoViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_39__ui_components_help_info_viewer_help_template__["c" /* MobiusAbout */],
            __WEBPACK_IMPORTED_MODULE_39__ui_components_help_info_viewer_help_template__["a" /* HelpFundamentals */],
            __WEBPACK_IMPORTED_MODULE_39__ui_components_help_info_viewer_help_template__["b" /* HelpModel */],
            __WEBPACK_IMPORTED_MODULE_42__ui_components_dialogs_file_load_dialog_component__["a" /* FileLoadDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_43__ui_components_graph_graph_edge_graph_edge_component__["a" /* GraphEdgeComponent */],
            __WEBPACK_IMPORTED_MODULE_44__ui_components_main_mobius_editor_mobius_editor_component__["a" /* MobiusEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_45__ui_components_main_mobius_viewer_mobius_viewer_component__["a" /* MobiusViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_46__ui_components_main_mobius_landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_47__ui_components_main_mobius_gallery_mobius_gallery_component__["a" /* MobiusGalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_49__pipes_short_name_pipe__["a" /* ShortNamePipe */],
            __WEBPACK_IMPORTED_MODULE_50__pipes_simple_name_pipe__["a" /* SimpleNamePipe */],
            __WEBPACK_IMPORTED_MODULE_51__pipes_port_type_name_pipe__["a" /* PortTypePipe */],
            __WEBPACK_IMPORTED_MODULE_52__ui_components_controls_publish_settings_publish_settings_component__["a" /* PublishSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_33__ui_components_viewers_text_viewer_text_viewer_component__["a" /* TextViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_36__ui_components_console_console_component__["a" /* ConsoleComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_30__ui_components_controls_modulebox_modulebox_component__["a" /* ModuleboxComponent */],
            __WEBPACK_IMPORTED_MODULE_23__ui_components_editors_parameter_editor_parameter_settings_dialog_component__["a" /* ParameterSettingsDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_42__ui_components_dialogs_file_load_dialog_component__["a" /* FileLoadDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_52__ui_components_controls_publish_settings_publish_settings_component__["a" /* PublishSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_29__ui_components_viewers_parameter_viewer_parameter_viewer_component__["a" /* ParameterViewerComponent */],
            //
            __WEBPACK_IMPORTED_MODULE_32__ui_components_viewers_viewer_container_viewer_container_component__["a" /* ViewerContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_24__ui_components_editors_flowchart_viewer_flowchart_viewer_component__["a" /* FlowchartViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_31__ui_components_editors_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_26__ui_components_viewers_geometry_viewer_geometry_viewer_component__["a" /* GeometryViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_27__ui_components_viewers_cesium_viewer_cesium_viewer_component__["a" /* CesiumViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_33__ui_components_viewers_text_viewer_text_viewer_component__["a" /* TextViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_25__ui_components_viewers_code_viewer_code_viewer_component__["a" /* CodeViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_36__ui_components_console_console_component__["a" /* ConsoleComponent */],
            __WEBPACK_IMPORTED_MODULE_38__ui_components_help_help_viewer_help_viewer_component__["a" /* HelpViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_37__ui_components_help_info_viewer_info_viewer_component__["a" /* InfoViewerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_53__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_ace_editor__["a" /* AceEditorModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_split__["a" /* AngularSplitModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular_tree_component__["a" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_6__custom_angular_modules_CustomMaterialModule__["a" /* CustomMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_40__gs_viewer_gs_viewer_module__["a" /* GSViewer */],
            __WEBPACK_IMPORTED_MODULE_41__mobius_cesium_mobius_cesium_module__["a" /* MobiusCesium */],
            __WEBPACK_IMPORTED_MODULE_48_ngx_json_viewer__["a" /* NgxJsonViewerModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__global_services_flowchart_service__["a" /* FlowchartService */],
            __WEBPACK_IMPORTED_MODULE_12__global_services_layout_service__["a" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_11__global_services_console_service__["a" /* ConsoleService */],
            __WEBPACK_IMPORTED_MODULE_13__global_services_mobius_service__["a" /* MobiusService */],
            __WEBPACK_IMPORTED_MODULE_16__global_services_execute_service__["a" /* ExecuteService */],
            __WEBPACK_IMPORTED_MODULE_14__global_services_module_service__["a" /* ModuleService */],
            __WEBPACK_IMPORTED_MODULE_15__global_services_code_service__["a" /* CodeService */],
            __WEBPACK_IMPORTED_MODULE_17__global_services_node_library_service__["a" /* NodeLibraryService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/base-classes/code/CodeFactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generators_javascript_generator__ = __webpack_require__("./src/app/base-classes/code/generators/javascript_generator.ts");

class CodeFactory {
    static getCodeGenerator(language) {
        if (language == "js") {
            return new __WEBPACK_IMPORTED_MODULE_0__generators_javascript_generator__["a" /* CodeGeneratorJS */]();
        }
        else
            throw Error("Unknown language");
    }
    ;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CodeFactory;



/***/ }),

/***/ "./src/app/base-classes/code/CodeGenerator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CodeGenerator {
    constructor(language) { this._language = language; }
    ;
    toString() {
        return `${this._language}-generator`;
    }
    setModules(modules) { this._modules = modules; }
    ;
    getLanguage() { return this._language; }
    ;
    get_code_display(flowchart) { throw Error("Not Implemented: CodeGenerator"); }
    ;
    get_code_node_def(node) { throw Error("Not Implemented: CodeGenerator"); }
    ;
    get_code_function_call(node, params) { throw Error("Not Implemented: CodeGenerator"); }
    ;
    get_code_node(node, prodArr, withoutFnOutput) { throw Error("Not Implemented: CodeGenerator"); }
    ;
    get_code_node_io(node, output_idx) { throw Error("Not Implemented: CodeGenerator"); }
    ;
    get_code_connection_line(input_node, input_port, output_node, output_port) { throw Error("Not Implemented: CodeGenerator"); }
    ;
    get_code_procedure(procedure) { throw Error("Not Implemented: CodeGenerator"); }
    ;
    get_code_port_input(port) { throw Error("Not Implemented: CodeGenerator"); }
    ;
    get_code_port_output(port) { throw Error("Not Implemented: CodeGenerator"); }
    ;
    execute_node(node, params, Modules, print, globals) { throw Error("Not Implemented: CodeGenerator"); }
    ;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CodeGenerator;



/***/ }),

/***/ "./src/app/base-classes/code/CodeModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generators_javascript_generator__ = __webpack_require__("./src/app/base-classes/code/generators/javascript_generator.ts");
/* unused harmony reexport CodeGeneratorJS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CodeFactory__ = __webpack_require__("./src/app/base-classes/code/CodeFactory.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__CodeFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__computation_modules_ModuleUtils__ = __webpack_require__("./src/app/base-classes/code/computation-modules/ModuleUtils.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__computation_modules_ModuleUtils__["a"]; });
/*export {CodeGeneratorPY} from './generators/python_generator';*/





/***/ }),

/***/ "./src/app/base-classes/code/computation-modules/ModuleUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ModuleUtils {
    static createModule(name, fn_list, helpname, help) {
        let helpObj;
        // if(help && help.children){
        // 	helpObj = help.children.filter(function(child){
        // 		 let name: string = child.name;
        // 		 if(name.substr(1, name.length - 2)  == helpname){
        // 		 	return true;
        // 		 }
        // 		 else{
        // 		 	return false;
        // 		 }
        // 	})
        // }
        let obj = {
            _name: name,
            _version: 0.1,
            _author: "Patrick",
            _helpObj: help ? help.children : help
        };
        for (let prop in fn_list) {
            obj[prop] = fn_list[prop];
        }
        return obj;
    }
    static getModuleFromSet(ModuleSet, name) {
        let imod;
        for (let key in ModuleSet) {
            let mod = ModuleSet[key];
            if (key !== name) {
                for (let prop in mod) {
                    let submod = mod[prop];
                    ;
                    if (typeof (submod) == "function") {
                        break;
                    }
                    if (prop == name && typeof (submod) == "object") {
                        imod = this.createModule(prop, submod);
                    }
                }
            }
            else {
                imod = this.createModule(key, mod);
            }
        }
        return imod;
    }
    static getName(mod) {
        return mod["_name"];
    }
    static getAuthor(mod) {
        return mod["_author"];
    }
    static getVersion(mod) {
        return mod["_version"];
    }
    static isValid(mod) {
        if (mod == undefined)
            return undefined;
        return !!(this.getName(mod) && this.getVersion(mod) && this.getAuthor(mod));
    }
    static isCompatible(mod1, mod2) {
        if (mod1 == undefined || mod2 == undefined)
            return false;
        let _nameCheck = this.getName(mod1) == this.getName(mod2);
        let _versionCheck = this.getVersion(mod1) == this.getVersion(mod2);
        let _authorCheck = this.getAuthor(mod1) == this.getAuthor(mod2);
        return _nameCheck && _versionCheck && _authorCheck;
    }
    static hasReturn(func) {
        const str = func.toString();
        const regex = /return (\S+);/gm;
        let m;
        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                if (groupIndex == 1 && match != 'void') {
                    //console.log(`Found match, group ${groupIndex}: ${match}`);
                    return false;
                }
            });
        }
        return true;
    }
    static getParams(func) {
        let fnStr = func.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
        let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).split(","); //.match( /([^\s,]+)/g);
        if (result === null || result[0] == "") {
            result = [];
        }
        let final_result = result.map(function (r) {
            r = r.trim();
            let r_value = r.split("=");
            if (r_value.length == 1) {
                return { type: r_value[0].trim(), value: r_value[0].trim() };
            }
            else {
                return { type: r_value[0].trim(), value: r_value[1].trim() };
            }
        });
        return final_result;
    }
    static getFunctions(mod) {
        // default names to exclude
        let fn = [];
        let module_name = this.getName(mod);
        let fns = Object.getOwnPropertyNames(mod).filter(function (prop) {
            return ["length", "prototype", "name", "_name", "_author", "_version", "_helpObj", "_url"].indexOf(prop) == -1;
        });
        for (let f = 0; f < fns.length; f++) {
            let function_name = fns[f];
            // todo: why!?
            let func = mod[function_name];
            if (mod.hasOwnProperty(function_name)) {
                if (typeof (func) == "function") {
                    let obj = { name: function_name,
                        module: module_name,
                        params: this.getParams(func),
                        hasReturn: this.hasReturn(func),
                        def: func
                    };
                    fn.push(obj);
                }
            }
            else {
                continue;
            }
        }
        let sortFn = function (a, b) {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        };
        fn.sort(sortFn);
        return fn;
    }
    ;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ModuleUtils;



/***/ }),

/***/ "./src/app/base-classes/code/generators/javascript_generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CodeGenerator__ = __webpack_require__("./src/app/base-classes/code/CodeGenerator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services_console_service__ = __webpack_require__("./src/app/global-services/console.service.ts");



class CodeGeneratorJS extends __WEBPACK_IMPORTED_MODULE_0__CodeGenerator__["a" /* CodeGenerator */] {
    constructor() { super("js"); }
    //
    //	gets the display code for the flowchart
    //
    get_code_display(flowchart) {
        let fn_calls = [];
        let code_defs = [];
        let connector_lines = [];
        let code_block = "";
        return "Currently Unavailable";
    }
    get_code_function_call(node, params, executionCode) {
        let fn_call = "";
        let param_values = [];
        let inputs = node.inputs;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].isConnected == true) {
                let input_name = inputs[i].name;
                if (params) {
                    if (executionCode == true) {
                        param_values.push("params." + input_name);
                    }
                    else {
                        let p = params[input_name];
                        param_values.push(p);
                    }
                }
                else {
                    param_values.push(input_name);
                }
            }
            else {
                let val = inputs[i].value;
                param_values.push(val);
            }
        }
        param_values = param_values.map(function (p) {
            if (p === undefined) {
                return "undefined";
            }
            else {
                return p;
            }
        });
        // make function call and assign to variable of same name
        fn_call = "let " + node.name + "=" + node.name + node.version + "( " + param_values.join(", ") + " );";
        if (!node.enabled) {
            fn_call = "/* " + fn_call + " */";
        }
        return fn_call;
    }
    get_code_node_def(node) {
        let fn_def = "";
        let params = [];
        let inputs = node.inputs;
        for (let i = 0; i < inputs.length; i++) {
            params.push(inputs[i].name);
        }
        // make function
        fn_def += "function " + node.name + node.version + "( " + params.join(", ") + " )() \n";
        return fn_def;
    }
    get_code_node(node, prodArr, withoutFnOutput) {
        let nodeVars = [];
        let fn_code = "";
        // add initializations
        // get params
        let params = [];
        let initializations = [];
        let inputs = node.inputs;
        for (let i = 0; i < inputs.length; i++) {
            let inp = inputs[i];
            nodeVars.push(inp.name);
            if (1 /*inp.isConnected() == true*/) {
                params.push(inp.name);
            }
            let input_port_code = this.get_code_port_input(inp);
            if (input_port_code !== "") {
                //initializations.push( input_port_code );
            }
        }
        // make function
        fn_code += "function " + node.name + node.version + "( " + params.join(", ") + " ) { \n";
        fn_code += (initializations.length > 0 ? initializations.join(";\n") + ";\n" : "");
        // add outputs 
        let results = [], opInits = [];
        let outputs = node.outputs;
        for (let o = 0; o < outputs.length; o++) {
            let oname = outputs[o].name;
            nodeVars.push(oname);
            results.push(oname + " : " + oname);
            opInits.push(this.get_code_port_output(outputs[o]));
        }
        // add initialization for outputs
        fn_code += (opInits.length > 0 ? "\n" + opInits.join(";\n") + ";\n" : "");
        // add procedure
        for (let line = 0; line < node.procedure.length; line++) {
            let procedure = node.procedure[line];
            // if procedure is disabled - skip
            if (!procedure.enabled) {
                continue;
            }
            // if(prodArr)	fn_code += "\n" + "prodArr.push(" + procedure["id"] + ")";
            fn_code += "\n" + this.get_code_procedure(procedure, nodeVars, undefined, prodArr);
        }
        // add return object
        fn_code += "\n" + "return " + " { " + results.join(", ") + " } " + ";";
        // ending
        fn_code += "\n }\n";
        return fn_code;
    }
    get_code_node_io(node, output_idx) {
        return node.name + "." + node.outputs[output_idx].name;
    }
    get_code_connection_line(destination_node, destination_port, source_node, source_port) {
        let code = "let " + destination_node.inputs[destination_port].name + "="
            + this.get_code_node_io(source_node, source_port) + ";";
        if (!destination_node.enabled || !source_node.enabled) {
            code = "/* " + code + " */";
        }
        return code;
    }
    static existsInNodeVars(nodeVars, name) {
        let var_name = name;
        // check if name might be an array index
        let reg = new RegExp(/(\w*)(\[\w*\])/g);
        let result = reg.exec(name);
        if (result) {
            var_name = result[1];
            // console.log(var_name, nodeVars);
        }
        else {
            // do nothing
        }
        return (nodeVars.indexOf(var_name) > -1);
    }
    get_code_procedure(procedure, nodeVars = [], prodFn, prodArr) {
        // change based on type
        let code;
        let prod_type = procedure.type;
        if (prodFn == undefined) {
            prodFn = this.get_code_procedure;
        }
        if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].Data || prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].Function) {
            let init;
            if (CodeGeneratorJS.existsInNodeVars(nodeVars, procedure.left.expression) == false) {
                init = "let ";
                nodeVars.push(procedure.left.expression);
            }
            else {
                init = "";
            }
            code = init + procedure.left.expression + " = " + procedure.right.expression + ";";
            if (procedure.print) {
                code = code + "\n" + "__MOBIUS_PRINT__(" + "\'" + procedure.left.expression + "\', " + procedure.left.expression + ");\n";
            }
        }
        else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].LoopContinue || prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].LoopBreak) {
            code = procedure.left.expression + ";";
        }
        else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
            let paramList = [];
            let params = procedure.right.params;
            for (let p = 0; p < params.length; p++) {
                let param = params[p];
                if (param.value !== undefined) {
                    paramList.push(param.value);
                }
                else {
                    paramList.push(param.type);
                }
            }
            let right = procedure.right;
            let init;
            if (CodeGeneratorJS.existsInNodeVars(nodeVars, procedure.left.expression) == false) {
                init = "let ";
                nodeVars.push(procedure.left.expression);
            }
            else {
                init = "";
            }
            code = init + procedure.left.expression
                + " = "
                + "__MOBIUS_MODULES__."
                + right.module.trim()
                + "." + right.fn_name + "( " + paramList.join(",") + " );\n";
            if (procedure.print) {
                code = code + "\n" + "__MOBIUS_PRINT__(" + "\'" + procedure.left.expression + "\', " + procedure.left.expression + ");\n";
            }
        }
        else if (procedure.hasChildren) {
            let codeArr = [];
            // add statement
            let statement = "";
            if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].IfControl) {
                statement = "if (" + procedure.left.expression + "){";
            }
            else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseIfControl) {
                statement = "else if (" + procedure.left.expression + "){";
            }
            else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseControl) {
                statement = "else {";
                code = "prodArr = (\'" + procedure["id"] + "\');\n" + code;
            }
            else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl) {
                statement = "for ( let " + procedure.left.expression + " of " + procedure.right.expression + "){";
                if (CodeGeneratorJS.existsInNodeVars(nodeVars, procedure.left.expression) == false) {
                    nodeVars.push(procedure.left.expression);
                }
            }
            else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].WhileControl) {
                statement = `while(${procedure.right.expression}){`;
                if (CodeGeneratorJS.existsInNodeVars(nodeVars, procedure.left.expression) == false) {
                    nodeVars.push(procedure.left.expression);
                }
            }
            else if (prod_type == __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].Comment) {
                statement = `\/*${procedure.left.expression}*\/`;
            }
            codeArr.push(statement);
            // add children
            // children will have nodeVars from parents 
            // but parents should have childVars
            let childVars = nodeVars.map(function (s) { return s; });
            procedure.children.map(function (child) {
                if (child.enabled) {
                    codeArr.push(prodFn(child, childVars, prodFn, prodArr));
                }
            });
            // add ending
            codeArr.push("}\n");
            code = codeArr.join("\n");
        }
        // add procedure id to track failing
        if (prodArr && prod_type != __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseControl && prod_type !== __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseIfControl) {
            code = "prodArr = (\'" + procedure["id"] + "\');\n" + code;
        }
        ;
        return code;
    }
    //
    //	required for code generation
    //
    get_code_port_input(port) {
        if (port.isConnected == true)
            return "";
        return "let " + port.name + " = " + port.value;
    }
    get_code_port_output(port) {
        let prepend = "let ";
        return prepend + port.name + " = " + port.getDefaultValue();
    }
    execute_node(node, params, __Mobius__Modules__, print, globals) {
        let prodArr = 1;
        let str = "";
        if (globals) {
            for (let g = 0; g < globals.length; g++) {
                str += "const " + globals[g].name + " =" + globals[g].value + ";\n";
            }
        }
        str += this.get_code_node(node, prodArr) + "\n" +
            this.get_code_function_call(node, [], true) + "\n" +
            "return " + node.name + ";";
        //ConsoleService.log_to_db(`Generated Script: ${str}`);
        let result;
        try {
            result = (new Function('params', '__MOBIUS_MODULES__', '__MOBIUS_PRINT__', str))(params, __Mobius__Modules__, print);
            __WEBPACK_IMPORTED_MODULE_2__global_services_console_service__["a" /* ConsoleService */].log_to_db(`<code>${str}</code> <br><br><b>Successfully Executed</b>`);
        }
        catch (ex) {
            __WEBPACK_IMPORTED_MODULE_2__global_services_console_service__["a" /* ConsoleService */].log_to_db(`<code>${str}</code> <br><br> <b>Execution Error:</b> <br>${ex}`);
            node.hasError = true;
            let prodWithError = prodArr;
            let markError = function (prod, id) {
                if (prod["id"] && id && prod["id"] == id) {
                    prod.error = (true);
                }
                if (prod.hasChildren) {
                    prod.children.map(function (p) {
                        markError(p, id);
                    });
                }
            };
            if (prodWithError) {
                node.procedure.map(function (prod) {
                    if (prod["id"] == prodWithError) {
                        prod.error = (true);
                    }
                    /*if(prod.hasChildren){
                        prod.children.map(function(p){
                            markError(p, prodWithError);
                        })
                    }*/
                });
            }
            let error;
            if (ex.toString().indexOf("Unexpected Identifier") > -1) {
                error = new Error("Unexpected Identifier error. Did you declare everything? Check that your strings are enclosed in quotes (\")");
            }
            else if (ex.toString().indexOf("Unexpected token") > -1) {
                error = new Error("Unexpected token error. Check for stray spaces or reserved keywords?");
            }
            else {
                error = new Error(ex);
            }
            throw error;
        }
        return result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CodeGeneratorJS;

;


/***/ }),

/***/ "./src/app/base-classes/flowchart/Flowchart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__port_PortModule__ = __webpack_require__("./src/app/base-classes/port/PortModule.ts");

class Flowchart {
    constructor(data) {
        this._nodes = [];
        this._edges = [];
        this._globals = [];
        this._name = "new_flowchart.mob";
        this._description = "Hello, World!";
        this._author = "new_author";
        this._editable = true;
        this._globals = [];
        this._nodes = [];
        this._edges = [];
        if (data) {
            this._name = data["_name"];
            this._description = data["_description"];
            this._author = data["_author"];
            this._editable = data["_editable"];
            if (data["_globals"]) {
                this._globals = data["_globals"].map(function (in_data) {
                    let input_port = new __WEBPACK_IMPORTED_MODULE_0__port_PortModule__["a" /* InputPort */](in_data["_name"]);
                    input_port.update(in_data);
                    return input_port;
                });
            }
        }
    }
    ;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get author() {
        return this._author;
    }
    set author(value) {
        this._author = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get summary() {
        return this._summary;
    }
    set summary(value) {
        this._summary = value;
    }
    get selected_node() {
        return this._selected;
    }
    set selected_node(index) {
        this._selected = index;
    }
    get globals() {
        return this._globals;
    }
    set globals(arr) {
        this._globals = arr;
    }
    get nodes() {
        return this._nodes;
    }
    get edges() {
        return this._edges;
    }
    set edges(edges) {
        this._edges = edges;
    }
    set editable(value) {
        this._editable = value;
    }
    get editable() {
        return this._editable;
    }
    get display_node() {
        return this._displayed_node;
    }
    set display_node(index) {
        this._displayed_node = index;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Flowchart;



/***/ }),

/***/ "./src/app/base-classes/flowchart/FlowchartConnectionUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class FlowchartConnectionUtils {
    // =============== Disconnect Nodes
    //
    //	Disconnects a node
    //	Deletes any edges connected to the node
    //	Resets all ports, connected to the edges, connected to the node
    //
    static disconnect_node(flowchart, idx) {
        let node = flowchart.nodes[idx];
        node.inputs.map(function (input) {
            input.isConnected = false;
            input.value = " ";
        });
        node.outputs.map(function (output) {
            output.isConnected = false;
            output.value = " ";
        });
        let edges = FlowchartConnectionUtils.remove_edges_with_node(flowchart, idx);
        flowchart.edges = flowchart.edges.filter((edge, index) => edges.indexOf(index) == -1);
        return flowchart;
    }
    static disconnect_edges_with_port_idx(flowchart, nodeIndex, portIndex, type) {
        let splicedEdges = [];
        let edges = flowchart.edges;
        for (let e = 0; e < edges.length; e++) {
            let edge = edges[e];
            // if type == "input"
            if (type == "input" && edge.input_address[0] == nodeIndex && edge.input_address[1] == portIndex) {
                let port = flowchart.nodes[edge.output_address[0]].outputs[edge.output_address[1]];
                port.isConnected = false;
                port.value = undefined;
                splicedEdges.push(e);
            }
            else if (type == "output" && edge.output_address[0] == nodeIndex && edge.output_address[1] == portIndex) {
                let port = flowchart.nodes[edge.input_address[0]].inputs[edge.input_address[1]];
                port.isConnected = false;
                port.value = undefined;
                splicedEdges.push(e);
            }
        }
        return splicedEdges;
    }
    //
    //	Returns array of edge indices connected to a node
    //
    static remove_edges_with_node(flowchart, node_index) {
        let linked_edges = [];
        let edges = flowchart.edges;
        for (let e = 0; e < edges.length; e++) {
            let edge = edges[e];
            if (edge.output_address[0] == node_index) {
                let port = flowchart.nodes[edge.input_address[0]].inputs[edge.input_address[1]];
                port.isConnected = false;
                port.value = " ";
                linked_edges.push(e);
            }
            else if (edge.input_address[0] == node_index) {
                let port = flowchart.nodes[edge.output_address[0]].outputs[edge.output_address[1]];
                port.isConnected = false;
                port.value = " ";
                linked_edges.push(e);
            }
        }
        return linked_edges;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FlowchartConnectionUtils;



/***/ }),

/***/ "./src/app/base-classes/flowchart/FlowchartModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Flowchart__ = __webpack_require__("./src/app/base-classes/flowchart/Flowchart.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Flowchart__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FlowchartReader__ = __webpack_require__("./src/app/base-classes/flowchart/FlowchartReader.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__FlowchartReader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FlowchartWriter__ = __webpack_require__("./src/app/base-classes/flowchart/FlowchartWriter.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__FlowchartWriter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FlowchartUtils__ = __webpack_require__("./src/app/base-classes/flowchart/FlowchartUtils.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__FlowchartUtils__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FlowchartConnectionUtils__ = __webpack_require__("./src/app/base-classes/flowchart/FlowchartConnectionUtils.ts");
/* unused harmony reexport FlowchartConnectionUtils */







/***/ }),

/***/ "./src/app/base-classes/flowchart/FlowchartReader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Flowchart__ = __webpack_require__("./src/app/base-classes/flowchart/Flowchart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FlowchartUtils__ = __webpack_require__("./src/app/base-classes/flowchart/FlowchartUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_NodeModule__ = __webpack_require__("./src/app/base-classes/node/NodeModule.ts");



class FlowchartReader {
    static read_flowchart_from_data(data) {
        // recreate the flowchart from data
        let fc = new __WEBPACK_IMPORTED_MODULE_0__Flowchart__["a" /* Flowchart */](data);
        let nodes_data = data["_nodes"];
        let edges_data = data["_edges"];
        console.log("original data: ", fc);
        /// adding all nodes
        for (let node_data of nodes_data) {
            let n = __WEBPACK_IMPORTED_MODULE_2__node_NodeModule__["b" /* NodeUtils */].copy_node(node_data, true);
            fc.nodes.push(n);
            console.log(`Added ${n.name}`);
            //FlowchartUtils.add_node_from_data(fc, node_data);
        }
        /// adding all edges
        for (let e_data of edges_data) {
            let in_node = e_data.input_address[0];
            let out_node = e_data.output_address[0];
            console.log(`Attempt to add edge between ${in_node} and ${out_node} in the FlowchartReader`);
            let valid_input = (in_node >= 0 && in_node < nodes_data.length);
            let valid_output = (out_node >= 0 && out_node < nodes_data.length);
            if (valid_input && valid_output) {
                __WEBPACK_IMPORTED_MODULE_1__FlowchartUtils__["a" /* FlowchartUtils */].add_edge(fc, e_data.output_address, e_data.input_address);
                console.log(`Created edge between ${in_node} and ${out_node}`);
            }
            else {
                console.warn(`Skipped creating edge between ${in_node} and ${out_node}`);
            }
        }
        return fc;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FlowchartReader;



/***/ }),

/***/ "./src/app/base-classes/flowchart/FlowchartUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FlowchartConnectionUtils__ = __webpack_require__("./src/app/base-classes/flowchart/FlowchartConnectionUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_NodeModule__ = __webpack_require__("./src/app/base-classes/node/NodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__port_PortModule__ = __webpack_require__("./src/app/base-classes/port/PortModule.ts");



class FlowchartUtils {
    // === General Util Functions
    static get_new_node_name(flowchart, prefix) {
        let default_node_name = prefix + (flowchart.nodes.length + 1);
        return default_node_name;
    }
    static get_node_idx(flowchart, uuid) {
        let nodes = flowchart.nodes;
        let idx = undefined;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].id == uuid) {
                idx = i;
                break;
            }
        }
        return idx;
    }
    // 
    // =========
    // Node Add/Delete
    // 
    //
    // Adds a new node
    //
    static add_node(flowchart) {
        let new_node = new __WEBPACK_IMPORTED_MODULE_1__node_NodeModule__["a" /* GraphNode */]();
        new_node.name = FlowchartUtils.get_new_node_name(flowchart, "node");
        __WEBPACK_IMPORTED_MODULE_1__node_NodeModule__["b" /* NodeUtils */].add_port(new_node, __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["e" /* PortTypes */].Input);
        __WEBPACK_IMPORTED_MODULE_1__node_NodeModule__["b" /* NodeUtils */].add_port(new_node, __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["e" /* PortTypes */].Output);
        flowchart.nodes.push(new_node);
        return flowchart;
    }
    //
    // Deletes a node
    //
    static delete_node(flowchart, uuid) {
        // get node_index of the uuid
        let node_index = FlowchartUtils.get_node_idx(flowchart, uuid);
        if (node_index == undefined)
            throw Error("Node not found");
        // disconnect the node and set all port values to undefined
        __WEBPACK_IMPORTED_MODULE_0__FlowchartConnectionUtils__["a" /* FlowchartConnectionUtils */].disconnect_node(flowchart, node_index);
        flowchart.nodes.splice(node_index, 1);
        /*compute redundant edges in the node and delete the edges
        let redundant_edges = FlowchartConnectionUtils.edges_with_node(flowchart, node_index);
        flowchart = FlowchartUtils.delete_edges(flowchart, redundant_edges);*/
        // todo: clean this up!
        for (let e = 0; e < flowchart.edges.length; e++) {
            let edge = flowchart.edges[e];
            let input_node = edge.input_address[0];
            let output_node = edge.output_address[0];
            if (input_node == node_index || output_node == node_index) {
                FlowchartUtils.delete_edge(flowchart, e);
            }
            if (input_node > node_index) {
                edge.input_address[0] = input_node - 1;
            }
            if (output_node > node_index) {
                edge.output_address[0] = output_node - 1;
            }
        }
        return flowchart;
    }
    static delete_port(flowchart, type, portIndex, nodeIndex) {
        FlowchartUtils.disconnect_port(flowchart, type, portIndex, nodeIndex);
        __WEBPACK_IMPORTED_MODULE_1__node_NodeModule__["b" /* NodeUtils */].delete_port_by_index(flowchart.nodes[nodeIndex], type, portIndex);
    }
    // ========== Disconnect ports
    static disconnect_port(flowchart, type, portIndex, nodeIndex) {
        let edges = flowchart.edges;
        /// disconnect the edges related to this port
        let edgesArr = __WEBPACK_IMPORTED_MODULE_0__FlowchartConnectionUtils__["a" /* FlowchartConnectionUtils */].disconnect_edges_with_port_idx(flowchart, nodeIndex, portIndex, type);
        FlowchartUtils.delete_edges(flowchart, edgesArr);
        /// update indices of edges
        /// delete port
        for (let e = 0; e < edges.length; e++) {
            let input_node = edges[e].input_address[0];
            let input_port = edges[e].input_address[1];
            if (type == "input") {
                let input_node = edges[e].input_address[0];
                let input_port = edges[e].input_address[1];
                if (input_node == nodeIndex && input_port >= portIndex) {
                    edges[e].input_address[1] = edges[e].input_address[1] - 1;
                }
            }
            else if (type == "output") {
                let output_node = edges[e].output_address[0];
                let output_port = edges[e].output_address[1];
                if (output_node == nodeIndex && output_port >= portIndex) {
                    edges[e].output_address[1] = edges[e].output_address[1] - 1;
                }
            }
            else {
                console.warn("reached 358");
            }
        }
        return flowchart;
    }
    // 
    // =============== 
    // Edge related
    // 
    // 
    //
    // Adds an edge between two ports
    //
    static add_edge(flowchart, outputAddress, inputAddress) {
        if (outputAddress.length !== 2 || inputAddress.length !== 2) {
            throw Error("Invalid arguments for edge");
        }
        console.log(`Edge created`);
        let oNode = flowchart.nodes[outputAddress[0]];
        let iNode = flowchart.nodes[inputAddress[0]];
        // dont remove previous edges for outputs
        let output = oNode.outputs[outputAddress[1]];
        let input = iNode.inputs[inputAddress[1]];
        if (input.isConnected) {
            FlowchartUtils.delete_edges(flowchart, __WEBPACK_IMPORTED_MODULE_0__FlowchartConnectionUtils__["a" /* FlowchartConnectionUtils */].disconnect_edges_with_port_idx(flowchart, inputAddress[0], inputAddress[1], "input"));
        }
        if (!flowchart.nodes[outputAddress[0]].enabled || !flowchart.nodes[inputAddress[0]].enabled) {
            console.warn("Cannot connect to disabled nodes");
        }
        else {
            let edge = { output_address: outputAddress, input_address: inputAddress };
            input.value = { port: outputAddress };
            output.isConnected = true;
            input.isConnected = true;
            // todo: check for valid input/output addresses and port address
            flowchart.edges.push(edge);
        }
        return flowchart;
    }
    ;
    //
    //	Deletes an edge by index number of the edges
    //	TODO: Overload
    //
    static delete_edge(flowchart, edgeIdx) {
        return FlowchartUtils.delete_edges(flowchart, [edgeIdx]);
    }
    //
    //	Deletes edges by arrya of indices
    //
    static delete_edges(flowchart, edgeIds) {
        flowchart.edges = flowchart.edges.filter(function (edge, index) {
            return (edgeIds.indexOf(index) == -1);
        });
        return flowchart;
    }
    // ==== Execution related
    //
    // Updates dependent inputs of a node
    //
    static update_dependent_inputs(flowchart, node, originalRank) {
        let selectedEdges = flowchart.edges.filter(function (edge) {
            return edge.output_address[0] == originalRank;
        });
        for (let e = 0; e < selectedEdges.length; e++) {
            let edge = selectedEdges[e];
            let inputNode = flowchart.nodes[edge.input_address[0]];
            // set computed value of port
            // should this be from within the node?
            let outputPort = node.outputs[edge.output_address[1]];
            let inputPort = inputNode.inputs[edge.input_address[1]];
            let outVal = outputPort.getValue();
            if (outVal && outVal.constructor.name == "Model") {
                console.error("Shouldn't be here");
                // let modelData: string = outVal.toJSON();
                // let model = new gs.Model(JSON.parse(modelData));
                // inputPort.setComputedValue( model );
            }
            else {
                inputPort.value = JSON.parse(JSON.stringify(outVal));
            }
        }
    }
    //
    //	Executes the flowchart
    //
    static execute(flowchart, code_generator, modules, print) {
        // set all nodes to status not executed
        // future: cache results and set status based on changes
        FlowchartUtils.reset(flowchart);
        let gld = [];
        for (let i = 0; i < flowchart.globals.length; i++) {
            let prop = flowchart.globals[i].getName();
            let value = flowchart.globals[i].getValue();
            gld.push({ name: prop, value: value });
        }
        // sort nodes 
        let executed = [];
        while (executed.length < flowchart.nodes.length) {
            for (let index = 0; index < flowchart.nodes.length; index++) {
                let node = flowchart.nodes[index];
                if (executed.indexOf(index) > -1) {
                    console.log(`${node.name} is already executed`);
                }
                else {
                    console.log(`${node.name} is enabled: ${node.enabled}`);
                    if (!node.enabled) {
                        //
                        //	If node is disabled, do nothing and add index of the node
                        //	to the executed array
                        //
                        executed.push(index);
                        console.log(`${node.name} is disabled, hence skipped}`);
                    }
                    else {
                        //
                        //	If node is enabled, check if all inputs are satisfied
                        //
                        let flag = true;
                        let inputs = node.inputs;
                        for (const inp of node.inputs) {
                            // input value contains reference to a port
                            // mark flag as false, to revisit
                            if (inp.value && inp.value["port"]) {
                                flag = false;
                                console.log(`${node.name} is has unfulfilled values}`);
                                break;
                            }
                        }
                        // If all inputs are determined, 
                        // execute the node
                        if (flag) {
                            console.log(`${node.name} executing...`);
                            let time1 = (new Date()).getTime();
                            __WEBPACK_IMPORTED_MODULE_1__node_NodeModule__["b" /* NodeUtils */].execute_node(node, code_generator, modules, print, gld);
                            FlowchartUtils.update_dependent_inputs(flowchart, node, index);
                            executed.push(index);
                            let time2 = (new Date()).getTime();
                            let time_taken = (time2 - time1) / 1000;
                            node.time_taken = time_taken;
                            console.log(`${node.name} executed in ${time_taken}s`);
                        }
                    }
                }
            }
        }
        return true;
    }
    //
    //	clears all the cached results
    //
    static reset(flowchart) {
        for (let n = 0; n < flowchart.nodes.length; n++) {
            let node = flowchart.nodes[n];
            node.reset();
            if (!node.enabled) {
                __WEBPACK_IMPORTED_MODULE_0__FlowchartConnectionUtils__["a" /* FlowchartConnectionUtils */].disconnect_node(flowchart, n);
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FlowchartUtils;



/***/ }),

/***/ "./src/app/base-classes/flowchart/FlowchartWriter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FlowchartReader__ = __webpack_require__("./src/app/base-classes/flowchart/FlowchartReader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_circular_json__ = __webpack_require__("./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services_file_service__ = __webpack_require__("./src/app/global-services/file.service.ts");



class FlowchartWriter {
    static save_flowchart_as_json(flowchart) {
        let file = {};
        let fileString;
        file["language"] = "js";
        file["modules"] = [];
        let newFlowchart = __WEBPACK_IMPORTED_MODULE_0__FlowchartReader__["a" /* FlowchartReader */].read_flowchart_from_data(flowchart);
        file["flowchart"] = newFlowchart;
        fileString = __WEBPACK_IMPORTED_MODULE_1_circular_json__["stringify"](file);
        let fname = 'Scene' + (new Date()).getTime() + ".mob";
        if (flowchart.name) {
            fname = flowchart.name;
            if (!fname.endsWith(".mob")) {
                fname = fname + ".mob";
            }
        }
        __WEBPACK_IMPORTED_MODULE_2__global_services_file_service__["a" /* FileService */].downloadAsJSON(fileString, fname);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FlowchartWriter;



/***/ }),

/***/ "./src/app/base-classes/misc/GUID.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class IdGenerator {
    static s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    static getId() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IdGenerator;



/***/ }),

/***/ "./src/app/base-classes/node/GraphNode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_GUID__ = __webpack_require__("./src/app/base-classes/misc/GUID.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__port_PortModule__ = __webpack_require__("./src/app/base-classes/port/PortModule.ts");



class GraphNode {
    constructor(data) {
        this.portCounter = 0;
        this.inputPortCounter = 0;
        this.outputPortCounter = 0;
        this._version = 1;
        this._type = undefined;
        this._inputs = [];
        this._outputs = [];
        this._procedure = [];
        this._enabled = true;
        this._hasExecuted = false;
        this._hasError = false;
        this._dependencies = [];
        this._dependencyNodes = [];
        this._position = [0, 0];
        this._id = __WEBPACK_IMPORTED_MODULE_0__misc_GUID__["a" /* IdGenerator */].getId();
        if (data) {
            this.update_properties(data);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    set id(uuid) {
        this._id = uuid;
    }
    get inputs() {
        return this._inputs;
    }
    set inputs(values) {
        this._inputs = values;
    }
    get outputs() {
        return this._outputs;
    }
    set outputs(values) {
        this._outputs = values;
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        this._enabled = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get procedure() {
        return this._procedure;
    }
    set procedure(prod) {
        this._procedure = prod;
    }
    get active_procedure() {
        return this._active;
    }
    set active_procedure(value) {
        this._active = value;
        // todo: validate if value exists
    }
    get version() {
        return this._version;
    }
    set version(value) {
        this._version = value;
    }
    get hasExecuted() {
        return this._hasExecuted;
    }
    set hasExecuted(value) {
        this._hasExecuted = value;
    }
    get hasError() {
        return this._hasError;
    }
    set hasError(value) {
        this._hasError = value;
    }
    get children() {
        return this._procedure;
    }
    set children(values) {
        this._procedure = values;
    }
    get time_taken() {
        return this._time;
    }
    set time_taken(value) {
        this._time = value;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
    }
    update_properties(nodeData, nodeMap) {
        this._name = nodeData["_name"];
        this._position = nodeData["_position"] || [0, 0];
        // map direct properties
        this._enabled = nodeData["_enabled"];
        // add inputs
        let inputs = nodeData["_inputs"];
        for (let input_index in inputs) {
            let inp_data = inputs[input_index];
            let input = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["a" /* InputPort */](inp_data["_name"]);
            input.update(inp_data, "inp");
            this._inputs.push(input);
        }
        // add outputs
        let outputs = nodeData["_outputs"];
        for (let output_index in outputs) {
            let output_data = outputs[output_index];
            let output = new __WEBPACK_IMPORTED_MODULE_2__port_PortModule__["c" /* OutputPort */](output_data["_name"]);
            output.update(output_data, "out");
            this._outputs.push(output);
        }
        // add procedure
        for (let p_data of nodeData["_procedure"]) {
            this._procedure.push(__WEBPACK_IMPORTED_MODULE_1__procedure_ProcedureModule__["c" /* ProcedureUtils */].copy_procedure(p_data));
        }
    }
    reset() {
        this._hasExecuted = false;
        this._hasError = false;
        this._procedure.map(function (prod) {
            prod.reset();
        });
        this._outputs.map(function (output) {
            output.reset();
        });
        this.time_taken = undefined;
        return (this._hasExecuted == false);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GraphNode;



/***/ }),

/***/ "./src/app/base-classes/node/NodeModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GraphNode__ = __webpack_require__("./src/app/base-classes/node/GraphNode.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__GraphNode__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NodeUtils__ = __webpack_require__("./src/app/base-classes/node/NodeUtils.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__NodeUtils__["a"]; });




/***/ }),

/***/ "./src/app/base-classes/node/NodeUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__port_PortModule__ = __webpack_require__("./src/app/base-classes/port/PortModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GraphNode__ = __webpack_require__("./src/app/base-classes/node/GraphNode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__procedure_ProcedureModule__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__procedure_ProcedureUtils__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureUtils.ts");




class NodeUtils {
    //
    //	Takes IGraphNode and creates an exact or duplicate
    //	Exact copy will have the same name and node ID (useful when loading from a file)
    //	Duplicates will have different names and node IDs (useful when duplicating or adding from library)
    //
    static copy_node(node, exact) {
        let n = new __WEBPACK_IMPORTED_MODULE_1__GraphNode__["a" /* GraphNode */]();
        if (exact) {
            // do nothing
            n.update_properties(node);
        }
        else {
            let id = n.id;
            n.update_properties(node);
            n.name = node.name + Math.floor(Math.random() * 100);
            n.id = id;
            n.position = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
            n.inputs.map((inp) => inp.value = ' ');
            n.outputs.map((out) => out.value = ' ');
        }
        return n;
    }
    static add_port(node, type, name) {
        let default_name = type.toString().substring(0, 3) + node[`${type}s`].length;
        if (name !== undefined) {
            default_name = name;
        }
        let port;
        if (type == __WEBPACK_IMPORTED_MODULE_0__port_PortModule__["e" /* PortTypes */].Input) {
            port = new __WEBPACK_IMPORTED_MODULE_0__port_PortModule__["a" /* InputPort */](default_name);
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_0__port_PortModule__["e" /* PortTypes */].Output) {
            port = new __WEBPACK_IMPORTED_MODULE_0__port_PortModule__["c" /* OutputPort */](default_name);
        }
        else {
            throw Error("Unrecognised Port Type");
        }
        node[`${type}s`].push(port);
        node.type = undefined;
        return node;
    }
    static delete_port(node, port) {
        let prop = "";
        if (port instanceof __WEBPACK_IMPORTED_MODULE_0__port_PortModule__["a" /* InputPort */]) {
            prop = "inputs";
        }
        else if (port instanceof __WEBPACK_IMPORTED_MODULE_0__port_PortModule__["c" /* OutputPort */]) {
            prop = "outputs";
        }
        else {
            throw Error("Invalid Port Type");
        }
        for (const [idx, p] of node[prop].entries()) {
            if (p.id === port.id) {
                node[prop].splice(idx, 1);
                break;
            }
        }
        return node;
    }
    static delete_port_by_index(node, type, port_index) {
        node[type].splice(port_index, 1);
        node.type = undefined;
        return node;
    }
    //
    //	Adds a given procedure line as child of active procedure 
    //	If there is no active procedure, adds it to the node procedure
    //
    static add_procedure(node, procedure) {
        try {
            let active_procedure = node.active_procedure;
            // TODO: Validate postioning of ElseIf / Else
            // ElseIf / Else can only be placed after an If / ElseIf
            if (active_procedure) {
                //
                // If the active procedure is an If or ElseIf
                // and the next procedure being added is ElseIf / Else
                // the next procedure should be a sibling of the active procedure
                //
                let if_else_conditional = (active_procedure.type == __WEBPACK_IMPORTED_MODULE_2__procedure_ProcedureModule__["b" /* ProcedureTypes */].IfControl || active_procedure.type == __WEBPACK_IMPORTED_MODULE_2__procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseIfControl)
                    && (procedure.type == __WEBPACK_IMPORTED_MODULE_2__procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseControl || procedure.type == __WEBPACK_IMPORTED_MODULE_2__procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseIfControl);
                // Check if the if-else conditional is true or the active procedure can't have children
                if (if_else_conditional || !active_procedure.hasChildren) {
                    if (active_procedure.parent) {
                        let parent = active_procedure.parent;
                        let position = __WEBPACK_IMPORTED_MODULE_3__procedure_ProcedureUtils__["a" /* ProcedureUtils */].get_child_position(parent, active_procedure);
                        __WEBPACK_IMPORTED_MODULE_3__procedure_ProcedureUtils__["a" /* ProcedureUtils */].add_child_at_position(parent, procedure, position + 1);
                    }
                    else {
                        let position = NodeUtils.get_child_position(node, active_procedure);
                        NodeUtils.add_procedure_at_position(node, procedure, position + 1);
                    }
                }
                else {
                    active_procedure = __WEBPACK_IMPORTED_MODULE_3__procedure_ProcedureUtils__["a" /* ProcedureUtils */].add_child(active_procedure, procedure);
                }
            }
            else {
                node.procedure.push(procedure);
            }
            node.active_procedure = procedure;
        }
        catch (ex) {
            console.log(`Error adding procedure type ${procedure.type} to node ${node.name}`);
        }
        // TODO: Lint the Node
        return node;
    }
    static add_procedure_at_position(node, procedure, index) {
        node.type = undefined;
        node.procedure.splice(index, 0, procedure);
        procedure.parent = undefined;
        return node;
    }
    static get_child_position(node, procedure) {
        let index = 0;
        for (const prod of node.procedure) {
            if (prod.id === procedure.id) {
                return index;
            }
            index++;
        }
        return -1;
    }
    //
    // Deletes the active procedure in a node
    //
    static delete_procedure(node, prod_to_delete) {
        if (!node.active_procedure && prod_to_delete == undefined) {
            console.warn("Delete procedure called without active or procedure to delete");
            return;
        }
        if (prod_to_delete == undefined) {
            prod_to_delete = node.active_procedure;
        }
        let parent = prod_to_delete.parent;
        if (parent) {
            // delete procedure from the oarent procedure
            let position = __WEBPACK_IMPORTED_MODULE_3__procedure_ProcedureUtils__["a" /* ProcedureUtils */].get_child_position(parent, prod_to_delete);
            parent = __WEBPACK_IMPORTED_MODULE_3__procedure_ProcedureUtils__["a" /* ProcedureUtils */].delete_child(parent, prod_to_delete);
            if (position == 0) {
                node.active_procedure = parent;
            }
            else {
                node.active_procedure = parent.children[position];
            }
            console.log(`Successfully deleted procedure-child`);
        }
        else {
            // delete procedure from the node
            let index = 0;
            for (const prod of node.procedure) {
                if (prod.id == node.active_procedure.id) {
                    node.procedure.splice(index, 1);
                    node.active_procedure = index < node.procedure.length ? node.procedure[index] : undefined;
                    break;
                }
                index++;
            }
        }
        console.log(`Delete Procedure: ${prod_to_delete.type}`);
        return node;
    }
    static get_variable_list(node) {
        let varList = [];
        //push undefined
        varList.push("undefined");
        //push names of inputs and outputs
        node.inputs.map(function (inp) {
            varList.push(inp.name);
        });
        node.outputs.map(function (out) {
            varList.push(out.name);
        });
        // push names of left components in procedure
        node.procedure.map(function (prod) {
            let type = prod.type;
            if (type == __WEBPACK_IMPORTED_MODULE_2__procedure_ProcedureModule__["b" /* ProcedureTypes */].Data ||
                type == __WEBPACK_IMPORTED_MODULE_2__procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl ||
                type == __WEBPACK_IMPORTED_MODULE_2__procedure_ProcedureModule__["b" /* ProcedureTypes */].Action) {
                let var_name = prod.left.expression;
                if (var_name && var_name.length > 0) {
                    varList.push(var_name);
                }
                ;
            }
        });
        return varList;
    }
    static execute_node(node, code_generator, modules, print, globals) {
        console.log(`${node.name} is executing...`);
        // To store the files in window_scope
        let window_params = [];
        // Params required for the node execution
        let params = [];
        // Count of data being downloaded from file URLs
        let live_data_downloads = 0;
        node.inputs.map(function (i, index) {
            if (i.type == __WEBPACK_IMPORTED_MODULE_0__port_PortModule__["b" /* InputPortTypes */].URL) {
                ///
                ///	 If type of input-port is URL,
                ///	 fetch data first
                ///
                live_data_downloads++;
                let urlString = i.opts.url;
                fetch(urlString)
                    .then((res) => res.text())
                    .then((out) => {
                    i.value = out;
                    try {
                        i.value = JSON.parse(out);
                    }
                    catch (ex) {
                        console.error(`Error fetching data from ${urlString}`);
                    }
                    live_data_downloads--;
                    // when last of all data has downloaded
                    if (live_data_downloads == 0) {
                        outputProcessing();
                    }
                })
                    .catch(err => { alert("Oops...Error fetching data from URL."); throw err; });
            }
            else {
                params[i.name] = i.value;
            }
        });
        // this code runs only after live_data_downloads = 0;
        function outputProcessing() {
            // use code generator to execute code
            let result = code_generator.execute_node(node, params, modules, print, globals);
            // add results to self node
            for (let n = 0; n < node.outputs.length; n++) {
                let output_port = node.outputs[n];
                output_port.value = (result[output_port.name]);
                console.log(`${output_port.name} of node ${node.name} was assigned value ${output_port.value}`);
            }
            node.hasExecuted = true;
            // delete all files stored in window reference
            window_params.map(function (filename) {
                delete window[filename];
            });
        }
        if (live_data_downloads == 0) {
            outputProcessing();
        }
    }
    static get_result(node) {
        let final_values = {};
        for (let o = 0; o < node.outputs.length; o++) {
            let output = node.outputs[o];
            final_values[output.name] = output.value;
        }
        return final_values;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NodeUtils;



/***/ }),

/***/ "./src/app/base-classes/port/InputPort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Port__ = __webpack_require__("./src/app/base-classes/port/Port.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InputPortTypes__ = __webpack_require__("./src/app/base-classes/port/InputPortTypes.ts");


class InputPort extends __WEBPACK_IMPORTED_MODULE_0__Port__["a" /* Port */] {
    // input type 
    // slider
    // input
    // color
    // file
    constructor(name, type) {
        super(name);
        if (type !== undefined) {
            this._type = type.name;
            this.setDefaultValue(type.value || "undefined");
        }
        else {
            this._type = __WEBPACK_IMPORTED_MODULE_1__InputPortTypes__["a" /* InputPortTypes */].Input;
        }
    }
    update(portData, type) {
        super.update(portData, type);
        if (!(this._type === __WEBPACK_IMPORTED_MODULE_1__InputPortTypes__["a" /* InputPortTypes */].FilePicker || this._type === __WEBPACK_IMPORTED_MODULE_1__InputPortTypes__["a" /* InputPortTypes */].URL) && !portData['_connected']) {
            this.value = portData["_computed"];
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InputPort;



/***/ }),

/***/ "./src/app/base-classes/port/InputPortTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPortTypes; });
var InputPortTypes;
(function (InputPortTypes) {
    InputPortTypes["Input"] = "Input";
    InputPortTypes["ColorPicker"] = "ColorPicker";
    InputPortTypes["Dropdown"] = "Dropdown";
    InputPortTypes["FilePicker"] = "Filepicker";
    InputPortTypes["URL"] = "URL";
    InputPortTypes["Slider"] = "Slider";
    InputPortTypes["Checkbox"] = "Checkbox";
})(InputPortTypes || (InputPortTypes = {}));


/***/ }),

/***/ "./src/app/base-classes/port/OutputPort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Port__ = __webpack_require__("./src/app/base-classes/port/Port.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OutputPortTypes__ = __webpack_require__("./src/app/base-classes/port/OutputPortTypes.ts");


class OutputPort extends __WEBPACK_IMPORTED_MODULE_0__Port__["a" /* Port */] {
    constructor(name, type) {
        super(name);
        if (type !== undefined) {
            this._type = type;
        }
        else {
            this._type = __WEBPACK_IMPORTED_MODULE_1__OutputPortTypes__["a" /* OutputPortTypes */].Text;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OutputPort;



/***/ }),

/***/ "./src/app/base-classes/port/OutputPortTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputPortTypes; });
var OutputPortTypes;
(function (OutputPortTypes) {
    OutputPortTypes[OutputPortTypes["Three"] = 0] = "Three";
    OutputPortTypes[OutputPortTypes["Code"] = 1] = "Code";
    OutputPortTypes[OutputPortTypes["Text"] = 2] = "Text";
    OutputPortTypes[OutputPortTypes["Console"] = 3] = "Console";
    OutputPortTypes[OutputPortTypes["Cesium"] = 4] = "Cesium";
})(OutputPortTypes || (OutputPortTypes = {}));


/***/ }),

/***/ "./src/app/base-classes/port/Port.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_GUID__ = __webpack_require__("./src/app/base-classes/misc/GUID.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InputPortTypes__ = __webpack_require__("./src/app/base-classes/port/InputPortTypes.ts");


class Port {
    constructor(name) {
        this._selected = false;
        this._disabled = false;
        this._connected = false;
        // values
        this._default = undefined;
        this._computed = undefined;
        // ------------ Port Values Functions 
        this._executionAddr = undefined;
        this._id = __WEBPACK_IMPORTED_MODULE_0__misc_GUID__["a" /* IdGenerator */].getId();
        this._name = name;
        this._opts = {};
    }
    // ----- Update function for Port from Data 
    update(portData, type) {
        this._id = portData["_id"];
        this._type = portData["_type"];
        if (typeof (this._type) == "number" && type == "inp") {
            //this._type = (InputPortTypes)this._type; 
            this._type = Object.keys(__WEBPACK_IMPORTED_MODULE_1__InputPortTypes__["a" /* InputPortTypes */])[this._type];
        }
        else if (typeof (this._type) == "number" && type == "out") {
            //this._type = <OutputPortTypes>Object.keys(OutputPortTypes)[this._type]
        }
        // will be programmatically selected later 
        this._selected = false;
        // will be programmatically connected later
        this._connected = false;
        this._disabled = portData["_disabled"];
        this._default = portData["_default"];
        this._opts = portData["_opts"];
        // todo: assign computed also??
        //this._computed = portData["_computed"];
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
        if (value == __WEBPACK_IMPORTED_MODULE_1__InputPortTypes__["a" /* InputPortTypes */].Slider) {
            this.opts = { min: 0, max: 100, step: 1 };
            this.setDefaultValue(50);
        }
    }
    get value() {
        return this.getValue();
    }
    set value(value) {
        console.log(`Setting value of Port: ${this.name} as ${value}`);
        this.setComputedValue(value);
    }
    get opts() {
        return this._opts;
    }
    set opts(value) {
        this._opts = value;
    }
    getValue() {
        let final;
        if (this._executionAddr !== undefined) {
            return this._executionAddr;
        }
        else {
            if (this._computed !== undefined) {
                final = this._computed;
            }
            else {
                final = this._default;
            }
        }
        return final;
    }
    setComputedValue(value) {
        if (value == undefined)
            return;
        switch (this._type) {
            case __WEBPACK_IMPORTED_MODULE_1__InputPortTypes__["a" /* InputPortTypes */].FilePicker:
            case __WEBPACK_IMPORTED_MODULE_1__InputPortTypes__["a" /* InputPortTypes */].URL:
                this._computed = FileUtils.add_file_to_memory(value, this._id);
                break;
            default:
                this._computed = value;
        }
        this._hasComputed = true;
    }
    reset() {
        this.value = " ";
    }
    //--- Default Values
    getDefaultValue() {
        //console.log(`Get default`);
        return this._default;
    }
    // Todo: Is this redundant?	
    setDefaultValue(value) {
        //console.log(`Set default called with ${value}`);
        this._default = value;
        if (value !== undefined) {
            this._hasDefault = true;
        }
    }
    // ---- Getters and Settings
    // TODO: Convert to get/set methods
    isSelected() {
        return this._selected;
    }
    isDisabled() {
        return this._disabled;
    }
    disable() {
        this._disabled = true;
    }
    enable() {
        this._disabled = false;
    }
    get enabled() {
        return !this._disabled;
    }
    set enabled(value) {
        this._disabled = !value;
    }
    get isConnected() {
        return this._connected;
    }
    set isConnected(value) {
        this._connected = value;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Port;

class FileUtils {
    static add_file_to_memory(value, id) {
        let file_name = FileUtils.PREFIX + id;
        window[file_name] = value;
        // TODO: Convert this to a decorator
        return "(new Function('value', 'return value'))( window[ '" + file_name + "' ])";
    }
}
FileUtils.PREFIX = "MOBIUS_FILES_";


/***/ }),

/***/ "./src/app/base-classes/port/PortModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InputPort__ = __webpack_require__("./src/app/base-classes/port/InputPort.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__InputPort__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OutputPort__ = __webpack_require__("./src/app/base-classes/port/OutputPort.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__OutputPort__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InputPortTypes__ = __webpack_require__("./src/app/base-classes/port/InputPortTypes.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__InputPortTypes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OutputPortTypes__ = __webpack_require__("./src/app/base-classes/port/OutputPortTypes.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__OutputPortTypes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PortTypes__ = __webpack_require__("./src/app/base-classes/port/PortTypes.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__PortTypes__["a"]; });







/***/ }),

/***/ "./src/app/base-classes/port/PortTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortTypes; });
var PortTypes;
(function (PortTypes) {
    PortTypes["Input"] = "input";
    PortTypes["Output"] = "output";
})(PortTypes || (PortTypes = {}));


/***/ }),

/***/ "./src/app/base-classes/procedure/ActionProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Procedure__ = __webpack_require__("./src/app/base-classes/procedure/Procedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureTypes.ts");


class ActionProcedure extends __WEBPACK_IMPORTED_MODULE_0__Procedure__["a" /* Procedure */] {
    constructor(data) {
        super(__WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].Action, false);
        if (data == undefined) {
            data = { result: undefined, module: undefined, function: undefined, params: [], hasReturn: true };
        }
        this._hasReturn = data.hasReturn;
        let left = { expression: data.result,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        let right = { expression: data.module + /*"." + data.category +*/ "." + data.function,
            isAction: true,
            module: data.module,
            category: undefined,
            fn_name: data.function,
            params: data.params.map(function (p) { return { type: p.type, value: p.value }; })
        };
        if (data.result !== undefined) {
            super.left = (left);
        }
        super.right = (right);
    }
    get hasReturn() {
        return this._hasReturn;
    }
    update(prodData, parent) {
        super.update(prodData, parent);
        this._leftComponent = {
            expression: prodData._leftComponent.expression,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        this._rightComponent = {
            expression: prodData._rightComponent.expression,
            isAction: true,
            module: prodData._rightComponent.module,
            category: undefined,
            fn_name: prodData._rightComponent.fn_name,
            params: prodData._rightComponent.params.map(function (p) { return { type: p.type, value: p.value }; })
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ActionProcedure;



/***/ }),

/***/ "./src/app/base-classes/procedure/DataProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Procedure__ = __webpack_require__("./src/app/base-classes/procedure/Procedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureTypes.ts");


class DataProcedure extends __WEBPACK_IMPORTED_MODULE_0__Procedure__["a" /* Procedure */] {
    constructor(data) {
        super(__WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].Data, false);
        if (data == undefined) {
            data = { result: `var${DataProcedure.count}`, value: "value" };
            DataProcedure.count++;
        }
        let left = { expression: data.result,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        let right = { expression: data.value,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        super.left = (left);
        super.right = (right);
    }
    update(prodData, parent) {
        super.update(prodData, parent);
        this._leftComponent.expression = prodData._leftComponent.expression;
        this._rightComponent.expression = prodData._rightComponent.expression;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DataProcedure;

DataProcedure.count = 1;


/***/ }),

/***/ "./src/app/base-classes/procedure/ElseControlProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Procedure__ = __webpack_require__("./src/app/base-classes/procedure/Procedure.ts");


class ElseControlProcedure extends __WEBPACK_IMPORTED_MODULE_1__Procedure__["a" /* Procedure */] {
    constructor(data) {
        super(__WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ElseControl, true);
        if (data == undefined) {
            data = { condition: "conditional_expression" };
        }
        let left = { expression: undefined,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        let right = {
            expression: data.condition,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        super.left = (left);
        super.right = (right);
    }
    update(prodData, parent) {
        super.update(prodData, parent);
        this._leftComponent.expression = prodData._leftComponent.expression;
        this._rightComponent.expression = prodData._rightComponent.expression;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ElseControlProcedure;



/***/ }),

/***/ "./src/app/base-classes/procedure/ElseIfControlProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Procedure__ = __webpack_require__("./src/app/base-classes/procedure/Procedure.ts");


class ElseIfControlProcedure extends __WEBPACK_IMPORTED_MODULE_1__Procedure__["a" /* Procedure */] {
    constructor(data) {
        super(__WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ElseIfControl, true);
        if (data == undefined) {
            data = { condition: "conditional_expression" };
        }
        let left = { expression: undefined,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        let right = {
            expression: data.condition,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        super.left = (left);
        super.right = (right);
    }
    update(prodData, parent) {
        super.update(prodData, parent);
        this._leftComponent.expression = prodData._leftComponent.expression;
        this._rightComponent.expression = prodData._rightComponent.expression;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ElseIfControlProcedure;



/***/ }),

/***/ "./src/app/base-classes/procedure/ForLoopControlProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Procedure__ = __webpack_require__("./src/app/base-classes/procedure/Procedure.ts");


class ForLoopControlProcedure extends __WEBPACK_IMPORTED_MODULE_1__Procedure__["a" /* Procedure */] {
    constructor(data) {
        super(__WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ForLoopControl, true);
        if (data == undefined) {
            data = { variable: "variable_name", array_name: "array_name" };
        }
        let left = { expression: data.variable,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        let right = {
            expression: data.array_name,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        super.left = (left);
        super.right = (right);
    }
    update(prodData, parent) {
        super.update(prodData, parent);
        this._leftComponent.expression = prodData._leftComponent.expression;
        this._rightComponent.expression = prodData._rightComponent.expression;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ForLoopControlProcedure;



/***/ }),

/***/ "./src/app/base-classes/procedure/FunctionProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Procedure__ = __webpack_require__("./src/app/base-classes/procedure/Procedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureTypes.ts");


class FunctionProcedure extends __WEBPACK_IMPORTED_MODULE_0__Procedure__["a" /* Procedure */] {
    constructor(data) {
        super(__WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].Function, false);
        this.node = undefined;
        this.port = undefined;
        if (data) {
            this.node = data.node;
            this.port = data.port;
        }
        let left = {
            expression: "new_variable",
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        let right = {
            expression: undefined,
            isAction: true,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: this.node && this.node.inputs ? [this.node.inputs.map(function (inp) { return " "; })] : []
        };
        super.left = (left);
        super.right = (right);
    }
    getNode() {
        return this.node;
    }
    setNode(graphNode) {
        this.node = graphNode;
    }
    getFunctionName() {
        return this.port ? this.port.name : "";
    }
    updateParams() {
        let inp_range = this.node.inputs.map(function (inp) {
            return " ";
        });
        return inp_range;
    }
    getOutputs() {
        let outputs = this.node.outputs.map(function (output) {
            return output.name;
        });
        return outputs;
    }
    update(prodData, parent) {
        super.update(prodData, parent);
        this._leftComponent = {
            expression: prodData._leftComponent.expression,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        this._rightComponent = {
            expression: prodData._rightComponent.expression,
            isAction: true,
            module: undefined,
            category: prodData._rightComponent.category,
            fn_name: undefined,
            params: prodData._rightComponent.params
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FunctionProcedure;



/***/ }),

/***/ "./src/app/base-classes/procedure/IfControlProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Procedure__ = __webpack_require__("./src/app/base-classes/procedure/Procedure.ts");


class IfControlProcedure extends __WEBPACK_IMPORTED_MODULE_1__Procedure__["a" /* Procedure */] {
    constructor(data) {
        super(__WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].IfControl, true);
        if (data == undefined) {
            data = { condition: "conditional_expression" };
        }
        let left = { expression: undefined,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        let right = {
            expression: data.condition,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        super.left = (left);
        super.right = (right);
    }
    update(prodData, parent) {
        super.update(prodData, parent);
        this._leftComponent.expression = prodData._leftComponent.expression;
        this._rightComponent.expression = prodData._rightComponent.expression;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IfControlProcedure;



/***/ }),

/***/ "./src/app/base-classes/procedure/Procedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_GUID__ = __webpack_require__("./src/app/base-classes/misc/GUID.ts");

class Procedure {
    constructor(type, hasChildren) {
        this._disabled = false;
        this._printToConsole = false;
        this._children = [];
        this._id = __WEBPACK_IMPORTED_MODULE_0__misc_GUID__["a" /* IdGenerator */].getId();
        this._type = type;
        this._level = 0;
        this.hasChildren = hasChildren;
        this._error = false;
    }
    get enabled() {
        return !this._disabled;
    }
    set enabled(value) {
        this._disabled = !value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        console.warn("Id of procedure being set manually");
        this._id = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get left() {
        return this._leftComponent;
    }
    set left(value) {
        this._leftComponent = value;
    }
    get right() {
        return this._rightComponent;
    }
    set right(value) {
        this._rightComponent = value;
    }
    get children() {
        return this._children;
    }
    set children(children) {
        this._children = children;
    }
    get error() {
        return this._error;
    }
    set error(value) {
        this._error = value;
    }
    get print() {
        return this._printToConsole;
    }
    set print(value) {
        this._printToConsole = value;
    }
    get parent() {
        return this._parent;
    }
    set parent(parent) {
        if (parent && (parent["_level"] !== undefined)) {
            this._level = parent["_level"] + 1;
        }
        else {
            this._level = 0;
        }
        this._parent = parent;
    }
    reset() {
        this._error = false;
        this.children.map(function (p) {
            p.reset();
        });
    }
    getCodeString(code_generator) {
        return code_generator.get_code_procedure(this);
    }
    hasParent() {
        if (this._parent == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    update(prodData, parent) {
        this._id = prodData._id;
        this._disabled = prodData._disabled;
        // todo: be careful
        //this._leftComponent =  prodData._leftComponent; 
        //this._rightComponent = prodData._rightComponent; 
        this._parent = parent;
        this._level = prodData._level;
        this._children = [];
        this._error = false;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Procedure;



/***/ }),

/***/ "./src/app/base-classes/procedure/ProcedureFactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DataProcedure__ = __webpack_require__("./src/app/base-classes/procedure/DataProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ActionProcedure__ = __webpack_require__("./src/app/base-classes/procedure/ActionProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IfControlProcedure__ = __webpack_require__("./src/app/base-classes/procedure/IfControlProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ElseControlProcedure__ = __webpack_require__("./src/app/base-classes/procedure/ElseControlProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ElseIfControlProcedure__ = __webpack_require__("./src/app/base-classes/procedure/ElseIfControlProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ForLoopControlProcedure__ = __webpack_require__("./src/app/base-classes/procedure/ForLoopControlProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WhileControlProcedure__ = __webpack_require__("./src/app/base-classes/procedure/WhileControlProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FunctionProcedure__ = __webpack_require__("./src/app/base-classes/procedure/FunctionProcedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StatementProcedure__ = __webpack_require__("./src/app/base-classes/procedure/StatementProcedure.ts");










class ProcedureFactory {
    static getProcedure(type, data) {
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].Data:
                return new __WEBPACK_IMPORTED_MODULE_1__DataProcedure__["a" /* DataProcedure */](data);
            case __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].Action:
                return new __WEBPACK_IMPORTED_MODULE_2__ActionProcedure__["a" /* ActionProcedure */](data);
            case __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].Function:
                return new __WEBPACK_IMPORTED_MODULE_8__FunctionProcedure__["a" /* FunctionProcedure */](data);
            case __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].LoopBreak:
            case __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].LoopContinue:
            case __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].Comment:
                return new __WEBPACK_IMPORTED_MODULE_9__StatementProcedure__["a" /* StatementProcedure */](type);
            case __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].IfControl:
                return new __WEBPACK_IMPORTED_MODULE_3__IfControlProcedure__["a" /* IfControlProcedure */](data);
            case __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ElseControl:
                return new __WEBPACK_IMPORTED_MODULE_4__ElseControlProcedure__["a" /* ElseControlProcedure */](data);
            case __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ElseIfControl:
                return new __WEBPACK_IMPORTED_MODULE_5__ElseIfControlProcedure__["a" /* ElseIfControlProcedure */](data);
            case __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].ForLoopControl:
                return new __WEBPACK_IMPORTED_MODULE_6__ForLoopControlProcedure__["a" /* ForLoopControlProcedure */](data);
            case __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].WhileControl:
                return new __WEBPACK_IMPORTED_MODULE_7__WhileControlProcedure__["a" /* WhileControlProcedure */]();
            default:
                throw Error(`Invalid Procedure Type: ${type}`);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProcedureFactory;



/***/ }),

/***/ "./src/app/base-classes/procedure/ProcedureModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureFactory__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureFactory.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ProcedureFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProcedureUtils__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureUtils.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__ProcedureUtils__["a"]; });





/***/ }),

/***/ "./src/app/base-classes/procedure/ProcedureTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcedureTypes; });
var ProcedureTypes;
(function (ProcedureTypes) {
    ProcedureTypes["Data"] = "Data";
    ProcedureTypes["Action"] = "Action";
    ProcedureTypes["IfControl"] = "If";
    ProcedureTypes["ElseControl"] = "Else";
    ProcedureTypes["ElseIfControl"] = "ElseIf";
    ProcedureTypes["WhileControl"] = "While";
    ProcedureTypes["ForLoopControl"] = "For Loop";
    ProcedureTypes["Function"] = "Function";
    ProcedureTypes["LoopBreak"] = "Loop Break";
    ProcedureTypes["LoopContinue"] = "Loop Continue";
    ProcedureTypes["Comment"] = "Comment";
})(ProcedureTypes || (ProcedureTypes = {}));


/***/ }),

/***/ "./src/app/base-classes/procedure/ProcedureUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureFactory__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureFactory.ts");

class ProcedureUtils {
    static copy_procedure(procedure) {
        if (!procedure)
            return;
        let n = __WEBPACK_IMPORTED_MODULE_0__ProcedureFactory__["a" /* ProcedureFactory */].getProcedure(procedure.type || procedure["_type"]);
        //todo: bad programming!
        let id = n.id;
        n.update(procedure, procedure.parent);
        //
        // TODO: Design Issue?
        // If it is procedure data, the propery is _children
        // If it is a procedure object, the property is children
        //
        let child_prop = procedure.children ? "children" : "_children";
        if (procedure[child_prop]) {
            n.children = procedure[child_prop].map((p) => {
                let pc = ProcedureUtils.copy_procedure(p);
                pc.parent = n;
                return pc;
            });
        }
        n.id = id;
        return n;
    }
    static shift_level_up(procedure) {
        if (!procedure || !procedure.parent)
            throw Error("No procedure to shift up");
        let parent = procedure.parent;
        let grandparent = parent.parent;
        if (!grandparent)
            return undefined;
        ProcedureUtils.delete_child(parent, procedure);
        ProcedureUtils.add_child_at_position(grandparent, procedure, ProcedureUtils.get_child_position(grandparent, parent) + 1);
        return procedure;
    }
    static get_child_position(parent, child) {
        let index = 0;
        for (const prod of parent.children) {
            if (prod.id === child.id) {
                return index;
            }
            index++;
        }
        return -1;
    }
    static add_child(procedure, child) {
        try {
            if (procedure.hasChildren) {
                procedure.children.push(child);
                child.parent = procedure;
            }
            else {
                throw Error(`Illegal addition of child to ${procedure.type} type`);
            }
        }
        catch (ex) {
            console.log(`Error adding child ${ex}`);
        }
        return procedure;
    }
    static add_child_from_data(procedure, child) {
        if (procedure.hasChildren) {
            procedure.children.push(child);
            child.parent = procedure;
        }
        else {
            throw Error("Cannot add child to this procedure");
        }
        return procedure;
    }
    static add_child_at_position(procedure, child, index) {
        procedure.children.splice(index, 0, child);
        child.parent = procedure;
        return procedure;
    }
    static delete_child(procedure, remove) {
        procedure.children = procedure.children.filter(function (child) {
            return !(child === remove);
        });
        return procedure;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProcedureUtils;



/***/ }),

/***/ "./src/app/base-classes/procedure/StatementProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Procedure__ = __webpack_require__("./src/app/base-classes/procedure/Procedure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureTypes.ts");


class StatementProcedure extends __WEBPACK_IMPORTED_MODULE_0__Procedure__["a" /* Procedure */] {
    constructor(type) {
        super(type, false);
        let exp;
        if (type == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].LoopBreak) {
            exp = "break";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].LoopContinue) {
            exp = "continue";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__ProcedureTypes__["a" /* ProcedureTypes */].Comment) {
            exp = "Comment: Add notes";
        }
        let left = { expression: exp,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        super.left = (left);
        super.right = (undefined);
    }
    update(prodData, parent) {
        super.update(prodData, parent);
        this._leftComponent.expression = prodData._leftComponent.expression;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StatementProcedure;



/***/ }),

/***/ "./src/app/base-classes/procedure/WhileControlProcedure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Procedure__ = __webpack_require__("./src/app/base-classes/procedure/Procedure.ts");


class WhileControlProcedure extends __WEBPACK_IMPORTED_MODULE_1__Procedure__["a" /* Procedure */] {
    constructor(data) {
        super(__WEBPACK_IMPORTED_MODULE_0__ProcedureTypes__["a" /* ProcedureTypes */].WhileControl, true);
        if (data == undefined) {
            data = { condition: "conditional_expression" };
        }
        let left = { expression: undefined,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        let right = {
            expression: data.condition,
            isAction: false,
            module: undefined,
            category: undefined,
            fn_name: undefined,
            params: undefined
        };
        super.left = (left);
        super.right = (right);
    }
    update(prodData, parent) {
        super.update(prodData, parent);
        this._leftComponent.expression = prodData._leftComponent.expression;
        this._rightComponent.expression = prodData._rightComponent.expression;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WhileControlProcedure;



/***/ }),

/***/ "./src/app/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Constants {
    static get GALLERY_URL() {
        return "https://api.github.com/repos/design-automation/mobius-gallery/contents/examples?ref=master";
    }
    ;
    static get FILE_URL() {
        return "https://raw.githubusercontent.com/design-automation/mobius-gallery/master/examples/";
    }
    ;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Constants;



/***/ }),

/***/ "./src/app/custom-angular-modules/CustomMaterialModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm2015/material.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/*
 * This module imports all thre required components from Angular Material
 */
let CustomMaterialModule = class CustomMaterialModule {
};
CustomMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */]]
    })
], CustomMaterialModule);



/***/ }),

/***/ "./src/app/global-services/code.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_code_CodeModule__ = __webpack_require__("./src/app/base-classes/code/CodeModule.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let CodeService = class CodeService {
    constructor() {
        this._codeGenerator = __WEBPACK_IMPORTED_MODULE_1__base_classes_code_CodeModule__["a" /* CodeFactory */].getCodeGenerator("js");
    }
    get generator() {
        return this._codeGenerator;
    }
    set generator(gen) {
        this._codeGenerator = gen;
    }
};
CodeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CodeService);



/***/ }),

/***/ "./src/app/global-services/console.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EConsoleMessageType; });
/* unused harmony export LogLevel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm2015/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EConsoleMessageType;
(function (EConsoleMessageType) {
    EConsoleMessageType["Print"] = "print";
    EConsoleMessageType["Error"] = "error";
    EConsoleMessageType["General"] = "general";
})(EConsoleMessageType || (EConsoleMessageType = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["All"] = 0] = "All";
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Warn"] = 3] = "Warn";
    LogLevel[LogLevel["Error"] = 4] = "Error";
    LogLevel[LogLevel["Fatal"] = 5] = "Fatal";
    LogLevel[LogLevel["Off"] = 6] = "Off";
})(LogLevel || (LogLevel = {}));
let ConsoleService = ConsoleService_1 = class ConsoleService {
    constructor() {
        this.level = LogLevel.All;
        this.logWithDate = true;
        // message handling between components
        // 
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this._messages = [];
        //Enable in Production:: this.getIP();
    }
    getIP() {
        fetch('https://ipapi.co/json/').then(result => result.json()).then((data) => { ConsoleService_1.IP = data.ip; });
    }
    sendMessage(message) {
        this.subject.next({ text: message });
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage() {
        return this.subject.asObservable();
    }
    addMessage(message, type = EConsoleMessageType.General) {
        let obj = {};
        obj["time"] = new Date();
        obj["message"] = message;
        obj["type"] = type;
        this._messages.push(obj);
        this.sendMessage();
    }
    ;
    getContent() {
        return this._messages;
    }
    clearConsole() {
        this._messages = [];
        this.sendMessage();
    }
    log(msg) {
        //fetch(`http://137.132.146.35:9000/insert?ip=127.0.0.1&msg=${msg}`)
        console.log(`[${(new Date()).toISOString()}] ${msg}`);
    }
    static log_to_db(msg) {
        try {
            console.log(`Logging to database`);
            fetch(`//137.132.146.35:9000/insert?ip=${ConsoleService_1.IP}&msg=${msg.split("\n").join("<br>")}`).then((res) => console.log(res));
        }
        catch (ex) {
            console.log('Failed to push to database');
        }
    }
};
ConsoleService = ConsoleService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ConsoleService);

var ConsoleService_1;


/***/ }),

/***/ "./src/app/global-services/execute.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecuteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__console_service__ = __webpack_require__("./src/app/global-services/console.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobius_service__ = __webpack_require__("./src/app/global-services/mobius.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_service__ = __webpack_require__("./src/app/global-services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_classes_flowchart_FlowchartModule__ = __webpack_require__("./src/app/base-classes/flowchart/FlowchartModule.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let ExecuteService = ExecuteService_1 = class ExecuteService {
    constructor(_fs, _cs, _mb, _ms) {
        this._fs = _fs;
        this._cs = _cs;
        this._mb = _mb;
        this._ms = _ms;
    }
    execute() {
        let flowchart = this._fs.flowchart;
        let code_generator = this._mb.code_generator;
        let consoleMessages = ["<div class='console-heading'>Printed Values</div>"];
        // get flowchart from _fs
        // get code_generator from _mb
        try {
            ExecuteService_1.consoleMessages = [];
            __WEBPACK_IMPORTED_MODULE_5__base_classes_flowchart_FlowchartModule__["c" /* FlowchartUtils */].execute(flowchart, code_generator, __WEBPACK_IMPORTED_MODULE_3__module_service__["a" /* ModuleService */].MOB_MODS, ExecuteService_1.printFunction);
            this._cs.addMessage(ExecuteService_1.consoleMessages.join(""), __WEBPACK_IMPORTED_MODULE_1__console_service__["b" /* EConsoleMessageType */].Print);
            this._cs.addMessage("Flowchart was successfully executed.");
            ///console.log(this._fs);
            ///this.push_fs(this._fs);
        }
        catch (ex) {
            this._cs.log(ex);
            this._cs.addMessage(ExecuteService_1.consoleMessages.join(""), __WEBPACK_IMPORTED_MODULE_1__console_service__["b" /* EConsoleMessageType */].Print);
            ExecuteService_1.consoleMessages = [];
            let errorMessage = "<div class='error'>" + ex + "</div>";
            this._cs.addMessage(errorMessage, __WEBPACK_IMPORTED_MODULE_1__console_service__["b" /* EConsoleMessageType */].Error);
            // this.layoutService.showConsole();
            // this.switchViewer("console-viewer");
        }
        this._mb.processing = false;
        // this.update();
    }
};
ExecuteService.consoleMessages = [];
//
//    Global print function supplied to the execution 
//    to print values to console viewer
//
ExecuteService.printFunction = function (varName, value) {
    let consoleHTML = "";
    let variable_name = varName;
    let variable_value = value;
    if (Array.isArray(value)) {
        variable_value = "<em>Array(" + value.length + " items)</em>"; //"[" + variable_value + "]";
    }
    else if (typeof value == 'string') {
        variable_value = "\"" + value + "\"";
    }
    else if (typeof (value) == "object") {
        let strRep = value.toString();
        if (strRep !== "[object Object]") {
            variable_value = strRep.replace(/\n/g, '<br>');
        }
        else {
            let keys = Object.keys(value);
            variable_value = "<em>JSON Object with properties: (" + keys.toString() + ")</em>";
            ;
        }
    }
    consoleHTML += "<div class='console-line'>" + "<span class='var-name'>Value of " + variable_name + ": </span>" +
        "<span class='var-value'>" + variable_value + "</div>";
    console.log(`Printing ${consoleHTML}`);
    ExecuteService_1.consoleMessages.push(consoleHTML);
};
ExecuteService = ExecuteService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__flowchart_service__["a" /* FlowchartService */],
        __WEBPACK_IMPORTED_MODULE_1__console_service__["a" /* ConsoleService */],
        __WEBPACK_IMPORTED_MODULE_2__mobius_service__["a" /* MobiusService */],
        __WEBPACK_IMPORTED_MODULE_3__module_service__["a" /* ModuleService */]])
], ExecuteService);

var ExecuteService_1;


/***/ }),

/***/ "./src/app/global-services/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class FileService {
    //
    //  Takes a string and a filename, downloads it as a file
    //
    static downloadAsJSON(fileString, filename) {
        let blob = new Blob([fileString], { type: 'application/json' });
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        }
        else {
            const a = document.createElement('a');
            document.body.appendChild(a);
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = filename;
            a.click();
            setTimeout(() => {
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            }, 0);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FileService;



/***/ }),

/***/ "./src/app/global-services/flowchart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowchartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_classes_flowchart_FlowchartModule__ = __webpack_require__("./src/app/base-classes/flowchart/FlowchartModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__ = __webpack_require__("./src/app/base-classes/code/CodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__console_service__ = __webpack_require__("./src/app/global-services/console.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__module_service__ = __webpack_require__("./src/app/global-services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mobius_service__ = __webpack_require__("./src/app/global-services/mobius.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_circular_json__ = __webpack_require__("./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm2015/material.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










let FlowchartService = class FlowchartService {
    constructor($log, _mb, _ms, dialog, http) {
        this.$log = $log;
        this._mb = _mb;
        this._ms = _ms;
        this.dialog = dialog;
        this.http = http;
        this._user = "AKM";
        this.code_generator = __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["a" /* CodeFactory */].getCodeGenerator("js");
        this.fcX = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](this._flowchart);
        this.nX = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](this._active_node);
        // Observable data streams
        // flowchart$.subscribe() <-- to update
        this.flowchart$ = this.fcX.asObservable();
        this.node$ = this.nX.asObservable();
    }
    ;
    push_flowchart(fc) {
        this.fcX.next(fc);
    }
    push_node(node) {
        //console.log(`StartTime: ${new Date()}`);
        this.nX.next(node);
        //console.log(`EndTime: ${new Date()}`);
    }
    get flowchart() {
        return this.fcX.getValue();
    }
    update_modules() {
        this._ms.load_modules();
    }
    update_code_generator(value) {
        this._mb.code_generator = value;
    }
    // ------------ File Functions
    //
    // Creates a new flowchart
    // Handles authorship, updates Modules and Code Generator
    //
    new_flowchart() {
        let fc = new __WEBPACK_IMPORTED_MODULE_3__base_classes_flowchart_FlowchartModule__["a" /* Flowchart */]();
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
    load_flowchart_from_string(fileString) {
        let _this = this;
        let jsonData;
        let flowchart;
        try {
            let data = __WEBPACK_IMPORTED_MODULE_8_circular_json__["parse"](fileString);
            this.update_code_generator(__WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["a" /* CodeFactory */].getCodeGenerator(data["language"]));
            //TODO: this.update_modules();
            flowchart = __WEBPACK_IMPORTED_MODULE_3__base_classes_flowchart_FlowchartModule__["b" /* FlowchartReader */].read_flowchart_from_data(data["flowchart"]);
            // TODO: select a node
        }
        catch (err) {
            console.log(err);
            this.$log.log(`Error loading file from string: ${err}`);
        }
        this.push_flowchart(flowchart);
    }
    //
    // Loads content from a URL and then passes a string, to be read as a flowchart
    //
    load_file_from_url(url) {
        try {
            let fileString = this.http.get(url).subscribe(res => {
                this.load_flowchart_from_string(JSON.stringify(res));
            });
        }
        catch (ex) {
            this.$log.log("Error fetching file from from URL: ${url}");
        }
    }
    // ------------ Edge Utils
    addEdge(outputAddress, inputAddress) {
        if (outputAddress[0] == inputAddress[0]) {
            return;
        }
        try {
            this.fcX.next(__WEBPACK_IMPORTED_MODULE_3__base_classes_flowchart_FlowchartModule__["c" /* FlowchartUtils */].add_edge(this.flowchart, outputAddress, inputAddress));
            this.$log.log("New Edge was added");
        }
        catch (ex) {
            this.$log.log(ex);
        }
    }
    disconnectPort(type, portIndex, nodeIndex) {
        this.fcX.next(__WEBPACK_IMPORTED_MODULE_3__base_classes_flowchart_FlowchartModule__["c" /* FlowchartUtils */].disconnect_port(this._flowchart, type, portIndex, nodeIndex));
    }
    disconnectNode(nodeIndex) {
        //this.fcX.next();
    }
    deletePort(type, portIndex) {
        //this._flowchart.deletePort(type, portIndex, this._selectedNode);
    }
    deleteEdge(edgeIndex) {
        __WEBPACK_IMPORTED_MODULE_3__base_classes_flowchart_FlowchartModule__["c" /* FlowchartUtils */].delete_edge(this._flowchart, edgeIndex);
        // print message to console
        this.$log.log("Edge was deleted");
    }
};
FlowchartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__console_service__["a" /* ConsoleService */],
        __WEBPACK_IMPORTED_MODULE_7__mobius_service__["a" /* MobiusService */],
        __WEBPACK_IMPORTED_MODULE_6__module_service__["a" /* ModuleService */],
        __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatDialog */],
        __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
], FlowchartService);



/***/ }),

/***/ "./src/app/global-services/layout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__ = __webpack_require__("./src/app/ui-components/viewers/EViewer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_components_viewers_viewer_container_viewer_container_component__ = __webpack_require__("./src/app/ui-components/viewers/viewer-container/viewer-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_components_editors_flowchart_viewer_flowchart_viewer_component__ = __webpack_require__("./src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_components_editors_editor_editor_component__ = __webpack_require__("./src/app/ui-components/editors/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_components_viewers_parameter_viewer_parameter_viewer_component__ = __webpack_require__("./src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {OutputPortTypes} from '../../../base-classes/Port/PortModule';





let LayoutService = LayoutService_1 = class LayoutService {
    constructor(injector, r) {
        this.r = r;
        this.layout = {
            useTransition: true,
            mode: 'Editor',
            gutter: 7,
            size: {
                main: 70,
                side: 30,
                top: 33,
                middle: 33,
                bottom: 33
            },
            content: {
                main: __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Flowchart,
                side: {
                    top: __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Viewer,
                    middle: __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Editor,
                    bottom: __WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Parameter
                }
            },
            views: []
        };
        this.viewContainerIndex = 500;
        this._url = "index";
        // handing subscriptions
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        function createView(component_name) {
            let component = LayoutService_1.ComponentMap[component_name];
            let factory = r.resolveComponentFactory(component);
            let componentRef = factory.create(injector);
            let view = componentRef.hostView;
            return view;
        }
        this.layout.views[__WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Editor] = createView(__WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Editor);
        this.layout.views[__WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Viewer] = createView(__WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Viewer);
        this.layout.views[__WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Flowchart] = createView(__WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Flowchart);
        this.layout.views[__WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Parameter] = createView(__WEBPACK_IMPORTED_MODULE_2__ui_components_viewers_EViewer__["a" /* EViewer */].Parameter);
    }
    sendMessage(message) {
        this.subject.next({ text: message });
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage() {
        return this.subject.asObservable();
    }
    // general 
    getView(panel_id) {
        let viewer_name = panel_id == "main" ? this.layout.content.main :
            this.layout.content.side[panel_id];
        return { name: viewer_name, view: this.layout.views[viewer_name] };
    }
    getAssets() {
        return this.layout;
    }
    //panels related
    maximize(panel_id) {
        if (panel_id == "main") {
            return;
        }
        // get the panel_id passed and the corresponding component
        // interchange values
        let max_item = this.layout.content.side[panel_id];
        if (max_item) {
            let current_main = this.layout.content.main;
            this.layout.content.main = max_item;
            this.layout.content.side[panel_id] = current_main;
        }
        this.sendMessage("Layout Changed");
    }
    minimize(panel_id) {
        alert("To be implemented");
    }
    restore(panel_id) {
        alert("To be implemented");
    }
    // functions
    showHelp(fn) {
        this._url = "modules/" + "_" + fn.module.toLowerCase() + "_";
        this._fnObj = fn;
        this.sendMessage("Module: " + fn.module);
    }
    showConsole() {
        this.sendMessage("console");
    }
    getViewContainer() {
        return this.viewContainerIndex;
    }
    //
    setViewContainer(index) {
        this.viewContainerIndex = index;
    }
    // help
    getUrl() {
        return this._url;
    }
    getObj() {
        return this._fnObj;
    }
    setObj() {
        this._url = undefined;
    }
    // modes - mobius editor or mobius viewer
    toggleMode() {
        if (this.layout.mode == 'Editor') {
            this.layout.mode = 'Viewer';
            this.layout.size.top = 0;
            this.layout.size.middle = 0;
            this.layout.size.bottom = 100;
        }
        else {
            this.layout.mode = 'Editor';
            this.layout.size.top = 33;
            this.layout.size.middle = 33;
            this.layout.size.bottom = 33;
        }
    }
    setEditor() {
        this.layout.mode = 'Editor';
        this.layout.size.top = 33;
        this.layout.size.middle = 33;
        this.layout.size.bottom = 33;
    }
    setViewer() {
        this.layout.mode = 'Viewer';
        this.layout.size.top = 0;
        this.layout.size.middle = 0;
        this.layout.size.bottom = 33;
    }
};
LayoutService.ComponentMap = {
    "Output": __WEBPACK_IMPORTED_MODULE_3__ui_components_viewers_viewer_container_viewer_container_component__["a" /* ViewerContainerComponent */],
    "Flowchart": __WEBPACK_IMPORTED_MODULE_4__ui_components_editors_flowchart_viewer_flowchart_viewer_component__["a" /* FlowchartViewerComponent */],
    "Procedure": __WEBPACK_IMPORTED_MODULE_5__ui_components_editors_editor_editor_component__["a" /* EditorComponent */],
    "Parameters": __WEBPACK_IMPORTED_MODULE_6__ui_components_viewers_parameter_viewer_parameter_viewer_component__["a" /* ParameterViewerComponent */],
};
LayoutService = LayoutService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
], LayoutService);

var LayoutService_1;


/***/ }),

/***/ "./src/app/global-services/mobius.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const MOBIUS = {
    PROPERTY: {
        NODE: "MOBIUS_NODES",
        FLOWCHART: "MOBIUS_FC"
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = MOBIUS;



/***/ }),

/***/ "./src/app/global-services/mobius.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobiusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_code_CodeModule__ = __webpack_require__("./src/app/base-classes/code/CodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__console_service__ = __webpack_require__("./src/app/global-services/console.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let MobiusService = class MobiusService {
    constructor($log) {
        this._user = "local_user";
        this._code_gen = __WEBPACK_IMPORTED_MODULE_1__base_classes_code_CodeModule__["a" /* CodeFactory */].getCodeGenerator("js");
        this._processing = false;
        this.stateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    get processing() {
        return this._processing;
    }
    set processing(value) {
        this._processing = value;
        this.stateChanged.emit(this._processing);
    }
    get code_generator() {
        return this._code_gen;
    }
    set code_generator(cg) {
        this._code_gen = cg;
    }
    get user() {
        return this._user;
    }
    set user(username) {
        this._user = username;
    }
    stateChangedEmitter() {
        return this.stateChanged;
    }
};
MobiusService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__console_service__["a" /* ConsoleService */]])
], MobiusService);



/***/ }),

/***/ "./src/app/global-services/module.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_modules_AllModules__ = __webpack_require__("./src/assets/modules/AllModules.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_code_CodeModule__ = __webpack_require__("./src/app/base-classes/code/CodeModule.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ModuleService = ModuleService_1 = class ModuleService {
    constructor() { }
    static init() {
        let modulearr = Object.keys(__WEBPACK_IMPORTED_MODULE_1__assets_modules_AllModules__["a" /* AllModules */]).map(function (module_name) { return { _name: module_name, _version: 0.1, _author: "Patrick" }; });
        let sortFn = function (a, b) {
            return a._name.toLowerCase().localeCompare(b._name.toLowerCase());
        };
        ModuleService_1.modules = modulearr.sort(sortFn);
    }
    get modules() {
        return ModuleService_1.modules;
    }
    load_functions() {
        let mObj = {};
        __WEBPACK_IMPORTED_MODULE_1__assets_modules_AllModules__["a" /* AllModules */].map((m) => {
            let fnsObj = {};
            __WEBPACK_IMPORTED_MODULE_2__base_classes_code_CodeModule__["b" /* ModuleUtils */].getFunctions(m).map((fn) => {
                fnsObj[fn["name"]] = fn.def;
            });
            mObj[m["_name"]] = fnsObj;
        });
        ModuleService_1.MOB_MODS = mObj;
    }
    load_modules() {
        // do something
        let module_set = [];
        let module_map = [];
        let moduleSet = module_set;
        let moduleMap = module_map;
        let self = this;
        __WEBPACK_IMPORTED_MODULE_1__assets_modules_AllModules__["a" /* AllModules */].map(function (mod) {
            let name = __WEBPACK_IMPORTED_MODULE_2__base_classes_code_CodeModule__["b" /* ModuleUtils */].getName(mod);
            if (moduleMap[name] !== undefined) {
                let fns = __WEBPACK_IMPORTED_MODULE_2__base_classes_code_CodeModule__["b" /* ModuleUtils */].getFunctions(mod);
                let original_mod = moduleMap[name];
                for (let i = 0; i < fns.length; i++) {
                    let f = fns[i];
                    original_mod[f.name] = (f.def);
                }
            }
            else {
                moduleMap[name] = mod;
                moduleSet.push(mod);
            }
        });
        // sort the set
        module_set = module_set.sort(function (a, b) {
            return a["_name"].toLowerCase().localeCompare(b["_name"].toLowerCase());
        });
        ModuleService_1.modules = module_set;
        this.load_functions();
    }
};
ModuleService.modules = [];
ModuleService.MOB_MODS = {};
ModuleService = ModuleService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ModuleService);

var ModuleService_1;


/***/ }),

/***/ "./src/app/global-services/node-library.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeLibraryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_circular_json__ = __webpack_require__("./node_modules/circular-json/build/circular-json.node.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobius_constants__ = __webpack_require__("./src/app/global-services/mobius.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__console_service__ = __webpack_require__("./src/app/global-services/console.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let NodeLibraryService = NodeLibraryService_1 = class NodeLibraryService {
    constructor(_cs) {
        this._cs = _cs;
        NodeLibraryService_1.update_nodes();
    }
    static get nodes() {
        return NodeLibraryService_1.saved_nodes;
    }
    set saved_nodes(nodes) {
        NodeLibraryService_1.saved_nodes = nodes;
    }
    static update_nodes() {
        NodeLibraryService_1.saved_nodes = [];
        let myStorage = window.localStorage;
        let property = __WEBPACK_IMPORTED_MODULE_2__mobius_constants__["a" /* MOBIUS */].PROPERTY.NODE;
        let storageString = myStorage.getItem(property);
        let nodesStorage = __WEBPACK_IMPORTED_MODULE_1_circular_json__["parse"](storageString == null ? __WEBPACK_IMPORTED_MODULE_1_circular_json__["stringify"]({ n: [] }) : storageString);
        let nodeData = nodesStorage.n;
        for (let n = 0; n < nodeData.length; n++) {
            let n_data = nodeData[n];
            NodeLibraryService_1.saved_nodes.push(n_data);
        }
    }
    /*
     * Deletes all nodes in the libray if node nodeID is passed
     * Deletes single node from the libray is a nodeID is passed
     */
    static delete_library_node(nodeID) {
        let nav = navigator;
        let myStorage = window.localStorage;
        let property = __WEBPACK_IMPORTED_MODULE_2__mobius_constants__["a" /* MOBIUS */].PROPERTY.NODE;
        if (nodeID == undefined) {
            let storageString = myStorage.removeItem(property);
        }
        else {
            NodeLibraryService_1.saved_nodes = NodeLibraryService_1.saved_nodes.filter(function (node) {
                return node["_id"] != nodeID;
            });
            if (NodeLibraryService_1.saved_nodes.length == 0) {
                myStorage.removeItem(property);
            }
            else {
                let nodesStorage = __WEBPACK_IMPORTED_MODULE_1_circular_json__["stringify"]({ n: NodeLibraryService_1.saved_nodes });
                myStorage.setItem(property, nodesStorage);
            }
        }
        NodeLibraryService_1.update_nodes();
    }
    static save_library_node(node) {
        // todo: check if overwrite
        if (node.type !== undefined) {
            console.error("This node was already in the library and shouldn't have invoked this function.");
        }
        else {
            let message;
            let nav = navigator;
            let myStorage = window.localStorage;
            let property = __WEBPACK_IMPORTED_MODULE_2__mobius_constants__["a" /* MOBIUS */].PROPERTY.NODE;
            let storageString = myStorage.getItem(property);
            // initialize node storage by reading from localStorage or reading an empty array
            let nodesStorage = __WEBPACK_IMPORTED_MODULE_1_circular_json__["parse"](storageString == null ? __WEBPACK_IMPORTED_MODULE_1_circular_json__["stringify"]({ n: [] }) : storageString);
            // array of nodes
            let nodes = nodesStorage.n;
            // check is another node exists with same name
            for (let i = 0; i < nodes.length; i++) {
                let node_in_lib = nodes[i];
                if (node_in_lib["_name"] === node.name) {
                    message = "Node with this name already exists in the library. Either delete existing\
            node from the library or rename your node and try again.";
                    //this.consoleService.addMessage(message);
                    // this.layoutService.showConsole();
                    //this.switchViewer("console-viewer");
                    return;
                }
            }
            // no node with common name was found
            try {
                nodesStorage.n.push(node);
                myStorage.setItem(property, __WEBPACK_IMPORTED_MODULE_1_circular_json__["stringify"](nodesStorage));
                message = "Bravo! Node saved. Now you have " + (nodes.length) + " node(s) in the library!";
                node.type = node.id;
                //this.consoleService.addMessage(message);
                // this.layoutService.showConsole();
                //this.switchViewer("console-viewer");
                NodeLibraryService_1.update_nodes();
                //this.update();
            }
            catch (ex) {
                console.error("Error saving node");
            }
        }
    }
};
NodeLibraryService.saved_nodes = [];
NodeLibraryService = NodeLibraryService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__console_service__["a" /* ConsoleService */]])
], NodeLibraryService);

var NodeLibraryService_1;


/***/ }),

/***/ "./src/app/gs-viewer/data/DataSubscriber.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/gs-viewer/data/data.service.ts");

class DataSubscriber {
    constructor(injector) {
        this.dataService = injector.get(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]);
        this._subscription = this.dataService.getMessage().subscribe(message => {
            this._message = message;
            this.notify(message.text);
        });
    }
    notify(message) {
        console.warn("Notify function not Implemented");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DataSubscriber;



/***/ }),

/***/ "./src/app/gs-viewer/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gs_json__ = __webpack_require__("./node_modules/gs-json/dist2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gs_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_gs_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_orbit_controls__ = __webpack_require__("./node_modules/three-orbit-controls/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_orbit_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_three_orbit_controls__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let DataService = class DataService {
    constructor() {
        // intializations
        // this only runs once
        this.selecting = [];
        this.grid = true;
        this.scenechildren = [];
        this.textlabels = [];
        this.point = true;
        this.click = false;
        this.checkpointid = false;
        this.checkedgeid = false;
        this.imVisible = false;
        // ---- 
        // Subscription Handling
        // 
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        let default_width = 1510, default_height = 720;
        // scene
        let scene = new __WEBPACK_IMPORTED_MODULE_2_three__["Scene"]();
        scene.background = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](0xcccccc);
        // renderer
        let renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["WebGLRenderer"]({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        // camera settings
        let aspect_ratio = this._width / this._height;
        let camera = new __WEBPACK_IMPORTED_MODULE_2_three__["PerspectiveCamera"](50, aspect_ratio, 0.01, 1000); //0.0001, 100000000 );
        camera.position.y = 10;
        camera.up.set(0, 0, 1);
        camera.lookAt(scene.position);
        camera.updateProjectionMatrix();
        // orbit controls
        let _OC = __WEBPACK_IMPORTED_MODULE_4_three_orbit_controls__(__WEBPACK_IMPORTED_MODULE_2_three__);
        let controls = new _OC(camera, renderer.domElement);
        controls.enableKeys = false;
        // default directional lighting
        let directional_light = new __WEBPACK_IMPORTED_MODULE_2_three__["DirectionalLight"](0xffffff, 0.5);
        directional_light.castShadow = false;
        directional_light.position.copy(camera.position);
        controls.addEventListener('change', function () {
            directional_light.position.copy(camera.position);
        });
        directional_light.target.position.set(0, 0, 0);
        scene.add(directional_light);
        // default ambient lighting
        let default_hue = 0;
        let default_saturation = 0.01;
        let default_lightness = 0.47;
        var hemi_light = new __WEBPACK_IMPORTED_MODULE_2_three__["HemisphereLight"](0xffffff, 0.5);
        hemi_light.color.setHSL(default_hue, default_saturation, default_lightness);
        scene.add(hemi_light);
        this._scene = scene;
        this._renderer = renderer;
        this._camera = camera;
        this._orbitControls = controls;
        // add it to alight - what does alight do?
        this._alight = hemi_light;
        //this._alight.push(hemi_light);
        this.checkname = [];
        this.pointname = [];
    }
    sendMessage(message) {
        this.subject.next({ text: message });
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage() {
        return this.subject.asObservable();
    }
    //
    //  Getter and Setting for gs-model
    //
    getGsModel() {
        return this._gsModel;
    }
    setGsModel(model) {
        this._gsModel = model;
        if (this._gsModel !== undefined) {
            this.generateSceneMaps();
        }
        else {
            // remove all children from the scene
            for (var i = 0; i < this._scene.children.length; i++) {
                if (this._scene.children[i].type === "Scene") {
                    this._scene.remove(this._scene.children[i]);
                }
            }
        }
        this.sendMessage("model_update");
    }
    generateSceneMaps() {
        var scene_and_maps = __WEBPACK_IMPORTED_MODULE_3_gs_json__["genThreeOptModelAndMaps"](this._gsModel);
        this.scenemaps = scene_and_maps;
    }
    getscememaps() {
        return this.scenemaps;
    }
    getScene(width, height) {
        if (width && height) {
            this._width = width;
            this._height = height;
        }
        return this._scene;
    }
    getRenderer() {
        this._camera.aspect = this._width / this._height;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(this._width, this._height);
        return this._renderer;
    }
    getCamera() {
        return this._camera;
    }
    getControls() {
        return this._orbitControls;
    }
    //
    //
    //
    getalight() {
        return this._alight;
    }
    addraycaster(raycaster) {
        this.raycaster = raycaster;
    }
    getraycaster() {
        return this.raycaster;
    }
    gethue(_hue) {
        this.hue = _hue;
    }
    getsaturation(_saturation) {
        this.saturation = _saturation;
    }
    getlightness(_lightness) {
        this.lightness = _lightness;
    }
    getpointsize(pointszie) {
        this.pointsize = pointszie;
    }
    getmaterialpoint(materialpoint) {
        this.materialpoint = materialpoint;
    }
    getradius(point) {
        this.pointradius = point;
    }
    getcenterx(centerx) {
        this.centerx = centerx;
    }
    getcentery(centery) {
        this.centery = centery;
    }
    getcenterz(centerz) {
        this.centerz = centerz;
    }
    getcentersize(centersize) {
        this.centersize = centersize;
    }
    addGeom(Geom) {
        this._Geom = Geom;
    }
    getGeom() {
        return this._Geom;
    }
    addscenechange(scenechange) {
        this.scenechange = scenechange;
    }
    getscenechange() {
        return this.scenechange;
    }
    addINTERSECTEDColor(INTERSECTEDColor) {
        if (this.INTERSECTEDColor == null) {
            this.INTERSECTEDColor = INTERSECTEDColor;
        }
    }
    getINTERSECTEDColor() {
        return this.INTERSECTEDColor;
    }
    addselecting(selecting) {
        if (selecting[selecting.length - 1] == undefined) {
            this.selecting = [];
        }
        this.sendMessage();
    }
    pushselecting(selecting) {
        this.selecting.push(selecting);
        this.sendMessage();
    }
    spliceselecting(index, number) {
        this.selecting.splice(index, number);
        this.sendMessage();
    }
    getselecting() {
        return this.selecting;
    }
    addclickshow(clickshow) {
        this.clickshow = clickshow;
    }
    addattrvertix(attributevertix) {
        this.attributevertix = attributevertix;
    }
    getattrvertix() {
        return this.attributevertix;
    }
    addgrid(grid) {
        this.grid = grid;
    }
    addaxis(axis) {
        this.axis = axis;
    }
    addshadow(shadow) {
        this.shadow = shadow;
    }
    addframe(frame) {
        this.frame = frame;
    }
    addpoint(point) {
        this.point = point;
    }
    getSelectingIndex(uuid) {
        for (var i = 0; i < this.selecting.length; i++) {
            if (this.selecting[i].uuid == uuid) {
                return i;
            }
        }
        return -1;
    }
    addscenechild(scenechildren) {
        this.scenechildren = scenechildren;
        this.sendMessage();
    }
    getscenechild() {
        this.sendMessage();
        return this.scenechildren;
    }
    addlabel(label) {
        this.label = label;
        this.sendMessage();
    }
    getlabel() {
        this.sendMessage();
        return this.label;
    }
    addgetpoints(getpoints) {
        this.getpoints = getpoints;
    }
    addpointname(pointname) {
        this.pointname = pointname;
    }
};
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);



/***/ }),

/***/ "./src/app/gs-viewer/gs-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"appdiv\" (mousedown)=\"leaflet()\">\r\n\t<split direction=\"vertical\">\r\n\t\t<split-area [size]=\"94\" id=\"splitcontainer\">\r\n\t\t  <div style=\"height: 100%\">\r\n\t\t    <split direction=\"horizontal\">\r\n\t\t      <split-area [size]=\"0.5\" id=\"splitgroups\" style=\"overflow-x:hidden;overflow-y: auto;\">\r\n\t\t        <app-groups></app-groups>\r\n\t\t      </split-area>\r\n\t\t      <split-area [size]=\"99.5\" id=\"splitviewer\">\r\n\t\t        <!-- <app-viewer *ngIf=\"imVisible===false\"></app-viewer>\r\n\t\t        <app-map *ngIf=\"imVisible===true\"></app-map> -->\r\n\t\t        <app-viewer></app-viewer>\r\n\t\t      </split-area>\r\n\t\t    </split>\r\n\t\t  </div>\r\n\t\t</split-area>\r\n\t\t<split-area [size]=\"6\" id=\"splittoolwindow\">\r\n\t\t\t<app-toolwindow></app-toolwindow>\r\n\t\t</split-area>\r\n\t</split>\r\n</div>"

/***/ }),

/***/ "./src/app/gs-viewer/gs-viewer.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n@font-face {\n  font-family: \"FontAwesome\"; }\n.font-awesome-hand {\n  font-family: FontAwesome; }\n.font-awesome-hand::after {\n  font-family: FontAwesome; }\nhtml, body {\n  font-family: 'Open Sans', sans-serif;\n  text-align: justify;\n  margin: 0px;\n  padding: 0px; }\n#appdiv {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n#splittoolwindow {\n  overflow: scroll !important; }\na {\n  text-decoration: none;\n  color: #fff;\n  text-transform: uppercase; }\n.toolbar {\n  background-color: #333; }\n.toolbar ul {\n  list-style: none;\n  overflow: hidden;\n  margin-bottom: 0px;\n  z-index: 1; }\n.toolbar div > ul > li {\n  display: inline-block;\n  float: left; }\n.toolbar div > ul > li:hover {\n  background-color: #fff; }\n.toolbar div > ul > li:hover a {\n  color: #333; }\n.toolbar div > ul > li > a {\n  font-size: 12px;\n  line-height: 20px;\n  display: block;\n  float: left;\n  padding: 0 16px; }\n/**\r\n * Carets\r\n */\n.toolbar div ul li i.icon-sort {\n  display: none; }\n.toolbar div ul li:hover i.icon-sort {\n  display: inline; }\n.toolbar div ul li:hover i.icon-caret-down {\n  display: none; }\n.toolbar .dropdown i {\n  margin: 0px; }\n.toolbar div > ul > li > a:hover {\n  background-color: #fff;\n  color: #333; }\n.dropdown {\n  float: left; }\n/**\r\n * Sub navigaton\r\n **/\n.sub {\n  min-width: 180px;\n  margin: 20px;\n  display: none;\n  position: absolute;\n  border-left: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb; }\n.sub li a {\n  display: block;\n  background-color: #fff;\n  color: #333 !important;\n  border-left: 4px solid #fff;\n  padding: 4px 12px;\n  font-size: 12px;\n  line-height: 26px; }\n.sub li a:hover {\n  border-left: 4px solid #ff0000;\n  float: top; }\n.toolbar div > ul > li:hover .sub {\n  display: block; }\n.sub li a {\n  -webkit-transition: all .5s linear;\n  transition: all .5s linear;\n  overflow: hidden; }\n#toolwindow {\n  position: relative;\n  background-color: slategrey; }\n.sidebar {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: 100%; }\n.tool-form {\n  padding-top: 10px;\n  padding-left: 10px;\n  color: white; }\n.tool-form-heading {\n  border-bottom: 2px solid #ddd;\n  margin: 0px;\n  padding-bottom: 3px; }\n.tool-form label {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n  color: black;\n  display: block;\n  margin: 0px 0px 15px 0px; }\n.tool-form label > span {\n  width: 150px;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n  float: left;\n  padding-top: 4px;\n  padding-right: 5px; }\n.tool-form span.required {\n  color: red; }\n.tool-form .tel-number-field {\n  width: 30px;\n  text-align: center; }\n.tool-form input.input-field {\n  width: 30px; }\n.tool-form input.file-input-field {\n  border: 1px solid #ccc;\n  height: 20px;\n  display: inline-block;\n  padding: 6px 6px;\n  cursor: pointer;\n  background-color: #888888; }\n.tool-form input.input-field,\n.tool-form .tel-number-field,\n.tool-form .textarea-field,\n.tool-form .select-field {\n  height: 20px;\n  overflow: hidden;\n  width: 240px;\n  background-color: #888888;\n  border-radius: 5px;\n  color: #ffffff; }\n.tool-form .input-field:focus,\n.tool-form .tel-number-field:focus,\n.tool-form .textarea-field:focus,\n.tool-form .select-field:focus {\n  border: 1px solid #0C0; }\n.tool-form .textarea-field {\n  height: 100px;\n  width: 55%; }\n.tool-form input[type=submit],\n.tool-form input[type=button] {\n  height: 25px;\n  border: none;\n  padding: 2px 8px 2px 8px;\n  background: #444466;\n  color: #fff;\n  box-shadow: 1px 1px 4px #DADADA;\n  -moz-box-shadow: 1px 1px 4px #DADADA;\n  -webkit-box-shadow: 1px 1px 4px #DADADA;\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  color: #ffffff; }\n.tool-form input[type=submit]:hover,\n.tool-form input[type=button]:hover {\n  background: #333377;\n  color: #fff; }\n.rightstyle {\n  width: 30px;\n  height: 100%;\n  float: right;\n  background: #FFFFFF;\n  background-repeat: repeat;\n  background-attachment: scroll;\n  overflow: auto; }\n.leftstyle {\n  background: #e6e6e6;\n  height: 100%; }\n.slider {\n  width: 0;\n  height: 0;\n  border-top: 30px solid transparent;\n  border-right: 10px solid black;\n  border-bottom: 30px solid transparent; }\n"

/***/ }),

/***/ "./src/app/gs-viewer/gs-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/gs-viewer/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gs_json__ = __webpack_require__("./node_modules/gs-json/dist2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gs_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gs_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let GSViewerComponent = class GSViewerComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.imVisible = false;
    }
    ;
    setModel(data) {
        try {
            this.dataService.setGsModel(data);
        }
        catch (ex) {
            this.data = undefined;
            console.error("Error generating model");
        }
    }
    ngOnInit() {
        this.setModel(this.data);
    }
    ngDoCheck() {
        if (this.dataService.getGsModel() !== this.data) {
            this.setModel(this.data);
        }
    }
    leaflet() {
        this.imVisible = this.dataService.imVisible;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], GSViewerComponent.prototype, "data", void 0);
GSViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'gs-viewer',
        template: __webpack_require__("./src/app/gs-viewer/gs-viewer.component.html"),
        styles: [__webpack_require__("./src/app/gs-viewer/gs-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
], GSViewerComponent);



/***/ }),

/***/ "./src/app/gs-viewer/gs-viewer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_split__ = __webpack_require__("./node_modules/angular-split/esm2015/angular-split.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__ = __webpack_require__("./src/app/gs-viewer/gs-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__ = __webpack_require__("./src/app/gs-viewer/viewer/viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setting_setting_component__ = __webpack_require__("./src/app/gs-viewer/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolwindow_toolwindow_component__ = __webpack_require__("./src/app/gs-viewer/toolwindow/toolwindow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_data_service__ = __webpack_require__("./src/app/gs-viewer/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolwindow_groups_component__ = __webpack_require__("./src/app/gs-viewer/toolwindow/groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_sort__ = __webpack_require__("./node_modules/@angular/material/esm2015/sort.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { BrowserModule } from '@angular/platform-browser';



let GSViewer = GSViewer_1 = class GSViewer {
    static forRoot() {
        return {
            ngModule: GSViewer_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__data_data_service__["a" /* DataService */]
            ]
        };
    }
};
GSViewer = GSViewer_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular_split__["a" /* AngularSplitModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material_slider__["a" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material_expansion__["a" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material_tabs__["a" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material_tooltip__["a" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_material_sort__["a" /* MatSortModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__["a" /* GSViewerComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__["a" /* GSViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__["a" /* ViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_6__setting_setting_component__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_7__toolwindow_toolwindow_component__["a" /* ToolwindowComponent */],
            __WEBPACK_IMPORTED_MODULE_9__toolwindow_groups_component__["a" /* GroupsComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__data_data_service__["a" /* DataService */]],
    })
], GSViewer);

var GSViewer_1;


/***/ }),

/***/ "./src/app/gs-viewer/setting/setting.component.css":
/***/ (function(module, exports) {

module.exports = "#settingview{\r\n  position:absolute;\r\n  background-color: white;\r\n  top:0px;\r\n  right:30px;\r\n  color:#395d73;\r\n  width:400px;\r\n  height:430px;\r\n}\r\n#grid{\r\n  margin-left: 20px;\r\n  font-family:sans-serif;\r\n  margin-top:10px;\r\n}\r\n#axis{\r\n  margin-left: 30px;\r\n  font-family:sans-serif;\r\n}\r\n#shadow{\r\n  margin-left: 30px;\r\n  font-family:sans-serif;\r\n}\r\n#frame{\r\n  margin-left: 30px;\r\n  font-family:sans-serif;\r\n}\r\n#nomal{\r\n  margin-left: 20px;\r\n  font-family:sans-serif;\r\n}\r\n#point{\r\n  margin-left: 20px;\r\n  font-family:sans-serif;\r\n}\r\n#huerange{\r\n  margin-left: 41px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#satrange{\r\n  margin-left: 18px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#lirange{\r\n  margin-left: 20px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#oprange{\r\n  margin-left: 20px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#name{\r\n  font-family:sans-serif;\r\n}\r\n#redrange{\r\n  margin-left: 60px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#greenrange{\r\n  margin-left: 60px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#bluerange{\r\n  margin-left: 60px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#linerange{\r\n  margin-left: 5px;\r\n  width: 50%;\r\n  font-family:sans-serif;\r\n}\r\n#pointrange{\r\n  margin-left: 3px;\r\n  width: 50%;\r\n  font-family:sans-serif;\r\n}\r\n#sizerange{\r\n  width: 50%;\r\n  font-family:sans-serif;\r\n}\r\n#centerx{\r\n  width:30px;\r\n  margin-left:10px;\r\n}\r\n#centery{\r\n  width:30px;\r\n  margin-left:10px;\r\n}\r\n#centerz{\r\n  width:30px;\r\n  margin-left:10px;\r\n}\r\n#centersize{\r\n  width:30px;\r\n  margin-left:10px;\r\n}\r\n.name{\r\n  margin-left: 10px;\r\n}\r\n.center{\r\n  margin-left: 10px;\r\n}\r\n::ng-deep .mat-accent .mat-slider-thumb {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n}\r\n::ng-deep .mat-accent .mat-slider-thumb-label {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n}\r\n::ng-deep .mat-accent .mat-slider-track-fill {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n} "

/***/ }),

/***/ "./src/app/gs-viewer/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"settingview\" (click)=\"setting($event)\">\r\n  <input id=\"grid\" #grid type=\"checkbox\" [checked]=\"gridVisible\" (click)=\"changegrid()\"> <label id=\"name\" value=\"gridVisible\">grid</label>\r\n  <input id=\"axis\"  type=\"checkbox\" [checked]=\"axisVisible\" (click)=\"changeaxis()\"> <label id=\"name\" value=\"axisVisible\">axis</label>\r\n  <input id=\"shadow\"  type=\"checkbox\" [checked]=\"shadowVisible\" (click)=\"changeshadow()\"> <label id=\"name\" value=\"shadowVisible\">shadow</label>\r\n  <input id=\"frame\"  type=\"checkbox\" [checked]=\"frameVisible\" (click)=\"changeframe()\"> <label id=\"name\" value=\"frameVisible\">frame</label><br/>\r\n  <!-- <input id=\"nomal\"  type=\"checkbox\" [checked]=\"normalVisible\" (click)=\"changenormal()\"> <label id=\"name\" value=\"nomalVisible\">nomal</label> -->\r\n  <input id=\"point\"  type=\"checkbox\" [checked]=\"pointVisible\" (click)=\"changepoint()\"> <label id=\"name\" value=\"pointVisible\">point</label><br/>\r\n  \r\n  <hr/><label class=\"name\" >Grid Center</label><br/>\r\n  <label class=\"name\" >X</label><input type=\"text\" name=\"center\" id=\"centerx\" #centerx value={{_centerx}} (change)=changecenter(centerx.value,centery.value,centerz.value,size.value)>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Y</label><input type=\"text\" name=\"center\" #centery id=\"centery\" value={{_centery}} (change)=changecenter(centerx.value,centery.value,centerz.value,size.value)>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Z</label><input type=\"text\" name=\"center\"  #centerz id=\"centerz\" value={{_centerz}} (change)=changecenter(centerx.value,centery.value,centerz.value,size.value)>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Size</label><input type=\"text\" name=\"center\"  #size id=\"centersize\" value={{_centersize}} (change)=changecenter(centerx.value,centery.value,centerz.value,size.value)>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;<button (click)=\"getcenter()\">Get</button><br/>\r\n  <!--< button (click)=\"changecenter(centerx.value,centery.value,centerz.value)\">Set</button> -->\r\n  <!-- <hr/>&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Raycaster Precision</label>&nbsp;&nbsp;<br/>-->\r\n  <label class=\"name\" >Line Precision</label>\r\n  <mat-slider class=\"slider\" name=\"range\" id=\"linerange\" min=0 max=1 step=0.01  value={{_linepre}} #linepre (change)=\"changeline(linepre.value)\" ></mat-slider><label id=\"name\" >{{linepre.value.toPrecision(2)}}</label><br/>\r\n  <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Point Precision</label>\r\n  <mat-slider class=\"slider\" name=\"range\" id=\"pointrange\" min=0 max=1 step=0.01  value={{_pointpre}} #pointpre (change)=\"changepoint(pointpre.value)\" ></mat-slider><label id=\"name\" >{{pointpre.value.toPrecision(2)}}</label><br/> -->\r\n  <label class=\"name\" >Points Size</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  <mat-slider class=\"slider\" name=\"range\" id=\"sizerange\" min=0 max=5 step=0.1  value={{_pointsize}} #pointsize (change)=\"changepointsize(pointsize.value)\" ></mat-slider><label id=\"name\" >{{pointsize.value.toPrecision(2)}}</label><br/>\r\n\r\n  <hr/><label class=\"name\" >Hemisphere Light</label>&nbsp;&nbsp;<br/>\r\n  <label class=\"name\" >hue</label>&nbsp;&nbsp;&nbsp;\r\n  <mat-slider class=\"slider\" name=\"range\" id=\"huerange\" min=0 max=1 step=0.01  value={{hue}} #slider (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><label id=\"name\" >{{slider.value.toPrecision(2)}}</label><br/>\r\n  <label class=\"name\" >saturation</label>\r\n  <mat-slider name=\"range\" id=\"satrange\" min=0 max=1 step=0.01 value={{saturation}} #slider1 (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><label id=\"name\" >{{slider1.value.toPrecision(2)}}</label><br/>\r\n  <label class=\"name\" >lightness</label>\r\n  <mat-slider name=\"range\" id=\"lirange\" min=0 max=1 step=0.01 value={{lightness}} #slider2 (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><label id=\"name\" >{{slider2.value.toPrecision(2)}}</label><br/>\r\n  <!-- &nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >opacity</label>&nbsp;&nbsp;&nbsp;\r\n  <mat-slider name=\"range\" id=\"oprange\" min=0 max=1 step=0.01 value={{opacity}} #slider3 (change)=\"changeopa(slider3.value)\" ></mat-slider><label id=\"name\" >{{slider3.value.toPrecision(2)}}</label><br/> -->\r\n  <!-- <hr/>&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Backeground Color</label>&nbsp;&nbsp;<br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >R</label>\r\n  <mat-slider  name=\"range\" id=\"redrange\" min=0 max=1 step=0.01  value={{red}} #slider4 (change)=\"changeback(slider4.value,slider5.value,slider6.value)\" ></mat-slider><label id=\"name\" >{{slider4.value.toPrecision(2)}}</label><br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >G</label>\r\n  <mat-slider name=\"range\" id=\"greenrange\" min=0 max=1 step=0.01 value={{green}} #slider5 (change)=\"changeback(slider4.value,slider5.value,slider6.value)\" ></mat-slider><label id=\"name\" >{{slider5.value.toPrecision(2)}}</label><br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >B</label>\r\n  <mat-slider name=\"range\" id=\"bluerange\" min=0 max=1 step=0.01 value={{blue}} #slider6 (change)=\"changeback(slider4.value,slider5.value,slider6.value)\" ></mat-slider><label id=\"name\" >{{slider6.value.toPrecision(2)}}</label><br/> -->\r\n</div>"

/***/ }),

/***/ "./src/app/gs-viewer/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_service__ = __webpack_require__("./src/app/gs-viewer/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SettingComponent = class SettingComponent {
    constructor(dataService) {
        this.dataService = dataService;
        // avoid manipulating the scene here
        // shift to dataservice
        this.scene = this.dataService.getScene();
        this.alight = this.dataService.getalight();
        this.hue = this.dataService.hue;
        this.saturation = this.dataService.saturation;
        this.lightness = this.dataService.lightness;
        this._centerx = this.dataService.centerx;
        this._centery = this.dataService.centery;
        this._centerz = this.dataService.centerz;
        this._centersize = this.dataService.centersize;
        this.raycaster = this.dataService.getraycaster();
        this._linepre = this.raycaster.linePrecision;
        this._pointpre = this.raycaster.params.Points.threshold;
        this._pointsize = this.dataService.pointsize;
    }
    ngOnInit() {
        if (this.hue == undefined) {
            this.hue = 0;
        }
        else {
            this.hue = this.dataService.hue;
        }
        if (this.saturation == undefined) {
            this.saturation = 0.01;
        }
        else {
            this.saturation = this.dataService.saturation;
        }
        if (this.lightness == undefined) {
            this.lightness = 0.47;
        }
        else {
            this.lightness = this.dataService.lightness;
        }
        this.gridVisible = this.dataService.grid;
        this.axisVisible = this.dataService.axis;
        this.shadowVisible = this.dataService.shadow;
        this.frameVisible = this.dataService.frame;
        this.pointVisible = this.dataService.point;
        if (this._centerx == undefined) {
            this._centerx = 0;
        }
        else {
            this._centerx = this.dataService.centerx;
        }
        if (this._centery == undefined) {
            this._centery = 0;
        }
        else {
            this._centery = this.dataService.centery;
        }
        if (this._centerz == undefined) {
            this._centerz = 0;
        }
        else {
            this._centerz = this.dataService.centerz;
        }
        if (this._centersize == undefined) {
            this._centersize = 100;
        }
        else {
            this._centersize = this.dataService.centersize;
        }
        this.raycaster = this.dataService.getraycaster();
        if (this._linepre == undefined) {
            this._linepre = 0.05;
        }
        else {
            this._linepre = this.raycaster.linePrecision;
        }
        if (this._pointpre == undefined) {
            this._pointpre = 1;
        }
        else {
            this._pointpre = this.raycaster.params.Points.threshold;
        }
        if (this._pointsize == undefined) {
            this._pointsize = 1;
        }
        else {
            this._pointsize = this.dataService.pointsize;
        }
    }
    changegrid() {
        this.gridVisible = !this.gridVisible;
        if (this.gridVisible) {
            var gridhelper = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](100, 100);
            gridhelper.name = "GridHelper";
            var vector = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](0, 1, 0);
            gridhelper.lookAt(vector);
            this.scene.add(gridhelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("GridHelper"));
        }
        this.dataService.addgrid(this.gridVisible);
    }
    changecenter(centerx, centery, centerz, centersize) {
        if (this.gridVisible) {
            var gridhelper = this.scene.getObjectByName("GridHelper");
            gridhelper = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](centersize, centersize);
            gridhelper.position.set(centerx, centery, centerz);
            console.log(gridhelper);
            this._centerx = centerx;
            this._centery = centery;
            this._centerz = centerz;
            this._centersize = centersize;
            this.dataService.getcenterx(centerx);
            this.dataService.getcentery(centery);
            this.dataService.getcenterz(centerz);
            this.dataService.getcentersize(centersize);
        }
    }
    changeline(lineprecision) {
        this._linepre = lineprecision;
        this.raycaster.linePrecision = lineprecision;
        this.dataService.addraycaster(this.raycaster);
    }
    changepoint() {
        this.pointVisible = !this.pointVisible;
        var children = [];
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                for (var j = 0; j < this.scene.children[i].children.length; j++) {
                    if (this.scene.children[i].children[j].type === "Points") {
                        children.push(this.scene.children[i].children[j]);
                    }
                }
            }
        }
        if (this.pointVisible) {
            for (var i = 0; i < children.length; i++) {
                children[i]["material"].transparent = false;
                children[i]["material"].opacity = 1;
            }
        }
        else {
            for (var i = 0; i < children.length; i++) {
                children[i]["material"].transparent = true;
                children[i]["material"].opacity = 0;
            }
        }
        this.dataService.addpoint(this.pointVisible);
    }
    changepointsize(pointsize) {
        this._pointsize = pointsize;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "sphereInter") {
                var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["SphereGeometry"](pointsize / 3);
                this.scene.children[i]["geometry"] = geometry;
            }
            if (this.scene.children[i].name === "selects" && this.scene.children[i].type === "Points") {
                this.scene.children[i]["material"].size = pointsize;
            }
        }
        this.dataService.getpointsize(pointsize);
    }
    changeaxis() {
        this.axisVisible = !this.axisVisible;
        if (this.axisVisible) {
            var axishelper = new __WEBPACK_IMPORTED_MODULE_0_three__["AxisHelper"](10);
            axishelper.name = "AxisHelper";
            this.scene.add(axishelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("AxisHelper"));
        }
        this.dataService.addaxis(this.axisVisible);
    }
    changeshadow() {
        this.shadowVisible = !this.shadowVisible;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "DirectionalLight") {
                if (this.shadowVisible) {
                    this.scene.children[i].castShadow = true;
                }
                else {
                    this.scene.children[i].castShadow = false;
                }
            }
        }
        this.dataService.addshadow(this.shadowVisible);
    }
    changelight(_hue, _saturation, _lightness) {
        this.hue = _hue;
        this.saturation = _saturation;
        this.lightness = _lightness;
        var alight = this.alight;
        this.dataService.gethue(_hue);
        this.dataService.getsaturation(_saturation);
        this.dataService.getlightness(_lightness);
        this.alight.color.setHSL(_hue, _saturation, _lightness);
    }
    changeframe() {
        this.frameVisible = !this.frameVisible;
        if (this.frameVisible) {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].type === "Scene") {
                    if (this.scene.children[i].children[0].type === "Mesh") {
                        this.scene.children[i].children[0].visible = false;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].type === "Scene") {
                    if (this.scene.children[i].children[0].type === "Mesh") {
                        this.scene.children[i].children[0].visible = true;
                    }
                }
            }
        }
        this.dataService.addframe(this.frameVisible);
    }
    changenormal() {
        this.nomalVisible = !this.nomalVisible;
        if (this.nomalVisible) {
            /*for(var i=0;i<this.scene.children.length;i++){
              if(this.scene.children[i].type==="Scene"){
                for(var j=0;j<this.scene.children[i].children.length;j++){
                  if(this.scene.children[i].children[j].type==="Mesh"){
                    var mesh=this.scene.children[i].children[j];
                    var faceNormalsHelper = new THREE.FaceNormalsHelper( mesh, 10 );
                    mesh.add( faceNormalsHelper );
                    var verticehelper = new THREE.VertexNormalsHelper( mesh, 10 );
                    this.scene.add(verticehelper);
                    console.log(this.scene);
                    //facehelper.visible=false;
                    //this.scene.add(verticehelper);
                  }
                }
              }
            }*/
        }
    }
    setting(event) {
        event.stopPropagation();
    }
};
SettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'app-setting',
        template: __webpack_require__("./src/app/gs-viewer/setting/setting.component.html"),
        styles: [__webpack_require__("./src/app/gs-viewer/setting/setting.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_data_service__["a" /* DataService */]])
], SettingComponent);



/***/ }),

/***/ "./src/app/gs-viewer/toolwindow/groups.component.css":
/***/ (function(module, exports) {

module.exports = "#setandgroup{\r\n  position: relative;\r\n  background-color: #F1F1F1 !important;\r\n  height: 100%;\r\n  width: 100%;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 12px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n}\r\n#groupsview{\r\n  color:#395d73;\r\n  background-color: #F1F1F1 !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 12px !important;\r\n}\r\n#settingview{\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  background-color: #F1F1F1 !important;\r\n  font-size: 12px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  overflow-y: hidden !important;\r\n  width: 1600px;\r\n  height: 800px;\r\n  color: #395d73;\r\n}\r\n.check{\r\n  margin-left:10px;\r\n}\r\n#GridCenter{\r\n  margin-left: 10px;\r\n  margin-top: 3px !important;\r\n  height: 8px;\r\n  vertical-align: bottom;\r\n}\r\n#centerx{\r\n  width:50px;\r\n  margin-left: 10px;\r\n/*  margin-left:25px;*/\r\n}\r\n#centery{\r\n  width:50px;\r\n  /*margin-left:25px;*/\r\n}\r\n#centerz{\r\n  width:50px;\r\n  /*margin-left:25px;*/\r\n}\r\n#centersize{\r\n  width:50px;\r\n  margin-left:9px;\r\n}\r\n.name{\r\n  width: 100%;\r\n  margin-left: 10px;\r\n  margin-top: 8px;\r\n}\r\n#slider-conainer{\r\n  -webkit-box-align: center !important;\r\n      -ms-flex-align: center !important;\r\n          align-items: center !important;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  float: right;\r\n}\r\n/*::ng-deep .mat-accent .mat-slider-thumb {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n} \r\n::ng-deep .mat-accent .mat-slider-thumb-label {\r\n    background-color: white;\r\n    color:#395d73;\r\n    font-family:sans-serif;\r\n}\r\n::ng-deep .mat-accent .mat-slider-track-fill {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n}\r\n\r\n/deep/.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb, .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\r\n    background-color: #395d73;\r\n}\r\n/*::ng-deep .mat-expansion-panel {\r\n  margin: 0px !important;\r\n  overflow: hidden !important;\r\n}\r\n/deep/ .slider {\r\n  height: 25px !important;\r\n  vertical-align: unset !important;\r\n  width: unset !important;\r\n}\r\n*/\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #395d73 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #395d73 !important;\r\n}\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n.mat-slider{\r\n    width: 50px !important;\r\n}\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 3px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#395d73;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{\r\n  display: none !important;\r\n}\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n.mat-expansion-panel-spacing {\r\n  margin-top:0px;\r\n  margin-bottom: 0px;\r\n}\r\n.mat-expansion-panel{\r\n  background-color: #F1F1F1 !important;\r\n  border-color: #395d73;\r\n  line-height: 14px;\r\n  font-weight: bold !important;\r\n  font-size: 12px !important;\r\n  overflow: hidden !important;\r\n}\r\n#groupname{\r\n  margin-right: 0px;\r\n}\r\n.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n}\r\n.mat-list-text{\r\n  cursor :pointer;\r\n  color:#f3a32a;\r\n  font-family: sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 700px;\r\n  line-height: 14px;\r\n  border-top: 2px !important;\r\n  /*margin-top: 2px;*/\r\n}\r\n.mat-list-descr{\r\n  cursor :default;\r\n  color:#f3a32a;\r\n  font-family: sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 700px;\r\n  line-height: 14px;\r\n  border-top: 2px !important;\r\n  margin-top: 8px;\r\n}\r\n.mat-list-text-parent{\r\n  cursor :pointer;\r\n  color:#f3a32a;\r\n  font-family: sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 700px;\r\n  line-height: 14px;\r\n  border-top: 2px !important;\r\n  /*margin-top: 2px;*/\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #ccc;\r\n  /*margin: 1em 0;*/\r\n  padding: 0; \r\n  color:#395d73;\r\n  width: 100%;\r\n  background-color: #395d73;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/gs-viewer/toolwindow/groups.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"setandgroup\" >\r\n<mat-tab-group class=\"mat-tab-group\">\r\n  <mat-tab label=\"Groups\" >\r\n  \t<div id=\"groupsview\">\r\n\t<mat-accordion>\r\n\t  <mat-expansion-panel *ngFor=\"let group of groups\">\r\n\t\t  <mat-expansion-panel-header *ngIf=\"group.parent===null\" class=\"mat-header\">\r\n\t\t    <div class=\"mat-header\"><label id=\"groupname\">{{group.name}}</label></div>\r\n\t\t  </mat-expansion-panel-header>\r\n\t\t    <!-- <div class=\"mat-list-text-parent\"><span id=\"parent\">parent : {{group.parent}} </span></div> -->\r\n\t\t    <div ><span class=\"mat-list-text\" (click)=\"selectpoint(group)\">point : {{group.num_point}} </span></div>\r\n\t\t    <div ><span class=\"mat-list-text\" (click)=\"selectvertice(group)\">vertice : {{group.num_vertice}} </span></div>\r\n\t\t    <div ><span class=\"mat-list-text\" (click)=\"selectedge(group)\">edge : {{group.num_edge}} </span></div>\r\n\t\t    <div ><span class=\"mat-list-text\" (click)=\"selectwire(group)\">wire : {{group.num_wire}} </span></div>\r\n\t\t    <div ><span class=\"mat-list-text\" (click)=\"selectface(group)\">face : {{group.num_face}} </span></div>\r\n\t\t    <div ><span class=\"mat-list-text\" (click)=\"selectobject(group)\">object : {{group.num_object}} </span><hr/></div>\r\n\t\t    <div class=\"mat-list-descr\" *ngFor=\"let prop of group.props\"><span >{{prop[0]}} : {{prop[1]}} </span></div>\r\n\t\t    <div *ngIf=\"group.child!==null\" >\r\n \t\t    \t<mat-accordion>\r\n\t\t\t  \t\t<mat-expansion-panel >\r\n\t\t\t  \t\t\t<mat-expansion-panel-header ><div class=\"mat-header\"><label id=\"groupname\">{{group.child.name}}</label></div></mat-expansion-panel-header>\r\n\t\t\t  \t\t\t<div class=\"mat-list-text-parent\"><span id=\"parent\">parent : {{group.child.parent}} </span><hr></div>\r\n\t\t\t  \t\t\t<div ><span class=\"mat-list-text\" (click)=\"selectpoint(group)\">point : {{group.child.num_point}} </span></div>\r\n\t\t\t\t\t    <div ><span class=\"mat-list-text\" (click)=\"selectvertice(group)\">vertice : {{group.child.num_vertice}} </span></div>\r\n\t\t\t\t\t    <div ><span class=\"mat-list-text\" (click)=\"selectedge(group)\">edge : {{group.child.num_edge}} </span></div>\r\n\t\t\t\t\t    <div ><span class=\"mat-list-text\" (click)=\"selectwire(group)\">wire : {{group.child.num_wire}} </span></div>\r\n\t\t\t\t\t    <div ><span class=\"mat-list-text\" (click)=\"selectface(group)\">face : {{group.child.num_face}} </span></div>\r\n\t\t\t\t\t    <div ><span class=\"mat-list-text\" (click)=\"selectobject(group)\">object : {{group.child.num_object}} </span><hr/></div>\r\n\t\t\t\t\t    <div class=\"mat-list-descr\" *ngFor=\"let prop of group.child.props\"><span >{{prop[0]}} : {{prop[1]}} </span></div>\r\n \t\t\t  \t\t</mat-expansion-panel>\r\n\t\t \t\t </mat-accordion>\r\n\t\t\t</div>\r\n \t\t</mat-expansion-panel>\r\n\t</mat-accordion>\r\n\t</div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Settings\" >\r\n  \t<div id=\"settingview\">\r\n  \t\t<input id=\"grid\" class=\"check\" #grid type=\"checkbox\" [checked]=\"gridVisible\" (click)=\"changegrid()\"> <label id=\"name\" value=\"gridVisible\">grid</label><br/>\r\n\t\t<input id=\"axis\" class=\"check\" type=\"checkbox\" [checked]=\"axisVisible\" (click)=\"changeaxis()\"> <label id=\"name\" value=\"axisVisible\">axis</label><br/>\r\n\t\t<input id=\"shadow\" class=\"check\"  type=\"checkbox\" [checked]=\"shadowVisible\" (click)=\"changeshadow()\"> <label id=\"name\" value=\"shadowVisible\">shadow</label><br/>\r\n\t\t<input id=\"frame\" class=\"check\" type=\"checkbox\" [checked]=\"frameVisible\" (click)=\"changeframe()\"> <label id=\"name\" value=\"frameVisible\">wireframe</label><br/>\r\n\t\t<input id=\"point\" class=\"check\" type=\"checkbox\" [checked]=\"pointVisible\" (click)=\"changepoint()\"> <label id=\"name\" value=\"pointVisible\">point</label><br/>\r\n\t\t<hr/><div  id=\"GridCenter\" >Grid Center<button (click)=\"getcenter()\" style=\"margin-left: 30px;width: 40px;height: 20px; font-family: sans-serif;font-size: 12px;\">Get</button></div><br/>\r\n\t\t<label class=\"name\" >XYZ</label><input type=\"text\" name=\"center\" id=\"centerx\" #centerx value={{_centerx}} (change)=changecenter(centerx.value,centery.value,centerz.value)><input type=\"text\" name=\"center\" #centery id=\"centery\" value={{_centery}} (change)=changecenter(centerx.value,centery.value,centerz.value)><input type=\"text\" name=\"center\"  #centerz id=\"centerz\" value={{_centerz}} (change)=changecenter(centerx.value,centery.value,centerz.value)><br/>\r\n\t\t<label class=\"name\" >Size</label><input type=\"text\" name=\"center\"  #size id=\"centersize\" value={{_centersize}} (change)=changecentersize(size.value)><br/>\r\n\t\t<hr/><div style=\"margin-left: 10px;\"><label  >Selection Settings:</label></div><!-- <br/> -->\r\n\t\t<div class=\"name\"><label >Line Precision</label></div><!-- <br/> -->\r\n  \t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class=\"name\" >Radius</label>&nbsp;<input type=\"text\" value={{_linepre}} #linetext (change)=\"changeline(linetext.value)\" style=\"width: 30px; \">&nbsp;<span>0</span>\r\n\r\n  \t\t<mat-slider class=\"slider\" name=\"range\" id=\"linerange\" min=0 max=1 step=0.01 thumbLabel=true value=\"_linepre\" #linepre (change)=\"changeline(linepre.value.toPrecision(2))\" >\r\n  \t\t</mat-slider>\r\n\r\n  \t\t<span>1</span><br/>\r\n  \t\t<div class=\"name\"><label>Points Precision</label></div><!-- <br/> -->\r\n  \t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class=\"name\" >Radius</label>&nbsp;<input type=\"text\" value={{_materialpoint}} #pointtext1 (change)=\"changeradius(pointtext1.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"sizerange\" min=0 max=5 step=0.1 thumbLabel=true value={{_materialpoint}} #pointsize1 (change)=\"changeradius(pointsize1.value.toPrecision(2))\" ></mat-slider><span>5</span><br/>\r\n  \t\t<!-- &nbsp;&nbsp;&nbsp;&nbsp;<label class=\"name\" >Selected</label>&nbsp;<input type=\"text\" value={{_pointsize}} #pointtext (change)=\"changepointsize(pointtext.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"sizerange\" min=0 max=5 step=0.1 thumbLabel=true value={{_pointsize}} #pointsize (change)=\"changepointsize(pointsize.value.toPrecision(2))\" ></mat-slider><span>5</span><br/> -->\r\n  \t\t<div class=\"name\"><label >Points Size</label></div><!-- <br/> -->\r\n  \t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class=\"name\" >Size</label>&nbsp;<input type=\"text\" value={{_pointsize}} #pointtext (change)=\"changepointsize(pointtext.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"sizerange\" min=0 max=5 step=0.1 thumbLabel=true value={{_pointsize}} #pointsize (change)=\"changepointsize(pointsize.value.toPrecision(2))\" ></mat-slider><span>5</span><br/><!-- <input type=\"text\" value={{_materialpoint}} #pointtext1 (change)=\"changematerialpoint(pointtext1.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"sizerange\" min=0 max=5 step=0.1 thumbLabel=true value={{_pointsize1}} #pointsize1 (change)=\"changematerialpoint(pointsize1.value.toPrecision(2))\" ></mat-slider><span>5</span><br/> -->\r\n  \t\t<hr/><label class=\"name\" >Hemisphere Light</label>&nbsp;&nbsp;<br/>\r\n\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class=\"name\" >Hue</label>&nbsp;\r\n\t\t<input type=\"text\" value={{hue}} #huetext (change)=\"changelight(huetext.value,slider1.value,slider2.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"huerange\" min=0 max=1 step=0.01 thumbLabel=true value={{hue}} #slider (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><span>1</span><br/>\r\n\t\t&nbsp;<label class=\"name\" >Saturation</label>&nbsp;\r\n\t\t<input type=\"text\" value={{saturation}} #satutext (change)=\"changelight(slider.value,satutext.value,slider2.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"satrange\" min=0 max=1 step=0.01 thumbLabel=true value={{saturation}} #slider1 (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><span>1</span><br/>\r\n\t\t&nbsp;&nbsp;<label class=\"name\" >Lightness</label>&nbsp;\r\n\t\t<input type=\"text\" value={{lightness}} #lighttext (change)=\"changelight(slider.value,slider1.value,lighttext.value)\" style=\"width: 30px; \">&nbsp;<span>0</span><mat-slider class=\"slider\" name=\"range\" id=\"lirange\" min=0 max=1 step=0.01 thumbLabel=true value={{lightness}} #slider2 (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><span>1</span><br/>\r\n  \t</div>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gs-viewer/toolwindow/groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_DataSubscriber__ = __webpack_require__("./src/app/gs-viewer/data/DataSubscriber.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gs_json__ = __webpack_require__("./node_modules/gs-json/dist2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gs_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_gs_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*import {MatTabsModule} from '@angular/material/tabs';*/
let GroupsComponent = class GroupsComponent extends __WEBPACK_IMPORTED_MODULE_2__data_DataSubscriber__["a" /* DataSubscriber */] {
    constructor(injector, myElement) {
        super(injector);
        this.scene = this.dataService.getScene();
        this.renderer = this.dataService.getRenderer();
        this.camera = this.dataService.getCamera();
        this.myElement = myElement;
        this._centerx = this.dataService.centerx;
        this._centery = this.dataService.centery;
        this._centerz = this.dataService.centerz;
        this._centersize = this.dataService.centersize;
        this.raycaster = this.dataService.getraycaster();
        this._pointsize = this.dataService.pointsize;
        this._materialpoint = this.dataService.pointradius;
        this.alight = this.dataService.getalight();
        this.hue = this.dataService.hue;
        this.saturation = this.dataService.saturation;
        this.lightness = this.dataService.lightness;
    }
    ngOnInit() {
        this.model = this.dataService.getGsModel();
        this.updateModel();
        this.gridVisible = this.dataService.grid;
        this.axisVisible = this.dataService.axis;
        this.shadowVisible = this.dataService.shadow;
        this.frameVisible = this.dataService.frame;
        this.pointVisible = this.dataService.point;
        if (this._centerx === undefined || this._centerx === 0) {
            this._centerx = 0;
        }
        else {
            this._centerx = this.dataService.centerx;
        }
        if (this._centery === undefined || this._centery === 0) {
            this._centery = 0;
        }
        else {
            this._centery = this.dataService.centery;
        }
        if (this._centerz === undefined || this._centerz === 0) {
            this._centerz = 0;
        }
        else {
            this._centerz = this.dataService.centerz;
        }
        if (this._centersize === undefined || this._centersize === 100) {
            this._centersize = 100;
        }
        else {
            this._centersize = this.dataService.centersize;
        }
        this.raycaster = this.dataService.getraycaster();
        if (this._linepre === undefined || this._linepre === 0.05) {
            this._linepre = 0.05;
        }
        else {
            this._linepre = this.raycaster.linePrecision;
        }
        if (this._pointsize === undefined || this._pointsize === 1) {
            this._pointsize = 1;
        }
        else {
            this._pointsize = this.dataService.pointsize;
        }
        if (this._materialpoint === undefined || this._materialpoint === 0.1) {
            this._materialpoint = 0.1;
        }
        else {
            this._materialpoint = this.dataService.pointradius;
        }
        if (this.hue === undefined || this.hue === 0) {
            this.hue = 0;
        }
        else {
            this.hue = this.dataService.hue;
        }
        if (this.saturation === undefined || this.saturation === 0.01) {
            this.saturation = 0.01;
        }
        else {
            this.saturation = this.dataService.saturation;
        }
        if (this.lightness == undefined || this.lightness === 0.47) {
            this.lightness = 0.47;
        }
        else {
            this.lightness = this.dataService.lightness;
        }
    }
    notify(message) {
        if (message == "model_update" && this.scene) {
            this.ngOnInit();
        }
    }
    updateModel() {
        if (this.model !== undefined) {
            try {
                this.scene_and_maps = this.dataService.getscememaps();
                this.getgroupname();
            }
            catch (ex) {
                console.error("Error displaying model:", ex);
            }
        }
    }
    animate(self) {
    }
    changegrid() {
        this.gridVisible = !this.gridVisible;
        if (this.gridVisible) {
            let gridhelper = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](this._centersize, 10);
            gridhelper.name = "GridHelper";
            let vector = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](0, 1, 0);
            gridhelper.lookAt(vector);
            gridhelper.position.set(this._centerx, this._centery, this._centerz);
            this.scene.add(gridhelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("GridHelper"));
        }
        this.renderer.render(this.scene, this.camera);
        this.dataService.addgrid(this.gridVisible);
    }
    changepoint() {
        this.pointVisible = !this.pointVisible;
        let children = [];
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                for (var j = 0; j < this.scene.children[i].children.length; j++) {
                    if (this.scene.children[i].children[j].type === "Points") {
                        children.push(this.scene.children[i].children[j]);
                    }
                }
            }
        }
        if (this.pointVisible) {
            for (var i = 0; i < children.length; i++) {
                children[i]["material"].transparent = false;
                children[i]["material"].opacity = 1;
            }
        }
        else {
            for (var i = 0; i < children.length; i++) {
                children[i]["material"].transparent = true;
                children[i]["material"].opacity = 0;
            }
        }
        this.renderer.render(this.scene, this.camera);
        this.dataService.addpoint(this.pointVisible);
    }
    changeaxis() {
        this.axisVisible = !this.axisVisible;
        if (this.axisVisible) {
            let axishelper = new __WEBPACK_IMPORTED_MODULE_0_three__["AxisHelper"](10);
            axishelper.name = "AxisHelper";
            this.scene.add(axishelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("AxisHelper"));
        }
        this.renderer.render(this.scene, this.camera);
        this.dataService.addaxis(this.axisVisible);
    }
    changeshadow() {
        this.shadowVisible = !this.shadowVisible;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "DirectionalLight") {
                if (this.shadowVisible) {
                    this.scene.children[i].castShadow = true;
                }
                else {
                    this.scene.children[i].castShadow = false;
                }
            }
        }
        this.renderer.render(this.scene, this.camera);
        this.dataService.addshadow(this.shadowVisible);
    }
    changeframe() {
        this.frameVisible = !this.frameVisible;
        if (this.frameVisible) {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].type === "Scene") {
                    if (this.scene.children[i].children[0].type === "Mesh") {
                        this.scene.children[i].children[0].visible = false;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].type === "Scene") {
                    if (this.scene.children[i].children[0].type === "Mesh") {
                        this.scene.children[i].children[0].visible = true;
                    }
                }
            }
        }
        this.renderer.render(this.scene, this.camera);
        this.dataService.addframe(this.frameVisible);
    }
    changecenter(centerx, centery, centerz) {
        if (this.gridVisible) {
            let gridhelper = this.scene.getObjectByName("GridHelper");
            gridhelper.position.set(centerx, centery, centerz);
            this._centerx = centerx;
            this._centery = centery;
            this._centerz = centerz;
            this.dataService.getcenterx(centerx);
            this.dataService.getcentery(centery);
            this.dataService.getcenterz(centerz);
        }
        this.renderer.render(this.scene, this.camera);
    }
    changecentersize(centersize) {
        if (this.gridVisible) {
            this._centersize = centersize;
            this.scene.remove(this.scene.getObjectByName("GridHelper"));
            let gridhelper = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](centersize, centersize);
            gridhelper.name = "GridHelper";
            let vector = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](0, 1, 0);
            gridhelper.lookAt(vector);
            gridhelper.position.set(this._centerx, this._centery, this._centerz);
            this.scene.add(gridhelper);
            this.dataService.getcentersize(centersize);
        }
        this.renderer.render(this.scene, this.camera);
    }
    getcenter() {
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                for (var j = 0; j < this.scene.children[i].children.length; j++) {
                    if (this.scene.children[i].children[j].name === "All points") {
                        let center = this.scene.children[i].children[j]["geometry"].boundingSphere.center;
                        let radius = this.scene.children[i].children[j]["geometry"].boundingSphere.radius;
                        let max = Math.ceil(radius + Math.max(Math.abs(center.x), Math.abs(center.y), Math.abs(center.z))) * 2;
                        this._centerx = center.x;
                        this._centery = center.y;
                        this._centerz = center.z;
                        this._centersize = max;
                    }
                }
            }
        }
        this.scene.remove(this.scene.getObjectByName("GridHelper"));
        let gridhelper = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](this._centersize, 10);
        gridhelper.name = "GridHelper";
        let vector = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](0, 1, 0);
        gridhelper.lookAt(vector);
        gridhelper.position.set(this._centerx, this._centery, this._centerz);
        this.scene.add(gridhelper);
        this.dataService.getcenterx(this._centerx);
        this.dataService.getcentery(this._centery);
        this.dataService.getcenterz(this._centerz);
        this.dataService.getcentersize(this._centersize);
        this.renderer.render(this.scene, this.camera);
    }
    //chiange line precision
    changeline(lineprecision) {
        this._linepre = lineprecision;
        this.raycaster = this.dataService.getraycaster();
        this.raycaster.linePrecision = lineprecision;
        this.dataService.addraycaster(this.raycaster);
        if (this.dataService.SelectVisible === 'Edges' || this.dataService.SelectVisible === 'Wires') {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].name === "sphereInter") {
                    let geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["SphereGeometry"](lineprecision * 2);
                    this.scene.children[i]["geometry"] = geometry;
                }
            }
        }
        this.renderer.render(this.scene, this.camera);
    }
    //change points size
    changepointsize(pointsize) {
        this._pointsize = pointsize;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "Scene") {
                for (var j = 0; j < this.scene.children[i].children.length; j++) {
                    if (this.scene.children[i].children[j].name === "All points") {
                        this.scene.children[i].children[j]["material"].size = pointsize * 10;
                    }
                }
            }
            if (this.scene.children[i].name === "selects" && this.scene.children[i].type === "Points") {
                this.scene.children[i]["material"].size = pointsize;
            }
        }
        this.renderer.render(this.scene, this.camera);
        this.dataService.getpointsize(pointsize);
        //this.dataService.getmaterialpoint(pointsize);
    }
    //change radius
    changeradius(point) {
        this._materialpoint = point;
        if (this.dataService.SelectVisible !== 'Edges' && this.dataService.SelectVisible !== 'Wires') {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].name === "sphereInter") {
                    let geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["SphereGeometry"](point / 4);
                    this.scene.children[i]["geometry"] = geometry;
                }
            }
        }
        this.renderer.render(this.scene, this.camera);
        this.dataService.getradius(point);
    }
    changelight(_hue, _saturation, _lightness) {
        this.hue = _hue;
        this.saturation = _saturation;
        this.lightness = _lightness;
        let alight = this.alight;
        this.dataService.gethue(_hue);
        this.dataService.getsaturation(_saturation);
        this.dataService.getlightness(_lightness);
        this.alight.color.setHSL(_hue, _saturation, _lightness);
        this.renderer.render(this.scene, this.camera);
    }
    getgroupname() {
        this.groups = [];
        const allgroup = this.model.getAllGroups();
        for (var i = 0; i < allgroup.length; i++) {
            let group = {};
            group.parent = allgroup[i].getParentGroup().getName();
            group.props = allgroup[i].getProps();
            group.name = allgroup[i].getName();
            group.num_point = allgroup[i].getPoints().length;
            group.points = allgroup[i].getPoints();
            group.num_vertice = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].vertices).length;
            group.vertices = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].vertices);
            group.num_edge = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].edges).length;
            group.edges = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].edges);
            group.num_wire = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].wires).length;
            group.wires = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].wires);
            group.num_face = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].faces).length;
            group.faces = allgroup[i].getTopos(__WEBPACK_IMPORTED_MODULE_3_gs_json__["EGeomType"].faces);
            group.num_object = allgroup[i].getObjs().length;
            group.objects = allgroup[i].getObjs();
            group.child = null;
            this.groups.push(group);
        }
        this.addchildren();
        //this.renderer.render(this.scene, this.camera);
    }
    addchildren() {
        for (var i = 0; i < this.groups.length; i++) {
            if (this.groups[i].parent !== null) {
                for (var j = 0; j < this.groups.length; j++) {
                    if (this.groups[i].parent === this.groups[j].name) {
                        this.groups[j].child = this.groups[i];
                    }
                }
            }
        }
    }
    selectpoint(group) {
        if (group.point !== 0 || group.child.num_point !== 0) {
            let pointinitial = false;
            let grouppoints;
            ;
            if (group.point !== 0) {
                grouppoints = group.points;
                for (var j = 0; j < this.scene.children.length; j++) {
                    for (var i = 0; i < grouppoints.length; i++) {
                        if (grouppoints[i].getLabel() === this.scene.children[j].userData.id) {
                            pointinitial = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                }
            }
            if (group.child.num_point !== 0) {
                grouppoints = group.child.points;
                for (var j = 0; j < this.scene.children.length; j++) {
                    for (var i = 0; i < grouppoints.length; i++) {
                        if (grouppoints[i].getLabel() === this.scene.children[j].userData.id) {
                            pointinitial = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                }
            }
            if (pointinitial === false) {
                for (var i = 0; i < grouppoints.length; i++) {
                    let point = {};
                    let label = grouppoints[i].getLabel();
                    //let id:string=grouppoints[i]._id;
                    let id = grouppoints[i].getID();
                    let verts_xyz = grouppoints[i].getLabelCentroid();
                    let geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
                    geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](verts_xyz[0], verts_xyz[1], verts_xyz[2]));
                    let pointsmaterial = new __WEBPACK_IMPORTED_MODULE_0_three__["PointsMaterial"]({ color: 0x00ff00, size: 2 });
                    if (this.dataService.pointsize !== undefined) {
                        pointsmaterial.size = this.dataService.pointsize;
                    }
                    let points = new __WEBPACK_IMPORTED_MODULE_0_three__["Points"](geometry, pointsmaterial);
                    points.userData.id = label;
                    points["material"].needsUpdate = true;
                    points.name = "selects";
                    this.scene.add(points);
                    point.label = label;
                    point.id = id;
                    point.label_xyz = verts_xyz;
                    point.path = id;
                    point.type = "All points";
                }
            }
        }
    }
    selectvertice(group) {
        if (group.vertice !== 0) {
            let vertixinitial = false;
            let groupvertices = group.vertices;
            for (var j = 0; j < this.scene.children.length; j++) {
                for (var i = 0; i < groupvertices.length; i++) {
                    if (groupvertices[i].getLabel() === this.scene.children[j].userData.id) {
                        vertixinitial = true;
                        this.scene.remove(this.scene.children[j]);
                    }
                }
            }
            if (vertixinitial === false) {
                for (var i = 0; i < groupvertices.length; i++) {
                    let point = [];
                    let label = groupvertices[i].getLabel();
                    let id = groupvertices[i].getPoint().getID();
                    let verts_xyz = groupvertices[i].getLabelCentroid();
                    let geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
                    geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](verts_xyz[0], verts_xyz[1], verts_xyz[2]));
                    let pointsmaterial = new __WEBPACK_IMPORTED_MODULE_0_three__["PointsMaterial"]({ color: 0x00ff00, size: 2 });
                    if (this.dataService.pointsize !== undefined) {
                        pointsmaterial.size = this.dataService.pointsize;
                    }
                    let points = new __WEBPACK_IMPORTED_MODULE_0_three__["Points"](geometry, pointsmaterial);
                    points.userData.id = label;
                    points["material"].needsUpdate = true;
                    points.name = "selects";
                    this.scene.add(points);
                    point.label = label;
                    point.id = id;
                    point.label_xyz = verts_xyz;
                    point.path = id;
                    point.type = "All points";
                }
            }
        }
    }
    selectedge(group) {
        if (group.edge !== 0) {
            let edgeinitial = false;
            let groupedges = group.edges;
            for (var j = 0; j < this.scene.children.length; j++) {
                for (var i = 0; i < groupedges.length; i++) {
                    if (groupedges[i].getLabel() === this.scene.children[j].userData.id) {
                        edgeinitial = true;
                        this.scene.remove(this.scene.children[j]);
                    }
                }
            }
            if (edgeinitial === false) {
                for (var i = 0; i < groupedges.length; i++) {
                    let edge = [];
                    let label = groupedges[i].getLabel();
                    let id = groupedges[i].getLabel();
                    let label_xyz = groupedges[i].getLabelCentroid();
                    let verts = groupedges[i].getVertices();
                    let verts_xyz = verts.map((v) => v.getPoint().getPosition());
                    let geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                    }
                    let material = new __WEBPACK_IMPORTED_MODULE_0_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_0_three__["DoubleSide"] });
                    let line = new __WEBPACK_IMPORTED_MODULE_0_three__["Line"](geometry, material);
                    line.userData.id = edge.getLabel();
                    line["material"].needsUpdate = true;
                    line.name = "selects";
                    this.scene.add(line);
                }
            }
        }
    }
    selectwire(group) {
        if (group.wire !== 0) {
            let groupwires = group.wires;
            let wireinitial = false;
            for (var j = 0; j < this.scene.children.length; j++) {
                for (var i = 0; i < groupwires.length; i++) {
                    if (groupwires[i].getLabel() === this.scene.children[j].userData.id) {
                        wireinitial = true;
                        this.scene.remove(this.scene.children[j]);
                    }
                }
            }
            if (wireinitial === false) {
                for (var i = 0; i < groupwires.length; i++) {
                    let wire = [];
                    let label = groupwires[i].getLabel();
                    let label_xyz = groupwires[i].getLabelCentroid();
                    let verts = groupwires[i].getVertices();
                    let verts_xyz = verts.map((v) => v.getPoint().getPosition());
                    if (groupwires[i].isClosed()) {
                        verts_xyz.push(verts_xyz[0]);
                    }
                    let geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                    }
                    let material = new __WEBPACK_IMPORTED_MODULE_0_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_0_three__["DoubleSide"] });
                    let line = new __WEBPACK_IMPORTED_MODULE_0_three__["Line"](geometry, material);
                    line.userData.id = label;
                    line["material"].needsUpdate = true;
                    line.name = "selects";
                    this.scene.add(line);
                }
            }
        }
    }
    selectface(group) {
        if (group.face !== 0) {
            let groupfaces = group.faces;
            let faceinitial = false;
            for (var j = 0; j < this.scene.children.length; j++) {
                for (var i = 0; i < groupfaces.length; i++) {
                    if (groupfaces[i].getLabel() === this.scene.children[j].userData.id) {
                        faceinitial = true;
                        this.scene.remove(this.scene.children[j]);
                    }
                }
            }
            if (faceinitial === false) {
                for (var i = 0; i < groupfaces.length; i++) {
                    let face = [];
                    let label = groupfaces[i].getLabel();
                    let label_xyz = face.getLabelCentroid();
                    let verts = face.getVertices();
                    let verts_xyz = verts.map((v) => v.getPoint().getPosition());
                    let geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                    }
                    let material = new __WEBPACK_IMPORTED_MODULE_0_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_0_three__["DoubleSide"] });
                    let line = new __WEBPACK_IMPORTED_MODULE_0_three__["Line"](geometry, material);
                    line.userData.id = face.getLabel();
                    line["material"].needsUpdate = true;
                    line.name = "selects";
                    this.scene.add(line);
                }
            }
        }
    }
    selectobject(group) {
        if (group.face !== 0) {
            this.selectface(group);
        }
        else if (group.wire !== 0) {
            this.selectwire(group);
        }
        else if (group.edge !== 0) {
            this.selectedge(group);
        }
        else if (group.point !== 0) {
            this.selectpoint(group);
        }
    }
};
GroupsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'app-groups',
        template: __webpack_require__("./src/app/gs-viewer/toolwindow/groups.component.html"),
        styles: [__webpack_require__("./src/app/gs-viewer/toolwindow/groups.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */]])
], GroupsComponent);



/***/ }),

/***/ "./src/app/gs-viewer/toolwindow/toolwindow.component.css":
/***/ (function(module, exports) {

module.exports = "#toolwindow{\r\n  background-color:white;\r\n  font-family:sans-serif;\r\n  width: 100%;\r\n  position:relative;\r\n}\r\n#gsattri-bar{\r\n  background-color: #f1f1f1 !important;\r\n  position:relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  width: 100%;\r\n}\r\n#toolbar{\r\n  background-color: #f1f1f1 !important;\r\n  width: 48%;\r\n  height: 30px;\r\n  margin:0px;\r\n  overflow: hidden !important;\r\n  font-family:sans-serif;\r\n  position: relative !important;\r\n}\r\n#pagination{\r\n  width: 48%;\r\n  height: 30px;\r\n  position: relative ;\r\n  top:unset !important;\r\n  margin: 0px;\r\n  background-color: #f1f1f1 !important;\r\n}\r\n.table_ojbs{\r\n  table-layout:fixed;\r\n  overflow-x: scroll !important;\r\n  font-family:sans-serif;\r\n}\r\n.Number{\r\n  overflow:hidden; \r\n  white-space:nowrap; \r\n}\r\n#toolview{\r\n  position:relative;\r\n  margin-top: 0px;\r\n  width: 100%;\r\n  float: left;\r\n}\r\n#selectedname{\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n}\r\n#gsv-point{\r\n  margin-left:25px;\r\n}\r\n#gsv-selected{\r\n  margin-left:30px;\r\n}\r\n.gsv-toolbar{\r\n  font-size:15px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n  padding-top:1px;\r\n  padding-right: 6px;\r\n  padding-bottom: 1px;\r\n  padding-left: 6px;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  text-align: center;\r\n  cursor: default;\r\n  color: unset;\r\n  margin-right: 0px;\r\n  margin-left: 0px;\r\n  margin-bottom: 1px;\r\n  margin-top: 1px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  border-width: unset;\r\n  border-style: unset;\r\n  border-color: unset;\r\n  -o-border-image: unset;\r\n     border-image: unset;\r\n}\r\n.visible{\r\n  background-color: white !important;\r\n  color:#395d73;\r\n}\r\n.selectvisible{\r\n  background-color:  white !important;\r\n  color:#395d73;\r\n}\r\n#table{\r\n  width:100% ;\r\n  height: 15px;\r\n}\r\n#tablename{\r\n  width:100% ;\r\n  height: 15px;\r\n  color:grey;\r\n}\r\n#numberbutton{\r\n  width:100%;\r\n  border:0;\r\n}\r\n#attrib{\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n/*.selectid{\r\n  background-color:#66CCFF;\r\n}*/\r\n#select{\r\n  position: relative;\r\n  float:right;\r\n  margin-right: 30px;\r\n}\r\n.my-pagination /deep/ .ngx-pagination{\r\n  margin:0px !important;\r\n  color:black !important;\r\n  float: right;\r\n  margin-right:20px !important;\r\n}\r\n.my-pagination /deep/ .ngx-pagination .current {\r\n  margin-top:0px;\r\n  color:black;\r\n  background-color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/gs-viewer/toolwindow/toolwindow.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"toolwindow\">\r\n  <div id=\"gsattri-bar\" >\r\n  <div id=\"toolbar\">\r\n    <div style=\"width: 350px;position: relative;\">\r\n    <button id=\"gsv-point\" class=\"gsv-toolbar\" [class.visible]=\"Visible === 'Points'\" (click)=\"point(Visible)\"><span matTooltip=\"View Point Attributes\">P</span></button>\r\n    <button id=\"gsv-vertice\" class=\"gsv-toolbar\" [class.visible]=\"Visible === 'Vertices'\" (click)=\"vertice(Visible)\"><span matTooltip=\"View Vertice Attributes\">V</span></button>\r\n    <button id=\"gsv-edge\" class=\"gsv-toolbar\" [class.visible]=\"Visible === 'Edges'\" (click)=\"edge(Visible)\"><span matTooltip=\"View Edge Attributes\">E</span></button>\r\n    <button id=\"gsv-wire\" class=\"gsv-toolbar\" [class.visible]=\"Visible === 'Wires'\" (click)=\"wire(Visible)\"><span matTooltip=\"View Wire Attributes\">W</span></button>\r\n    <button id=\"gsv-face\" class=\"gsv-toolbar\" [class.visible]=\"Visible === 'Faces'\" (click)=\"face(Visible)\"><span matTooltip=\"View Face Attributes\">F</span></button>\r\n    <button id=\"gsv-object\" class=\"gsv-toolbar\" [class.visible]=\"Visible === 'Objs'\" (click)=\"object(Visible)\"><span matTooltip=\"View Object Attributes\">O</span></button>\r\n    <input id=\"gsv-selected\" class=\"gsv-toolbar\" type=\"checkbox\" (click)=\"changeselected()\">\r\n    <label id=\"selectedname\" value=\"selected\">Show selected only</label>\r\n  </div>\r\n  </div>\r\n  <div id=\"pagination\" >\r\n    <pagination-controls *ngIf=\"Visible === 'Points'\" class=\"my-pagination\" (pageChange)=\"p1 = $event\"></pagination-controls> \r\n    <pagination-controls *ngIf=\"Visible === 'Vertices'\" class=\"my-pagination\" (pageChange)=\"p2 = $event\"></pagination-controls> \r\n    <pagination-controls *ngIf=\"Visible === 'Edges'\" class=\"my-pagination\" (pageChange)=\"p3 = $event\"></pagination-controls> \r\n    <pagination-controls *ngIf=\"Visible === 'Wires'\" class=\"my-pagination\" (pageChange)=\"p4 = $event\"></pagination-controls> \r\n    <pagination-controls *ngIf=\"Visible === 'Faces'\" class=\"my-pagination\" (pageChange)=\"p5 = $event\"></pagination-controls>\r\n    <pagination-controls *ngIf=\"Visible === 'Objs'\" class=\"my-pagination\" (pageChange)=\"p6 = $event\"></pagination-controls>  \r\n  </div>\r\n</div>\r\n  <div id=\"toolview\">\r\n    <div *ngIf=\"Visible === 'Points'\">\r\n      <table matSort border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" (matSortChange)=\"sortData($event)\">\r\n        <tr>\r\n          <th mat-sort-header=\"id\" align=center width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >Points ID <input type=\"checkbox\" id=\"id\" class=\"checkbox\" style=\"float:right\" [checked]=\"checkpointid\" (click)=\"checkbox()\"></div></th>\r\n          <th mat-sort-header=\"x\" width=\"180px\" align=center><div style=\"width:180px;word-wrap:break-word;\" >X<input type=\"checkbox\" style=\"float:right\" id=\"X\"  class=\"checkbox\" [checked]=\"checkX\" (click)=\"checkbox()\"></div></th>\r\n          <th mat-sort-header=\"y\" width=\"180px\" align=center><div style=\"width:180px;word-wrap:break-word;\" >Y<input type=\"checkbox\" style=\"float:right\" id=\"Y\" class=\"checkbox\" [checked]=\"checkY\" (click)=\"checkbox()\"></div></th>\r\n          <th mat-sort-header=\"z\" width=\"180px\" align=center><div style=\"width:180px;word-wrap:break-word;\" >Z<input type=\"checkbox\" style=\"float:right\" id=\"Z\" class=\"checkbox\" [checked]=\"checkZ\" (click)=\"checkbox()\"></div></th>\r\n          <th mat-sort-header={{name}} align=center width=\"180px\" class=\"checkbox\" *ngFor=\"let name of point_name;let idx=index\"><div style=\"width:180px;word-wrap:break-word;\" >{{name}}<input type=\"checkbox\" id={{name}} style=\"float:right\" (click)=\"checkbox()\"></div></th>\r\n      <!-- </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p1 }\"> -->\r\n        <tr  *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p1 }\">\r\n          <td name=\"Number\" align=center  width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" ><button width=\"180px\" id=\"numberbutton\" (click)=Onselect(datascale)>{{datascale.id}}</button></div></td>\r\n          <td width=\"180px\" align=center><div style=\"width:180px;word-wrap:break-word;\" >{{datascale.x}}</div></td>\r\n          <td width=\"180px\" align=center><div style=\"width:180px;word-wrap:break-word;\" >{{datascale.y}}</div></td>\r\n          <td width=\"180px\" align=center><div style=\"width:180px;word-wrap:break-word;\" >{{datascale.z}}</div></td>\r\n          <td  id=\"attrib\" width=\"180px\" align=center *ngFor=\"let name of point_name; let idx=index\"><div style=\"width:180px;word-wrap:break-word;\" >{{datascale[idx]}}</div></td> \r\n        <tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Vertices'\">\r\n      <table matSort border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" (matSortChange)=\"sortData($event)\">\r\n        <tr>\r\n          <th mat-sort-header=\"vertixlabel\" align=center width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >Vertices Label<input type=\"checkbox\" id=\"vertixid\" style=\"float:right\" [checked]=\"vertixid\" (click)=\"checkbox()\"></div></th>\r\n          <th mat-sort-header=\"pointid\" align=center width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >Points ID<input type=\"checkbox\" id=\"pointid\" style=\"float:right\"  [checked]=\"pointid\" (click)=\"checkbox()\"></div></th>\r\n          <th mat-sort-header={{name}} align=center width=\"180px\" *ngFor=\"let name of vertex_name\"><div style=\"width:180px;word-wrap:break-word;\" >{{name}}<input type=\"checkbox\" id={{name}} style=\"float:right\" (click)=\"checkbox()\"></div></th>\r\n        </tr>\r\n      <!-- </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p2 }\"> -->\r\n        <tr *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p2 }\">\r\n          <td name=\"Number\" align=center  width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" ><button  id=\"numberbutton\">{{datascale.vertixlabel}}</button></div></td>\r\n          <td  align=center  width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >{{datascale.pointid}}</div></td>\r\n          <td  id=\"attrib\" width=\"180px\" align=center *ngFor=\"let name of vertex_name; let idx=index\"><div style=\"width:180px;word-wrap:break-word;\" >{{datascale[idx]}}</div></td> \r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Edges'\">\r\n      <table matSort border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" (matSortChange)=\"sortData($event)\">\r\n        <tr>\r\n          <th mat-sort-header=\"label\" align=center width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >Edge ID<input type=\"checkbox\" style=\"float:right\" id=\"edgeid\" (click)=\"checkbox()\"></div></th>\r\n          <th mat-sort-header={{name}} align=center width=\"180px\" *ngFor=\"let name of edge_name\"><div style=\"width:180px;word-wrap:break-word;\" >{{name}}<input type=\"checkbox\" style=\"float:right\" id={{name}} (click)=\"checkbox()\"></div></th> \r\n        </tr>\r\n      <!--</table>\r\n       <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p3 }\" > -->\r\n        <tr *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p3 }\">\r\n          <td name=\"Number\" align=center  width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" ><button  id=\"numberbutton\">{{datascale.label}}</button></div></td>\r\n          <td  id=\"attrib\" width=\"180px\" align=center *ngFor=\"let name of edge_name; let idx=index\"><div style=\"width:180px;word-wrap:break-word;\" >{{datascale[idx]}}</div></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Wires'\">\r\n      <table matSort border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" (matSortChange)=\"sortData($event)\">\r\n        <tr>\r\n          <th mat-sort-header=\"label\" align=center width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >Wire ID<input type=\"checkbox\" style=\"float:right\" (click)=\"checkbox()\"></div></th>\r\n          <th mat-sort-header={{name}} align=center width=\"180px\" *ngFor=\"let name of wire_name\"><div style=\"width:180px;word-wrap:break-word;\" >{{name}}<input type=\"checkbox\" style=\"float:right\" id={{name}} (click)=\"checkbox()\"></div></th> \r\n        </tr>\r\n      <!-- </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p4 }\" > -->\r\n        <tr *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p4 }\">\r\n          <td name=\"Number\" align=center  width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" ><button  id=\"numberbutton\">{{datascale.label}}</button></div></td>\r\n          <td  id=\"attrib\" width=\"180px\" align=center *ngFor=\"let name of wire_name; let idx=index\"><div style=\"width:180px;word-wrap:break-word;\" >{{datascale[idx]}}</div></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Faces'\">\r\n      <table matSort border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" (matSortChange)=\"sortData($event)\">\r\n        <tr>\r\n          <th mat-sort-header=\"label\" align=center width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >Face ID<input type=\"checkbox\" style=\"float:right\" id=\"checkface\" [checked]=\"checkface\" (click)=\"checkbox()\"></div></th>\r\n          <th mat-sort-header={{name}} align=center width=\"180px\" *ngFor=\"let name of face_name\"><div style=\"width:180px;word-wrap:break-word;\" >{{name}}<input type=\"checkbox\" style=\"float:right\" id={{name}} (click)=\"checkbox()\"></div></th> \r\n        </tr>\r\n      <!-- </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p5 }\" > -->\r\n        <tr *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p5 }\">\r\n          <td name=\"Number\" align=center  width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" ><button  id=\"numberbutton\">{{datascale.label}}</button></div></td>\r\n          <td  id=\"attrib\" width=\"180px\" align=center *ngFor=\"let name of face_name; let idx=index\"><div style=\"width:180px;word-wrap:break-word;\" >{{datascale[idx]}}</div></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Objs'\">\r\n      <table matSort border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" class=\"table_ojbs\" (matSortChange)=\"sortData($event)\">\r\n        <tr>\r\n          <th mat-sort-header=\"label\" name=\"Number\" align=center width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" >Object ID<input type=\"checkbox\" style=\"float:right\" id=\"checkobj\" [checked]=\"checkobj\" (click)=\"checkbox()\"></div></th>\r\n          <th mat-sort-header={{name}} align=center width=\"180px\" *ngFor=\"let name of obj_name\" ><div style=\"width:180px;word-wrap:break-word;\" >{{name}}<input type=\"checkbox\" style=\"float:right\" (click)=\"checkbox()\"></div></th>\r\n        </tr>\r\n      <!-- </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p6 } \" class=\"table_ojbs\" > -->\r\n        <tr *ngFor=\"let datascale of attribute| paginate: { itemsPerPage: 50, currentPage: p6 } \">\r\n          <td name=\"Number\" align=center  width=\"180px\"><div style=\"width:180px;word-wrap:break-word;\" ><button  id=\"numberbutton\">{{datascale.label}}</button></div></td>\r\n          <td  id=\"attrib\" width=\"180px\" align=center *ngFor=\"let name of obj_name; let idx=index\"><div style=\"width:180px;word-wrap:break-word;\" >{{datascale[idx]}}</div></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/gs-viewer/toolwindow/toolwindow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolwindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gs_json__ = __webpack_require__("./node_modules/gs-json/dist2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gs_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gs_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_DataSubscriber__ = __webpack_require__("./src/app/gs-viewer/data/DataSubscriber.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ToolwindowComponent = class ToolwindowComponent extends __WEBPACK_IMPORTED_MODULE_3__data_DataSubscriber__["a" /* DataSubscriber */] {
    constructor(injector, myElement) {
        super(injector);
        this.Visible = "Objs";
        this.scene = this.dataService.getScene();
        this.renderer = this.dataService.getRenderer();
        this.camera = this.dataService.getCamera();
        this.selectedVisible = false;
        this.attribute = [];
        this.selectObj = [];
        this.checkname = [];
        this.myElement = myElement;
    }
    ngOnInit() {
        this.model = this.dataService.getGsModel();
        this.Visible = this.dataService.visible;
        this.updateModel();
    }
    notify(message) {
        if (message == "model_update" && this.scene) {
            //this.updateModel();
            this.ngOnInit();
        }
        this.selectObj = [];
        for (var i = 0; i < this.dataService.selecting.length; i++) {
            for (var n = 0; n < this.scene.children.length; n++) {
                if (this.scene.children[n].type === "Scene") {
                    if (this.dataService.selecting[i].uuid === this.scene.children[n].children[0].uuid) {
                        this.selectObj.push(this.scene.children[n].children[0].parent);
                    }
                }
            }
        }
        if (this.selectedVisible == true) {
            if (this.Visible === "Objs")
                this.objectcheck();
            if (this.Visible === "Faces")
                this.facecheck();
            if (this.Visible === "Wires")
                this.wirecheck();
            if (this.Visible === "Edges")
                this.edgecheck();
            if (this.Visible === "Vertices")
                this.verticecheck();
            if (this.Visible === "Points")
                this.pointcheck();
        }
    }
    updateModel() {
        if (this.model !== undefined) {
            try {
                this.scene_and_maps = this.dataService.getscememaps();
                this.object(this.Visible);
                this.getvertices();
            }
            catch (ex) {
                console.error("Error displaying model:", ex);
            }
        }
    }
    getpoints() {
        var attrubtepoints = [];
        this.point_name = [];
        if (this.scene_and_maps !== undefined) {
            if (this.scene_and_maps.points_map !== null && this.scene_and_maps.points_map.size !== 0 && this.scene_and_maps.points_map !== undefined) {
                const point_attribs = this.model.findAttribs(__WEBPACK_IMPORTED_MODULE_2_gs_json__["EGeomType"].points);
                if (point_attribs.length !== 0) {
                    for (var j = 0; j < point_attribs.length; j++) {
                        this.point_name.push(point_attribs[0].getName());
                    }
                }
                for (var i = 0; i < this.scene_and_maps.points_map.size; i++) {
                    const points = this.model.getGeom().getPoint(i);
                    const label = points.getLabel();
                    const verts_xyz = points.getLabelCentroid();
                    var attributepoint = [];
                    if (verts_xyz !== undefined) {
                        attributepoint.id = label;
                        attributepoint.x = verts_xyz[0];
                        attributepoint.y = verts_xyz[1];
                        attributepoint.z = verts_xyz[2];
                        if (point_attribs.length !== 0) {
                            for (var j = 0; j < point_attribs.length; j++) {
                                attributepoint[j] = points.getAttribValue(point_attribs[j]);
                            }
                        }
                        attrubtepoints.push(attributepoint);
                    }
                }
            }
        }
        return attrubtepoints;
    }
    getvertices() {
        var attributevertix = [];
        var points = this.getpoints();
        this.vertex_name = [];
        if (this.scene_and_maps !== undefined) {
            if (this.scene_and_maps.vertices_map !== null && this.scene_and_maps.vertices_map.size !== 0 && this.scene_and_maps.vertices_map !== undefined) {
                const vertex_attribs = this.model.findAttribs(__WEBPACK_IMPORTED_MODULE_2_gs_json__["EGeomType"].vertices);
                if (vertex_attribs.length !== 0) {
                    for (var n = 0; n < vertex_attribs.length; n++) {
                        this.vertex_name.push(vertex_attribs[n].getName());
                    }
                }
                for (var i = 0; i < this.scene_and_maps.vertices_map.size; i++) {
                    const path = this.scene_and_maps.vertices_map.get(i);
                    const vertices = this.model.getGeom().getTopo(path);
                    var attributes = [];
                    const label = vertices.getLabel();
                    const verts_xyz = vertices.getLabelCentroid();
                    var attributes = [];
                    for (var j = 0; j < points.length; j++) {
                        if (points[j].x === verts_xyz[0] && points[j].y === verts_xyz[1] && points[j].z === verts_xyz[2]) {
                            attributes.pointid = points[j].id;
                        }
                    }
                    attributes.vertixlabel = label;
                    attributes.path = path;
                    if (vertex_attribs.length !== 0) {
                        for (var j = 0; j < vertex_attribs.length; j++) {
                            //attributes[j]=vertices.getAttribValue(vertex_attribs[j]);
                        }
                    }
                    attributevertix.push(attributes);
                }
                this.dataService.addattrvertix(attributevertix);
            }
        }
        return attributevertix;
    }
    getedges() {
        var attributeedge = [];
        this.edge_name = [];
        var edgelable = [];
        if (this.scene_and_maps !== undefined) {
            if (this.scene_and_maps.edges_map !== null && this.scene_and_maps.edges_map.size !== 0 && this.scene_and_maps.edges_map !== undefined) {
                const edge_attribs = this.model.findAttribs(__WEBPACK_IMPORTED_MODULE_2_gs_json__["EGeomType"].edges);
                if (edge_attribs.length !== 0) {
                    for (var j = 0; j < edge_attribs.length; j++) {
                        this.edge_name.push(edge_attribs[j].getName());
                    }
                }
                for (var i = 0; i < this.scene_and_maps.edges_map.size; i++) {
                    var path = this.scene_and_maps.edges_map.get(i);
                    var edge = this.model.getGeom().getTopo(path);
                    var attributes = [];
                    var label = edge.getLabel();
                    attributes.label = label;
                    if (edgelable.indexOf(label) === -1) {
                        edgelable.push(label);
                        if (edge_attribs.length !== 0) {
                            for (var j = 0; j < edge_attribs.length; j++) {
                                //attributes[j]=edge.getAttribValue(edge_attribs[j]);
                            }
                        }
                        attributeedge.push(attributes);
                    }
                }
            }
        }
        return attributeedge;
    }
    getwires() {
        var attributewire = [];
        this.wire_name = [];
        var wirelabel = [];
        if (this.scene_and_maps !== undefined) {
            if (this.scene_and_maps.wires_map !== null && this.scene_and_maps.wires_map.size !== 0 && this.scene_and_maps.wires_map !== undefined) {
                const wire_attribs = this.model.findAttribs(__WEBPACK_IMPORTED_MODULE_2_gs_json__["EGeomType"].wires);
                if (wire_attribs.length !== 0) {
                    for (var j = 0; j < wire_attribs.length; j++) {
                        this.wire_name.push(wire_attribs[j].getName());
                    }
                }
                for (var i = 0; i < this.scene_and_maps.wires_map.size; i++) {
                    var path = this.scene_and_maps.wires_map.get(i);
                    var wire = this.model.getGeom().getTopo(path);
                    var attributes = [];
                    var label = wire.getLabel();
                    attributes.label = label;
                    if (wirelabel.indexOf(label) === -1) {
                        wirelabel.push(label);
                        if (wire_attribs.length !== 0) {
                            for (var j = 0; j < wire_attribs.length; j++) {
                                attributes[j] = wire.getAttribValue(wire_attribs[j]);
                            }
                        }
                        attributewire.push(attributes);
                    }
                }
            }
        }
        return attributewire;
    }
    getfaces() {
        var attributeface = [];
        this.face_name = [];
        var facelabel = [];
        if (this.scene_and_maps !== undefined) {
            if (this.scene_and_maps.faces_map !== null && this.scene_and_maps.faces_map.size !== 0 && this.scene_and_maps.faces_map !== undefined) {
                const face_attribs = this.model.findAttribs(__WEBPACK_IMPORTED_MODULE_2_gs_json__["EGeomType"].faces);
                if (face_attribs.length !== 0) {
                    for (var j = 0; j < face_attribs.length; j++) {
                        this.face_name.push(face_attribs[j].getName());
                    }
                }
                for (var i = 0; i < this.scene_and_maps.faces_map.size; i++) {
                    var path = this.scene_and_maps.faces_map.get(i);
                    var face = this.model.getGeom().getTopo(path);
                    var attributes = [];
                    var label = face.getLabel();
                    attributes.label = label;
                    if (facelabel.indexOf(label) === -1) {
                        facelabel.push(label);
                        if (face_attribs.length !== 0) {
                            for (var j = 0; j < face_attribs.length; j++) {
                                attributes[j] = face.getAttribValue(face_attribs[j]);
                            }
                        }
                        attributeface.push(attributes);
                    }
                }
            }
        }
        return attributeface;
    }
    getoject() {
        var attributeobject = [];
        this.obj_name = [];
        this.attrib_name = [];
        var atrib = [];
        if (this.scene_and_maps !== undefined) {
            if (this.scene_and_maps.faces_map !== null && this.scene_and_maps.faces_map.size !== 0 && this.scene_and_maps.faces_map !== undefined) {
                const obj_attribs = this.model.findAttribs(__WEBPACK_IMPORTED_MODULE_2_gs_json__["EGeomType"].objs);
                if (obj_attribs.length !== 0) {
                    for (var j = 0; j < obj_attribs.length; j++) {
                        this.obj_name.push(obj_attribs[j].getName());
                        for (var i = 0; i < this.scene_and_maps.faces_map.size; i++) {
                            const path = this.scene_and_maps.faces_map.get(i);
                            var obj = this.model.getGeom().getObj(path.id);
                            atrib[j] = obj.getAttribValue(obj_attribs[j]);
                            this.attrib_name.push(atrib[j]);
                        }
                    }
                }
                for (var i = 0; i < this.scene_and_maps.faces_map.size; i++) {
                    const path = this.scene_and_maps.faces_map.get(i);
                    if (i === 0 || path.id !== this.scene_and_maps.faces_map.get(i - 1).id) {
                        var attribute = [];
                        const label = "o" + path.id;
                        attribute.label = label;
                        for (var j = 0; j < obj_attribs.length; j++) {
                            var obj = this.model.getGeom().getObj(path.id);
                            attribute[j] = obj.getAttribValue(obj_attribs[j]);
                        }
                        attributeobject.push(attribute);
                    }
                }
            }
        }
        return attributeobject;
    }
    getchildren() {
        var children;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name == "Scene") {
                children = this.scene.children[i].children;
                break;
            }
            if (i == this.scene.children.length - 1) {
                return [];
            }
        }
        return children;
    }
    getscenechildren() {
        var scenechildren = [];
        for (var n = 0; n < this.scene.children.length; n++) {
            if (this.scene.children[n].type === "Scene") {
                for (var i = 0; i < this.scene.children[n].children.length; i++) {
                    scenechildren.push(this.scene.children[n].children[i]);
                }
            }
        }
        return scenechildren;
    }
    point(Visible) {
        this.Visible = "Points";
        this.attribute = this.getpoints();
        if (this.selectedVisible == true) {
            this.pointcheck();
        }
        if (this.dataService.checkpointid == undefined) {
            this.dataService.checkpointid = false;
        }
        else {
            this.checkpointid = this.dataService.checkpointid;
        }
        if (this.dataService.checkX == undefined) {
            this.dataService.checkX = false;
        }
        else {
            this.checkX = this.dataService.checkX;
        }
        if (this.dataService.checkY == undefined) {
            this.dataService.checkY = false;
        }
        else {
            this.checkY = this.dataService.checkY;
        }
        if (this.dataService.checkZ == undefined) {
            this.dataService.checkZ = false;
        }
        else {
            this.checkZ = this.dataService.checkZ;
        }
        this.dataService.visible = this.Visible;
        //this.clearsprite();
        /*this.sortedData=[];
        for(var i=0;i<this.attribute.length;i++){
          var datas={};
          datas["id"]=this.attribute[i].id;
          datas["x"]=this.attribute[i].x;
          datas["y"]=this.attribute[i].y;
          datas["z"]=this.attribute[i].z;
          this.sortedData[i]=datas;
        }*/
    }
    pointcheck() {
        this.attribute = [];
        var attributes = this.pointtovertix();
        var points = this.getpoints();
        for (var i = 0; i < points.length; i++) {
            for (var j = 0; j < attributes.length; j++) {
                if (points[i].id === attributes[j].pointid && this.attribute.indexOf(points[i]) === -1) {
                    this.attribute.push(points[i]);
                }
            }
        }
    }
    pointtovertix() {
        var attributes = [];
        var vertices = this.getvertices();
        var selecting = this.dataService.getselecting();
        var char;
        var labels = [];
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < vertices.length; j++) {
                    if (selecting[i]["id"] === vertices[j].pointid && attributes.indexOf(vertices[j]) == -1) {
                        attributes.push(vertices[j]);
                    }
                    if (selecting[i]["type"] === "All edges") {
                        const edge = this.model.getGeom().getTopo(selecting[i]["path"]);
                        const verts = edge.getVertices();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === vertices[j].vertixlabel && attributes.indexOf(vertices[j]) == -1) {
                                attributes.push(vertices[j]);
                            }
                        }
                    }
                    if (selecting[i]["type"] === "All wires") {
                        const wire = this.model.getGeom().getTopo(selecting[i]["path"]);
                        const verts = wire.getVertices();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === vertices[j].vertixlabel && attributes.indexOf(vertices[j]) == -1) {
                                attributes.push(vertices[j]);
                            }
                        }
                    }
                    if (selecting[i]["type"] === "All faces") {
                        const face = this.model.getGeom().getTopo(selecting[i]["path"]);
                        const verts = face.getVertices();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === vertices[j].vertixlabel && attributes.indexOf(vertices[j]) == -1) {
                                attributes.push(vertices[j]);
                            }
                        }
                    }
                    if (selecting[i]["type"] === "All objs") {
                        const face = this.model.getGeom().getTopo(selecting[i]["path"]);
                        const faces = face.getObj().getFaces();
                        for (var f = 0; f < faces.length; f++) {
                            const verts = faces[f].getVertices();
                            for (var n = 0; n < verts.length; n++) {
                                var label = verts[n].getLabel();
                                if (label === vertices[j].vertixlabel && this.attribute.indexOf(vertices[j]) == -1) {
                                    attributes.push(vertices[j]);
                                }
                            }
                        }
                    }
                }
            }
        }
        return attributes;
    }
    vertice(Visible) {
        this.Visible = "Vertices";
        this.attribute = this.getvertices();
        if (this.selectedVisible == true) {
            this.verticecheck();
        }
        if (this.dataService.checkvertixid == undefined) {
            this.dataService.checkvertixid = false;
        }
        else {
            this.vertixid = this.dataService.checkvertixid;
        }
        if (this.dataService.pointid == undefined) {
            this.dataService.pointid = false;
        }
        else {
            this.pointid = this.dataService.pointid;
        }
        this.dataService.visible = this.Visible;
        //this.clearsprite();
    }
    verticecheck() {
        this.attribute = this.pointtovertix();
    }
    edge(Visible) {
        this.Visible = "Edges";
        this.attribute = [];
        this.attribute = this.getedges();
        if (this.selectedVisible == true) {
            this.edgecheck();
        }
        this.dataService.visible = this.Visible;
        //this.clearsprite();
    }
    edgecheck() {
        this.attribute = [];
        var edges = this.getedges();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < edges.length; j++) {
                    if (selecting[i].type === "All edges") {
                        if (selecting[i]["id"].indexOf(edges[j].label) > -1) {
                            this.attribute.push(edges[j]);
                        }
                    }
                    if (selecting[i]["type"] === "All faces") {
                        const face = this.model.getGeom().getTopo(selecting[i]["path"]);
                        const verts = face.getEdges();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === edges[j].label && this.attribute.indexOf(edges[j]) == -1) {
                                this.attribute.push(edges[j]);
                            }
                        }
                    }
                    if (selecting[i]["type"] === "All objs") {
                        const face = this.model.getGeom().getTopo(selecting[i]["path"]);
                        const faces = face.getObj().getFaces();
                        for (var f = 0; f < faces.length; f++) {
                            const verts = faces[f].getEdges();
                            for (var n = 0; n < verts.length; n++) {
                                var label = verts[n].getLabel();
                                if (label === edges[j].label && this.attribute.indexOf(edges[j]) == -1) {
                                    this.attribute.push(edges[j]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    wire(Visible) {
        this.Visible = "Wires";
        this.attribute = [];
        this.attribute = this.getwires();
        if (this.selectedVisible == true) {
            this.wirecheck();
        }
        this.dataService.visible = this.Visible;
    }
    wirecheck() {
        this.attribute = [];
        var wires = this.getwires();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < wires.length; j++) {
                    if (selecting[i]["id"] === wires[j].label) {
                        this.attribute.push(wires[j]);
                    }
                    if (selecting[i]["type"] === "All objs") {
                        const face = this.model.getGeom().getTopo(selecting[i]["path"]);
                        const wireses = face.getObj().getWires();
                        for (var w = 0; w < wireses.length; w++) {
                            var label = wireses[w].getLabel();
                            if (label === wires[j].label && this.attribute.indexOf(wires[j]) == -1) {
                                this.attribute.push(wires[j]);
                            }
                        }
                    }
                }
            }
        }
    }
    face(Visible) {
        this.Visible = "Faces";
        this.attribute = [];
        this.attribute = this.getfaces();
        if (this.selectedVisible == true) {
            this.facecheck();
        }
        if (this.dataService.checkface == undefined) {
            this.dataService.checkface = false;
        }
        else {
            this.checkface = this.dataService.checkface;
        }
        for (var n = 0; n < this.face_name.length; n++) {
            if (this.dataService.checkname[n] === undefined) {
                this.dataService.checkname[n] = false;
            }
            /*else{
              this.face_name[n]=this.dataService.checkname[n];
            }*/
        }
    }
    facecheck() {
        this.attribute = [];
        var faces = this.getfaces();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < faces.length; j++) {
                    if (selecting[i]["id"] === faces[j].label) {
                        this.attribute.push(faces[j]);
                    }
                    if (selecting[i]["type"] === "All objs") {
                        const face = this.model.getGeom().getTopo(selecting[i]["path"]);
                        const faceses = face.getObj().getFaces();
                        for (var f = 0; f < faceses.length; f++) {
                            var label = faceses[f].getLabel();
                            if (label === faces[j].label && this.attribute.indexOf(faces[j]) == -1) {
                                this.attribute.push(faces[j]);
                            }
                        }
                    }
                }
            }
        }
    }
    object(Visible) {
        this.Visible = "Objs";
        this.attribute = [];
        this.attribute = this.getoject();
        if (this.selectedVisible == true) {
            this.objectcheck();
        }
        if (this.dataService.checkobj == undefined) {
            this.dataService.checkobj = false;
        }
        else {
            this.checkobj = this.dataService.checkobj;
        }
        this.dataService.visible = this.Visible;
    }
    objectcheck() {
        this.attribute = [];
        var object = this.getoject();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < object.length; j++) {
                    if (selecting[i]["id"] === object[j].label) {
                        this.attribute.push(object[j]);
                    }
                }
            }
        }
    }
    changeselected() {
        this.selectedVisible = !this.selectedVisible;
        if (this.selectedVisible) {
            if (this.Visible === "Points")
                this.pointcheck();
            if (this.Visible === "Vertices")
                this.verticecheck();
            if (this.Visible === "Edges")
                this.edgecheck();
            if (this.Visible === "Wires")
                this.wirecheck();
            if (this.Visible === "Faces")
                this.facecheck();
            if (this.Visible === "Objs")
                this.objectcheck();
        }
        else {
            if (this.Visible === "Points")
                this.point(this.Visible);
            if (this.Visible === "Vertices")
                this.vertice(this.Visible);
            if (this.Visible === "Edges")
                this.edge(this.Visible);
            if (this.Visible === "Wires")
                this.wire(this.Visible);
            if (this.Visible === "Faces")
                this.face(this.Visible);
            if (this.Visible === "Objs")
                this.object(this.Visible);
        }
    }
    Onselect(datascale) {
        if (this.Visible === "Points") {
            var point = [];
            point.label = datascale.id;
            point.id = datascale.id;
            point.path = datascale.id;
            point.type = "All points";
            point.label_xyz = [datascale.x, datascale.y, datascale.z];
            var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](point.label_xyz[0], point.label_xyz[1], point.label_xyz[2]));
            var pointsmaterial = new __WEBPACK_IMPORTED_MODULE_0_three__["PointsMaterial"]({ color: 0x00ff00, size: 1 });
            if (this.dataService.pointsize !== undefined) {
                pointsmaterial.size = this.dataService.pointsize;
            }
            const points = new __WEBPACK_IMPORTED_MODULE_0_three__["Points"](geometry, pointsmaterial);
            points.userData.id = point.id;
            points["material"].needsUpdate = true;
            points.name = "selects";
            this.scene.add(points);
            this.renderer.render(this.scene, this.camera);
            this.dataService.addclickshow(point);
        }
        if (this.Visible === "Vertices") {
            var vertice = [];
            const path = datascale.path;
            const vertices = this.model.getGeom().getTopo(path);
            const label = vertices.getLabel();
            const verts_xyz = vertices.getLabelCentroid();
            vertice.label = label;
            vertice.id = datascale.pointid;
            vertice.path = datascale.path;
            vertice.type = "All points";
            vertice.label_xyz = [verts_xyz[0], verts_xyz[1], verts_xyz[2]];
            var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["Geometry"]();
            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](verts_xyz[0], verts_xyz[1], verts_xyz[2]));
            var pointsmaterial = new __WEBPACK_IMPORTED_MODULE_0_three__["PointsMaterial"]({ color: 0x00ff00, size: 1 });
            if (this.dataService.pointsize !== undefined) {
                pointsmaterial.size = this.dataService.pointsize;
            }
            const points = new __WEBPACK_IMPORTED_MODULE_0_three__["Points"](geometry, pointsmaterial);
            points.userData.id = vertice.id;
            points["material"].needsUpdate = true;
            points.name = "selects";
            this.scene.add(points);
            this.renderer.render(this.scene, this.camera);
            this.dataService.addclickshow(vertice);
        }
        /*if(this.Visible==="Vertices"){
          var vertice:any=[];
          const path: gs.ITopoPathData=datascale.path;
          const vertices: gs.IVertex = this.model.getGeom().getTopo(path) as gs.IVertex;
          const label: string = vertices.getLabel();
          const verts_xyz: gs.XYZ = vertices.getLabelCentroid();
          vertice.label=label;
          vertice.id=datascale.pointid;
          vertice.path=datascale.path;
          vertice.type="All points";
          vertice.label_xyz=[verts_xyz[0],verts_xyz[1],verts_xyz[2]];
          var geometry=new THREE.Geometry();
          geometry.vertices.push(new THREE.Vector3(verts_xyz[0],verts_xyz[1],verts_xyz[2]));
          var pointsmaterial=new THREE.PointsMaterial( { color:0x00ff00,size:1} );
          if(this.dataService.pointsize!==undefined){
              pointsmaterial.size=this.dataService.pointsize;
          }
          const points = new THREE.Points( geometry, pointsmaterial);
          points.userData.id=vertice.id;
          points["material"].needsUpdate=true;
          points.name="selects";
          this.scene.add(points);
          this.dataService.addclickshow(vertice);
        }*/
        if (this.Visible === "Edges") {
        }
    }
    pointcheckbox() {
        var index = [];
        for (var i = 0; i < this.getpoints().length; i++) {
            if (this.dataService.selecting.length !== 0) {
                for (var j = 0; j < this.dataService.selecting.length; j++) {
                    if (this.dataService.selecting[j].type === "All points") {
                        var label = "";
                        if (this.getpoints()[i].id === this.dataService.selecting[j]["id"]) {
                            if (document.getElementById("X")["checked"] === true) {
                                label = label.concat("X:", this.getpoints()[i].x, '\n');
                            }
                            if (document.getElementById("Y")["checked"] === true) {
                                label = label.concat("Y:", this.getpoints()[i].y, '\n');
                            }
                            if (document.getElementById("Z")["checked"] === true) {
                                label = label.concat("Z:", this.getpoints()[i].z, '\n');
                            }
                            for (var n = 0; n < this.point_name.length; n++) {
                                if (document.getElementById(this.point_name[n])["checked"] == true) {
                                    label = label.concat(this.point_name[n], ":", this.getpoints()[i][n]);
                                }
                            }
                            //console.log(label);
                            this.dataService.addlabel(label);
                        }
                    }
                }
            }
        }
    }
    checkbox() {
        if (this.Visible === "Points") {
            this.dataService.addgetpoints(this.getpoints());
            this.dataService.checkX = document.getElementById("X")["checked"];
            this.dataService.checkY = document.getElementById("Y")["checked"];
            this.dataService.checkZ = document.getElementById("Z")["checked"];
            this.dataService.checkpointid = document.getElementById("id")["checked"];
            for (var n = 0; n < this.point_name.length; n++) {
                this.dataService.checkname[n] = document.getElementById(this.point_name[n])["checked"];
            }
            this.dataService.addpointname(this.point_name);
        }
        if (this.Visible === "Vertices") {
            this.dataService.addgetpoints(this.getvertices());
            this.dataService.checkvertixid = document.getElementById("vertixid")["checked"];
            this.dataService.pointid = document.getElementById("pointid")["checked"];
            for (var n = 0; n < this.vertex_name.length; n++) {
                this.dataService.checkname[n] = document.getElementById(this.vertex_name[n])["checked"];
            }
            this.dataService.addpointname(this.vertex_name);
        }
        if (this.Visible === "Edges") {
            this.dataService.addgetpoints(this.getedges());
            this.dataService.checkedgeid = document.getElementById("edgeid")["checked"];
            for (var n = 0; n < this.edge_name.length; n++) {
                this.dataService.checkname[n] = document.getElementById(this.edge_name[n])["checked"];
            }
            this.dataService.addpointname(this.edge_name);
        }
        if (this.Visible === "Faces") {
            this.dataService.addgetpoints(this.getfaces());
            this.dataService.checkface = document.getElementById("checkface")["checked"];
            for (var n = 0; n < this.face_name.length; n++) {
                this.dataService.checkname[n] = document.getElementById(this.face_name[n])["checked"];
            }
            this.dataService.addpointname(this.face_name);
        }
        if (this.Visible === "Objs") {
            this.dataService.addgetpoints(this.getoject());
            this.dataService.checkobj = document.getElementById("checkobj")["checked"];
            for (var n = 0; n < this.obj_name.length; n++) {
                this.dataService.checkname[n] = document.getElementById(this.obj_name[n])["checked"];
            }
            this.dataService.addpointname(this.obj_name);
        }
    }
    sortData(sort) {
        const data = this.attribute.slice();
        if (!sort.active || sort.direction == '') {
            this.attribute = data;
            return;
        }
        if (this.Visible === "Points") {
            this.attribute = data.sort((a, b) => {
                let isAsc = sort.direction == 'asc';
                switch (sort.active) {
                    case 'id': return this.compareid(a.id, b.id, isAsc);
                    case 'x': return this.compare(+a.x, +b.x, isAsc);
                    case 'y': return this.compare(+a.y, +b.y, isAsc);
                    case 'z': return this.compare(+a.z, +b.z, isAsc);
                    default: return 0;
                }
            });
            for (var i = 0; i < this.point_name.length; i++) {
                this.attribute = data.sort((a, b) => {
                    let isAsc = sort.direction == 'asc';
                    switch (sort.active) {
                        case this.point_name[i]: return this.compare(a[i], b[i], isAsc);
                        default: return 0;
                    }
                });
            }
        }
        if (this.Visible === "Vertices") {
            var labelinitial = false;
            this.attribute = data.sort((a, b) => {
                let isAsc = sort.direction == 'asc';
                switch (sort.active) {
                    case 'vertixlabel':
                        labelinitial = true;
                        return this.compare(a.vertixlabel, b.vertixlabel, isAsc);
                    case 'pointid':
                        labelinitial = true;
                        return this.compareid(a.pointid, b.pointid, isAsc);
                    default: return 0;
                }
            });
            if (labelinitial === false) {
                for (var i = 0; i < this.vertex_name.length; i++) {
                    this.attribute = data.sort((a, b) => {
                        let isAsc = sort.direction == 'asc';
                        switch (sort.active) {
                            case this.vertex_name[i]: return this.compare(a[i], b[i], isAsc);
                            default: return 0;
                        }
                    });
                }
            }
        }
        if (this.Visible === "Edges") {
            this.attribute = data.sort((a, b) => {
                let isAsc = sort.direction == 'asc';
                switch (sort.active) {
                    case 'label': return this.compare(a.label, b.label, isAsc);
                    default: return 0;
                }
            });
            for (var i = 0; i < this.edge_name.length; i++) {
                this.attribute = data.sort((a, b) => {
                    let isAsc = sort.direction == 'asc';
                    switch (sort.active) {
                        case this.edge_name[i]: return this.compare(a[i], b[i], isAsc);
                        default: return 0;
                    }
                });
            }
        }
        if (this.Visible === "Wires") {
            this.attribute = data.sort((a, b) => {
                let isAsc = sort.direction == 'asc';
                switch (sort.active) {
                    case 'label': return this.compare(a.label, b.label, isAsc);
                    default: return 0;
                }
            });
            for (var i = 0; i < this.wire_name.length; i++) {
                this.attribute = data.sort((a, b) => {
                    let isAsc = sort.direction == 'asc';
                    switch (sort.active) {
                        case this.wire_name[i]: return this.compare(a[i], b[i], isAsc);
                        default: return 0;
                    }
                });
            }
        }
        if (this.Visible === "Faces") {
            this.attribute = data.sort((a, b) => {
                let isAsc = sort.direction == 'asc';
                switch (sort.active) {
                    case 'label': return this.compare(a.label, b.label, isAsc);
                    default: return 0;
                }
            });
            for (var i = 0; i < this.face_name.length; i++) {
                this.attribute = data.sort((a, b) => {
                    let isAsc = sort.direction == 'asc';
                    switch (sort.active) {
                        case this.face_name[i]: return this.compare(a[i], b[i], isAsc);
                        default: return 0;
                    }
                });
            }
        }
        if (this.Visible === "Objs") {
            var labelinitial = false;
            this.attribute = data.sort((a, b) => {
                let isAsc = sort.direction == 'asc';
                switch (sort.active) {
                    case 'label':
                        labelinitial = true;
                        return this.compareid(a.label, b.label, isAsc);
                    default: return 0;
                }
            });
            if (labelinitial === false) {
                for (var i = 0; i < this.obj_name.length; i++) {
                    this.attribute = data.sort((a, b) => {
                        let isAsc = sort.direction == 'asc';
                        switch (sort.active) {
                            case this.obj_name[i]: return this.compare(a[i], b[i], isAsc);
                            default: return 0;
                        }
                    });
                }
            }
        }
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    compareid(a, b, isAsc) {
        return (Number(a.substring(1, a.length)) < Number(b.substring(1, b.length)) ? -1 : 1) * (isAsc ? 1 : -1);
    }
};
ToolwindowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'app-toolwindow',
        template: __webpack_require__("./src/app/gs-viewer/toolwindow/toolwindow.component.html"),
        styles: [__webpack_require__("./src/app/gs-viewer/toolwindow/toolwindow.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */]])
], ToolwindowComponent);



/***/ }),

/***/ "./src/app/gs-viewer/viewer/viewer.component.css":
/***/ (function(module, exports) {

module.exports = "#container {\r\n  position: relative;\r\n  height:100%;\r\n  width: 100%;\r\n  margin:0px;\r\n  overflow: hidden;\r\n  color: white;\r\n  font-family:sans-serif;\r\n}\r\n#container-top-right-resize { top: 0px; right: 0px; }\r\n#shownumber{\r\n  position: absolute;\r\n  float: right;\r\n  color:black;\r\n  right: 0px;\r\n  width: 115px;\r\n  bottom: 0px;\r\n  color:#395d73;\r\n  font-family:sans-serif;\r\n}\r\n/*#rotating{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  top: 0px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#paning{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  top: 25px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#zooming{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 50px;\r\n  background-color:transparent;\r\n  border:0;\r\n}*/\r\n/*#imagery{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:14px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 10px;\r\n  background-color:transparent;\r\n  border:0;\r\n}*/\r\n#zoomingfit{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:14px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 10px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n#selecting{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:14px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 35px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n#points{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:14px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 70px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#vertices{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:14px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 95px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#edges{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:14px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 120px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#wires{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:14px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 145px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#faces{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:14px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 170px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#objects{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:14px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 195px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#setting{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:14px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  top: 10px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n.selected{\r\n  color: grey;\r\n\r\n}\r\n.visible{\r\n  color: grey;\r\n}\r\n.cursor {\r\n\r\n}\r\n.selectvisible{\r\n  background-color:  white !important;\r\n  color:#395d73;\r\n}"

/***/ }),

/***/ "./src/app/gs-viewer/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\"  \r\n    (mousemove)=\"onDocumentMouseMove($event)\" \r\n    (mousedown)=\"mousedown($event)\"\r\n    (mouseup)=\"mouseup($event)\"\r\n    (click)=\"render(this)\"\r\n\t\t(click)=\"onDocumentMouseDown($event)\">\r\n    <div *ngIf=\"_updatemodel === false\" style=\"position:absolute;color:red;margin-top: 50px;left:40%;width: auto;text-align: center;font-family:sans-serif;font-size: 14px;background-color: white;\">Error displaying model:{{text}}</div>\r\n    <div *ngIf=\"_modelshow === false\" style=\"position:absolute;color:red;margin-top: 50px;left:40%;width: auto;text-align: center;font-family:sans-serif;font-size: 14px;background-color: white;\">Model or Scene not defined.</div>\r\n\r\n\r\n    <!-- (mousemove)=\"requestanimate()\" \r\n    (click)=\"requestanimate()\" -->\r\n\r\n    <!-- (window:resize)=\"onResize($event)\" -->\r\n\r\n\t\r\n  \t\t<!-- <button id=\"rotating\" \r\n  \t\t\t[class.visible]=\"Visible === 'rotate'\" \r\n  \t\t\t(click)=\"rotate()\">\r\n  \t\t\t<i class=\"fa fa-refresh\"></i>\r\n  \t\t</button>\r\n\r\n  \t\t<button id=\"paning\"  \r\n  \t\t\t[class.visible]=\"Visible === 'pan'\" \r\n  \t\t\t(click)=\"pan()\">\r\n  \t\t\t<i class=\"fa fa-hand-paper-o\"></i>\r\n  \t\t</button>\r\n\r\n  \t\t<button id=\"zooming\"  \r\n  \t\t\t[class.visible]=\"Visible === 'zoom'\" \r\n  \t\t\t(click)=\"Visible='zoom'\">\r\n  \t\t\t<i class=\"fa fa-search\"></i>\r\n  \t\t</button>-->\r\n  \t\t\r\n  \t\t<button id=\"zoomingfit\"  \r\n  \t\t\t[class.visible]=\"Visible === 'zoomfit'\" \r\n  \t\t\t(click)=\"zoomfit()\">\r\n  \t\t\t<span matTooltip=\"zoom to fit\"><i class=\"fa fa-arrows-alt\"></i></span>\r\n  \t\t</button> \r\n  \t\t\r\n  \t\t<!-- <button id=\"selecting\" [class.visible]=\"Visible === 'select'\" (click)= \"select($event, Visible)\" ><i class=\"fa fa-mouse-pointer\"></i></button> -->\r\n  \t\t\r\n  \t\t<!-- <button id=\"setting\" [class.selected]=\"settingVisible\" (click)= \"setting(settingVisible)\"><i class=\"fa fa-cog\"></i></button> -->\r\n\r\n      <button id=\"selecting\" [class.selected]=\"seVisible\" (click)= \"select(seVisible)\" ><span matTooltip=\"select\"><i class=\"fa fa-mouse-pointer\"></i></span></button>\r\n      <div id=\"shownumber\">\r\n        <tr>\r\n        <td  align=left style=\"width: 60px;\">Triangles&nbsp;&nbsp;</td>\r\n        <td  align=left style=\"width: 10px;\">{{renderer.info.render.faces}}</td>\r\n        </tr>\r\n        <tr>\r\n        <td  align=left style=\"width: 60px;\">Lines</td>\r\n        <td  align=left style=\"width: 10px;\">{{LineNo}}</td>\r\n        </tr>\r\n      </div>\r\n\r\n      <!-- <button id=\"imagery\"  \r\n        [class.selected]=\"imVisible\" (click)=\"leaflet()\">I\r\n      </button> -->\r\n      \t\r\n      \t<!--setting-->\r\n      \t\r\n \t\t<!-- <app-setting *ngIf=\"settingVisible == true\"></app-setting> -->\r\n    <div *ngIf=\"seVisible == true\">\r\n        <button id=\"points\" [class.selectvisible]=\"SelectVisible === 'Points'\" (click)=\"pointselect(SelectVisible)\"><span matTooltip=\"Select Points\">P</span></button>\r\n        <button id=\"vertices\" [class.selectvisible]=\"SelectVisible === 'Vertices'\" (click)=\"verticeselect(SelectVisible)\"><span matTooltip=\"Select Vertices\">V</span></button>\r\n        <button id=\"edges\" [class.selectvisible]=\"SelectVisible === 'Edges'\" (click)=\"edgeselect(SelectVisible)\"><span matTooltip=\"Select Edges\">E</span></button>\r\n        <button id=\"wires\" [class.selectvisible]=\"SelectVisible === 'Wires'\" (click)=\"wireselect(SelectVisible)\"><span matTooltip=\"Select Wires\">W</span></button>\r\n        <button id=\"faces\" [class.selectvisible]=\"SelectVisible === 'Faces'\" (click)=\"faceselect(SelectVisible)\"><span matTooltip=\"Select Faces\">F</span></button>\r\n        <button id=\"objects\" [class.selectvisible]=\"SelectVisible === 'Objs'\" (click)=\"objectselect(SelectVisible)\"><span matTooltip=\"Select Objects\">O</span></button>\r\n      </div>\r\n</div>\r\n\r\n\r\n\t\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/gs-viewer/viewer/viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_DataSubscriber__ = __webpack_require__("./src/app/gs-viewer/data/DataSubscriber.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ViewerComponent = class ViewerComponent extends __WEBPACK_IMPORTED_MODULE_2__data_DataSubscriber__["a" /* DataSubscriber */] {
    constructor(injector, myElement) {
        super(injector);
        this.textlabels = [];
        this.starsGeometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        this.seVisible = false;
        this.imVisible = false;
        this.SelectVisible = 'Objs';
        this.settingVisible = false;
        this.LineNo = 0;
        this._updatemodel = true;
        this._modelshow = true;
        this.myElement = myElement;
    }
    ngOnInit() {
        let container = this.myElement.nativeElement.children.namedItem("container");
        /// check for container
        if (!container) {
            console.error("No container in Three Viewer");
            return;
        }
        ///
        let width = container.offsetWidth; //container.clientWidth;
        let height = container.offsetHeight; //container.clientHeight;
        let scene = this.dataService.getScene(width, height);
        let renderer = this.dataService.getRenderer();
        let camera = this.dataService.getCamera();
        let controls = this.dataService.getControls();
        container.appendChild(renderer.domElement);
        this.scene = scene;
        this.renderer = renderer;
        this.camera = camera;
        this.controls = controls;
        this.width = width;
        this.height = height;
        this.updateModel();
        // todo: check and refactor what is required?
        this.selecting = this.dataService.getselecting(); // todo: should this be in the data service??
        this.mouse = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"]();
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"]();
        this.raycaster.linePrecision = 0.05;
        this.scenechildren = this.dataService.getscenechild();
        this.dataService.SelectVisible = this.SelectVisible;
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](0.1);
        //var geometry = new THREE.CircleGeometry( 5 );
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x00ff00, transparent: true, opacity: 0.5 });
        this.sphere = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
        this.sphere.visible = false;
        this.sphere.name = "sphereInter";
        this.scene.add(this.sphere);
        let self = this;
        controls.addEventListener('change', function () { self.render(self); });
        for (var i = 0; i < this.getchildren().length; i++) {
            this.getchildren()[i]["material"].transparent = false;
        }
        this.dataService.addraycaster(this.raycaster);
        this.addgrid();
        self.renderer.render(self.scene, self.camera);
    }
    //
    //  checks if the data service has a data and calls update function for the viewer
    //
    notify(message) {
        if (message == "model_update" && this.scene) {
            this.updateModel();
        }
    }
    animate(self) {
        self.raycaster.setFromCamera(self.mouse, self.camera);
        self.scenechildren = self.dataService.getscenechild();
        var intersects = self.raycaster.intersectObjects(self.scenechildren);
        for (var i = 0; i < self.scenechildren.length; i++) {
            var currObj = self.scenechildren[i];
            if (self.dataService.getSelectingIndex(currObj.uuid) < 0) {
                if (intersects[0] != undefined && intersects[0].object.uuid == currObj.uuid) {
                    self.sphere.visible = true;
                    self.sphere.position.copy(intersects[0].point);
                }
                else {
                    self.sphere.visible = false;
                }
            }
        }
        for (var i = 0; i < self.textlabels.length; i++) {
            self.textlabels[i].updatePosition();
        }
        if (self.dataService.clickshow !== undefined && self.clickatt !== self.dataService.clickshow) {
            self.clickatt = self.dataService.clickshow;
            self.clickshow();
        }
        self.renderer.render(self.scene, self.camera);
    }
    render(self) {
        for (var i = 0; i < self.textlabels.length; i++) {
            self.textlabels[i].updatePosition();
        }
        if (self.dataService.clickshow !== undefined && self.clickatt !== self.dataService.clickshow) {
            self.clickatt = self.dataService.clickshow;
            self.clickshow();
        }
        //self.onDocumentMouseDown();
        self.renderer.render(self.scene, self.camera);
    }
    /// clears all children from the scene
    clearScene() {
        /// remove children from scene
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                this.scene.remove(this.scene.children[i]);
                i = i - 1;
            }
            if (this.scene.children[i].name == "selects") {
                this.scene.remove(this.scene.children[i]);
                i = i - 1;
            }
        }
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name == "selects") {
                this.scene.remove(this.scene.children[i]);
                i = i - 1;
            }
        }
        for (var i = 0; i < this.textlabels.length; i++) {
            this.removeTextLabel(this.textlabels[i]["id"]);
            i = i - 1;
        }
    }
    onResize() {
        let container = this.myElement.nativeElement.children.namedItem("container");
        /// check for container
        if (!container) {
            console.error("No container in Three Viewer");
            return;
        }
        ///
        let width = container.offsetWidth;
        let height = container.offsetHeight;
        if (width !== this.width || height !== this.height) {
            this.width = width;
            this.height = height;
            this.renderer.setSize(this.width, this.height);
            this.camera.aspect = this.width / this.height;
            this.camera.updateProjectionMatrix();
        }
        // }
    }
    //
    // update mode
    // todo: optimize
    // 
    updateModel() {
        this._model = this.dataService.getGsModel();
        if (!this._model || !this.scene) {
            console.warn("Model or Scene not defined.");
            this._modelshow = false;
            return;
        }
        try {
            this._updatemodel = true;
            this._modelshow = true;
            this.scene_and_maps = this.dataService.getscememaps();
            const scene_data = this.scene_and_maps.scene;
            this.clearScene();
            let loader = new __WEBPACK_IMPORTED_MODULE_1_three__["ObjectLoader"]();
            // loading data
            let objectData = loader.parse(scene_data);
            this.seVisible = false;
            this.imVisible = false;
            this.LineNo = 0;
            // preprocessing
            if (objectData.children !== undefined) {
                var radius = 0;
                for (var i = 0; i < objectData.children.length; i++) {
                    let chd = objectData.children[i];
                    chd["material"].needsUpdate = true;
                    chd["material"].transparent = true;
                    chd["material"].blending = 1;
                    if (chd.name === "All faces" || chd.name === "All wires" || chd.name === "All edges" || chd.name === "All vertices" ||
                        chd.name === "Other lines" || chd.name === "All points") {
                        chd["material"].transparent = false;
                        chd["geometry"].computeVertexNormals();
                        chd["geometry"].computeBoundingBox();
                        chd["geometry"].computeBoundingSphere();
                        if (chd.name === "All points") {
                            this.center = chd["geometry"].boundingSphere.center;
                        }
                        if (chd.name === "All edges") {
                            this.basicMat = chd["material"].color;
                        }
                        else if (chd.name === "Other lines") {
                            this.basicMat = chd["material"].color;
                        }
                        if (chd.type === "LineSegments" && chd["geometry"].index.count !== undefined) {
                            this.LineNo = this.LineNo + chd["geometry"].index.count;
                        }
                    }
                    if (chd["geometry"] != undefined && chd["geometry"].boundingSphere.radius !== null) {
                        if (chd["geometry"].boundingSphere.radius > radius) {
                            radius = chd["geometry"].boundingSphere.radius;
                            this.center = chd["geometry"].boundingSphere.center;
                        }
                    }
                }
            }
            // setting controls
            this.controls.target.set(this.center.x, this.center.y, this.center.z);
            this.controls.update();
            // adding the object to the scene
            this.scene.add(objectData);
            this.render(this);
            this.dataService.getpoints = [];
        }
        catch (ex) {
            console.error("Error displaying model:", ex);
            this._updatemodel = false;
            this.text = ex;
        }
    }
    getMaterial(name) {
        var canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        var context = canvas.getContext('2d');
        context.textAlign = "center";
        context.fillText(name, canvas.width / 2, canvas.height / 2);
        context.font = "Bold  100px sans-serif";
        var texture = new __WEBPACK_IMPORTED_MODULE_1_three__["Texture"](canvas);
        texture.needsUpdate = true;
        var spriteMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["SpriteMaterial"]({ map: texture, color: 0xffffff });
        return spriteMaterial;
    }
    getchildren() {
        var children;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name == "Scene") {
                children = this.scene.children[i].children;
                break;
            }
            if (i == this.scene.children.length - 1) {
                return [];
            }
        }
        return children;
    }
    clickshow() {
        var label = this.clickatt["label"];
        var id = this.clickatt["id"];
        var label_xyz = this.clickatt["label_xyz"];
        var path = this.clickatt["path"];
        this.addTextLabel(label, label_xyz, id, path, "All points");
    }
    select(seVisible) {
        event.stopPropagation();
        this.seVisible = !this.seVisible;
        if (this.seVisible) {
            if (this.SelectVisible === "Objs")
                this.objectselect(this.SelectVisible);
            if (this.SelectVisible === "Faces")
                this.faceselect(this.SelectVisible);
            if (this.SelectVisible === "Edges")
                this.edgeselect(this.SelectVisible);
            if (this.SelectVisible === "Vertices")
                this.verticeselect(this.SelectVisible);
            if (this.SelectVisible === "Points")
                this.pointselect(this.SelectVisible);
            for (var i = 0; i < this.getchildren().length; i++) {
                this.getchildren()[i]["material"].transparent = true;
            }
        }
        else {
            for (var i = 0; i < this.getchildren().length; i++) {
                this.getchildren()[i]["material"].transparent = false;
                if (this.getchildren()[i].name == "All edges") {
                    this.getchildren()[i]["material"].color = this.basicMat;
                }
                else if (this.getchildren()[i].name == "Other lines") {
                    this.getchildren()[i]["material"].color = this.basicMat;
                }
            }
        }
    }
    objectselect(SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Objs";
        this.dataService.visible = "Objs";
        document.getElementById("gsv-object").style.color = null;
        document.getElementById("gsv-face").style.color = null;
        document.getElementById("gsv-wire").style.color = null;
        document.getElementById("gsv-edge").style.color = null;
        document.getElementById("gsv-vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        var objsvisibel = true;
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All objs" || children[i].name === "All faces") {
                if (children[i]["geometry"].attributes.position.array.length !== 0) {
                    children[i]["material"].opacity = 0.3;
                    children[i].name = "All objs";
                    scenechildren.push(children[i]);
                }
                else {
                    objsvisibel = false;
                }
            }
            if (children[i].name === "All wires") {
                if (objsvisibel === true) {
                    children[i]["material"].opacity = 0;
                }
                else {
                    children[i]["material"].opacity = 0.6;
                    scenechildren.push(children[i]);
                }
            }
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0;
        }
        this.dataService.addscenechild(scenechildren);
        this.dataService.SelectVisible = this.SelectVisible;
    }
    faceselect(SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Faces";
        this.dataService.visible = "Faces";
        document.getElementById("gsv-object").style.color = "grey";
        document.getElementById("gsv-face").style.color = null;
        document.getElementById("gsv-wire").style.color = null;
        document.getElementById("gsv-edge").style.color = null;
        document.getElementById("gsv-vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All objs" || children[i].name === "All faces") {
                children[i]["material"].opacity = 0.3;
                children[i].name = "All faces";
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
        this.dataService.SelectVisible = this.SelectVisible;
    }
    wireselect(SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Wires";
        var lineprecision = this.raycaster.linePrecision;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "sphereInter") {
                var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](lineprecision * 2);
                this.scene.children[i]["geometry"] = geometry;
                this.renderer.render(this.scene, this.camera);
            }
        }
        document.getElementById("gsv-object").style.color = "grey";
        document.getElementById("gsv-face").style.color = "grey";
        document.getElementById("gsv-wire").style.color = null;
        document.getElementById("gsv-edge").style.color = null;
        document.getElementById("gsv-vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All objs" || children[i].name === "All faces")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All wires") {
                children[i]["material"].opacity = 0.6;
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
        this.dataService.SelectVisible = this.SelectVisible;
    }
    edgeselect(SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Edges";
        var lineprecision = this.raycaster.linePrecision;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "sphereInter") {
                var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](lineprecision * 2);
                this.scene.children[i]["geometry"] = geometry;
                this.renderer.render(this.scene, this.camera);
            }
        }
        document.getElementById("gsv-object").style.color = "grey";
        document.getElementById("gsv-face").style.color = "grey";
        document.getElementById("gsv-wire").style.color = "grey";
        document.getElementById("gsv-edge").style.color = null;
        document.getElementById("gsv-vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        var edgevisible = true;
        for (var i = 0; i < children.length; i++) {
            children[i]["material"].transparent = true;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                if (children[i].name === "All edges") {
                    if (children[i]["geometry"].attributes.position.array.length !== 0) {
                        children[i]["material"].opacity = 0.3;
                        children[i]["material"].color = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](255, 255, 0);
                        scenechildren.push(children[i]);
                    }
                    else {
                        edgevisible = false;
                    }
                }
                else {
                    if (children[i]["geometry"].attributes.position.array.length !== 0) {
                        children[i]["material"].opacity = 0.3;
                        children[i]["material"].color = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](255, 255, 0);
                        scenechildren.push(children[i]);
                    }
                }
            }
            if (children[i].name === "All objs" || children[i].name === "All faces")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0.1;
        }
        this.dataService.addscenechild(scenechildren);
        this.dataService.SelectVisible = this.SelectVisible;
    }
    verticeselect(SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Vertices";
        var pointradius = this.dataService.pointradius;
        ;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "sphereInter") {
                var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](pointradius / 4);
                this.scene.children[i]["geometry"] = geometry;
                this.renderer.render(this.scene, this.camera);
            }
        }
        document.getElementById("gsv-object").style.color = "grey";
        document.getElementById("gsv-face").style.color = "grey";
        document.getElementById("gsv-wire").style.color = "grey";
        document.getElementById("gsv-edge").style.color = "grey";
        document.getElementById("gsv-vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All objs" || children[i].name === "All faces")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            /*if(children[i].name==="All vertices"){
              scenechildren.push(children[i]);
            }*/
            if (children[i].name === "All points") {
                scenechildren.push(children[i]);
                children[i]["material"].opacity = 1;
            }
        }
        this.dataService.addscenechild(scenechildren);
        this.dataService.SelectVisible = this.SelectVisible;
    }
    pointselect(SelectVisible) {
        /*event.stopPropagation();
        this.verticeselect("Vertices");
        this.SelectVisible="Points";
        this.dataService.SelectVisible=this.SelectVisible;*/
        event.stopPropagation();
        this.SelectVisible = "Points";
        var pointradius = this.dataService.pointradius;
        ;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "sphereInter") {
                var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](pointradius / 4);
                this.scene.children[i]["geometry"] = geometry;
                this.renderer.render(this.scene, this.camera);
            }
        }
        document.getElementById("gsv-object").style.color = "grey";
        document.getElementById("gsv-face").style.color = "grey";
        document.getElementById("gsv-wire").style.color = "grey";
        document.getElementById("gsv-edge").style.color = "grey";
        document.getElementById("gsv-vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All objs" || children[i].name === "All faces")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices") {
                children[i]["material"].opacity = 1;
            }
            if (children[i].name === "All points") {
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
        this.dataService.SelectVisible = this.SelectVisible;
    }
    //
    //  events
    //
    mousedown($event) {
        this.animate(this);
        this.mDownTime = (new Date()).getTime();
    }
    mouseup($event) {
        this.mUpTime = (new Date()).getTime();
    }
    onDocumentMouseMove(event) {
        this.onResize();
        if (this.seVisible === true) {
            this.animate(this);
            this.mouse.x = (event.offsetX / this.width) * 2 - 1;
            this.mouse.y = -(event.offsetY / this.height) * 2 + 1;
        }
        else {
            this.render(this);
        }
    }
    addgrid() {
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "GridHelper") {
                this.scene.remove(this.scene.children[i]);
                i = i - 1;
            }
        }
        // todo: change grid -> grid_value
        if (this.dataService.grid) {
            var gridhelper = new __WEBPACK_IMPORTED_MODULE_1_three__["GridHelper"](100, 10);
            gridhelper.name = "GridHelper";
            var vector = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 1, 0);
            gridhelper.lookAt(vector);
            gridhelper.position.set(0, 0, 0);
            this.scene.add(gridhelper);
            this.dataService.centerx = 0;
            this.dataService.centery = 0;
            this.dataService.centerz = 0;
        }
    }
    /// selects object from three.js scene
    onDocumentMouseDown(event) {
        var threshold;
        if (this.seVisible === true) {
            threshold = 100;
        }
        else {
            threshold = 0.1;
        }
        if (Math.abs(this.mDownTime - this.mUpTime) > threshold) {
            this.mDownTime = 0;
            this.mUpTime = 0;
            return;
        }
        var selectedObj, intersects;
        var select = false;
        this.scenechildren = this.dataService.getscenechild();
        this.raycaster.setFromCamera(this.mouse, this.camera);
        intersects = this.raycaster.intersectObjects(this.scenechildren);
        if (intersects.length > 0) {
            selectedObj = intersects[0].object;
            if (this.scenechildren[0].name === "All objs") {
                const index = Math.floor(intersects[0].faceIndex);
                const path = this.scene_and_maps.faces_map.get(index);
                const face = this._model.getGeom().getTopo(path);
                var label = "";
                const id = "o" + path.id;
                var getpoints;
                var getpoints = this.dataService.getpoints;
                var pointname = this.dataService.pointname;
                if (getpoints !== undefined && getpoints.length !== 0) {
                    for (var i = 0; i < getpoints.length; i++) {
                        if (id === getpoints[i].label) {
                            if (this.dataService.checkobj === true)
                                label = id;
                            for (var n = 0; n < pointname.length; n++) {
                                if (this.dataService.checkname[n] === true) {
                                    label = label.concat('<br/>', pointname[n], ":", getpoints[i][n]);
                                }
                            }
                        }
                    }
                }
                const label_xyz = face.getLabelCentroid();
                const faces = face.getObj().getFaces();
                if (this.textlabels.length === 0) {
                    for (var n = 0; n < faces.length; n++) {
                        var verts = faces[n].getVertices();
                        var verts_xyz = verts.map((v) => v.getPoint().getPosition());
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                        }
                        /*if(verts.length===4){
                          geometry.faces.push(new THREE.Face3(0,2,1));
                          geometry.faces.push(new THREE.Face3(0,3,2));
                        }else if(verts.length===3){
                          geometry.faces.push(new THREE.Face3(0,2,1));
                        }
                        var mesh=new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color:0x00ff00,side:THREE.DoubleSide} ));
                        mesh["geometry"].computeVertexNormals();
                        mesh.userData.id=label;
                        mesh.name="selects";
                        this.scene.add(mesh);*/
                        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                        const line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                        line.userData.id = id;
                        line["material"].needsUpdate = true;
                        line.name = "selects";
                        this.scene.add(line);
                    }
                    this.addTextLabel(label, label_xyz, label, path, "All objs");
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (id === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                            j = j - 1;
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (id === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                            j = j - 1;
                        }
                    }
                    if (select == false) {
                        for (var n = 0; n < faces.length; n++) {
                            var verts = faces[n].getVertices();
                            var verts_xyz = verts.map((v) => v.getPoint().getPosition());
                            var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                            for (var i = 0; i < verts_xyz.length; i++) {
                                geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                            }
                            var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                            const line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                            line.userData.id = id;
                            line["material"].needsUpdate = true;
                            line.name = "selects";
                            this.scene.add(line);
                        }
                        this.addTextLabel(label, label_xyz, id, path, "All objs");
                    }
                }
            }
            if (this.scenechildren[0].name === "All faces") {
                const index = Math.floor(intersects[0].faceIndex);
                const path = this.scene_and_maps.faces_map.get(index);
                const face = this._model.getGeom().getTopo(path);
                var label = "";
                var getpoints;
                var getpoints = this.dataService.getpoints;
                var pointname = this.dataService.pointname;
                if (getpoints !== undefined && getpoints.length !== 0) {
                    for (var i = 0; i < getpoints.length; i++) {
                        if (face.getLabel() === getpoints[i].label) {
                            for (var n = 0; n < pointname.length; n++) {
                                if (this.dataService.checkface === true)
                                    label = face.getLabel();
                                if (this.dataService.checkname[n] === true) {
                                    label = label.concat('<br/>', pointname[n], ":", getpoints[i][n]);
                                }
                            }
                        }
                    }
                }
                const label_xyz = face.getLabelCentroid();
                const verts = face.getVertices();
                const verts_xyz = verts.map((v) => v.getPoint().getPosition());
                if (this.textlabels.length === 0) {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                    }
                    var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                    const line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                    line.userData.id = face.getLabel();
                    line["material"].needsUpdate = true;
                    line.name = "selects";
                    this.scene.add(line);
                    this.addTextLabel(label, label_xyz, face.getLabel(), path, "All faces");
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (face.getLabel() === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (face.getLabel() === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                        }
                    }
                    if (select == false) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                        }
                        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                        const line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                        line.userData.id = face.getLabel();
                        line["material"].needsUpdate = true;
                        line.name = "selects";
                        this.scene.add(line);
                        this.addTextLabel(label, label_xyz, face.getLabel(), path, "All faces");
                    }
                }
            }
            if (this.scenechildren[0].name == "All wires") {
                const index = Math.floor(intersects[0].index / 2);
                const path = this.scene_and_maps.wires_map.get(index);
                const wire = this._model.getGeom().getTopo(path);
                const label = wire.getLabel();
                const label_xyz = wire.getLabelCentroid();
                const verts = wire.getVertices();
                const verts_xyz = verts.map((v) => v.getPoint().getPosition());
                if (wire.isClosed()) {
                    verts_xyz.push(verts_xyz[0]);
                }
                if (this.textlabels.length === 0) {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                    }
                    var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                    const line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                    line.userData.id = label;
                    line["material"].needsUpdate = true;
                    line.name = "selects";
                    this.scene.add(line);
                    this.addTextLabel(label, label_xyz, label, path, "All wires");
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (label === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (label === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                        }
                    }
                    if (select == false) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                        }
                        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                        const line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                        line.userData.id = label;
                        line["material"].needsUpdate = true;
                        line.name = "selects";
                        this.scene.add(line);
                        this.addTextLabel(label, label_xyz, label, path, "All wires");
                    }
                }
            }
            if (this.scenechildren[0].name == "All edges") {
                var label = "";
                var index = Math.floor(intersects[0].index / 2);
                if (this.scene_and_maps.edges_map !== null && (index < this.scene_and_maps.edges_map.size || index === this.scene_and_maps.edges_map.size)) {
                    var path = this.scene_and_maps.edges_map.get(index);
                    var edge = this._model.getGeom().getTopo(path);
                    var id = edge.getLabel();
                    var label_show = id;
                    for (var i = 1; i < intersects.length; i++) {
                        if (intersects[0].distance === intersects[i].distance) {
                            index = Math.floor(intersects[i].index / 2);
                            path = this.scene_and_maps.edges_map.get(index);
                            edge = this._model.getGeom().getTopo(path);
                            id = edge.getLabel();
                            if (label_show !== id)
                                label_show = label_show + "<br/>" + id;
                        }
                    }
                    var getpoints;
                    var getpoints = this.dataService.getpoints;
                    var pointname = this.dataService.pointname;
                    if (getpoints !== undefined && getpoints.length !== 0) {
                        for (var i = 0; i < getpoints.length; i++) {
                            if (edge.getLabel() === getpoints[i].label) {
                                if (this.dataService.checkedgeid === true) {
                                    label = label_show;
                                }
                                for (var n = 0; n < pointname.length; n++) {
                                    if (this.dataService.checkname[n] === true) {
                                        label = label.concat('<br/>', pointname[n], ":", getpoints[i][n]);
                                    }
                                }
                            }
                        }
                    }
                    const label_xyz = edge.getLabelCentroid();
                    const verts = edge.getVertices();
                    const verts_xyz = verts.map((v) => v.getPoint().getPosition());
                    if (this.textlabels.length === 0) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                        }
                        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                        const line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                        line.userData.id = edge.getLabel();
                        line["material"].needsUpdate = true;
                        line.name = "selects";
                        this.scene.add(line);
                        this.addTextLabel(label, label_xyz, edge.getLabel(), path, "All edges");
                    }
                    else {
                        for (var j = 0; j < this.scene.children.length; j++) {
                            if (edge.getLabel() === this.scene.children[j].userData.id) {
                                select = true;
                                this.scene.remove(this.scene.children[j]);
                            }
                        }
                        for (var j = 0; j < this.textlabels.length; j++) {
                            if (edge.getLabel() === this.textlabels[j]["id"]) {
                                select = true;
                                this.removeTextLabel(this.textlabels[j]["id"]);
                            }
                        }
                        if (select == false) {
                            var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                            for (var i = 0; i < verts_xyz.length; i++) {
                                geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                            }
                            var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                            const line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                            line.userData.id = edge.getLabel();
                            line.name = "selects";
                            this.scene.add(line);
                            this.addTextLabel(label, label_xyz, edge.getLabel(), path, "All edges");
                        }
                    }
                }
            }
            else if (this.scenechildren[0].name == "Other lines") {
                var label = "";
                var index = Math.floor(intersects[0].index / 2);
                if (this.scene_and_maps.edges_map !== null && (index < this.scene_and_maps.edges_map.size || index === this.scene_and_maps.edges_map.size)) {
                    var path = this.scene_and_maps.edges_map.get(index);
                    var edge = this._model.getGeom().getTopo(path);
                    var id = edge.getLabel();
                    label = id;
                    for (var i = 1; i < intersects.length; i++) {
                        if (intersects[0].distance === intersects[i].distance) {
                            index = Math.floor(intersects[i].index / 2);
                            path = this.scene_and_maps.edges_map.get(index);
                            edge = this._model.getGeom().getTopo(path);
                            id = edge.getLabel();
                            if (label !== id)
                                label = label + "<br/>" + id;
                        }
                    }
                    const label_xyz = edge.getLabelCentroid();
                    const verts = edge.getVertices();
                    const verts_xyz = verts.map((v) => v.getPoint().getPosition());
                    if (this.textlabels.length === 0) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                        }
                        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                        const line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                        line.userData.id = label;
                        line["material"].needsUpdate = true;
                        line.name = "selects";
                        this.scene.add(line);
                        this.addTextLabel(label, label_xyz, label, path, "Other lines");
                    }
                    else {
                        for (var j = 0; j < this.scene.children.length; j++) {
                            if (label === this.scene.children[j].userData.id) {
                                select = true;
                                this.scene.remove(this.scene.children[j]);
                            }
                        }
                        for (var j = 0; j < this.textlabels.length; j++) {
                            if (label === this.textlabels[j]["id"]) {
                                select = true;
                                this.removeTextLabel(this.textlabels[j]["id"]);
                            }
                        }
                        if (select == false) {
                            var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                            for (var i = 0; i < verts_xyz.length; i++) {
                                geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                            }
                            var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                            const line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                            line.userData.id = label;
                            line.name = "selects";
                            this.scene.add(line);
                            this.addTextLabel(label, label_xyz, label, path, "Other lines");
                        }
                    }
                }
            }
            if (this.scenechildren[0].name === "All points") {
                var distance = intersects[0].distanceToRay;
                var index = intersects[0].index;
                for (var i = 1; i < intersects.length; i++) {
                    if (distance > intersects[i].distanceToRay) {
                        distance = intersects[i].distanceToRay;
                        index = intersects[i].index;
                    }
                }
                var attributevertix = this.dataService.getattrvertix();
                var id = this._model.getGeom().getAllPoints()[index].getLabel();
                var label = "";
                var getpoints;
                var getpoints = this.dataService.getpoints;
                var pointname = this.dataService.pointname;
                if (this.SelectVisible === "Points") {
                    if (getpoints !== undefined && getpoints.length !== 0) {
                        for (var i = 0; i < getpoints.length; i++) {
                            if (id === getpoints[i].id) {
                                if (this.dataService.checkpointid === true) {
                                    label = id;
                                    for (var j = 1; j < intersects.length; j++) {
                                        if (intersects[0].distance === intersects[j].distance) {
                                            var index = intersects[j].index;
                                            var id = this._model.getGeom().getAllPoints()[index].getLabel();
                                            if (label !== id)
                                                label = label + "<br/>" + id;
                                        }
                                    }
                                }
                                if (this.dataService.checkX === true)
                                    label = label.concat('<br/>', "X:", getpoints[i].x);
                                if (this.dataService.checkY === true)
                                    label = label.concat('<br/>', "Y:", getpoints[i].y);
                                if (this.dataService.checkZ === true)
                                    label = label.concat('<br/>', "Z:", getpoints[i].z);
                                for (var n = 0; n < pointname.length; n++) {
                                    if (this.dataService.checkname[n] === true) {
                                        label = label.concat('<br/>', pointname[n], ":", getpoints[i][n]);
                                    }
                                }
                            }
                        }
                    }
                }
                if (this.SelectVisible === "Vertices") {
                    var pointid = "";
                    if (getpoints !== undefined && getpoints.length !== 0) {
                        for (var i = 0; i < attributevertix.length; i++) {
                            if (id === attributevertix[i].pointid) {
                                pointid = id;
                                if (this.dataService.checkvertixid === true) {
                                    if (label === "")
                                        label = attributevertix[i].vertixlabel;
                                    else {
                                        label = label + "<br/>" + attributevertix[i].vertixlabel;
                                    }
                                }
                            }
                        }
                        if (this.dataService.pointid === true) {
                            if (pointid !== "") {
                                if (label === "")
                                    label = id;
                                else {
                                    label = label + "<br/>" + id;
                                }
                            }
                        }
                    }
                }
                const verts_xyz = this._model.getGeom().getAllPoints()[index].getPosition(); //vertices.getPoint().getPosition();
                if (this.textlabels.length === 0) {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[0], verts_xyz[1], verts_xyz[2]));
                    var pointsmaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["PointsMaterial"]({ color: 0x00ff00, size: 1 });
                    //pointsmaterial.sizeAttenuation=false;
                    if (this.dataService.pointsize !== undefined) {
                        pointsmaterial.size = this.dataService.pointsize;
                    }
                    const points = new __WEBPACK_IMPORTED_MODULE_1_three__["Points"](geometry, pointsmaterial);
                    points.userData.id = id;
                    points["material"].needsUpdate = true;
                    points.name = "selects";
                    this.scene.add(points);
                    this.addTextLabel(label, verts_xyz, id, id, "All points");
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (id === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (id === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                        }
                    }
                    if (select == false) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[0], verts_xyz[1], verts_xyz[2]));
                        var pointsmaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["PointsMaterial"]({ color: 0x00ff00, size: 1 });
                        if (this.dataService.pointsize !== undefined) {
                            pointsmaterial.size = this.dataService.pointsize;
                        }
                        const points = new __WEBPACK_IMPORTED_MODULE_1_three__["Points"](geometry, pointsmaterial);
                        points.userData.id = id;
                        points["material"].needsUpdate = true;
                        points.name = "selects";
                        this.scene.add(points);
                        this.addTextLabel(label, verts_xyz, id, id, "All points");
                    }
                }
            }
            /*if(this.scenechildren[0].name === "All vertices"){
              var distance:number=intersects[ 0 ].distanceToRay;
              var index:number=intersects[ 0 ].index;
              for(var i=1;i<intersects.length;i++){
                if(distance>intersects[ i ].distanceToRay){
                  distance=intersects[ i ].distanceToRay;
                  index=intersects[ i ].index;
                }
              }
              var id:string=this._model.getGeom().getAllPoints()[index].getLabel();
              var label:string="";
              var getpoints:Array<any>;
              var getpoints=this.dataService.getpoints;
              var pointname=this.dataService.pointname;
      
              /*var path: gs.ITopoPathData = this.scene_and_maps.vertices_map.get(index);
              var vertices: gs.IVertex = this._model.getGeom().getTopo(path) as gs.IVertex;
              var id: string = "";
              var attributevertix=this.dataService.getattrvertix();*/
            //var vertices: gs.IVertex= this._model.getGeom().getTopo(path) as gs.IVertex;
            //var id:string=this._model.getGeom().getAllPoints()[index].getLabel();
            //console.log(vertices.getPoint().getPosition());
            /*var label:string="";
            var attributevertix=this.dataService.getattrvertix();
            console.log(attributevertix);
            for(var i=0;i<attributevertix.length;i++){
              if(vertices.getLabel()===attributevertix[i].vertixlabel){
                id=attributevertix[i].pointid;
                label=vertices.getLabel();
                break;
              }
            }
            console.log(id);
            if(id!==""){
              for(var i=0;i<attributevertix.length;i++){
                if(id===attributevertix[i].pointid){
                  var str=attributevertix[i].vertixlabel;
                  if(label!==str) label=label+"<br/>"+str;
                }
              }
            }*/
            /*const verts_xyz: gs.XYZ = vertices.getPoint().getPosition();//this._model.getGeom().getAllPoints()[index].getPosition();//vertices.getPoint().getPosition();
            console.log(verts_xyz);
            if(this.textlabels.length===0) {
              var geometry=new THREE.Geometry();
              geometry.vertices.push(new THREE.Vector3(verts_xyz[0],verts_xyz[1],verts_xyz[2]));
              var pointsmaterial=new THREE.PointsMaterial( { color:0x00ff00,size:1} );
              //pointsmaterial.sizeAttenuation=false;
              if(this.dataService.pointsize!==undefined){
                pointsmaterial.size=this.dataService.pointsize;
              }
              const points = new THREE.Points( geometry, pointsmaterial);
              points.userData.id=id;
              points["material"].needsUpdate=true;
              points.name="selects";
              this.scene.add(points);
              this.addTextLabel(label,verts_xyz, id,id,"All points");
            }else{
              for(var j=0;j<this.scene.children.length;j++){
                if(id===this.scene.children[j].userData.id){
                  select=true;
                  this.scene.remove(this.scene.children[j]);
                }
              }
              for(var j=0;j<this.textlabels.length;j++){
                  if(id===this.textlabels[j]["id"]){
                    select=true;
                    this.removeTextLabel(this.textlabels[j]["id"]);
                  }
              }
              if(select==false){
                var geometry=new THREE.Geometry();
                geometry.vertices.push(new THREE.Vector3(verts_xyz[0],verts_xyz[1],verts_xyz[2]));
                var pointsmaterial=new THREE.PointsMaterial( { color:0x00ff00,size:1} );
                if(this.dataService.pointsize!==undefined){
                  pointsmaterial.size=this.dataService.pointsize;
                }
                const points = new THREE.Points( geometry, pointsmaterial);
                points.userData.id=id;
                points["material"].needsUpdate=true;
                points.name="selects";
                this.scene.add(points);
                this.addTextLabel(label,verts_xyz, id,id,"All points");
              }
            }
          }*/
        }
        else {
            /*for(var i=0;i<this.dataService.sprite.length;i++){
              this.dataService.sprite[i].visible=false;
            }*/
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].name == "selects") {
                    this.scene.remove(this.scene.children[i]);
                    i = i - 1;
                }
            }
            for (var i = 0; i < this.textlabels.length; i++) {
                this.removeTextLabel(this.textlabels[i]["id"]);
                i = i - 1;
            }
        }
    }
    //To add text labels just provide label text, label position[x,y,z] and its id
    addTextLabel(label, label_xyz, id, path, type) {
        let container = this.myElement.nativeElement.children.namedItem("container");
        let star = this.creatStarGeometry(label_xyz);
        let textLabel = this.createTextLabel(label, star, id, path, type);
        this.starsGeometry.vertices.push(star);
        this.textlabels.push(textLabel);
        this.dataService.pushselecting(textLabel);
        container.appendChild(textLabel.element);
    }
    //To remove text labels just provide its id
    removeTextLabel(id) {
        let i = 0;
        for (i = 0; i < this.textlabels.length; i++) {
            if (this.textlabels[i].id == id) {
                let container = this.myElement.nativeElement.children.namedItem("container");
                container.removeChild(this.textlabels[i].element);
                let index = this.starsGeometry.vertices.indexOf(this.textlabels[i].parent);
                if (index !== -1) {
                    this.starsGeometry.vertices.splice(index, 1);
                }
                break;
            }
        }
        if (i < this.textlabels.length) {
            this.textlabels.splice(i, 1);
            this.dataService.spliceselecting(i, 1);
        }
    }
    creatStarGeometry(label_xyz) {
        let star = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
        star.x = label_xyz[0];
        star.y = label_xyz[1];
        star.z = label_xyz[2];
        return star;
    }
    createTextLabel(label, star, id, path, type) {
        let div = this.createLabelDiv();
        var self = this;
        let textLabel = {
            id: id,
            path: path,
            element: div,
            parent: false,
            type: type,
            position: new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0),
            setHTML: function (html) {
                this.element.innerHTML = html;
            },
            setParent: function (threejsobj) {
                this.parent = threejsobj;
            },
            updatePosition: function () {
                if (parent) {
                    //this.position.copy(this.parent);
                    this.position.copy(this.parent);
                }
                var coords2d = this.get2DCoords(this.position, self.camera);
                this.element.style.left = coords2d.x + 'px';
                this.element.style.top = coords2d.y + 'px';
            },
            get2DCoords: function (position, camera) {
                var vector = position.project(camera);
                vector.x = (vector.x + 1) / 2 * self.width;
                vector.y = -(vector.y - 1) / 2 * self.height;
                return vector;
            }
        };
        textLabel.setHTML(label);
        textLabel.setParent(star);
        return textLabel;
    }
    createLabelDiv() {
        var div = document.createElement("div");
        div.style.color = '#00f';
        div.style.fontFamily = '"Fira Mono", Monaco, "Andale Mono", "Lucida Console", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace';
        div.style.margin = '-5px 0 0 15px';
        div.style.pointerEvents = 'none';
        div.style.position = 'absolute';
        div.style.width = '100';
        div.style.height = '100';
        div.style.top = '-1000';
        div.style.left = '-1000';
        div.style.textShadow = "0px 0px 3px white";
        div.style.color = "black";
        return div;
    }
    zoomfit() {
        event.stopPropagation();
        if (this.dataService.selecting.length === 0) {
            const obj = new __WEBPACK_IMPORTED_MODULE_1_three__["Object3D"]();
            for (var i = 0; i < this.getchildren().length; i++) {
                obj.children.push(this.getchildren()[i]);
            }
            var boxHelper = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxHelper"](obj);
            boxHelper["geometry"].computeBoundingBox();
            boxHelper["geometry"].computeBoundingSphere();
            var boundingSphere = boxHelper["geometry"].boundingSphere;
            var center = boundingSphere.center;
            var radius = boundingSphere.radius;
            var fov = this.camera.fov * (Math.PI / 180);
            var vec_centre_to_pos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            vec_centre_to_pos.subVectors(this.camera.position, center);
            var tmp_vec = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](Math.abs(radius / Math.sin(fov / 2) / 2), Math.abs(radius / Math.sin(fov / 2) / 2), Math.abs(radius / Math.sin(fov / 2) / 2));
            vec_centre_to_pos.setLength(tmp_vec.length());
            var perspectiveNewPos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            perspectiveNewPos.addVectors(center, vec_centre_to_pos);
            var newLookAt = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](center.x, center.y, center.z);
            this.camera.position.copy(perspectiveNewPos);
            this.camera.lookAt(newLookAt);
            this.camera.updateProjectionMatrix();
            this.controls.target.set(newLookAt.x, newLookAt.y, newLookAt.z);
            this.controls.update();
        }
        else {
            var box = this.selectbox();
            var center = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](box["geometry"].boundingSphere.center.x, box["geometry"].boundingSphere.center.y, box["geometry"].boundingSphere.center.z);
            var radius = box["geometry"].boundingSphere.radius;
            if (radius === 0)
                radius = 1;
            var fov = this.camera.fov * (Math.PI / 180);
            var vec_centre_to_pos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            vec_centre_to_pos.subVectors(this.camera.position, center);
            var tmp_vec = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](Math.abs(radius / Math.sin(fov / 2)), Math.abs(radius / Math.sin(fov / 2)), Math.abs(radius / Math.sin(fov / 2)));
            vec_centre_to_pos.setLength(tmp_vec.length());
            var perspectiveNewPos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            perspectiveNewPos.addVectors(center, vec_centre_to_pos);
            var newLookAt = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](center.x, center.y, center.z);
            this.camera.position.copy(perspectiveNewPos);
            this.camera.lookAt(newLookAt);
            this.camera.updateProjectionMatrix();
            this.controls.target.set(newLookAt.x, newLookAt.y, newLookAt.z);
            this.controls.update();
        }
    }
    selectbox() {
        if (this.dataService.selecting.length !== 0) {
            var select = new __WEBPACK_IMPORTED_MODULE_1_three__["Object3D"]();
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].name === "selects") {
                    select.children.push(this.scene.children[i]);
                }
            }
            var box = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxHelper"](select);
            box["geometry"].computeBoundingBox();
            box["geometry"].computeBoundingSphere();
            return box;
        }
    }
    setting(settingVisible) {
        event.stopPropagation();
        this.settingVisible = !this.settingVisible;
    }
    leaflet() {
        event.stopPropagation();
        this.imVisible = !this.imVisible;
        this.dataService.imVisible = this.imVisible;
        //console.log(this.dataService.imVisible);
        /*for(var i=0;i<this.scene.children.length;i++){
          if(this.scene.children[i].type!=="DirectionalLight"&&this.scene.children[i].type!=="HemisphereLight"){
            this.scene.remove(this.scene.children[i]);
          }
        }*/
        /*var mymap = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);*/
        /*let map = L.map("map").setView([38, -77], 13);
        console.log(map);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);*/
    }
};
ViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-viewer',
        template: __webpack_require__("./src/app/gs-viewer/viewer/viewer.component.html"),
        styles: [__webpack_require__("./src/app/gs-viewer/viewer/viewer.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], ViewerComponent);



/***/ }),

/***/ "./src/app/mobius-cesium/data/DataSubscriber.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("./src/app/mobius-cesium/data/data.service.ts");

class DataSubscriber {
    constructor(injector) {
        this.dataService = injector.get(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]);
        this._subscription = this.dataService.getMessage().subscribe(message => {
            this._message = message;
            this.notify(message.text);
        });
    }
    notify(message) {
        console.warn("Notify function not Implemented");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DataSubscriber;



/***/ }),

/***/ "./src/app/mobius-cesium/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm2015/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let DataService = class DataService {
    constructor() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    sendMessage(message) {
        this.subject.next({ text: message });
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage() {
        return this.subject.asObservable();
    }
    getGsModel() {
        return this._jsonModel;
    }
    setMode(mode) {
        this.mode = mode;
    }
    setGsModel(model) {
        delete this._jsonModel;
        const json = this._jsonModel;
        this._jsonModel = model;
        if (this._jsonModel !== undefined) {
            this.clearAll();
        }
        this.sendMessage("model_update");
    }
    clearAll() {
        delete this.hideElementArr;
        delete this._HideNum;
        delete this._ViData;
        delete this._PuData;
        delete this._index;
        delete this._Filter;
    }
    getViewer() {
        return this.viewer;
    }
    setViewer(_viewer) {
        this.viewer = _viewer;
    }
    get_SelectedEntity() {
        return this._SelectedEntity;
    }
    set_SelectedEntity(_SelectedEntity) {
        this._SelectedEntity = _SelectedEntity;
    }
    getcesiumpromise() {
        return this.cesiumpromise;
    }
    setcesiumpromise(cesiumpromise) {
        delete this.cesiumpromise;
        this.cesiumpromise = cesiumpromise;
    }
    gethideElementArr() {
        return this.hideElementArr;
    }
    get_HideNum() {
        return this._HideNum;
    }
    getmode() {
        return this.mode;
    }
    get_index() {
        return this._index;
    }
    set_index(_index) {
        this._index = _index;
    }
    /*public set_imageryViewModels() :void{
      this._imageryViewModels.push(new Cesium.ProviderViewModel({
       name : "Stamen Toner",
       iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/stamenToner.png"),
       tooltip : "A high contrast black and white map.\nhttp://www.maps.stamen.com/",
       creationFunction : function() {
           return Cesium.createOpenStreetMapImageryProvider({
               url : "https://stamen-tiles.a.ssl.fastly.net/toner/",
           });
       },
      }));
      this._imageryViewModels.push(new Cesium.ProviderViewModel({
       name : "Stamen Toner(Lite)",
       iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/stamenToner.png"),
       tooltip : "A high contrast black and white map(Lite).\nhttp://www.maps.stamen.com/",
       creationFunction : function() {
           return Cesium.createOpenStreetMapImageryProvider({
               url : "https://stamen-tiles.a.ssl.fastly.net/toner-lite/",
           });
       },
      }));
      this._imageryViewModels.push(new Cesium.ProviderViewModel({
       name : "Terrain(Standard)",
       iconUrl : Cesium.buildModuleUrl("Widgets/Images/TerrainProviders/CesiumWorldTerrain.png"),
       tooltip : "A high contrast black and white map(Standard).\nhttp://www.maps.stamen.com/",
       creationFunction : function() {
           return Cesium.createOpenStreetMapImageryProvider({
               url : "https://stamen-tiles.a.ssl.fastly.net/terrain/",
           });
       },
      }));
      this._imageryViewModels.push(new Cesium.ProviderViewModel({
       name : "Terrain(Background)",
       iconUrl : Cesium.buildModuleUrl("Widgets/Images/TerrainProviders/CesiumWorldTerrain.png"),
       tooltip : "A high contrast black and white map(Background).\nhttp://www.maps.stamen.com/",
       creationFunction : function() {
           return Cesium.createOpenStreetMapImageryProvider({
               url : "https://stamen-tiles.a.ssl.fastly.net/terrain-background/",
           });
       },
      }));
      this._imageryViewModels.push(new Cesium.ProviderViewModel({
       name : "Open\u00adStreet\u00adMap",
       iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/openStreetMap.png"),
       tooltip : "OpenStreetMap (OSM) is a collaborative project to create a free editable \
               map of the world.\nhttp://www.openstreetmap.org",
       creationFunction : function() {
           return Cesium.createOpenStreetMapImageryProvider({
               url : "https://a.tile.openstreetmap.org/",
           });
       },
      }));
  
      this._imageryViewModels.push(new Cesium.ProviderViewModel({
       name : "Earth at Night",
       iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/earthAtNight.png"),
       tooltip : "The lights of cities and villages trace the outlines of civilization \
                   in this global view of the Earth at night as seen by NASA/NOAA\'s Suomi NPP satellite.",
       creationFunction : function() {
           return new Cesium.IonImageryProvider({ assetId: 3812 });
       },
      }));
  
      this._imageryViewModels.push(new Cesium.ProviderViewModel({
       name : "Natural Earth\u00a0II",
       iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/naturalEarthII.png"),
       tooltip : "Natural Earth II, darkened for contrast.\nhttp://www.naturalearthdata.com/",
       creationFunction : function() {
           return Cesium.createTileMapServiceImageryProvider({
               url : Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
           });
       },
      }));
  
      this._imageryViewModels.push(new Cesium.ProviderViewModel({
       name : "Blue Marble",
       iconUrl : Cesium.buildModuleUrl("Widgets/Images/ImageryProviders/blueMarble.png"),
       tooltip : "Blue Marble Next Generation July, 2004 imagery from NASA.",
       creationFunction : function() {
           return new Cesium.IonImageryProvider({ assetId: 3845 });
       },
      }));
    }
    public get_imageryViewModels(): any[] {
      return this._imageryViewModels;
    }*/
    set_Imagery(_Imagery) {
        this._Imagery = _Imagery;
    }
    get_Imagery() {
        return this._Imagery;
    }
    getValue(model) {
        if (model !== undefined) {
            let propertyName = Object.keys(model["features"][0].properties);
            let feature_instance;
            let property = propertyName;
            if (model["features"].length > 1) {
                for (let i = 1; i < model["features"].length; i++) {
                    property = property.concat(Object.keys(model["features"][i].properties));
                }
            }
            propertyName = property.reduce(function (a, b) {
                if (a.indexOf(b) < 0)
                    a.push(b);
                return a;
            }, []);
            /*for(let i = 0 ;i<model["features"].length;i++){
              if(model["features"][i].geometry.type === "Polygon"){
                 propertyName= Object.keys(model["features"][i].properties);
                 feature_instance = model["features"][i];
                break;
              }
            }*/
            propertyName.sort();
            propertyName.unshift("None");
            const propertyNames = propertyName.filter(function (value) {
                return value != 'TYPE' && value != 'COLOR' && value != 'HEIGHT' && value != 'EXTRUHEIGHT';
            });
            const _ColorValue = propertyNames[0];
            for (let i = 0; i < model["features"].length; i++) {
                if (model["features"][i].geometry.type === "Polygon" || model["features"][i].geometry.type === "MultiPolygon") {
                    //propertyName= Object.keys(model["features"][i].properties);
                    feature_instance = model["features"][i];
                    break;
                }
            }
            const _HeightKey = propertyNames.filter(function (prop_name) {
                const value = feature_instance.properties[prop_name];
                return (typeof (value) === "number");
            });
            _HeightKey.sort();
            _HeightKey.unshift("None");
            const _HeightValue = _HeightKey[0];
            const promise = this.cesiumpromise;
            const _Heighttexts = [];
            const _Colortexts = [];
            const _indexArr = [];
            const self = this;
            promise.then(function (dataSource) {
                const entities = dataSource.entities.values;
                for (const entity of entities) {
                    if (entity.properties["TYPE"] === undefined || entity.properties["TYPE"]._value !== "STATIC") {
                        if (entity.properties[_HeightValue] !== undefined) {
                            if (entity.properties[_HeightValue]._value !== " ") {
                                if (_Heighttexts.length === 0) {
                                    _Heighttexts[0] = entity.properties[_HeightValue]._value;
                                }
                                else {
                                    if (_Heighttexts.indexOf(entity.properties[_HeightValue]._value) === -1) {
                                        _Heighttexts.push(entity.properties[_HeightValue]._value);
                                    }
                                }
                            }
                        }
                        if (entity.properties[_ColorValue] !== undefined) {
                            if (entity.properties[_ColorValue]._value !== " ") {
                                if (_Colortexts.length === 0) {
                                    _Colortexts[0] = entity.properties[_ColorValue]._value;
                                }
                                else {
                                    if (_Colortexts.indexOf(entity.properties[_ColorValue]._value) === -1) {
                                        _Colortexts.push(entity.properties[_ColorValue]._value);
                                    }
                                }
                            }
                        }
                        _indexArr.push(entities.indexOf(entity));
                    }
                    else {
                        entity.polygon.height = entity.properties["HEIGHT"];
                        entity.polygon.extrudedHeight = entity.properties["EXTRUHEIGHT"];
                        const ColorValue = entity.properties["COLOR"]._value;
                        entity.polygon.material = Cesium.Color.fromBytes(ColorValue[0], ColorValue[1], ColorValue[2], ColorValue[3]);
                    }
                    if (entity.polygon !== undefined) {
                        entity.polygon.outlineColor = Cesium.Color.Black;
                    }
                    if (entity.billboard !== undefined) {
                        entity.billboard = undefined;
                        entity.point = new Cesium.PointGraphics({
                            color: Cesium.Color.BLUE,
                            pixelSize: 10,
                        });
                    }
                }
            });
            const _MinColor = Math.min.apply(Math, _Colortexts);
            const _MaxColor = Math.max.apply(Math, _Colortexts);
            const _MinHeight = Math.min.apply(Math, _Heighttexts);
            const _MaxHeight = Math.max.apply(Math, _Heighttexts);
            const _Filter = [];
            const _HideNum = [];
            this.getViData(propertyNames, _Colortexts.sort(), _ColorValue, _MinColor, _MaxColor, false, _HeightKey, _Heighttexts.sort(), _HeightValue, _MinHeight, _MaxHeight, 1, false, false, _Filter, _HideNum, _indexArr);
        }
    }
    get_ViData() {
        return this._ViData;
    }
    set_ViData(_ViData) {
        this._ViData = _ViData;
    }
    LoadJSONData() {
        if (this._jsonModel !== undefined && this._jsonModel["cesium"] !== undefined) {
            const cesiumData = this._jsonModel["cesium"];
            let _ColorDescr;
            let _ColorValue;
            let _MinColor;
            let _MaxColor;
            let _ColorInvert;
            let _HeightDescr;
            const _HeightKey = [];
            let _HeightValue;
            let _MinHeight;
            let _MaxHeight;
            let _HeightInvert;
            let _HeightScale;
            let _HeightLine;
            let _filters;
            const _ceisumData = [];
            const _propertyNames = [];
            const _HideNum = [];
            const _indexArr = [];
            if (cesiumData["colour"] !== undefined) {
                if (cesiumData["colour"]["descr"] !== undefined) {
                    _ColorDescr = cesiumData["colour"]["descr"];
                }
                if (cesiumData["colour"]["attribs"] !== undefined) {
                    for (const data of cesiumData["colour"]["attribs"]) {
                        _propertyNames.push(data["name"]);
                    }
                    _ColorValue = _propertyNames[0];
                    _MinColor = cesiumData["colour"]["attribs"][0]["min"];
                    _MaxColor = cesiumData["colour"]["attribs"][0]["max"];
                    if (cesiumData["colour"]["attribs"][0]["invert"] === true) {
                        _ColorInvert = true;
                    }
                    else {
                        _ColorInvert = false;
                    }
                }
            }
            if (cesiumData["extrude"] !== undefined) {
                if (cesiumData["extrude"]["descr"] !== undefined) {
                    _HeightDescr = cesiumData["extrude"]["descr"];
                }
                if (cesiumData["extrude"]["attribs"] !== undefined) {
                    for (const data of cesiumData["extrude"]["attribs"]) {
                        _HeightKey.push(data["name"]);
                    }
                    _HeightValue = _HeightKey[0];
                    _MinHeight = cesiumData["extrude"]["attribs"][0]["min"];
                    _MaxHeight = cesiumData["extrude"]["attribs"][0]["max"];
                    if (cesiumData["extrude"]["attribs"][0]["invert"] === true) {
                        _HeightInvert = true;
                    }
                    else {
                        _HeightInvert = false;
                    }
                    if (cesiumData["extrude"]["attribs"][0]["line"] === true) {
                        _HeightLine = true;
                    }
                    else {
                        _HeightLine = false;
                    }
                    if (cesiumData["extrude"]["attribs"][0]["scale"] !== undefined) {
                        _HeightScale = cesiumData["extrude"]["attribs"][0]["scale"];
                    }
                    else {
                        _HeightScale = 1;
                    }
                }
            }
            const promise = this.cesiumpromise;
            const _Heighttexts = [];
            const _Colortexts = [];
            const self = this;
            promise.then(function (dataSource) {
                const entities = dataSource.entities.values;
                for (const entity of entities) {
                    if (entity.properties[_HeightValue] !== undefined) {
                        if (entity.properties[_HeightValue]._value !== " ") {
                            if (_Heighttexts.length === 0) {
                                _Heighttexts[0] = entity.properties[_HeightValue]._value;
                            }
                            else {
                                if (_Heighttexts.indexOf(entity.properties[_HeightValue]._value) === -1) {
                                    _Heighttexts.push(entity.properties[_HeightValue]._value);
                                }
                            }
                        }
                    }
                    if (entity.properties[_ColorValue] !== undefined) {
                        if (entity.properties[_ColorValue]._value !== " ") {
                            if (_Colortexts.length === 0) {
                                _Colortexts[0] = entity.properties[_ColorValue]._value;
                            }
                            else {
                                if (_Colortexts.indexOf(entity.properties[_ColorValue]._value) === -1) {
                                    _Colortexts.push(entity.properties[_ColorValue]._value);
                                }
                            }
                        }
                    }
                    if (entity.polygon !== undefined) {
                        entity.polygon.outlineColor = Cesium.Color.Black;
                    }
                    if (entity.billboard !== undefined) {
                        entity.billboard = undefined;
                        entity.point = new Cesium.PointGraphics({
                            color: Cesium.Color.BLUE,
                            pixelSize: 10,
                        });
                    }
                    _indexArr.push(entities.indexOf(entity));
                }
            });
            if (cesiumData["filters"] !== undefined) {
                _filters = cesiumData["filters"];
                let lastnumber;
                this._Filter = [];
                this._HideNum = [];
                if (_filters !== undefined && _filters.length !== 0) {
                    for (const _filter of _filters) {
                        if (this._HideNum.length === 0) {
                            this._HideNum[0] = "0";
                            lastnumber = this._HideNum[0];
                        }
                        else {
                            for (let j = 0; j < this._HideNum.length + 1; j++) {
                                if (this._HideNum.indexOf(String(j)) === -1) {
                                    this._HideNum.push(String(j));
                                    lastnumber = String(j);
                                    break;
                                }
                            }
                        }
                        if (_filter["name"] !== undefined) {
                            const _propertyname = _filter["name"];
                            const _relation = Number(_filter["relation"]);
                            const _text = _filter["value"];
                            const _descr = _filter["descr"];
                            let _HideType;
                            let _texts;
                            if (typeof (_text) === "number") {
                                _HideType = "number";
                                _texts = this.Initial(_propertyname);
                            }
                            else if (typeof (_text) === "string") {
                                _HideType = "category";
                                _texts = this.Initial(_propertyname);
                                _texts = ["None"].concat(_texts);
                            }
                            this._Filter.push({ divid: String("addHide".concat(String(lastnumber))), id: lastnumber,
                                HeightHide: _propertyname, type: _HideType, Category: _texts,
                                CategaryHide: _text, descr: _descr, RelaHide: _relation,
                                textHide: _text, HideMax: Math.ceil(Math.max.apply(Math, _texts)),
                                HideMin: Math.floor(Math.min.apply(Math, _texts) * 100) / 100, Disabletext: null });
                        }
                    }
                }
            }
            else {
                this._Filter = [];
                this._HideNum = [];
            }
            this.getPuData(_ColorDescr, _propertyNames, _Colortexts.sort(), _ColorValue, _MinColor, _MaxColor, _ColorInvert, _HeightDescr, _HeightKey, _Heighttexts.sort(), _HeightValue, _MinHeight, _MaxHeight, _HeightScale, _HeightInvert, _HeightLine, this._Filter, this._HideNum, _indexArr);
        }
    }
    Initial(_HideValue) {
        const texts = [];
        const promise = this.getcesiumpromise();
        const self = this;
        promise.then(function (dataSource) {
            const entities = dataSource.entities.values;
            for (const entity of entities) {
                if (entity.properties[_HideValue] !== undefined) {
                    if (entity.properties[_HideValue]._value !== " ") {
                        if (texts.length === 0) {
                            texts[0] = entity.properties[_HideValue]._value;
                        }
                        else {
                            if (texts.indexOf(entity.properties[_HideValue]._value) === -1) {
                                texts.push(entity.properties[_HideValue]._value);
                            }
                        }
                    }
                }
            }
        });
        return texts;
    }
    get_PuData() {
        return this._PuData;
    }
    set_PuData(_PuData) {
        this._PuData = _PuData;
    }
    getViData(_ColorProperty, _ColorText, _ColorKey, _ColorMin, _ColorMax, _ColorInvert, _ExtrudeProperty, _ExtrudeText, _ExturdeValue, _ExtrudeMin, _ExtrudeMax, _Scale, _Invert, _HeightChart, _Filter, _HideNum, _indexArr) {
        this._ViData = { ColorProperty: _ColorProperty, ColorText: _ColorText, ColorKey: _ColorKey,
            ColorMin: _ColorMin, ColorMax: _ColorMax, ColorInvert: _ColorInvert,
            ExtrudeProperty: _ExtrudeProperty, ExtrudeText: _ExtrudeText, ExtrudeKey: _ExturdeValue,
            ExtrudeMin: _ExtrudeMin, ExtrudeMax: _ExtrudeMax, Scale: _Scale, Invert: _Invert,
            HeightChart: _HeightChart, Filter: _Filter, HideNum: _HideNum, indexArr: _indexArr };
    }
    getPuData(_ColorDescr, _ColorProperty, _ColorText, _ColorKey, _ColorMin, _ColorMax, _ColorInvert, _ExtrudeDescr, _ExtrudeProperty, _ExtrudeText, _ExturdeValue, _ExtrudeMin, _ExtrudeMax, _Scale, _Invert, _HeightChart, _Filter, _HideNum, _indexArr) {
        this._PuData = { ColorDescr: _ColorDescr, ColorProperty: _ColorProperty, ColorText: _ColorText,
            ColorKey: _ColorKey, ColorMin: _ColorMin, ColorMax: _ColorMax, ColorInvert: _ColorInvert,
            ExtrudeDescr: _ExtrudeDescr, ExtrudeProperty: _ExtrudeProperty, ExtrudeText: _ExtrudeText,
            ExtrudeKey: _ExturdeValue, ExtrudeMin: _ExtrudeMin, ExtrudeMax: _ExtrudeMax,
            Scale: _Scale, Invert: _Invert, HeightChart: _HeightChart, Filter: _Filter, HideNum: _HideNum, indexArr: _indexArr };
    }
};
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], DataService);



/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mobiuscesium\" style=\"height: 100%\">\r\n\t<cesium-viewer></cesium-viewer>\r\n\t<div id=\"Toggle\" (click)=\"toggleSlider()\" ><span style=\"vertical-align: middle;\">▹</span></div>\r\n\t<div id=\"slide-nav\"  [@slide_in_out]=\"slider_state\" style=\"position: absolute;z-index: 101;top:0px;height: 100%\">\r\n  \t\t<app-setting ></app-setting>\r\n\t</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n@font-face {\n  font-family: \"FontAwesome\"; }\n.font-awesome-hand {\n  font-family: FontAwesome; }\n.font-awesome-hand::after {\n  font-family: FontAwesome; }\n#mobiuscesium {\n  height: 101%;\n  font-family: sans-serif !important;\n  margin: 0px !important;\n  padding: 0px !important;\n  font-size: 14px; }\n#button {\n  position: absolute;\n  z-index: 99; }\n#Toggle {\n  position: absolute;\n  top: calc(50% - 30px);\n  z-index: 200;\n  width: 30px;\n  height: 70px;\n  border-top: 1px solid gray;\n  border-right: 1px solid gray;\n  border-bottom: 1px solid gray;\n  background-color: rgba(20, 20, 20, 0.5);\n  color: #ddd;\n  text-align: center;\n  font-size: 32px;\n  line-height: 70px;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobiuscesiumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/mobius-cesium/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm2015/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MobiuscesiumComponent = class MobiuscesiumComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.slider_state = "slide_out";
    }
    ;
    setModel(data) {
        try {
            this.dataService.setGsModel(data);
            // console.log("mode: ", this.mode);
        }
        catch (ex) {
            this.data = undefined;
            //console.error("Error generating model");
        }
    }
    ngOnInit() {
        this.setModel(this.data);
        // console.log("Setting", this.mode)
        this.dataService.setMode(this.mode);
        // console.log(this.data);
    }
    ngDoCheck() {
        if (this.dataService.getGsModel() !== this.data) {
            this.setModel(this.data);
            // console.log("data changed");
            // console.log("mode:", this.mode);
        }
    }
    toggleSlider() {
        // do something to change the animation_state variable
        this.slider_state = this.slider_state === "slide_out" ? "slide_in" : "slide_out";
        let toggle = document.getElementById("Toggle");
        if (this.slider_state === "slide_out") {
            toggle.style.left = "0px";
            toggle.innerHTML = "▹";
        }
        else if (this.slider_state === "slide_in") {
            toggle.style.left = "280px";
            toggle.innerHTML = "◃";
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], MobiuscesiumComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], MobiuscesiumComponent.prototype, "mode", void 0);
MobiuscesiumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "mobius-cesium",
        template: __webpack_require__("./src/app/mobius-cesium/mobius-cesium.component.html"),
        styles: [__webpack_require__("./src/app/mobius-cesium/mobius-cesium.component.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])("slide_in_out", [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])("slide_in", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                    width: "280px",
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])("slide_out", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                    width: "0px"
                    // css styles when the element is in slide_out
                })),
                // animation effect when transitioning from one state to another
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])("slide_in <=> slide_out", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(300))
            ]),
        ],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
], MobiuscesiumComponent);



/***/ }),

/***/ "./src/app/mobius-cesium/mobius-cesium.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobiusCesium; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__ = __webpack_require__("./src/app/mobius-cesium/mobius-cesium.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewer_viewer_component__ = __webpack_require__("./src/app/mobius-cesium/viewer/viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_data_service__ = __webpack_require__("./src/app/mobius-cesium/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_split__ = __webpack_require__("./node_modules/angular-split/esm2015/angular-split.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__setting_setting_component__ = __webpack_require__("./src/app/mobius-cesium/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__setting_visualise_component__ = __webpack_require__("./src/app/mobius-cesium/setting/visualise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__setting_attributes_copmponent__ = __webpack_require__("./src/app/mobius-cesium/setting/attributes.copmponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__setting_publish_component__ = __webpack_require__("./src/app/mobius-cesium/setting/publish.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__setting_display_copmponent__ = __webpack_require__("./src/app/mobius-cesium/setting/display.copmponent.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let MobiusCesium = MobiusCesium_1 = class MobiusCesium {
    static forRoot() {
        return {
            ngModule: MobiusCesium_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__data_data_service__["a" /* DataService */],
            ],
        };
    }
};
MobiusCesium = MobiusCesium_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_split__["a" /* AngularSplitModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__["a" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material_tooltip__["a" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material_slider__["a" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__["a" /* MobiuscesiumComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__mobius_cesium_component__["a" /* MobiuscesiumComponent */],
            __WEBPACK_IMPORTED_MODULE_3__viewer_viewer_component__["a" /* ViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__setting_setting_component__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_13__setting_visualise_component__["a" /* DataComponent */],
            __WEBPACK_IMPORTED_MODULE_14__setting_attributes_copmponent__["a" /* SelectComponent */],
            __WEBPACK_IMPORTED_MODULE_15__setting_publish_component__["a" /* PublishComponent */],
            __WEBPACK_IMPORTED_MODULE_16__setting_display_copmponent__["a" /* DisplayComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__data_data_service__["a" /* DataService */]],
    })
], MobiusCesium);

var MobiusCesium_1;


/***/ }),

/***/ "./src/app/mobius-cesium/setting/attributes.component.css":
/***/ (function(module, exports) {

module.exports = "/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#D3D3D3 !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #D3D3D3;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: transparent;\r\n}\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  color: #D3D3D3;\r\n  background: transparent;\r\n}\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #8AA8C0;\r\n  border: 1px solid #8AA8C0;\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #D3D3D3 !important;\r\n  padding: 0; \r\n  color:#D3D3D3 !important;\r\n  width: 100%;\r\n  background-color: #D3D3D3 !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/attributes.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"AttribsView\"  style=\"background-color: rgba(20,20,20,0.9);height: 100%;overflow-y:overlay;\"  >\r\n\t<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n\t  <tr >\r\n\t    <th style=\"font-size: 10px;font-weight: normal;width: 85px;\"><div style=\"width: 85px;height:16px;background: #395D73;color:white;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">ID</div></th>\r\n\t    <th style=\"font-size: 10px;font-weight: normal;width: 85px\"><div matTooltip={{ID}} style=\"width: 85px;height:16px;background: #395D73;color:white;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{ID}}</div></th>\r\n\t  </tr>\r\n\t</table>\r\n\t<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\">\r\n\t  <tr *ngFor=\"let Property of _Properties\">\r\n\t    <th style=\"font-size: 10px;font-weight: normal;color:#D3D3D3 ;width: 85px;height: 14px\"><div matTooltip={{Property.Name}} style=\"width: 85px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{Property.Name}}</div></th>\r\n\t    <th style=\"font-size: 10px;font-weight: normal;color:#D3D3D3 ;width: 85px;height: 14px\"><div matTooltip={{Property.Value}} style=\"width: 85px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{Property.Value}}</div></th>\r\n\t  </tr>\r\n\t</table>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/attributes.copmponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let SelectComponent = class SelectComponent extends __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */] {
    constructor(injector, myElement) {
        super(injector);
    }
    ngOnInit() {
        this.data = this.dataService.getGsModel();
        this.mode = this.dataService.getmode();
        this.viewer = this.dataService.getViewer();
        this.dataArr = this.dataService.get_ViData();
    }
    notify(message) {
        if (message === "model_update") {
            this.data = this.dataService.getGsModel();
            this.mode = this.dataService.getmode();
            this.dataArr = this.dataService.get_ViData();
        }
    }
    ngDoCheck() {
        if (this.viewer !== undefined && this.dataService.get_SelectedEntity() !== undefined && this.mode === "editor") {
            if (this.ID !== this.dataService.get_SelectedEntity()._id) {
                let _Property;
                this.ID = this.dataService.get_SelectedEntity()._id;
                this._Properties = [];
                for (const _ColorPro of this.dataArr["ColorProperty"]) {
                    if (_ColorPro !== "None") {
                        _Property = [];
                        _Property.Name = _ColorPro;
                        if (this.dataService.get_SelectedEntity().properties[_Property.Name] !== undefined) {
                            _Property.Value = this.dataService.get_SelectedEntity().properties[_Property.Name]._value;
                        }
                        else {
                            _Property.Value = ' ';
                        }
                        this._Properties.push(_Property);
                    }
                }
            }
        }
    }
};
SelectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "app-select",
        template: __webpack_require__("./src/app/mobius-cesium/setting/attributes.component.html"),
        styles: [__webpack_require__("./src/app/mobius-cesium/setting/attributes.component.css")],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], SelectComponent);



/***/ }),

/***/ "./src/app/mobius-cesium/setting/display.copmponent.css":
/***/ (function(module, exports) {

module.exports = "/*/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#D3D3D3 !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n\r\n/deep/.mat-header{\r\n  flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n\r\n\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n.mat-slider{\r\n    width: 150px !important;\r\n}*/\r\n\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #D3D3D3;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: transparent;\r\n}\r\n\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  color: #D3D3D3;\r\n  background: transparent;\r\n}\r\n\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #8AA8C0;\r\n  border: 1px solid #8AA8C0;\r\n}\r\n\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #D3D3D3 !important;\r\n  padding: 0; \r\n  color:#D3D3D3 !important;\r\n  width: 100%;\r\n  background-color: #D3D3D3 !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/display.copmponent.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"DisplayView\"  style=\"background-color: rgba(20,20,20,0.9);height: 100%;overflow-y:overlay;\"  >\r\n\t<table>\r\n      <tr>\r\n      <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Imagery</div></th>\r\n      <th><div>\r\n        <select class=\"cesium-button\" (change)=\"onChangeImagery($event.target.value)\" [ngModel]=\"_Imagery\">\r\n          <option class=\"cesium-option\"  *ngFor=\"let Imagery of _ImageryList\" value={{Imagery}}>{{Imagery}}</option>\r\n        </select>\r\n      </div></th>\r\n      </tr>\r\n    </table>\r\n    <hr>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Shadows</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_Shadow\" (click)=\"changeShadow()\"></div></th></tr>\r\n    </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Date</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\"  value={{_ExtrudeMin}} style=\"width:80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left\" (change)=\"changeDate($event.target.value)\"></th></tr>  \r\n     </table>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/display.copmponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let DisplayComponent = class DisplayComponent extends __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */] {
    constructor(injector, myElement) {
        super(injector);
    }
    ngOnInit() {
        this.data = this.dataService.getGsModel();
        this._ImageryList = ["Display", "Stamen Toner", "Stamen Toner(Lite)", "Terrain(Standard)", "Terrain(Background)",
            "OpenStreetMap", "Earth at Night", "Natural Earth\u00a0II", "Blue Marble"];
        if (this._Imagery === undefined) {
            this._Imagery = this._ImageryList[0];
        }
        else {
            this._Imagery = this.dataService.get_Imagery();
        }
    }
    notify(message) {
    }
    onChangeImagery(_Imagery) {
        this._Imagery = _Imagery;
        this.dataService.set_Imagery(_Imagery);
        const layers = this.dataService.getViewer().scene.imageryLayers;
        if (_Imagery === this._ImageryList[0]) {
            layers.removeAll();
            this.dataService.getViewer().scene.globe.baseColor = Cesium.Color.GRAY;
        }
        else if (_Imagery === this._ImageryList[1]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://stamen-tiles.a.ssl.fastly.net/toner/"
            }));
        }
        else if (_Imagery === this._ImageryList[2]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://stamen-tiles.a.ssl.fastly.net/toner-lite/"
            }));
        }
        else if (_Imagery === this._ImageryList[3]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://stamen-tiles.a.ssl.fastly.net/terrain/"
            }));
        }
        else if (_Imagery === this._ImageryList[4]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://stamen-tiles.a.ssl.fastly.net/terrain-background/"
            }));
        }
        else if (_Imagery === this._ImageryList[5]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createOpenStreetMapImageryProvider({
                url: "https://a.tile.openstreetmap.org/"
            }));
        }
        else if (_Imagery === this._ImageryList[6]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3812 }));
            //blackMarble.alpha = 0.5; 
        }
        else if (_Imagery === this._ImageryList[7]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(Cesium.createTileMapServiceImageryProvider({
                url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
            }));
        }
        else if (_Imagery === this._ImageryList[8]) {
            layers.removeAll();
            var blackMarble = layers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3845 }));
        }
    }
};
DisplayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "app-display",
        template: __webpack_require__("./src/app/mobius-cesium/setting/display.copmponent.html"),
        styles: [__webpack_require__("./src/app/mobius-cesium/setting/display.copmponent.css")],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], DisplayComponent);



/***/ }),

/***/ "./src/app/mobius-cesium/setting/publish.component.css":
/***/ (function(module, exports) {

module.exports = "#publishwindow{\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#D3D3D3 !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 16px;\r\n  overflow-x: hidden !important;\r\n}\r\n\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n    padding: 0px;\r\n    height: 24px;\r\n    /*min-width: 50px;*/\r\n    -webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    -ms-touch-action: none;\r\n        touch-action: none;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    -webkit-user-drag: none;\r\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n\r\n.mat-slider{\r\n    width: 100%;\r\n    display: inline-block;\r\n    position: relative;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    outline: 0;\r\n    vertical-align: middle;\r\n}\r\n\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #D3D3D3;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: transparent;\r\n}\r\n\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  color: #D3D3D3;\r\n  background: transparent;\r\n}\r\n\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #8AA8C0;\r\n  border: 1px solid #8AA8C0;\r\n}\r\n\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #D3D3D3 !important;\r\n  padding: 0; \r\n  color:#D3D3D3 !important;\r\n  width: 100%;\r\n  background-color: #D3D3D3 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/publish.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"publish\" style=\"background-color: rgba(20,20,20,0.9);height: 100%;overflow-y:overlay;\"  >\r\n\r\n<div id=\"publishwindow\" *ngIf=\"dataArr!==undefined\">\r\n        <div *ngIf=\"_ColorKey!==undefined\">\r\n        <table >\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 280px\" *ngIf=\"_ColorDescr!==undefined\"><div style=\"color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;font-size:14px;line-height:16px;\">{{_ColorDescr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Color&nbsp;&nbsp;:</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeColor($event.target.value)\" [ngModel]=\"_ColorKey\">\r\n              <option class=\"cesium-option\"  *ngFor=\"let ColorName of _ColorProperty\" value={{ColorName}}>{{ColorName}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n          </table>\r\n    </div>\r\n    <div *ngIf=\"_ExtrudeKey!==undefined\">\r\n        <hr>\r\n          <table >\r\n          <tr>\r\n          <th class=\"colorkey\" style=\"width: 280px\" *ngIf=\"_ExtrudeDescr!==undefined\"><div style=\"color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;font-size:14px;line-height:16px;\">{{_ExtrudeDescr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Extrude&nbsp;&nbsp;:</div></th>\r\n          <th><div>\r\n            <select class=\"cesium-button\" (change)=\"onChangeHeight($event.target.value)\" [ngModel]=\"_ExtrudeKey\">\r\n               <option class=\"cesium-option\"  *ngFor=\"let Height of _ExtrudeProperty\" value={{Height}}>{{Height}}</option>\r\n            </select>\r\n          </div></th>\r\n          </tr>\r\n        </table>\r\n        <table>\r\n          <tr ><th style=\"width:40px;height: 25px;\"><div style=\"width: 40px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Min&nbsp;&nbsp;:</div></th>\r\n          <th style=\"width:40px;\"><div style=\"width: 40px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\" *ngIf=\"_ExtrudeMin!==undefined\">{{_ExtrudeMin}}</div></th></tr>\r\n\r\n          <tr><th style=\"width:40px;\"><div style=\"width: 40px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Max&nbsp;&nbsp;:</div></th>\r\n          <th style=\"width:60px;\"><div style=\"width: 60px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\" *ngIf=\"_ExtrudeMax!==undefined\">{{_ExtrudeMax}}</div></th></tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"_Filter!==undefined\">\r\n      <hr>\r\n      <div class=\"hide-container\" style=\"margin-top:5px;\">\r\n        <div *ngFor=\"let item of _Filter;\" id={{item.divid}}>\r\n      <table>\r\n        <tr >\r\n          <th style=\"width:280px;height: 25px;\"><div style=\"color:#D3D3D3 !important;text-align: left;vertical-align: middle;font-weight: normal;font-size:14px;line-height:16px;\">{{item.descr}}</div></th></tr>\r\n        </table>\r\n        <table>\r\n          <tr>\r\n            <th style=\"max-width: 80px;height: 25px;\"><div matTooltip={{item.HeightHide}} style=\"max-width: 80px;color:#D3D3D3 !important;text-align: left;vertical-align: middle;font-weight: normal;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{item.HeightHide}}</div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:20px;height: 25px;\">\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 0\">></div>\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 1\"><</div>\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 2\">=</div></th>\r\n          <th *ngIf=\"item.type === 'category'\" style=\"width:30px;height: 25px;\">\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 0\">none</div>\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 1\">=</div>\r\n          <div style=\"width:20px;height: 25px;color:#D3D3D3 !important;vertical-align: middle;font-weight: normal;margin-top: 10px;\" *ngIf=\"item.RelaHide === 2\">!=</div></th>\r\n          <th *ngIf=\"item.type === 'number'\" style=\"width:80px;color:#395D73 !important;\"><input type=\"text\" id={{item.id}} value={{item.textHide}} (change)=\"Changetext($event.target.value,item.id)\" style=\"width:80px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;\"></th>\r\n          <th *ngIf=\"item.type === 'category'\" style=\"width:73px;height: 25px;\"><div style=\"width:73px;height: 25px;\">\r\n          <select class=\"cesium-button-select\" [ngModel]=\"item.CategaryHide\" (change)=\"ChangeCategory($event.target.value,item.id,1)\" style=\"width:73px;height: 25px;\">\r\n            <option class=\"cesium-option\" *ngFor=\"let caty of item.Category\" value={{caty}}>{{caty}}</option>\r\n          </select></div></th>\r\n        <th style=\"width:20px;height: 22px;\" id={{item.id}}><input type=\"checkbox\" id={{item.id}} checked=\"checked\" (click)=\"Disable(item.id)\" style=\"width:20px;height: 22px;cursor:pointer;\"></th></tr>\r\n      </table>\r\n      <table>\r\n        <tr>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"max-width: 30px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#D3D3D3 !important;text-align: left;max-width: 30px;\">{{item.HideMin}}</div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"width:200px;height: 25px;\"><div style=\"font-weight: normal;display: inline-block;width:200px;\"><mat-slider class=\"slider\" name=\"range\" id=\"0\" min={{item.HideMin}} max={{item.HideMax}} step=0.01 thumbLabel=true value={{item.textHide}} #textscale (change)=\"Changetext(textscale.value.toPrecision(2),item.id)\" >\r\n        </mat-slider></div></th>\r\n        <th *ngIf=\"item.type === 'number'\" style=\"max-width: 30px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#D3D3D3 !important;max-width: 30px;text-align: left;\">{{item.HideMax}}</div></th></tr>\r\n      </table><hr>\r\n        </div>\r\n      </div>\r\n      <div>\r\n      <button style=\"color:#D3D3D3;border:2px solid #8AA8C0;background-color: transparent;cursor:pointer;\" (click)=\"reset()\">Reset</button></div>\r\n      </div>\r\n</div>\r\n\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/publish.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let PublishComponent = class PublishComponent extends __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */] {
    constructor(injector, myElement) {
        super(injector);
        this._CheckDisable = false;
    }
    ngOnInit() {
        this.mode = this.dataService.getmode();
        this.dataArr = this.dataService.get_PuData();
        if (this.dataArr !== undefined) {
            this.LoadData();
        }
    }
    notify(message) {
        if (message === "model_update") {
            try {
                this.dataArr = this.dataService.get_PuData();
                if (this.dataArr !== undefined) {
                    this.LoadData();
                }
            }
            catch (ex) {
                console.log(ex);
            }
        }
    }
    LoadData() {
        this._ColorDescr = this.dataArr["ColorDescr"];
        this._ColorProperty = this.dataArr["ColorProperty"];
        this._ColorKey = this.dataArr["ColorKey"];
        this._ColorMax = this.dataArr["ColorMax"];
        this._ColorMin = this.dataArr["ColorMin"];
        this._ColorInvert = this.dataArr["ColorInvert"];
        this._ExtrudeDescr = this.dataArr["ExtrudeDescr"];
        this._ExtrudeProperty = this.dataArr["ExtrudeProperty"];
        this._ExtrudeKey = this.dataArr["ExtrudeKey"];
        this._ExtrudeMax = this.dataArr["ExtrudeMax"];
        this._ExtrudeMin = this.dataArr["ExtrudeMin"];
        this._HeightChart = this.dataArr["HeightChart"];
        this._Invert = this.dataArr["Invert"];
        this._Scale = this.dataArr["Scale"];
        this._HideNum = this.dataArr["HideNum"];
        this._Filter = this.dataArr["Filter"];
    }
    Disable(event) {
        const index = this._HideNum.indexOf(event);
        const divid = String("addHide".concat(String(event)));
        const addHide = document.getElementById(divid);
        if (this._Filter[index].Disabletext === null) {
            this._CheckDisable = false;
        }
        else {
            this._CheckDisable = true;
        }
        if (this._CheckDisable === false) {
            if (this._Filter[index].type === "number") {
                const textHide = this._Filter[index].textHide;
                this._Filter[index].Disabletext = Number(textHide);
                if (this._Filter[index].RelaHide === "0" || this._Filter[index].RelaHide === 0) {
                    this._Filter[index].textHide = this._Filter[index].HideMin;
                }
                if (this._Filter[index].RelaHide === "1" || this._Filter[index].RelaHide === 1) {
                    this._Filter[index].textHide = this._Filter[index].HideMax;
                }
            }
            else if (this._Filter[index].type === "category") {
                const textHide = this._Filter[index].RelaHide;
                this._Filter[index].Disabletext = Number(textHide);
                this._Filter[index].RelaHide = 0;
            }
        }
        else {
            if (this._Filter[index].type === "number") {
                this._Filter[index].textHide = this._Filter[index].Disabletext;
                this._Filter[index].Disabletext = null;
            }
            else if (this._Filter[index].type === "category") {
                this._Filter[index].RelaHide = this._Filter[index].Disabletext;
                this._Filter[index].Disabletext = null;
            }
        }
        this.dataArr["Filter"] = this._Filter;
        this.dataArr["HideNum"] = this._HideNum;
        this.dataService.set_PuData(this.dataArr);
    }
    ChangeCategory(categary, id, type) {
        const _index = this._HideNum.indexOf(id);
        if (type === 1) {
            this._Filter[_index].CategaryHide = categary;
        }
        if (type === 0) {
            this._Filter[_index].RelaHide = Number(categary);
        }
    }
    Changetext(value, id) {
        const _index = this._HideNum.indexOf(id);
        this._Filter[_index].textHide = value;
    }
    onChangeColor(value) {
        const data = this.dataService.getGsModel()["cesium"]["colour"]["attribs"];
        this.dataArr["ColorKey"] = value;
        for (const _data of data) {
            if (_data["name"] === value) {
                this.dataArr["ColorMin"] = _data["min"];
                this.dataArr["ColorMax"] = _data["max"];
                this.dataArr["ColorInvert"] = _data["invert"];
            }
        }
        const promise = this.dataService.getcesiumpromise();
        const _Colortexts = [];
        const self = this;
        promise.then(function (dataSource) {
            const entities = dataSource.entities.values;
            for (const entity of entities) {
                if (entity.properties[value] !== undefined) {
                    if (entity.properties[value]._value !== " ") {
                        if (_Colortexts.length === 0) {
                            _Colortexts[0] = entity.properties[value]._value;
                        }
                        else {
                            if (_Colortexts.indexOf(entity.properties[value]._value) === -1) {
                                _Colortexts.push(entity.properties[value]._value);
                            }
                        }
                    }
                }
            }
        });
        this.dataArr["ColorText"] = _Colortexts.sort();
        this.dataService.set_PuData(this.dataArr);
        this.LoadData();
    }
    onChangeHeight(value) {
        const data = this.dataService.getGsModel()["cesium"]["extrude"]["attribs"];
        this.dataArr["ExtrudeKey"] = value;
        for (const _data of data) {
            if (_data["name"] === value) {
                this.dataArr["ExtrudeMin"] = _data["min"];
                this.dataArr["ExtrudeMax"] = _data["max"];
                this.dataArr["HeightChart"] = _data["line"];
                this.dataArr["Invert"] = _data["invert"];
                this.dataArr["Scale"] = _data["scale"];
            }
        }
        const promise = this.dataService.getcesiumpromise();
        const _Heighttexts = [];
        const self = this;
        promise.then(function (dataSource) {
            const entities = dataSource.entities.values;
            for (const entity of entities) {
                if (entity.properties[value] !== undefined) {
                    if (entity.properties[value]._value !== " ") {
                        if (_Heighttexts.length === 0) {
                            _Heighttexts[0] = entity.properties[value]._value;
                        }
                        else {
                            if (_Heighttexts.indexOf(entity.properties[value]._value) === -1) {
                                _Heighttexts.push(entity.properties[value]._value);
                            }
                        }
                    }
                }
            }
        });
        this.dataArr["ExtrudeText"] = _Heighttexts.sort();
        this.dataService.set_PuData(this.dataArr);
        this.LoadData();
    }
    reset() {
        this.dataService.LoadJSONData();
        this.dataArr = this.dataService.get_PuData();
        if (this.dataArr !== undefined) {
            this.LoadData();
        }
    }
};
PublishComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "app-publish",
        template: __webpack_require__("./src/app/mobius-cesium/setting/publish.component.html"),
        styles: [__webpack_require__("./src/app/mobius-cesium/setting/publish.component.css")],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], PublishComponent);



/***/ }),

/***/ "./src/app/mobius-cesium/setting/setting.component.css":
/***/ (function(module, exports) {

module.exports = "#setting{\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#D3D3D3 !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  border-right: 1px solid gray;\r\n}\r\n\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#D3D3D3 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #395d73 !important;\r\n    font-size: 12px !important;\r\n}\r\n\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #395d73 !important;\r\n}\r\n\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"setting\" >\r\n  <mat-tab-group class=\"mat-tab-group\" style=\"height: 100%;\" (selectedTabChange)=\"changedata($event.index)\" *ngIf=\"mode==='editor'\" >\r\n    <mat-tab label=\"&nbsp;Select&nbsp;\">\r\n      <app-select></app-select>\r\n    </mat-tab>\r\n    <mat-tab label=\"&nbsp;Data&nbsp;\" >\r\n      <app-data (change)=\"LoadViewer()\" (click)=\"LoadViewer()\"></app-data>\r\n    </mat-tab>\r\n    <mat-tab label=\"&nbsp;Display&nbsp;\" >\r\n      <app-display></app-display>\r\n    </mat-tab>\r\n    <mat-tab label=\"&nbsp;Publish&nbsp;\" >\r\n      <app-publish  (change)=\"LoadViewer()\" (click)=\"Reset();LoadViewer();\"></app-publish>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n    <app-publish *ngIf=\"mode==='viewer'\" (change)=\"LoadViewer()\" (click)=\"Reset();LoadViewer();\"></app-publish>\r\n</div>"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chroma_js__ = __webpack_require__("./node_modules/chroma-js/chroma.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chroma_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chroma_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SettingComponent = class SettingComponent extends __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */] {
    constructor(injector, myElement) {
        super(injector);
    }
    ngOnInit() {
        this.data = this.dataService.getGsModel();
        this.mode = this.dataService.getmode();
        if (this.mode === "viewer") {
            this.changedata(3);
        }
        else if (this.mode === "editor") {
            this.changedata(1);
        }
    }
    notify(message) {
        if (message === "model_update") {
            this.data = this.dataService.getGsModel();
            this.mode = this.dataService.getmode();
            try {
                if (this.data !== undefined && this.data["features"] !== undefined) {
                    if (this.mode === "viewer") {
                        this.changedata(3);
                    }
                    else if (this.mode === "editor") {
                        this.changedata(1);
                    }
                }
            }
            catch (ex) {
                console.log(ex);
            }
        }
    }
    changedata(id) {
        this.dataService.set_index(id);
        if (id === 1) {
            this.dataArr = this.dataService.get_ViData();
        }
        else if (id === 3) {
            this.dataArr = this.dataService.get_PuData();
        }
        if (this.dataArr !== undefined) {
            this.LoadViewer();
        }
    }
    Reset() {
        this.dataArr = this.dataService.get_PuData();
    }
    LoadViewer() {
        const promise = this.dataService.getcesiumpromise();
        const _ColorKey = this.dataArr["ColorKey"];
        const _ColorMax = this.dataArr["ColorMax"];
        const _ColorMin = this.dataArr["ColorMin"];
        const _ColorText = this.dataArr["ColorText"];
        const _ColorInvert = this.dataArr["ColorInvert"];
        const _ExtrudeKey = this.dataArr["ExtrudeKey"];
        const _ExtrudeMax = this.dataArr["ExtrudeMax"];
        const _ExtrudeMin = this.dataArr["ExtrudeMin"];
        const _HeightChart = this.dataArr["HeightChart"];
        const _Invert = this.dataArr["Invert"];
        const _Scale = this.dataArr["Scale"];
        const _indexArr = this.dataArr["indexArr"];
        let _Filter;
        if (this.dataArr["Filter"] !== undefined && this.dataArr["Filter"].length !== 0) {
            _Filter = this.dataArr["Filter"];
        }
        else {
            _Filter = [];
        }
        let _ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL");
        if (_ColorInvert === true) {
            _ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL").domain([1, 0]);
        }
        const self = this;
        promise.then(function (dataSource) {
            const entities = dataSource.entities.values;
            for (const i of _indexArr) {
                const entity = entities[i];
                let _CheckHide;
                if (entity.polygon !== undefined) {
                    if (_Filter.length !== 0) {
                        _CheckHide = self.Hide(_Filter, entity, _HeightChart);
                        if (_CheckHide === true) {
                            if (entity.polygon !== undefined) {
                                entity.polygon.extrudedHeight = 0;
                                entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                                if (_HeightChart === true) {
                                    if (entity.polyline !== undefined) {
                                        entity.polyline.show = false;
                                    }
                                }
                            }
                            if (entity.polyline !== undefined) {
                                entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                            }
                        }
                    }
                    if (_Filter.length === 0 || _CheckHide === false) {
                        if (_ColorKey !== "None") {
                            if (typeof (_ColorText[0]) === "number") {
                                self.colorByNum(entity, _ColorMax, _ColorMin, _ColorKey, _ChromaScale);
                            }
                            else {
                                self.colorByCat(entity, _ColorText, _ColorKey, _ChromaScale);
                            }
                        }
                        else {
                            entity.polygon.material = Cesium.Color.GOLD.withAlpha(0.8);
                        }
                        if (_ExtrudeKey !== "None") {
                            if (_HeightChart === false) {
                                entity.polyline = undefined;
                                entity.polygon.extrudedHeight = self.ExtrudeHeight(entity.properties[_ExtrudeKey]._value, _ExtrudeMax, _ExtrudeMin, _Invert) * _Scale;
                            }
                            else {
                                entity.polygon.extrudedHeight = 0;
                                const center = Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).center;
                                const radius = Math.min(Math.round(Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).radius / 100), 10);
                                const longitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.
                                    cartesianToCartographic(center).longitude).toFixed(10);
                                const latitudeString = Cesium.Math.toDegrees(Cesium.Ellipsoid.WGS84.cartesianToCartographic(center).
                                    latitude).toFixed(10);
                                entity.polyline = new Cesium.PolylineGraphics({
                                    positions: new Cesium.Cartesian3.fromDegreesArrayHeights([longitudeString, latitudeString, 0, longitudeString,
                                        latitudeString, self.ExtrudeHeight(entity.properties[_ExtrudeKey]._value, _ExtrudeMax, _ExtrudeMin, _Invert) * _Scale]),
                                    width: radius,
                                    material: entity.polygon.material,
                                    show: true,
                                });
                            }
                        }
                        else {
                            entity.polyline = undefined;
                            entity.polygon.extrudedHeight = 0;
                        }
                    }
                }
                else if (entity.polyline !== undefined) {
                    if (_ColorKey !== "None") {
                        if (typeof (_ColorText[0]) === "number") {
                            self.colorByNum(entity, _ColorMax, _ColorMin, _ColorKey, _ChromaScale);
                        }
                        else {
                            self.colorByCat(entity, _ColorText, _ColorKey, _ChromaScale);
                        }
                    }
                    else {
                        entity.polyline.material = Cesium.Color.GOLD.withAlpha(0.8);
                    }
                }
            }
        });
    }
    Hide(_Filter, entity, _HeightChart) {
        let _CheckHide = false;
        for (const filter of _Filter) {
            const value = entity.properties[filter.HeightHide]._value;
            if (value !== undefined) {
                if (typeof (value) === "number") {
                    if (this._compare(value, Number(filter.textHide), Number(filter.RelaHide))) {
                        _CheckHide = true;
                    }
                }
                else if (typeof (value) === "string") {
                    if (this._compareCat(value, filter.CategaryHide, Number(filter.RelaHide))) {
                        _CheckHide = true;
                    }
                }
            }
        }
        return _CheckHide;
    }
    _compare(value, slider, relation) {
        switch (relation) {
            case 0:
                return value < slider;
            case 1:
                return value > slider;
            case 2:
                return value !== slider;
        }
    }
    _compareCat(value, _Categary, relation) {
        switch (relation) {
            case 0:
                return value === undefined;
            case 1:
                return value !== _Categary;
            case 2:
                return value === _Categary;
        }
    }
    ExtrudeHeight(value, _ExtrudeMax, _ExtrudeMin, _Invert) {
        let diff;
        if (_ExtrudeMin < 0) {
            diff = Math.abs(_ExtrudeMin);
        }
        else {
            diff = 0;
        }
        if (value > _ExtrudeMax) {
            value = _ExtrudeMax;
        }
        if (value < _ExtrudeMin) {
            value = _ExtrudeMin;
        }
        switch (_Invert) {
            case true:
                return _ExtrudeMax - value;
            case false:
                return value;
        }
    }
    colorByNum(entity, max, min, _ColorKey, _ChromaScale) {
        if (entity.properties[_ColorKey] !== undefined) {
            const texts = entity.properties[_ColorKey]._value;
            const rgb = _ChromaScale(Number(((max - texts) / (max - min)).toFixed(2)))._rgb;
            if (entity.polygon !== undefined) {
                entity.polygon.material = Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
            }
            if (entity.polyline !== undefined) {
                const newColor = new Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                entity.polyline.material.color.setValue(newColor);
            }
        }
    }
    colorByCat(entity, _ColorText, _ColorKey, _ChromaScale) {
        if (entity.properties[_ColorKey] !== undefined) {
            let initial = false;
            for (let j = 0; j < _ColorText.length; j++) {
                if (entity.properties[_ColorKey]._value === _ColorText[j]) {
                    const rgb = _ChromaScale(1 - (j / _ColorText.length));
                    if (entity.polygon !== undefined) {
                        entity.polygon.material = Cesium.Color.fromBytes(rgb._rgb[0], rgb._rgb[1], rgb._rgb[2]);
                    }
                    if (entity.polyline !== undefined) {
                        const newColor = new Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
                        entity.polyline.material.color.setValue(newColor);
                    }
                    initial = true;
                }
            }
            if (initial === false) {
                if (entity.polygon !== undefined) {
                    entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
                if (entity.polyline !== undefined) {
                    entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                }
            }
        }
    }
};
SettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "app-setting",
        template: __webpack_require__("./src/app/mobius-cesium/setting/setting.component.html"),
        styles: [__webpack_require__("./src/app/mobius-cesium/setting/setting.component.css")],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], SettingComponent);



/***/ }),

/***/ "./src/app/mobius-cesium/setting/visualise.component.css":
/***/ (function(module, exports) {

module.exports = "#SettingView{\r\n  position: relative;\r\n  padding:0px;\r\n  height: 100%;\r\n  width: 100%;\r\n  color:#D3D3D3 !important;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 14px !important;\r\n  line-height: 14px;\r\n  overflow-x: hidden !important;\r\n  background-color: rgba(20,20,20,0.9);\r\n  overflow-y:overlay;\r\n}\r\n/deep/.mat-tab-label, /deep/.mat-tab-label-active{\r\n  min-width: 60px!important;\r\n  padding: 3px!important;\r\n  margin: 3px!important;\r\n  color:#D3D3D3 !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-label{\r\n  height: 30px !important;\r\n  width: 60px !important;\r\n  background-color: transparent !important;\r\n}\r\n/deep/.mat-tab-labels{\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-header{\r\n  width: 700px !important;\r\n}\r\n/deep/.mat-tab-header-pagination-controls-enabled{\r\n  display: none !important;\r\n}\r\n/deep/.mat-ink-bar{\r\n  background-color: #395d73 !important;\r\n}\r\n/deep/.mat-tab{\r\n  min-width: 30px !important;\r\n}\r\n/deep/.mat-tab-body-content{\r\n  overflow: hidden !important;\r\n}\r\n/deep/.mat-header{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-left: 0px;\r\n  color:#395d73;\r\n  border: 0;\r\n  height: 20px;\r\n  background-color: rgba(20,20,20,0.9) !important;\r\n}\r\n/deep/.mat-tab-body-wrapper{\r\n  height:100% !important;\r\n\r\n}\r\n/deep/split-gutter{\r\n  background-color:rgb(138, 168, 192) !important;\r\n}\r\n/deep/.mat-accent .mat-slider-thumb {\r\n    background-color: #8AA8C0 !important;\r\n    cursor: -webkit-grab;\r\n}\r\n/deep/.mat-slider-thumb{\r\n  width: 5px !important;\r\n  right: -5px !important;\r\n}\r\n/deep/.mat-slider-track-fill{\r\n  background-color: #F0BFA0 !important;\r\n}\r\n/deep/.mat-slider-thumb-label-text {\r\n    color: #8AA8C0 !important;\r\n    font-size: 12px !important;\r\n}\r\n/deep/.mat-slider-thumb-label{\r\n    height: 15px !important;\r\n    width: 15px !important;\r\n    top: -20px !important;\r\n    right: -7px !important;\r\n    background-color: white !important;\r\n    border: 1px solid #8AA8C0 !important;\r\n}\r\n/deep/.mat-slider-track-background{\r\n  background-color: #D3D3D3 !important;\r\n}\r\n.mat-slider{\r\n    width: 150px !important;\r\n}\r\n.cesium-button {\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  color: #D3D3D3;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  background: transparent;\r\n}\r\n.cesium-button-select{\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 1px solid #8AA8C0;\r\n  fill: #8AA8C0;\r\n  border-radius: 0px;\r\n  padding: 3px 0px;\r\n  margin: 0px 0px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 80px;\r\n  font-family:sans-serif !important;\r\n  color: #D3D3D3;\r\n  background: transparent;\r\n}\r\n.cesium-option{\r\n  background-color: #F1F1F1;\r\n  /*opacity: 0.8;*/\r\n  color: #8AA8C0;\r\n  border: 1px solid #8AA8C0;\r\n}\r\nhr {\r\n  display: block;\r\n  height: 1px;\r\n  border: 0;\r\n  border-top: 1px solid #D3D3D3 !important;\r\n  padding: 0; \r\n  color:#D3D3D3 !important;\r\n  width: 100%;\r\n  background-color: #8AA8C0 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/setting/visualise.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"SettingView\" >\r\n    <table>\r\n      <tr>\r\n      <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Color</div></th>\r\n      <th><div>\r\n        <select class=\"cesium-button\" (change)=\"onChangeColor($event.target.value)\" [ngModel]=\"_ColorKey\">\r\n          <option class=\"cesium-option\"  *ngFor=\"let ColorName of _ColorProperty\" value={{ColorName}}>{{ColorName}}</option>\r\n        </select>\r\n      </div></th>\r\n      </tr>\r\n      </table>\r\n      <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Min</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\"  value={{_ColorMin}} style=\"width:80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left;\" (change)=\"changeColorMin($event.target.value)\"></th></tr>  \r\n      </table>\r\n      <table >\r\n      <tr ><th style=\"width:80px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Max</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\" value={{_ColorMax}} style=\"width: 80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left;\" (change)=\"changeColorMax($event.target.value)\"></th></tr>\r\n  </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Invert</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_ColorInvert\" (click)=\"changeColorInvert()\"></div></th></tr>\r\n    </table>\r\n    <hr>\r\n      <table>\r\n      <tr>\r\n      <th class=\"colorkey\" style=\"width: 80px\"><div class=\"Hide\" style=\"width: 80px;color:#D3D3D3 !important;border:0;text-align: left;font-weight: normal;\">Extrude</div></th>\r\n      <th><div>\r\n        <select class=\"cesium-button\" (change)=\"onChangeHeight($event.target.value)\" [ngModel]=\"_ExtrudeKey\">\r\n           <option class=\"cesium-option\"  *ngFor=\"let Height of _ExtrudeProperty\" value={{Height}}>{{Height}}</option>\r\n        </select>\r\n      </div></th>\r\n      </tr>\r\n    </table>\r\n    <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Min</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\"  value={{_ExtrudeMin}} style=\"width:80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left\" (change)=\"changeHeightMin($event.target.value)\"></th></tr>  \r\n      </table>\r\n      <table >\r\n      <tr ><th style=\"width:80px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Max</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\" value={{_ExtrudeMax}} style=\"width: 80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left;\" (change)=\"changeHeightMax($event.target.value)\"></th></tr>\r\n  </table>\r\n   <table>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Scale</div></th>\r\n      <th style=\"width:80px;height: 18px;\"><input type=\"text\" value={{_Scale}} style=\"width:80px;height: 18px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;font-weight: normal;text-align: left;\" (change)=\"changescale($event.target.value)\" ></th></tr>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Invert</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_Invert\" (click)=\"changeopp()\"></div></th></tr>\r\n      <tr ><th style=\"width:80px;height: 25px;\"><div style=\"width: 80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\">Height Chart</div></th>\r\n      <th style=\"width:80px;height: 25px;\"><div style=\"width:80px;color:#D3D3D3 !important;font-weight: normal;text-align: left;border:0;\"><input type=\"checkbox\" [checked]=\"_HeightChart\" (click)=\"changeExtrude();\"></div></th></tr>  \r\n  </table>\r\n  <hr>\r\n  <table>\r\n    <tr>\r\n    <th class=\"colorkey\" style=\"width: 75px;height: 25px;\"><div class=\"Hide\" style=\"width: 75px;height: 25;color:#D3D3D3 !important;border-color:#395d73;border:0;text-align: left;font-weight: normal;\"><input type=\"button\" value=\"Add Filter\" style=\"color:#D3D3D3;border:1px solid #8AA8C0;width: 75px;height: 25px;background-color: transparent;cursor:pointer;\" (click)=\"addHide()\"></div></th>\r\n    <th style=\"width:20px;height: 22px;\"><div style=\"width:20px;height: 22px;margin-left: 10px\">\r\n      <select class=\"cesium-button-select\"  (change)=\"ChangeHeight($event.target.value)\">\r\n         <option class=\"cesium-option\"  *ngFor=\"let ColorName of _ColorProperty\" value={{ColorName}}>{{ColorName}}</option>\r\n      </select></div></th>\r\n    </tr>\r\n  </table>\r\n  <div class=\"hide-container\" style=\"margin-top:5px;\">\r\n    <div *ngFor=\"let item of _Filter;\" id={{item.divid}}>\r\n  <table>\r\n    <tr ><th style=\"width:85px;height: 22px;\"><div style=\"width:85px;color:#D3D3D3 !important;text-align: left;vertical-align: middle;font-weight: normal;\">{{item.HeightHide}}</div></th>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:40px;height: 22px;\"><div style=\"width:40px;height: 22px;\">\r\n      <select class=\"cesium-button-select\" [ngModel]=\"item.RelaHide\" (change)=\"Changerelation($event.target.value,item.id)\" style=\"width:40px;height: 22px;\">\r\n         <option class=\"cesium-option\" value=0>></option>\r\n         <option class=\"cesium-option\" value=1><</option>\r\n         <option class=\"cesium-option\" value=2>=</option>\r\n      </select></div></th>\r\n      <th *ngIf=\"item.type === 'category'\" style=\"width:40px;height: 22px;\"><div style=\"width:40px;height: 22px;\">\r\n      <select class=\"cesium-button-select\" [ngModel]=\"item.RelaHide\" (change)=\"ChangeCategory($event.target.value,item.id,0)\" style=\"width:40px;height: 22px;\">\r\n        <option class=\"cesium-option\" value=0>none</option>\r\n        <option class=\"cesium-option\" value=1>=</option>\r\n        <option class=\"cesium-option\" value=2>!=</option>\r\n      </select></div></th>\r\n      <th *ngIf=\"item.type === 'number'\" style=\"width:70px;height: 20px;\"><input type=\"text\" id={{item.id}} value={{item.textHide}} (change)=\"Changetext($event.target.value,item.id)\" style=\"width:70px;height: 20px;background:transparent;color:#D3D3D3;border:1px solid #8AA8C0;\"></th>\r\n      <th *ngIf=\"item.type === 'category'\" style=\"width:73px;height: 22px;\"><div style=\"width:73px;height: 22px;\">\r\n      <select class=\"cesium-button-select\" [ngModel]=\"item.CategaryHide\" (change)=\"ChangeCategory($event.target.value,item.id,1)\" style=\"width:73px;height: 22px;\">\r\n        <option class=\"cesium-option\" *ngFor=\"let caty of item.Category\" value={{caty}}>{{caty}}</option>\r\n      </select></div></th>\r\n    <th style=\"width:20px;height: 22px;\" id={{item.id}}><span id={{item.id}} (click)=\"deleteHide(item.id)\" style=\"width:20px;height: 22px;cursor:pointer;\"><i class=\"material-icons\" style=\"color:#D3D3D3;font-size:16px\">delete</i></span></th>\r\n    <th style=\"width:20px;height: 25px;\" id={{item.id}}><input type=\"checkbox\" id={{item.id}} checked=\"checked\" (click)=\"Disable(item.id)\" tyle=\"width:20px;height: 25px;cursor:pointer;\"></th></tr>\r\n  </table>\r\n  <table>\r\n    <tr>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:50px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#D3D3D3 !important;width:30px;\">{{item.HideMin}}</div></th>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:150px;height: 22px;\"><div style=\"font-weight: normal;display: inline-block;width:150px;\"><mat-slider class=\"slider\" name=\"range\" id=\"0\" min={{item.HideMin}} max={{item.HideMax}} step=0.01 thumbLabel=true value={{item.textHide}} #textscale (change)=\"Changetext(textscale.value.toPrecision(2),item.id)\" >\r\n    </mat-slider></div></th>\r\n    <th *ngIf=\"item.type === 'number'\" style=\"width:50px;height: 25px;vertical-align: top;padding-top: 10px;\"><div style=\"font-weight: normal;display: inline-block;color:#D3D3D3 !important;width:30px;text-align: left;\">{{item.HideMax}}</div></th></tr>\r\n  </table><hr>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/mobius-cesium/setting/visualise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let DataComponent = class DataComponent extends __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */] {
    constructor(injector, myElement) {
        super(injector);
        this._CheckDisable = true;
    }
    ngOnInit() {
        this.dataArr = this.dataService.get_ViData();
        if (this.dataArr !== undefined) {
            this.LoadData();
        }
    }
    notify(message) {
        if (message === "model_update") {
            try {
                this.dataArr = this.dataService.get_ViData();
                if (this.dataArr !== undefined) {
                    this.LoadData();
                }
            }
            catch (ex) {
                console.log(ex);
            }
        }
    }
    LoadData() {
        this._ColorProperty = this.dataArr["ColorProperty"];
        this._ColorKey = this.dataArr["ColorKey"];
        this._ColorMax = this.dataArr["ColorMax"];
        this._ColorMin = this.dataArr["ColorMin"];
        this._ColorInvert = this.dataArr["ColorInvert"];
        this._ExtrudeProperty = this.dataArr["ExtrudeProperty"];
        this._ExtrudeKey = this.dataArr["ExtrudeKey"];
        this._ExtrudeMax = this.dataArr["ExtrudeMax"];
        this._ExtrudeMin = this.dataArr["ExtrudeMin"];
        this._HeightChart = this.dataArr["HeightChart"];
        this._Invert = this.dataArr["Invert"];
        this._Scale = this.dataArr["Scale"];
        this._Filter = this.dataArr["Filter"];
        this._HideNum = this.dataArr["HideNum"];
    }
    onChangeColor(value) {
        this.dataArr["ColorKey"] = value;
        const promise = this.dataService.getcesiumpromise();
        const _Colortexts = [];
        const self = this;
        promise.then(function (dataSource) {
            const entities = dataSource.entities.values;
            for (const entity of entities) {
                if (entity.properties[value] !== undefined) {
                    if (entity.properties[value]._value !== " ") {
                        if (_Colortexts.length === 0) {
                            _Colortexts[0] = entity.properties[value]._value;
                        }
                        else {
                            if (_Colortexts.indexOf(entity.properties[value]._value) === -1) {
                                _Colortexts.push(entity.properties[value]._value);
                            }
                        }
                    }
                }
            }
        });
        this.dataArr["ColorMin"] = Math.min.apply(Math, _Colortexts);
        this.dataArr["ColorMax"] = Math.max.apply(Math, _Colortexts);
        this.dataArr["ColorText"] = _Colortexts.sort();
        this.dataService.set_ViData(this.dataArr);
        this.LoadData();
    }
    changeColorMin(_Min) {
        this.dataArr["ColorMin"] = Number(_Min);
        this._ColorMin = this.dataArr["ColorMin"];
        this.dataService.set_ViData(this.dataArr);
    }
    changeColorMax(_Max) {
        this.dataArr["ColorMax"] = Number(_Max);
        this._ColorMax = this.dataArr["ColorMax"];
        this.dataService.set_ViData(this.dataArr);
    }
    onChangeHeight(value) {
        this.dataArr["ExtrudeKey"] = value;
        const promise = this.dataService.getcesiumpromise();
        const _Heighttexts = [];
        const self = this;
        promise.then(function (dataSource) {
            const entities = dataSource.entities.values;
            for (const entity of entities) {
                if (entity.properties[value] !== undefined) {
                    if (entity.properties[value]._value !== " ") {
                        if (_Heighttexts.length === 0) {
                            _Heighttexts[0] = entity.properties[value]._value;
                        }
                        else {
                            if (_Heighttexts.indexOf(entity.properties[value]._value) === -1) {
                                _Heighttexts.push(entity.properties[value]._value);
                            }
                        }
                    }
                }
            }
        });
        this.dataArr["ExtrudeMin"] = Math.min.apply(Math, _Heighttexts);
        this.dataArr["ExtrudeMax"] = Math.max.apply(Math, _Heighttexts);
        this.dataArr["ExtrudeText"] = _Heighttexts.sort();
        this.dataService.set_ViData(this.dataArr);
        this.LoadData();
    }
    changeHeightMin(_Min) {
        this.dataArr["ExtrudeMin"] = Number(_Min);
        this._ExtrudeMin = this.dataArr["ExtrudeMin"];
        this.dataService.set_ViData(this.dataArr);
    }
    changeHeightMax(_Max) {
        this.dataArr["ExtrudeMax"] = Number(_Max);
        this._ExtrudeMax = this.dataArr["ExtrudeMax"];
        this.dataService.set_ViData(this.dataArr);
    }
    changescale(_ScaleValue) {
        this.dataArr["Scale"] = Number(_ScaleValue);
        this._Scale = this.dataArr["Scale"];
        this.dataService.set_ViData(this.dataArr);
    }
    changeopp() {
        this._Invert = !this._Invert;
        this.dataArr["Invert"] = this._Invert;
        this.dataService.set_ViData(this.dataArr);
    }
    changeColorInvert() {
        this._ColorInvert = !this._ColorInvert;
        this.dataArr["ColorInvert"] = this._ColorInvert;
        this.dataService.set_ViData(this.dataArr);
    }
    changeExtrude() {
        this._HeightChart = !this._HeightChart;
        this.dataArr["HeightChart"] = this._HeightChart;
        this.dataService.set_ViData(this.dataArr);
    }
    addHide() {
        let lastnumber;
        if (this.dataArr["HideNum"] !== undefined) {
            this._HideNum = this.dataArr["HideNum"];
            this._Filter = this.dataArr["Filter"];
        }
        if (this._HideNum === null || this._HideNum.length === 0) {
            this._HideNum[0] = "0";
            lastnumber = this._HideNum[0];
        }
        else {
            for (let i = 0; i < this._HideNum.length + 1; i++) {
                if (this._HideNum.indexOf(String(i)) === -1) {
                    this._HideNum.push(String(i));
                    lastnumber = String(i);
                    break;
                }
            }
        }
        if (this._HideValue === undefined) {
            this._HideValue = this._ColorProperty[0];
        }
        const texts = this.Initial(this._HideValue);
        let _HideType;
        if (typeof (texts[0]) === "number") {
            _HideType = "number";
        }
        else if (typeof (texts[0]) === "string") {
            _HideType = "category";
        }
        this._Filter.push({ divid: String("addHide".concat(String(lastnumber))), id: lastnumber,
            HeightHide: this._HideValue, type: _HideType, Category: texts, CategaryHide: texts[0],
            RelaHide: 0, textHide: Math.round(Math.min.apply(Math, texts) * 100) / 100,
            HideMax: Math.ceil(Math.max.apply(Math, texts)),
            HideMin: Math.round(Math.min.apply(Math, texts) * 100) / 100, Disabletext: null });
        this.dataArr["Filter"] = this._Filter;
        this.dataArr["HideNum"] = this._HideNum;
        this.dataService.set_ViData(this.dataArr);
    }
    deleteHide(event) {
        const index = this._HideNum.indexOf(event);
        const divid = String("addHide".concat(String(event)));
        const addHide = document.getElementById(divid);
        const hidecontainer = document.getElementsByClassName("hide-container")[0];
        hidecontainer.removeChild(addHide);
        if (this._Filter[index].type === "number") {
            if (this._Filter[index].RelaHide === "0" || this._Filter[index].RelaHide === 0) {
                this._Filter[index].textHide = this._Filter[index].HideMin;
            }
            if (this._Filter[index].RelaHide === "1" || this._Filter[index].RelaHide === 1) {
                this._Filter[index].textHide = this._Filter[index].HideMax;
            }
        }
        else if (this._Filter[index].type === "category") {
            this._Filter[index].RelaHide = 0;
        }
        this._Filter.splice(index, 1);
        this._HideNum.splice(index, 1);
        this.dataArr["Filter"] = this._Filter;
        this.dataArr["HideNum"] = this._HideNum;
        this.dataService.set_ViData(this.dataArr);
    }
    Disable(event) {
        const index = this._HideNum.indexOf(event);
        const divid = String("addHide".concat(String(event)));
        const addHide = document.getElementById(divid);
        if (this._Filter[index].Disabletext === null) {
            this._CheckDisable = false;
        }
        else {
            this._CheckDisable = true;
        }
        if (this._CheckDisable === false) {
            if (this._Filter[index].type === "number") {
                const textHide = this._Filter[index].textHide;
                this._Filter[index].Disabletext = Number(textHide);
                if (this._Filter[index].RelaHide === "0" || this._Filter[index].RelaHide === 0) {
                    this._Filter[index].textHide = this._Filter[index].HideMin;
                }
                if (this._Filter[index].RelaHide === "1" || this._Filter[index].RelaHide === 1) {
                    this._Filter[index].textHide = this._Filter[index].HideMax;
                }
            }
            else if (this._Filter[index].type === "category") {
                const textHide = this._Filter[index].RelaHide;
                this._Filter[index].Disabletext = Number(textHide);
                this._Filter[index].RelaHide = 0;
            }
        }
        else {
            if (this._Filter[index].type === "number") {
                this._Filter[index].textHide = this._Filter[index].Disabletext;
                this._Filter[index].Disabletext = null;
            }
            else if (this._Filter[index].type === "category") {
                this._Filter[index].RelaHide = this._Filter[index].Disabletext;
                this._Filter[index].Disabletext = null;
            }
        }
        this.dataArr["Filter"] = this._Filter;
        this.dataArr["HideNum"] = this._HideNum;
        this.dataService.set_ViData(this.dataArr);
    }
    ChangeHeight(_HeightHide) {
        this._HideValue = _HeightHide;
    }
    Changerelation(_RelaHide, id) {
        const index = this._HideNum.indexOf(id);
        const HeightHide = this._Filter[index].HeightHide;
        this._Filter[index].RelaHide = _RelaHide;
        const texts = [];
        const promise = this.dataService.getcesiumpromise();
        const self = this;
        promise.then(function (dataSource) {
            const entities = dataSource.entities.values;
            for (const entity of entities) {
                if (entity.properties[HeightHide] !== undefined) {
                    if (entity.properties[HeightHide]._value !== " ") {
                        if (texts.length === 0) {
                            texts[0] = entity.properties[HeightHide]._value;
                        }
                        else {
                            if (texts.indexOf(entity.properties[HeightHide]._value) === -1) {
                                texts.push(entity.properties[HeightHide]._value);
                            }
                        }
                    }
                }
            }
        });
        this._Filter[index].HideMax = Math.ceil(Math.max.apply(Math, texts));
        this._Filter[index].HideMin = Math.round(Math.min.apply(Math, texts) * 100) / 100;
        if (_RelaHide === "0" || _RelaHide === 0) {
            this._Filter[index].textHide = this._Filter[index].HideMin;
        }
        if (_RelaHide === "1" || _RelaHide === 1) {
            this._Filter[index].textHide = this._Filter[index].HideMax;
        }
    }
    ChangeCategory(categary, id, type) {
        const index = this._HideNum.indexOf(id);
        if (type === 1) {
            this._Filter[index].CategaryHide = categary;
        }
        if (type === 0) {
            this._Filter[index].RelaHide = Number(categary);
        }
    }
    Changetext(value, id) {
        const index = this._HideNum.indexOf(id);
        this._Filter[index].textHide = value;
    }
    Initial(_HideValue) {
        const texts = [];
        const promise = this.dataService.getcesiumpromise();
        const self = this;
        promise.then(function (dataSource) {
            const entities = dataSource.entities.values;
            for (const entity of entities) {
                if (entity.properties[_HideValue] !== undefined) {
                    if (entity.properties[_HideValue]._value !== " ") {
                        if (texts.length === 0) {
                            texts[0] = entity.properties[_HideValue]._value;
                        }
                        else {
                            if (texts.indexOf(entity.properties[_HideValue]._value) === -1) {
                                texts.push(entity.properties[_HideValue]._value);
                            }
                        }
                    }
                }
            }
        });
        return texts;
    }
};
DataComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "app-data",
        template: __webpack_require__("./src/app/mobius-cesium/setting/visualise.component.html"),
        styles: [__webpack_require__("./src/app/mobius-cesium/setting/visualise.component.css")],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], DataComponent);



/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n  background: red;\r\n}\r\n#cesiumContainer{\r\n height: 100%;\r\n width: 100%; \r\n font-family: sans-serif !important;\r\n margin: 0px !important;\r\n padding: 0px !important;\r\n font-size: 14px;\r\n}\r\n#ColorBar{\r\n  z-index:99;\r\n  margin: 5px;\r\n  width: 100%;\r\n  padding: 2px 5px;\r\n  position: absolute;\r\n  display:inline-block;\r\n  bottom: 7%;\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n#ColorKey{\r\n  z-index:99;\r\n  margin: 5px;\r\n  width: 100%;\r\n  padding: 2px 5px;\r\n  position: absolute;\r\n  display:inline-block;\r\n  bottom: 2%;\r\n  overflow: hidden !important;\r\n  text-overflow: ellipsis !important;\r\n  table-layout:fixed !important;\r\n  white-space: nowrap !important;\r\n}\r\n#Download{\r\n  z-index: 99;\r\n  top: 5px;\r\n  position: absolute;\r\n  right: 160px;\r\n  width: 32px;\r\n  height: 32px;\r\n  font-size: 16px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  border-radius: 14%;\r\n  padding: 0;\r\n  vertical-align: middle;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"cesiumContainer\" (click)=\"select();showAttribs($event)\" (mousemove)=\"Colortext();\">\r\n  <button class=\"cesium-button cesium-button-toolbar\" (click)=\"save_geojson()\" id=\"Download\"><i class=\"fa fa-download\"></i></button>\r\n  <div id=\"ColorBar\" *ngIf=\"texts!==undefined\">\r\n  \t<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 88%;margin-left: 9%\">\r\n       <tr >\r\n          <th *ngFor=\"let text of texts;\" style=\"text-align:right;width: 7%\"><div  style=\"width: 8%;vertical-align: text-top;color:white;text-shadow: 0px 0px 3px black;\">{{text}}</div></th>\r\n        </tr>\r\n    </table>\r\n\t<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 80%;margin: 0 auto;\">\r\n       <tr>\r\n          <th  *ngFor=\"let color of _Colorbar;let indx=index\" style=\"width: 0.5px;\" ><div [ngStyle]=\"{ 'background-color': color}\" ><div *ngIf=\"indx%8===0\" style=\"border-left: #FFFFFF 1px solid;border-color: black\">&nbsp;</div><div *ngIf=\"indx%8!==0\">&nbsp;</div></div></th>\r\n        </tr>\r\n    </table>\r\n  </div>\r\n  <div id=\"ColorBar\" *ngIf=\"_Cattexts!==undefined\" style=\"width: 100%;text-align: center\">\r\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" *ngFor=\"let cattext of _Cattexts\" style=\"display:inline-block;overflow: hidden !important;text-overflow: ellipsis !important;table-layout:fixed !important;white-space: nowrap !important; \">\r\n          <tr >\r\n            <th  style=\"width:80px;display:inline-block;overflow: hidden !important;text-overflow: ellipsis !important;table-layout:fixed !important;white-space: nowrap !important; \"><div [ngStyle]=\"{ 'background-color': cattext.color}\" >&nbsp;&nbsp;&nbsp;</div></th>\r\n        </tr>\r\n        <tr>\r\n            <th><div matTooltip={{cattext.text}}  style=\"width:80px;text-align: left;white-space: nowrap;display:inline-block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;color:white;text-shadow: 0px 0px 3px black;\">{{cattext.text}}</div></th>\r\n          </tr>\r\n        </table>\r\n  </div>\r\n  <div id=\"ColorBar\" *ngIf=\"_CatNumtexts!==undefined\" >\r\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 82%;margin: 0 auto;\">\r\n      <tr >\r\n        <th *ngFor=\"let cattext of _CatNumtexts;\" style=\"text-align:left;max-width: 3%\"><div *ngIf=\"cattext.text!==null\" style=\"width: 0.5px;vertical-align: text-top;color:white;text-shadow: 0px 0px 3px black;\">{{cattext.text}}</div><div *ngIf=\"cattext.text===null\" style=\"width: 0.5px;vertical-align: text-top;color:white;text-shadow: 0px 0px 3px black;\">&nbsp;&nbsp;&nbsp;</div></th>\r\n      </tr>\r\n    </table>\r\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 80%;margin: 0 auto;\">\r\n      <tr>\r\n        <th  *ngFor=\"let cattext of _CatNumtexts;let indx=index\" style=\"width: 0.5px;\" ><div [ngStyle]=\"{ 'background-color': cattext.color}\" ><div style=\"border-color: black\">&nbsp;</div></div></th>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div *ngIf=\"mode==='viewer'\" id=\"ColorKey\">\r\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" style=\"width: 80%;margin: 0 auto;text-align:center;color:white;text-shadow: 0px 0px 3px black;\" >\r\n      <tr>\r\n        <th  style=\"width: 40%;\" ><div>Color:&nbsp;{{_ColorKey}}</div></th>\r\n        <th  style=\"width: 40%;\" ><div>Extrude:&nbsp;{{_ExtrudeKey}}</div></th>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div>\r\n    <table id=\"cesium-infoBox-defaultTable\" style=\"width: 140px;position:absolute;padding:4px;background-color:white;display: none;\">\r\n       <tr *ngFor=\"let pickupArr of pickupArrs\"><th style=\"font-size: 10px;font-weight: normal;color:#395d73;width: 60px;height: 14px\"><div matTooltip={{pickupArr.name}} style=\"width: 60px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{pickupArr.name}}</div></th><th style=\"font-size: 10px;font-weight: normal;color:#395d73;width: 80px;height: 14px\"><div matTooltip={{pickupArr.data}} style=\"width: 80px;height:14px;text-align: left;white-space: nowrap;display:block;overflow: hidden !important;text-overflow: ellipsis !important;cursor:pointer;\">{{pickupArr.data}}</div></th></tr>\r\n       </table>\r\n        \r\n     </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mobius-cesium/viewer/viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("./src/app/mobius-cesium/data/DataSubscriber.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chroma_js__ = __webpack_require__("./node_modules/chroma-js/chroma.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chroma_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chroma_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as d3 from "d3-array";

let ViewerComponent = class ViewerComponent extends __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */] {
    constructor(injector, myElement) {
        super(injector);
        this.selectEntity = null;
        this.myElement = myElement;
    }
    ngOnInit() {
        this.mode = this.dataService.getmode();
        if (this.mode === "editor") {
            this.dataService.getValue(this.data);
            this.dataService.LoadJSONData();
            this.dataArr = this.dataService.get_ViData();
            this._index = 1;
        }
        if (this.mode === "viewer") {
            this.dataService.LoadJSONData();
            this.dataArr = this.dataService.get_PuData();
            this._index = 3;
        }
        const viewer = new Cesium.Viewer("cesiumContainer", {
            infoBox: false,
            showRenderLoopErrors: false,
            orderIndependentTranslucency: false,
            baseLayerPicker: false,
            //timeline: false,
            fullscreenButton: false,
            // automaticallyTrackDataSourceClocks:false,
            animation: false,
            shadows: true,
            terrainShadows: Cesium.ShadowMode.ENABLED
        });
        //viewer.scene.globe.depthTestAgainstTerrain = true;
        //viewer.scene.globe.castShadows = true;
        viewer.scene.globe.enableLighting = true;
        viewer.scene.imageryLayers.removeAll();
        viewer.scene.globe.baseColor = Cesium.Color.GRAY;
        /*viewer.scene.primitives.add(new Cesium.Primitive({
          shadows : Cesium.ShadowMode.ENABLED,
          appearance : new Cesium.PerInstanceColorAppearance({
          translucent : false
          })
        }));*/
        //viewer.clock.currentTime = new Cesium.JulianDate(location.date);
        //viewer.clock.currentTime = new Cesium.JulianDate.now();
        document.getElementsByClassName("cesium-viewer-bottom")[0].remove();
        this.dataService.setViewer(viewer);
    }
    notify(message) {
        if (message === "model_update") {
            this.data = this.dataService.getGsModel();
            try {
                this.LoadData(this.data);
            }
            catch (ex) {
                console.log(ex);
            }
        }
    }
    LoadData(data) {
        if (this.data !== undefined) {
            const viewer = this.dataService.getViewer();
            viewer.dataSources.removeAll();
            //viewer.scene.primitives.remove(this.dataService.getcesiumpromise());
            //const new_viewer = new Cesium.Viewer("cesiumContainer");
            this.data = data;
            const promise = Cesium.GeoJsonDataSource.load(this.data);
            viewer.dataSources.add(promise);
            const _HeightKey = [];
            promise.then(function (dataSource) {
                const entities = dataSource.entities.values;
                const self = this;
                if (entities[0].polygon !== undefined) {
                    self._ShowColorBar = true;
                }
                else {
                    self._ShowColorBar = false;
                }
            });
            this.dataService.setcesiumpromise(promise);
            if (this.mode === "editor") {
                this.dataService.getValue(this.data);
                this.dataService.LoadJSONData();
                this.dataArr = this.dataService.get_ViData();
                this._index = 1;
            }
            if (this.mode === "viewer") {
                this.dataService.LoadJSONData();
                this.dataArr = this.dataService.get_PuData();
                this._index = 3;
            }
            viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
                e.cancel = true;
                viewer.zoomTo(promise);
            });
            viewer.zoomTo(promise);
            this.Colortext();
        }
    }
    Colortext() {
        if (this.dataArr !== undefined) {
            if (this._index !== this.dataService.get_index()) {
                this._index = this.dataService.get_index();
                if (this._index === 1) {
                    this.dataArr = this.dataService.get_ViData();
                }
                else if (this._index === 3) {
                    this.dataArr = this.dataService.get_PuData();
                }
            }
            const propertyname = this.dataArr["ColorKey"];
            const texts = this.dataArr["ColorText"].sort();
            const _Max = this.dataArr["ColorMax"];
            const _Min = this.dataArr["ColorMin"];
            if (this.mode === "viewer") {
                this._ColorKey = this.dataArr["ColorKey"];
                this._ExtrudeKey = this.dataArr["ExtrudeKey"];
            }
            this.texts = undefined;
            this._Cattexts = [];
            this._CatNumtexts = [];
            let _ColorKey;
            let _ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL");
            if (this.dataArr["ColorInvert"] === true) {
                _ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL").domain([1, 0]);
            }
            this._Colorbar = [];
            for (let i = 79; i > -1; i--) {
                this._Colorbar.push(_ChromaScale(i / 80));
            }
            if (typeof (texts[0]) === "number") {
                this.texts = [Number(_Min.toFixed(2))];
                for (let i = 1; i < 10; i++) {
                    this.texts.push(Number((_Min + (_Max - _Min) * (i / 10)).toFixed(2)));
                }
                this.texts.push(Number(_Max.toFixed(2)));
                for (let i = 0; i < this.texts.length; i++) {
                    if (this.texts[i] / 1000000000 > 1) {
                        this.texts[i] = String(Number((this.texts[i] / 1000000000).toFixed(3))).concat("B");
                    }
                    else if (this.texts[i] / 1000000 > 1) {
                        this.texts[i] = String(Number((this.texts[i] / 1000000).toFixed(3))).concat("M");
                    }
                    else if (this.texts[i] / 1000 > 1) {
                        this.texts[i] = String(Number(((this.texts[i] / 1000)).toFixed(3))).concat("K");
                    }
                }
            }
            if (typeof (texts[0]) === "string") {
                if (texts.length <= 12) {
                    for (let j = 0; j < texts.length; j++) {
                        _ColorKey = [];
                        _ColorKey.text = texts[j];
                        _ColorKey.color = _ChromaScale(1 - (j / texts.length)); //_ChromaScale(j/texts.length);
                        this._Cattexts.push(_ColorKey);
                    }
                }
                else {
                    for (let j = 0; j < this._Colorbar.length; j++) {
                        _ColorKey = [];
                        if (j === 0) {
                            _ColorKey.text = texts[j];
                        }
                        else if (j === this._Colorbar.length - 1) {
                            if (texts[texts.length - 1] !== null) {
                                _ColorKey.text = texts[texts.length - 1];
                            }
                            else {
                                _ColorKey.text = texts[texts.length - 2];
                            }
                        }
                        else {
                            _ColorKey.text = null;
                        }
                        _ColorKey.color = this._Colorbar[j];
                        this._CatNumtexts.push(_ColorKey);
                    }
                }
            }
        }
        if (this._ShowColorBar === false) {
            this._Cattexts = undefined;
            this._Colorbar = undefined;
        }
    }
    select() {
        event.stopPropagation();
        const viewer = this.dataService.getViewer(); //this.viewer;
        if (this.dataArr !== undefined) {
            if (this.selectEntity !== undefined && this.selectEntity !== null) {
                this.ColorSelect(this.selectEntity);
            }
            if (viewer.selectedEntity !== undefined && viewer.selectedEntity.polygon !== null) {
                this.dataService.set_SelectedEntity(viewer.selectedEntity);
                let material;
                if (viewer.selectedEntity.polygon !== undefined) {
                    material = viewer.selectedEntity.polygon.material;
                    viewer.selectedEntity.polygon.material = Cesium.Color.WHITE;
                }
                if (viewer.selectedEntity.polyline !== undefined) {
                    material = viewer.selectedEntity.polyline.material;
                    viewer.selectedEntity.polyline.material = Cesium.Color.WHITE;
                }
                this.selectEntity = viewer.selectedEntity;
                this.material = material;
            }
            else {
                this.dataService.set_SelectedEntity(undefined);
                this.selectEntity = undefined;
                this.material = undefined;
            }
        }
    }
    ColorSelect(entity) {
        const promise = this.dataService.getcesiumpromise();
        const _ColorKey = this.dataArr["ColorKey"];
        const _ColorMax = this.dataArr["ColorMax"];
        const _ColorMin = this.dataArr["ColorMin"];
        const _ColorText = this.dataArr["ColorText"];
        const _ColorInvert = this.dataArr["ColorInvert"];
        const _ExtrudeKey = this.dataArr["ExtrudeKey"];
        const _ExtrudeMax = this.dataArr["ExtrudeMax"];
        const _ExtrudeMin = this.dataArr["ExtrudeMin"];
        const _HeightChart = this.dataArr["HeightChart"];
        const _Invert = this.dataArr["Invert"];
        const _Scale = this.dataArr["Scale"];
        const _Filter = this.dataArr["Filter"];
        let _ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL");
        if (_ColorInvert === true) {
            _ChromaScale = __WEBPACK_IMPORTED_MODULE_2_chroma_js__["scale"]("SPECTRAL").domain([1, 0]);
        }
        let _CheckHide;
        if (entity.properties["TYPE"] === undefined || entity.properties["TYPE"]._value !== "STATIC") {
            if (_Filter.length !== 0) {
                _CheckHide = this.Hide(_Filter, entity, _HeightChart);
                if (_CheckHide === true) {
                    if (entity.polygon !== undefined) {
                        entity.polygon.extrudedHeight = 0;
                        entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                        if (_HeightChart === true) {
                            if (entity.polyline !== undefined) {
                                entity.polyline.show = false;
                            }
                        }
                    }
                    if (entity.polyline !== undefined) {
                        entity.polyline.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
                    }
                }
            }
            if (_Filter.length === 0 || _CheckHide === false) {
                if (_ColorKey !== "None") {
                    if (typeof (_ColorText[0]) === "number") {
                        this.colorByNum(entity, _ColorMax, _ColorMin, _ColorKey, _ChromaScale);
                    }
                    else {
                        this.colorByCat(entity, _ColorText, _ColorKey, _ChromaScale);
                    }
                }
                else {
                    entity.polygon.material = Cesium.Color.GOLD.withAlpha(0.8);
                }
            }
        }
        else {
            entity.polygon.height = entity.properties["HEIGHT"];
            entity.polygon.extrudedHeight = entity.properties["EXTRUHEIGHT"];
            const ColorValue = entity.properties["COLOR"]._value;
            entity.polygon.material = Cesium.Color.fromBytes(ColorValue[0], ColorValue[1], ColorValue[2], ColorValue[3]);
        }
    }
    Hide(_Filter, entity, _HeightChart) {
        let _CheckHide = false;
        for (const filter of _Filter) {
            const value = entity.properties[filter.HeightHide]._value;
            if (value !== undefined) {
                if (typeof (value) === "number") {
                    if (this._compare(value, Number(filter.textHide), Number(filter.RelaHide))) {
                        _CheckHide = true;
                    }
                }
                else if (typeof (value) === "string") {
                    if (this._compareCat(value, filter.CategaryHide, Number(filter.RelaHide))) {
                        _CheckHide = true;
                    }
                }
            }
        }
        return _CheckHide;
    }
    _compare(value, slider, relation) {
        switch (relation) {
            case 0:
                return value < slider;
            case 1:
                return value > slider;
            case 2:
                return value !== slider;
        }
    }
    _compareCat(value, _Categary, relation) {
        switch (relation) {
            case 0:
                return value === undefined;
            case 1:
                return value !== _Categary;
            case 2:
                return value === _Categary;
        }
    }
    colorByNum(entity, max, min, _ColorKey, _ChromaScale) {
        if (entity.properties[_ColorKey] !== undefined) {
            const texts = entity.properties[_ColorKey]._value;
            const rgb = _ChromaScale(Number(((max - texts) / (max - min)).toFixed(2)))._rgb;
            if (entity.polygon !== undefined) {
                entity.polygon.material = Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
            }
            if (entity.polyline !== undefined) {
                entity.polyline.material = Cesium.Color.fromBytes(rgb[0], rgb[1], rgb[2]);
            }
        }
    }
    colorByCat(entity, _ColorText, _ColorKey, _ChromaScale) {
        if (entity.properties[_ColorKey] !== undefined) {
            let initial = false;
            for (let j = 0; j < _ColorText.length; j++) {
                if (entity.properties[_ColorKey]._value === _ColorText[j]) {
                    const rgb = _ChromaScale(1 - (j / _ColorText.length)); // _ChromaScale((j/_ColorText.length).toFixed(2));
                    entity.polygon.material = Cesium.Color.fromBytes(rgb._rgb[0], rgb._rgb[1], rgb._rgb[2]);
                    initial = true;
                }
            }
            if (initial === false) {
                entity.polygon.material = Cesium.Color.LIGHTSLATEGRAY.withAlpha(1);
            }
        }
    }
    showAttribs(event) {
        const viewer = this.dataService.getViewer();
        if (this.data !== undefined && this.mode === "viewer") {
            if (this.data["cesium"] !== undefined) {
                if (this.data["cesium"].select !== undefined) {
                    if (viewer.selectedEntity !== undefined) {
                        const pickup = viewer.scene.pick(new Cesium.Cartesian2(event.clientX, event.clientY));
                        this.pickupArrs = [];
                        this.pickupArrs.push({ name: "ID", data: pickup.id.id });
                        for (const _propertyName of this.data["cesium"].select) {
                            this.pickupArrs.push({ name: _propertyName, data: this.dataService.get_SelectedEntity().properties[_propertyName]._value });
                        }
                        const nameOverlay = document.getElementById("cesium-infoBox-defaultTable");
                        viewer.container.appendChild(nameOverlay);
                        nameOverlay.style.bottom = viewer.canvas.clientHeight - event.clientY + "px";
                        nameOverlay.style.left = event.clientX + "px";
                        nameOverlay.style.display = "block";
                    }
                    else {
                        document.getElementById("cesium-infoBox-defaultTable").style.display = "none";
                    }
                }
            }
        }
    }
    // save the geojson
    save_geojson() {
        let fileString = JSON.stringify(this.data);
        let blob = new Blob([fileString], { type: 'application/json' });
        FileUtils.downloadContent(blob, "output.geojson");
    }
};
ViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "cesium-viewer",
        template: __webpack_require__("./src/app/mobius-cesium/viewer/viewer.component.html"),
        styles: [__webpack_require__("./src/app/mobius-cesium/viewer/viewer.component.css")],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], ViewerComponent);

class FileUtils {
    static downloadContent(blob, filename) {
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        }
        else {
            const a = document.createElement('a');
            document.body.appendChild(a);
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = filename;
            a.click();
            setTimeout(() => {
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            }, 0);
        }
    }
}


/***/ }),

/***/ "./src/app/pipes/port-type-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortTypePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__ = __webpack_require__("./src/app/base-classes/port/PortModule.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let PortTypePipe = class PortTypePipe {
    transform(type) {
        if (type in __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */]) {
            return this.getInputTypeName(type);
        }
        else if (type in __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */]) {
            return this.getOutputTypeName(type);
        }
        else
            return "";
    }
    getInputTypeName(type) {
        let str_rep = undefined;
        alert(type);
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].ColorPicker:
                str_rep = "Color";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Dropdown:
                str_rep = "Dropdown";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Input:
                str_rep = "SimpleInput";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].FilePicker:
                str_rep = "Load_File";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Slider:
                str_rep = "Slider";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].URL:
                str_rep = "URL";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Checkbox:
                str_rep = "Checkbox";
                break;
            default:
                str_rep = "Not Identifiable";
        }
        return str_rep;
    }
    getOutputTypeName(type) {
        if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Three) {
            return "Geometry";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Text) {
            return "Text Viewer";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Code) {
            return "Code Viewer";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Console) {
            return "Console";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["d" /* OutputPortTypes */].Cesium) {
            return "Cesium";
        }
        else {
            return "Not Identifiable";
        }
    }
};
PortTypePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'port_type_name' })
], PortTypePipe);



/***/ }),

/***/ "./src/app/pipes/short-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Shortens a name to a certain length and appends "..." infront of it
 * Usage:
 *   value | length:number
 * Example:
 *   {{ "some_very_long_string" | length:7 }}
 *   formats to: some_ve...
*/
let ShortNamePipe = class ShortNamePipe {
    transform(value, length) {
        if (value.length > length - 3) {
            return value.slice(0, length - 3) + "...";
        }
        else {
            return value;
        }
    }
};
ShortNamePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'shortname' })
], ShortNamePipe);



/***/ }),

/***/ "./src/app/pipes/simple-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Shortens a name to a certain length and appends "..." infront of it
 * Usage:
 *   value | length:number
 * Example:
 *   {{ "some_very_long_string" | length:7 }}
 *   formats to: some_ve...
*/
let SimpleNamePipe = class SimpleNamePipe {
    transform(value) {
        if (value.endsWith(".mob")) {
            value = value.substr(0, value.length - 4);
        }
        value = value.split("_").join(" ");
        value = value.split("-").join(" ");
        return value;
    }
};
SimpleNamePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'simplename' })
], SimpleNamePipe);



/***/ }),

/***/ "./src/app/ui-components/console/console.component.html":
/***/ (function(module, exports) {

module.exports = "'<div class=\"console-container\" #scrollMe>\r\n\t<div class=\"btn-container\">\r\n\t\t<button mat-button (click)=\"clearConsole()\"><i class=\"fa fa-eraser\"></i></button>\r\n\t</div>\r\n\t<div class = \"console-log\">\r\n\t\t<div class=\"message-container\" *ngFor=\"let msg of _messages;\">\r\n\t\t\t<span class=\"time\">{{msg.time | date:'mediumTime'}}</span>\r\n\t\t\t<div class=\"message {{msg.type}}\"\r\n\t\t\t\t[innerHTML]=\"msg.message\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-components/console/console.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container, .viewer .console-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar, .viewer .console-container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container, .viewer .console-container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.console-container {\n  position: relative;\n  height: 100%;\n  overflow-y: auto !important;\n  -webkit-box-sizing: border-box !important;\n          box-sizing: border-box !important;\n  padding: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap; }\n\n.console-container .message-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column wrap;\n            flex-flow: column wrap;\n    margin: 7.5px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    padding: 0 5 0 0 !important;\n    border-bottom: 1px solid #8AA8C0;\n    font-family: 'Ubuntu Mono', monospace; }\n\n.console-container .message-container .time {\n      min-width: 50%;\n      font-size: 10px;\n      white-space: nowrap;\n      color: grey !important; }\n\n.console-container .message-container .message {\n      min-width: auto;\n      font-size: 12px;\n      color: #395D73 !important; }\n\n.console-container .message-container .message.error {\n        color: #E94858 !important;\n        font-size: 12px;\n        padding: 5px;\n        display: inline; }\n\n.console-container .message-container .message.print {\n        padding: 5px; }\n\n.console-container .message-container .message.print .console-heading {\n          font-size: 12px;\n          line-height: 20px;\n          color: #F3A32A;\n          text-decoration: underline; }\n\n.console-container .message-container .message.print .console-line {\n          max-height: 150px;\n          max-width: 100%;\n          overflow: auto; }\n\n.console-container .message-container .message.print .console-line .var-name {\n            color: #7B52AB; }\n\n.console-container .message-container .message.print .console-line .var-value {\n            color: #82BF6E;\n            display: inline-block;\n            word-wrap: break-word;\n            max-width: 100%; }\n\n.console-container button {\n    max-width: 30px;\n    height: 30px;\n    min-width: 30px;\n    padding: 0px !important;\n    border-radius: 50%;\n    border: 1px solid #395D73;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.console-container button .fa-eraser {\n      height: 15px;\n      font-size: 15px !important;\n      color: #395D73;\n      padding: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n\n.console-container button:hover {\n      background-color: #F1F1F1 !important; }\n\n.console-container button:hover .fa-eraser {\n        color: #F07A79 !important; }\n\n.btn-container {\n  position: absolute;\n  right: 60px;\n  top: 15px; }\n\n.btn-container button {\n    position: fixed; }\n"

/***/ }),

/***/ "./src/app/ui-components/console/console.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_console_service__ = __webpack_require__("./src/app/global-services/console.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ConsoleComponent = class ConsoleComponent {
    constructor(consoleService) {
        this.consoleService = consoleService;
        this._messages = [];
        this._subscription = this.consoleService.getMessage().subscribe(message => {
            this.notify();
        });
    }
    ngOnInit() {
        this._messages = this.consoleService.getContent();
        this.scrollToBottom();
    }
    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    notify() {
        this._messages = this.consoleService.getContent();
    }
    clearConsole() {
        this.consoleService.clearConsole();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('scrollMe'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ConsoleComponent.prototype, "myScrollContainer", void 0);
ConsoleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-console',
        template: __webpack_require__("./src/app/ui-components/console/console.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/console/console.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_console_service__["a" /* ConsoleService */]])
], ConsoleComponent);



/***/ }),

/***/ "./src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n\t<div class=\"focus\" (click)=\"new_flowchart()\">New File</div>\r\n\t<div class=\"focus\" (click)=\"open_picker()\">Open File\r\n\t\t<input #fileInput style=\"display: none;\"\r\n  \t\ttype=\"file\" (change)=\"load_file()\"/> \r\n\t</div>\r\n\t<div class=\"focus\" (click)=\"save_file()\">Save File</div>\r\n\t<div class=\"focus\" (click)=\"publish_settings()\">Publish</div>\r\n</section>\r\n\r\n<br><br><br>\r\n\r\n<section>\r\n\t<div class=\"focus\" (click)=\"add_node($event)\">New Node</div>\r\n\t<!-- TODO: <app-node-library></app-node-library> -->\r\n</section>"

/***/ }),

/***/ "./src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.focus {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowchartControlsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_flowchart_FlowchartUtils__ = __webpack_require__("./src/app/base-classes/flowchart/FlowchartUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services_mobius_service__ = __webpack_require__("./src/app/global-services/mobius.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_services_module_service__ = __webpack_require__("./src/app/global-services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_services_console_service__ = __webpack_require__("./src/app/global-services/console.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_classes_flowchart_FlowchartModule__ = __webpack_require__("./src/app/base-classes/flowchart/FlowchartModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__publish_settings_publish_settings_component__ = __webpack_require__("./src/app/ui-components/controls/publish-settings/publish-settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let FlowchartControlsComponent = class FlowchartControlsComponent {
    // doesn't really need to extend viewer 
    constructor(_mb, _ms, $log, _fs, dialog) {
        this._mb = _mb;
        this._ms = _ms;
        this.$log = $log;
        this._fs = _fs;
        this.dialog = dialog;
    }
    open_picker() {
        let el = this.fileInput.nativeElement;
        el.click();
    }
    //
    //  Creates new file on loading
    //
    ngOnInit() { this.new_flowchart(); }
    //
    //  Loads a new file by 
    //  - Creating a new flowchart
    //  - Setting the Code Generator to JS
    //  - Loading the modules
    //
    new_flowchart() {
        this._fs.new_flowchart();
    }
    //
    //  Adds a new node to the flowchart 
    //
    add_node() {
        __WEBPACK_IMPORTED_MODULE_1__base_classes_flowchart_FlowchartUtils__["a" /* FlowchartUtils */].add_node(this._fs.flowchart);
    }
    //
    //
    //  Loads a Mobius file from disk
    //  String to Flowchart Conversion: Handled by FlowchartService
    //
    load_file(url) {
        let file = this.fileInput.nativeElement.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            let fs = this._fs;
            reader.onload = function (evt) {
                let fileString = evt.target["result"];
                fs.load_flowchart_from_string(fileString);
            };
            reader.onerror = function (evt) {
                console.log("Error reading file");
            };
        }
    }
    //
    //  Opens the publish settings dialog box 
    //
    publish_settings() {
        let dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__publish_settings_publish_settings_component__["a" /* PublishSettingsComponent */], {
            height: '500px',
            width: '450px',
            data: this._fs.flowchart
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    //
    //  Uses FlowchartWriter to save the flowchart as a JSON file
    //
    save_file() {
        __WEBPACK_IMPORTED_MODULE_6__base_classes_flowchart_FlowchartModule__["d" /* FlowchartWriter */].save_flowchart_as_json(this._fs.flowchart);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('fileInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], FlowchartControlsComponent.prototype, "fileInput", void 0);
FlowchartControlsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-flowchart-controls',
        template: __webpack_require__("./src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/controls/flowchart-controls/flowchart-controls.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__global_services_mobius_service__["a" /* MobiusService */],
        __WEBPACK_IMPORTED_MODULE_4__global_services_module_service__["a" /* ModuleService */],
        __WEBPACK_IMPORTED_MODULE_5__global_services_console_service__["a" /* ConsoleService */],
        __WEBPACK_IMPORTED_MODULE_3__global_services_flowchart_service__["a" /* FlowchartService */],
        __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatDialog */]])
], FlowchartControlsComponent);



/***/ }),

/***/ "./src/app/ui-components/controls/main-menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"min-height: 45px;\">\r\n  <mat-toolbar-row class=\"menu-bar\">\r\n    <div class='section'>\r\n\t\t<ul class='menu'>\r\n\t\t\t<li class='menu-item' [matMenuTriggerFor]=\"file_menu\">\r\n\t\t\t\tFile\r\n\t\t\t</li>\r\n\t\t\t\r\n\t\t\t<li class='menu-item'>Node</li>\r\n\t\t\t<li class='menu-item'>Code</li>\r\n\t\t\t<li class='menu-item'>Help</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class='section'>\r\n\t\t<span id='branding'>Mobius v2.0</span>\r\n\t</div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-menu class=\"menu\" #file_menu=\"matMenu\" yPosition=\"above\" [overlapTrigger]=\"false\">\r\n  <span mat-menu-item (click)=\"newfile()\">New File</span>\r\n  <span mat-menu-item (click)=\"save()\">Save File</span>\r\n  <span mat-menu-item (click)=\"openPicker()\">\r\n  \t\t<input #fileInput style=\"display: none;\"\r\n  \t\ttype=\"file\" (change)=\"loadFile()\"/>\r\n  \t\tLoad File\r\n  </span>\r\n  <span mat-menu-item (click)=\"execute()\">Run File</span>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "./src/app/ui-components/controls/main-menu/menu.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset, .menu-bar ul.menu {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.menu-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: #F7F7F7;\n  height: 45px;\n  line-height: 45px;\n  padding: 5px 15px; }\n\n.menu-bar .section {\n    width: auto;\n    display: inline-block; }\n\n.menu-bar #branding {\n    font-weight: bolder;\n    cursor: pointer;\n    font-size: 14px; }\n\n.menu-bar ul.menu {\n    list-style: none; }\n\n.menu-bar ul.menu .menu {\n      margin-left: 10px;\n      width: 200px; }\n\n.menu-bar ul.menu li {\n      display: inline;\n      font-size: 16px;\n      margin-right: 10px; }\n\n.menu-bar ul.menu li:hover {\n        color: #5D5959;\n        cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/ui-components/controls/main-menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let MenuComponent = class MenuComponent {
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('fileInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MenuComponent.prototype, "fileInput", void 0);
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("./src/app/ui-components/controls/main-menu/menu.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/controls/main-menu/menu.component.scss")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/ui-components/controls/modulebox/modulebox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbox\">\r\n\t<div class = \"toolbox-content\">\r\n\t\t<div class=\"inOutBtns\">\r\n\t\t\t<span class=\"fn_name\" (click)=\"addPort(PTYPE.Input)\">Add Input</span>\r\n\t\t\t<span class =\"fn_name\" (click)=\"addPort(PTYPE.Output)\">Add Output</span>\r\n\t\t</div>\r\n\r\n\t\t<mat-list condensed>\r\n\t\t\t<mat-list-item class=\"fn_name\" *ngFor=\"let type of procedureTypes\"\r\n\t\t\t\t\t\t\t\t \t\t(click)=\"addProcedure($event, type)\">\r\n\t\t\t\t\tAdd {{getStr(type)}}\r\n\t\t\t</mat-list-item>\r\n\t\t</mat-list>\r\n\r\n\t\t<mat-accordion multi=\"true\">\r\n\r\n\t\t\t\t<!-- inputs -->\r\n\t\t\t\t<mat-expansion-panel [expanded]=\"false\" *ngFor=\"let cat of _category\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t  {{ cat.replace(\"_\", \".\") }} \r\n\t\t\t\t\t\t  <mat-icon style=\"font-size: 14px; margin-left: 5px;\" (click)=\"openModuleHelp($event, cat)\">help_outline</mat-icon>\r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t  <!-- This is a summary of the content -->\r\n\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t<mat-list condensed>\r\n\t\t\t\t\t \t<mat-list-item class=\"fn_name\" *ngFor=\"let fn of _moduleList[cat]\" (click)=\"addActionProcedure(fn);\"> \r\n\t\t\t\t\t \t\t<span class=\"module\">{{ fn.module.replace(\"_\", \".\") }}</span>.<span class=\"function\">{{ fn.name }}</span>\r\n\t\t\t\t\t \t</mat-list-item>\r\n\t\t\t\t\t</mat-list>\r\n\r\n\t\t\t\t</mat-expansion-panel>\r\n\t\t\t\t\r\n\t\t</mat-accordion>\r\n\t\t\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-components/controls/modulebox/modulebox.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.disabled {\n  color: #8AA8C0 !important; }\n\n.disabled:hover {\n    color: #8AA8C0 !important; }\n\n.toolbox {\n  height: 100%;\n  background-color: #F1F1F1;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 12px;\n  line-height: 14px;\n  color: #395D73;\n  cursor: pointer; }\n\n.toolbox .inOutBtns {\n    padding-left: 15px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border-bottom: 1px solid #8AA8C0; }\n\n.toolbox .inOutBtns span {\n      display: block;\n      font-size: 12px; }\n\n.toolbox .toolbox-content {\n    height: 100%;\n    overflow-y: auto;\n    overflow-x: hidden; }\n\n.toolbox .toolbox-content .fn_name {\n      height: auto;\n      font-size: 12px;\n      line-height: 14px;\n      color: #395D73;\n      cursor: pointer;\n      white-space: nowrap; }\n\n.toolbox .toolbox-content .fn_name:hover {\n        color: #F0BFA0; }\n\n.toolbox .toolbox-content mat-expansion-panel {\n      margin: 0 !important; }\n\n.toolbox .toolbox-content mat-expansion-panel-header {\n      background-color: #F1F1F1 !important;\n      border-top: 0px !important;\n      border-bottom: 1px solid #8AA8C0 !important;\n      padding-left: 15px !important; }\n\n.toolbox .toolbox-content mat-expansion-panel-header mat-panel-title {\n        color: #395D73 !important;\n        font-weight: bold !important;\n        font-size: 12px !important;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n\n.toolbox .toolbox-content mat-expansion-panel-header mat-icon {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n\n.toolbox .toolbox-content mat-expansion-panel-header:hover {\n        background-color: #F1F1F1 !important; }\n\n.toolbox .toolbox-content mat-list {\n      background-color: #F1F1F1 !important;\n      padding-top: 5px;\n      padding-bottom: 5px;\n      border-bottom: 1px solid #8AA8C0 !important; }\n\n.toolbox span.module {\n    color: #F3A32A !important;\n    font-weight: bold;\n    font-family: 'Ubuntu Mono', monospace; }\n\n.toolbox span.function {\n    color: #7B52AB !important;\n    font-weight: bold;\n    font-family: 'Ubuntu Mono', monospace; }\n"

/***/ }),

/***/ "./src/app/ui-components/controls/modulebox/modulebox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services_layout_service__ = __webpack_require__("./src/app/global-services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_services_module_service__ = __webpack_require__("./src/app/global-services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__ = __webpack_require__("./src/app/base-classes/code/CodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_classes_node_NodeUtils__ = __webpack_require__("./src/app/base-classes/node/NodeUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_classes_port_PortModule__ = __webpack_require__("./src/app/base-classes/port/PortModule.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








const getStringForProcedureType = function (type) {
    let value = "";
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data:
            value = "Variable";
            break;
        case __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action:
            value = "Function";
            break;
        case __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfControl:
            value = "If";
            break;
        case __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseControl:
            value = "Else";
            break;
        case __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseIfControl:
            value = "Else-If";
            break;
        case __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl:
            value = "For-loop";
            break;
        case __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].WhileControl:
            value = "While-loop";
            break;
        case __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].LoopBreak:
            value = "Break";
            break;
        case __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].LoopContinue:
            value = "Continue";
            break;
        case __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Comment:
            value = "Comment";
            break;
    }
    return value;
};
let ModuleboxComponent = class ModuleboxComponent {
    constructor(_fs, _ms, layoutService) {
        this._fs = _fs;
        this._ms = _ms;
        this.layoutService = layoutService;
        // Defines the currently allowed procedure types
        this.procedureTypes = [
            __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Data,
            __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ForLoopControl,
            __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].WhileControl,
            __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].IfControl,
            __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseControl,
            __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].ElseIfControl,
            __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].LoopBreak,
            __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].LoopContinue,
            __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Comment
        ];
        // Port types: Input / Output
        this.PTYPE = __WEBPACK_IMPORTED_MODULE_7__base_classes_port_PortModule__["e" /* PortTypes */];
        this.getStr = getStringForProcedureType;
        this.subscriptions = [];
        this._moduleList = [];
        this._category = [];
    }
    ngOnInit() {
        this._moduleList = [];
        let modules = this._ms.modules;
        for (let mod = 0; mod < modules.length; mod++) {
            let user_module = modules[mod];
            this._category.push(user_module["_name"]);
            this._moduleList[user_module["_name"]] = this._moduleList.concat(__WEBPACK_IMPORTED_MODULE_4__base_classes_code_CodeModule__["b" /* ModuleUtils */].getFunctions(user_module));
        }
        this.subscriptions.push(this._fs.node$.subscribe((node) => this.active_node = node));
    }
    ngOnDestroy() {
        this.subscriptions.map(function (s) {
            s.unsubscribe();
        });
    }
    //
    //  Adds a function from the function library to the procedure
    // 
    addActionProcedure(fn) {
        if (this.active_node == undefined) {
            alert("Oops.. No Node Selected");
            return;
        }
        let prod_data = { result: "", module: fn.module, function: fn.name, params: fn.params, hasReturn: fn.hasReturn };
        let prod = __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Action, prod_data);
        this.active_node = __WEBPACK_IMPORTED_MODULE_6__base_classes_node_NodeUtils__["a" /* NodeUtils */].add_procedure(this.active_node, prod);
    }
    //
    //	Adds a variable / for-loop / while-loop / if / else / else-if
    //
    addProcedure($event, type) {
        $event.stopPropagation();
        let prod;
        let prod_data;
        this.active_node = __WEBPACK_IMPORTED_MODULE_6__base_classes_node_NodeUtils__["a" /* NodeUtils */].add_procedure(this.active_node, __WEBPACK_IMPORTED_MODULE_5__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(type));
    }
    //
    // Adds an input or output port to the node
    //
    addPort(port_type) {
        __WEBPACK_IMPORTED_MODULE_6__base_classes_node_NodeUtils__["a" /* NodeUtils */].add_port(this.active_node, port_type, undefined);
    }
    //
    //	TODO: Opens Module Help Viewer
    //
    openModuleHelp($event, category) {
        $event.stopPropagation();
        this.layoutService.showHelp({ module: category, name: undefined });
    }
};
ModuleboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-modulebox',
        template: __webpack_require__("./src/app/ui-components/controls/modulebox/modulebox.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/controls/modulebox/modulebox.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__["a" /* FlowchartService */],
        __WEBPACK_IMPORTED_MODULE_3__global_services_module_service__["a" /* ModuleService */],
        __WEBPACK_IMPORTED_MODULE_2__global_services_layout_service__["a" /* LayoutService */]])
], ModuleboxComponent);



/***/ }),

/***/ "./src/app/ui-components/controls/publish-settings/publish-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"publish-settings\">\r\n\r\n\t<h2>File Settings</h2>\r\n\r\n\t<div class=\"container\">\r\n\t\t\r\n\t\t<section class=\"filename\">\r\n\t\t\t<label>Name</label>\r\n\t\t\t<input [(ngModel)]=\"fw.name\">\r\n\t\t</section>\r\n\r\n\t\t<section class=\"description\">\r\n\t\t\t<label>Description</label>\r\n\t\t\t<textarea [(ngModel)]=\"fw.description\"  rows=\"4\"></textarea>\r\n\t\t</section>\r\n\r\n\t</div>\r\n\t\r\n\r\n\t<!-- Globals -->\r\n\t<!-- <div class=\"container\">\r\n\t\t\r\n\t\t<h3>\r\n\t\t\tGlobal Variables <button (click)=\"addGlobal()\">Add New </button>\r\n\t\t</h3>\r\n\t\t\r\n\t\t<div class=\"global-container\">\r\n\t\t\t<div class='global' *ngFor=\"let inp of _globals; let i=index\">\r\n\t\r\n\t\t\t\t<span class='name' contenteditable=\"true\" (blur)=\"updateGlobal($event, inp)\" spellcheck=\"false\">\r\n\t\t\t\t\t\t{{ inp.getName() }}\r\n\t\t\t\t</span>\r\n\t\t\t\r\n\t\t\t\t<select class='type' (change)=\"updateType($event.target.value, inp)\">\r\n\t         \t    <option *ngFor=\"let x of inputPortOpts\" [value]=\"x\" [selected]=\"inp.getType() == x\">{{getInputTypeName(x)}}</option>\r\n\t            </select>\r\n\t\r\n\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t<button (click)='openSettingsDialog(inp)'>\r\n\t\t\t\t\t\t<mat-icon>settings</mat-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t        <button (click)='deleteGlobal(i)'>\r\n\t\t\t    \t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t    </button>\r\n\t\t\t\t</div>\r\n\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t</div> -->\r\n\r\n\t<!-- Node Settings -->\r\n\t<!-- <div class=\"container\" *ngIf=\"fw.nodes.length\">\r\n\t\t<h3>Visible Node</h3>\r\n\t\t\r\n\t\t<section>\r\n\t\t\t<label>Node to Display{{fw.display_node}}</label>\r\n\t\t\t<select class='type' \r\n\t\t\t\t[(ngModel)]=\"fw.display_node\">\r\n         \t    <option \r\n         \t    \t*ngFor=\"let #x of fw.nodes; #i = index\" \r\n         \t    \t[value]=\"i\" [selected]=\"fw.display_node == i\">\r\n         \t    \t{{x.name}}{{fw.display_node == i}}         \t    \r\n         \t   \t</option>\r\n\t        </select>\r\n\t\t\r\n\t\t</section>\r\n\r\n\t</div> -->\r\n\r\n\t<div class=\"container\" *ngIf=\"fw.nodes.length\">\r\n\t\t<h3>Should this flowchart be editable in the viewer?</h3>\r\n\t\t\r\n\t\t<section>\r\n\t\t\t<mat-checkbox [(ngModel)] = \"fw.editable\"></mat-checkbox>\r\n\t\t</section>\r\n\r\n\t</div>\r\n\r\n\t<br><hr>\r\n\t<hr>\r\n\r\n\t<div class=\"container\" style=\"text-align: center\">\r\n\t\t<button mat-button (click)=\"save()\">Save File</button>\r\n\t\t<button mat-button (click)=\"close()\">Close</button>\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/controls/publish-settings/publish-settings.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.publish-settings {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.publish-settings .container {\n    border-top: 1px solid gray; }\n\n.publish-settings .container section {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      margin: 5px 0px; }\n\n.publish-settings .container section label {\n        width: 200px; }\n\n.publish-settings .container section input, .publish-settings .container section textarea {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1; }\n\n.publish-settings .container .global-container .global {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n\n.publish-settings .container .global-container .global .name {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n        word-wrap: break-word;\n        padding: 5px; }\n"

/***/ }),

/***/ "./src/app/ui-components/controls/publish-settings/publish-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__ = __webpack_require__("./src/app/base-classes/port/PortModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editors_parameter_editor_parameter_settings_dialog_component__ = __webpack_require__("./src/app/ui-components/editors/parameter-editor/parameter-settings-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_classes_flowchart_FlowchartModule__ = __webpack_require__("./src/app/base-classes/flowchart/FlowchartModule.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





let PublishSettingsComponent = class PublishSettingsComponent {
    constructor(dialogRef, flowchart, dialog) {
        this.dialogRef = dialogRef;
        this.flowchart = flowchart;
        this.dialog = dialog;
        this.inputPortOpts = [
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Input,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Slider,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].FilePicker,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].URL,
            __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Checkbox
        ];
        this.fw = flowchart;
    }
    addGlobal() {
        //TODO: 
        let inputPort = new __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["a" /* InputPort */]("global" + this.fw._globals.length);
        this.fw.globals.push(inputPort);
    }
    save() {
        __WEBPACK_IMPORTED_MODULE_4__base_classes_flowchart_FlowchartModule__["d" /* FlowchartWriter */].save_flowchart_as_json(this.fw);
        this.close();
    }
    close() {
        this.dialogRef.close();
    }
    getInputTypeName(type) {
        if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].ColorPicker) {
            return "Color";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Input) {
            return "Simple Input";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Dropdown) {
            return "Dropdown";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].FilePicker) {
            return "Hello";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Slider) {
            return "Slider";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].URL) {
            return "WebURL";
        }
        else if (type == __WEBPACK_IMPORTED_MODULE_1__base_classes_port_PortModule__["b" /* InputPortTypes */].Checkbox) {
            return "Checkbox";
        }
        else {
            return "Not Identifiable";
        }
    }
    openSettingsDialog(input) {
        let dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__editors_parameter_editor_parameter_settings_dialog_component__["a" /* ParameterSettingsDialogComponent */], {
            height: '400px',
            width: '600px',
            data: {
                inputPortTypes: this.inputPortOpts,
                input: input
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    deleteGlobal(index) {
        // TODO:
        /*this._globals.splice(index, 1);
        this.fw.globals = this._globals;*/
    }
};
PublishSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-publish-settings',
        template: __webpack_require__("./src/app/ui-components/controls/publish-settings/publish-settings.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/controls/publish-settings/publish-settings.component.scss")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialog */]])
], PublishSettingsComponent);



/***/ }),

/***/ "./src/app/ui-components/dialogs/file-load-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileLoadDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm2015/material.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//
// Component for Parameter Settings
//
let FileLoadDialogComponent = class FileLoadDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    onNoClick() {
        this.dialogRef.close('new');
    }
    closeDialog(action) {
        this.dialogRef.close(action);
    }
};
FileLoadDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'file-load-dialog',
        template: __webpack_require__("./src/app/ui-components/dialogs/file-load-dialog.html"),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */]])
], FileLoadDialogComponent);



/***/ }),

/***/ "./src/app/ui-components/dialogs/file-load-dialog.html":
/***/ (function(module, exports) {

module.exports = "<p>{{message}}</p>\r\n\r\n<hr>\r\n\r\n<button (click)=\"closeDialog('load')\">Load File</button>\r\n<button (click)=\"closeDialog('new')\">New File</button>"

/***/ }),

/***/ "./src/app/ui-components/editors/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editor\">\r\n\t\r\n\t<div class=\"default\" *ngIf=\"!isVisible\">\r\n\t\tNo Node Selected\r\n\t</div>\r\n\r\n\t<split  *ngIf=\"isVisible\"\r\n\t\t\t  direction=\"horizontal\" \r\n\t\t\t  gutterColor=\"white\"\r\n              [gutterSize]=\"7\" \r\n              [useTransition]=\"true\">\r\n\r\n\t\t<split-area [visible]=\"isVisible\" [size]=\"30\" order=\"1\">\r\n\t\t\t<app-modulebox></app-modulebox>\r\n\t\t</split-area>\r\n\r\n\t\t<split-area [visible]=\"isVisible\" [size]=\"70\" order=\"2\">\r\n\t\t\t<div class=\"editor-container\">\r\n\t\t \t\t<app-parameter-editor></app-parameter-editor>\r\n\t\t\t\t<app-procedure-editor></app-procedure-editor>\r\n\t\t\t</div>\r\n\t\t</split-area>\r\n\r\n    </split>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-components/editors/editor/editor.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer, .editor {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container, .editor .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar, .editor .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container, .editor .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.default {\n  text-align: center; }\n\n.editor {\n  background-color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  width: 100%;\n  padding-bottom: 30px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.editor .view-container {\n    width: 100%; }\n\n.editor split-area {\n    overflow-y: auto !important; }\n"

/***/ }),

/***/ "./src/app/ui-components/editors/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let EditorComponent = class EditorComponent {
    constructor(_fs) {
        this._fs = _fs;
        this._moduleList = [];
        this.isVisible = false;
    }
    ngOnInit() {
        this._nodeX = this._fs.node$.subscribe((node) => this.update_view(node));
    }
    ngOnDestroy() {
        this._nodeX.unsubscribe();
    }
    update_view(node) {
        this.isVisible = node == undefined ? false : true;
    }
};
EditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__("./src/app/ui-components/editors/editor/editor.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/editors/editor/editor.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__["a" /* FlowchartService */]])
], EditorComponent);



/***/ }),

/***/ "./src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\r\n\t<div class=\"container\" >\r\n\r\n\t\t<split  direction=\"horizontal\" \r\n              [gutterSize]=\"7\" \r\n              [useTransition]=\"true\" gutterColor=white>\r\n\t\t\t\t\t\r\n\r\n\t\t\t    <!-- Panel: Contains Flowchart Controls -->\r\n\t\t\t\t<split-area class=\"sidebar\" [size]=\"30\" order=\"1\">\r\n\t\t\t\t\t<app-flowchart-controls></app-flowchart-controls>\r\n\t\t\t\t</split-area>\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t<!-- Graph: Nodes + Edges -->\r\n\t\t\t\t<split-area order=\"2\" [size]=\"70\"\r\n\t\t\t\t\tstyle=\"overflow: hidden; position: relative; display: flex; flex-direction: column;\" \r\n\t\t\t\t\t(wheel)=\"scale($event)\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div id=\"flowchart__name\">\r\n\t\t\t\t\t\t{{fc?.name || \"No flowchart\"}} with {{fc.nodes.length}} nodes and {{fc.edges.length}} edges\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t    <div class =\"action-window\">\r\n\r\n\t\t\t\t    \t<div class=\"content-wrapper\" (wheel)=\"scale($event)\" \r\n\t\t\t\t    \t\tstyle=\"flex-grow: 1;\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!-- div container for the flowchart -->\r\n\t\t\t\t\t\t\t<div class=\"graph-container\" \r\n\t\t\t\t\t\t\t\tid=\"graph-nodes\"\r\n\t\t\t\t\t\t\t    [style.transform]=\"getZoomStyle()\"\r\n\t\t\t\t\t\t\t\tondragover=\"return false\">\r\n\r\n\t\t\t\t\t\t\t\t<!-- Nodes --> \r\n\t\t\t\t\t\t\t\t<div class=\"node-container content-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- single  node -->\r\n\t\t\t\t\t\t\t\t\t<div  class=\"node\" \r\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let node of fc?.nodes; let node_index = index\" \r\n\t\t\t\t\t\t\t\t\t\t\tid=\"n{{node_index}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t[style.left.px]=\"node.position[0]\" \r\n\t\t\t\t\t\t\t\t\t\t\t[style.top.px]=\"node.position[1]\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- node-controls-->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-container\" *ngIf=\"node.id == active_node?.id\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group port-btns\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- copy node -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"duplicate_node()\" \t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Copy Node\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>content_copy</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- delete node -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"delete_node(node.id)\" \t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Delete Node\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- disable / enable node -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\" (click)=\"node.enabled = !node.enabled;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>{{ node.enabled ? 'check_circle' : 'highlight_off' }} </mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--todo -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"save_node_to_library()\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tmatTooltip=\"Save Node To Library\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"false && node.type == undefined\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>file_download</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- node body -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"node-body\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t[class.library]=\"node.type !== undefined\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[class.error]=\"node._hasError\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[class.disabled] =\"!node.enabled\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"active_node = node; push_node();\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tdraggable=true  \r\n\t\t\t\t\t\t\t\t\t\t\t\t(dragstart)=\"nodeDragStart($event, node)\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t(drag)=\"nodeDragging($event, node, node_index)\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t(dragend)=\"nodeDragEnd($event, node)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"node-name\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[class.selected]=\"node.id == active_node?.id\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <input matInput\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    [(ngModel)]=\"node.name\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    style=\"margin: 2px; min-width: 50px; max-width: 80px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    placeholder=\"Node Name\" value=\"{{ node.name }}\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!--inputs -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"port-container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"port input\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let port of node.inputs; let pi=index\"  \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"n{{node.id}}pi{{pi}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[class.hidden]=\"port.type != 'Input'\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"port-grip\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdraggable=true\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[class.connected]=\"port.isConnected\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(dragstart)=\"portDragStart($event, port, [node_index, pi])\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(drag)=\"portDragging($event, port)\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(dragend)=\"portDragEnd($event, port)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(drop)=\"portDrop($event, port, [node_index, pi])\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    [(ngModel)]=\"port.name\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    style=\"margin: 2px; min-width: 50px; max-width: 80px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    placeholder=\"Input Port Name\" value=\"{{ port.name }}\"/>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span class=\"port-name\">{{ port.name | shortname: 10 }}</span> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"margin: 0 auto;\" *ngIf='node.time_taken'>Time: {{node.time_taken}}s</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- outputs -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"port-container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"port output\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let port of node.outputs; let po=index;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"n{{node.id}}po{{po}}\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    [(ngModel)]=\"port.name\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    style=\"margin: 2px; min-width: 50px; max-width: 80px; text-align: right;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    placeholder=\"Output Port Name\" value=\"{{ port.name }}\"/>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"port-grip\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdraggable=true\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[class.selected]=\"isPortSelected(node_index, po)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[class.connected]=\"port.isConnected\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickPort($event, node_index, po)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(dragstart)=\"portDragStart($event, port, [node_index, po])\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(drag)=\"portDragging($event, port)\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(dragend)=\"portDragEnd($event, port)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(drop)=\"portDrop($event, port, [node_index, po])\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"fromLibrary\"  style=\"font-size: 8px; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tLibrary Node\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t<!-- Edges -->\r\n\t\t\t\t\t\t\t\t<div class=\"edge-container\">\r\n\t\t\t\t\t\t\t\t\t<app-graph-edge \r\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let edge of fc?.edges\" \r\n\t\t\t\t\t\t\t\t\t\t[edge]=\"edge\">\r\n\t\t\t\t\t\t\t\t\t</app-graph-edge>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- temporary edge -->\r\n\t\t\t\t\t\t\t\t\t<app-graph-edge \r\n\t\t\t\t\t\t\t\t\t\t\t[class.hidden]=\"!_linkMode\"\r\n\t\t\t\t\t\t\t\t\t\t\t[edge]=\"{inputPosition: mouse_pos.start, outputPosition: mouse_pos.current}\"\r\n\t\t\t\t\t\t\t\t\t\t\t[temporary]=\"true\">\r\n\t\t\t\t\t\t\t\t\t</app-graph-edge>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</split-area>\r\n\r\n\t\t</split>\r\n\r\n\t</div>\r\n\t\r\n\r\n</div>\r\n<!-- </mat-expansion-panel> -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\nsplit-area {\n  overflow: auto !important; }\n\ninput {\n  border: none; }\n\ninput:focus {\n  border-bottom: 1px dashed gray; }\n\n#flowchart__name {\n  margin: 0 auto;\n  font-size: 14px;\n  line-height: 28px;\n  font-weight: bold;\n  color: #8AA8C0; }\n\n.viewer {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-image: repeating-linear-gradient(0deg, transparent, transparent 70px, #F1F1F1 70px, #F1F1F1 71px), repeating-linear-gradient(-90deg, transparent, transparent 70px, #F1F1F1 70px, #F1F1F1 71px);\n  background-size: 71px 71px;\n  background-color: white;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  padding-bottom: 30px; }\n\n.viewer .container {\n    position: relative;\n    height: 100%;\n    overflow: hidden; }\n\n.viewer .container .disabled {\n      color: #8AA8C0; }\n\n.viewer .container .disabled:hover {\n        color: #8AA8C0 !important; }\n\n.viewer .container .sidebar {\n      font-size: 12px;\n      background-color: #F1F1F1;\n      color: #395D73;\n      white-space: nowrap;\n      overflow-x: hidden !important; }\n\n.viewer .container .sidebar section {\n        padding-left: 15px;\n        padding-bottom: 5px;\n        padding-top: 5px;\n        border-bottom: 1px solid #8AA8C0; }\n\n.viewer .container .sidebar section div {\n          cursor: pointer; }\n\n.viewer .container .sidebar section div:hover {\n            color: #F0BFA0; }\n\n.viewer .content-wrapper {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    -webkit-transform-origin: top left;\n            transform-origin: top left; }\n\n.viewer .info-container {\n    padding: 0px 30px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.viewer .info-container .info {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n\n.viewer .info-container .info .label {\n        font-size: 12px;\n        font-weight: 100;\n        color: #F07A79; }\n\n.viewer .info-container .info .value {\n        color: #395D73;\n        font-size: 11px;\n        font-weight: 600; }\n\n.viewer .info-container .info .action {\n        cursor: pointer;\n        font-size: 11px;\n        color: #8AA8C0; }\n\n.viewer .graph-container {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    -webkit-transform-origin: top left;\n            transform-origin: top left; }\n\n.viewer .graph-container #graph-edges {\n      background-color: transparent;\n      z-index: 1000; }\n\n.viewer .graph-container #graph-edges #temporary-edge .hidden {\n        display: none; }\n\n.viewer .graph-container #graph-nodes {\n      background-color: transparent;\n      overflow: hidden;\n      z-index: 1000; }\n\n.viewer .info-container {\n    position: absolute;\n    right: 0;\n    bottom: 0; }\n\n.viewer .info-container .label, .viewer .info-container .value {\n      margin-right: 5px;\n      font-weight: normal !important; }\n\n.viewer .node-container {\n    position: relative; }\n\n.viewer .node-container .node {\n      position: absolute;\n      -webkit-transform-origin: top left;\n              transform-origin: top left;\n      z-index: 3;\n      margin: 0px;\n      color: #395D73;\n      /* .port-container{\r\n\t\t\t\t\tdisplay: flex; \r\n\t\t\t\t\tflex-direction: row; \r\n\t\t\t\t\tjustify-content: space-around;\r\n\t\t\t\t\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\theight: 10px;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\tz-index: 1;\r\n\t\t\t\t\r\n\t\t\t\t\tmargin-top: -2px;\r\n\t\t\t\t\t\r\n\t\t\t\t\t&.input{\r\n\t\t\t\t\r\n\t\t\t\t\t\t.port{\r\n\t\t\t\t\t\t\tborder-top-right-radius: 15px;\r\n\t\t\t\t\t\t\tborder-top-left-radius: 15px;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t&.output{\r\n\t\t\t\t\r\n\t\t\t\t\t\t.port{\r\n\t\t\t\t\t\t\tborder-bottom-right-radius: 15px;\r\n\t\t\t\t\t\t\tborder-bottom-left-radius: 15px;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t.port{\r\n\t\t\t\t\t\theight: 7.5px;\r\n\t\t\t\t\t\twidth: 15px;\r\n\t\t\t\t\t\tborder: 2px solid black;\r\n\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\t\tbackground-color: black;\r\n\t\t\t\t\t\tmargin: 0px 2px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tz-index: 3;\r\n\t\t\t\t\r\n\t\t\t\t\t\t&:hover{\r\n\t\t\t\t\t\t\tbackground-color: orange;\r\n\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t\t&.connected{\r\n\t\t\t\t\t\t\tbackground-color: green;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t.btn-sm{\r\n\t\t\t\t\t\tposition: absolute; \r\n\t\t\t\t\t\tright: -15px;\r\n\t\t\t\t\t\tborder: 2px solid gray;\r\n\t\t\t\t\t\tcolor: gray;\r\n\t\t\t\t\t\theight: 15px; \r\n\t\t\t\t\t\twidth: 15px;\r\n\t\t\t\t\t\tfont-size: 10px; \r\n\t\t\t\t\t\tline-height: 15px;\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\r\n\t\t\t\t\t\tbackground: url('../../../../assets/img/plus.png');\r\n\t\t\t\t\t\tbackground-size: cover;\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\t&.input{\r\n\t\t\t\t\t\t\ttop: -5px; \r\n\t\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t\t&.output{\r\n\t\t\t\t\t\t\tbottom: 0px; \r\n\t\t\t\t\t\t\tleft: -15px;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t} */ }\n\n.viewer .node-container .node.hidden {\n        display: none; }\n\n.viewer .node-container .node .btn-container {\n        position: absolute;\n        right: -30px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        height: 100px; }\n\n.viewer .node-container .node .btn-container .btn-group {\n          position: relative;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          background: none; }\n\n.viewer .node-container .node .btn-container .btn-group .action-button {\n            position: relative;\n            width: 25px;\n            height: 24px;\n            cursor: pointer;\n            font-size: 9px;\n            text-align: center; }\n\n.viewer .node-container .node .btn-container .btn-group .action-button .material-icons {\n              font-size: 18px;\n              line-height: 24px;\n              color: #8AA8C0; }\n\n.viewer .node-container .node .btn-container .btn-group .action-button:hover {\n              color: white; }\n\n.viewer .node-container .node .btn-container .btn-group .action-button:hover .mat-icon {\n                color: #F0BFA0; }\n\n.viewer .node-container .node .node-body {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        position: relative;\n        min-height: 30px;\n        min-width: 70px;\n        width: auto;\n        border: 1px solid #395D73;\n        background-color: rgba(255, 255, 255, 0.7);\n        cursor: move; }\n\n.viewer .node-container .node .node-body.disabled {\n          opacity: 0.4; }\n\n.viewer .node-container .node .node-body.selected {\n          border-width: 5px; }\n\n.viewer .node-container .node .node-body.library {\n          border-color: #395D73;\n          border-style: solid; }\n\n.viewer .node-container .node .node-body.error {\n          background-color: #E94858; }\n\n.viewer .node-container .node .node-body.function {\n          background-color: yellow;\n          border: 1px dashed green; }\n\n.viewer .node-container .node .node-body .node-name {\n          font-family: sans-serif;\n          font-size: 12px;\n          border-bottom: 1px solid #395D73;\n          text-align: center;\n          background-color: #F1F1F1; }\n\n.viewer .node-container .node .node-body .node-name input {\n            background-color: inherit;\n            border: 0px;\n            color: #395D73;\n            text-align: center; }\n\n.viewer .node-container .node .node-body .node-name.selected {\n            background-color: #8AA8C0; }\n\n.viewer .node-container .node .node-body .node-name.selected input {\n              color: white;\n              font-weight: bold; }\n\n.viewer .node-container .node .node-body .node-name.selected input:focus {\n                color: #395D73;\n                background-color: #F0BFA0; }\n\n.viewer .node-container .node .node-body .port-container {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          margin-top: 10px;\n          margin-bottom: 10px; }\n\n.viewer .node-container .node .node-body .port-container .divider {\n            height: 2px;\n            width: 100%;\n            background-color: #8AA8C0; }\n\n.viewer .node-container .node .node-body .port-container .port {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            margin: 5px 0px; }\n\n.viewer .node-container .node .node-body .port-container .port.hidden {\n              display: none; }\n\n.viewer .node-container .node .node-body .port-container .port .port-grip {\n              width: 15px;\n              height: 15px;\n              border-radius: 50%;\n              background-color: #F1F1F1;\n              border: 1px solid #395D73;\n              cursor: pointer; }\n\n.viewer .node-container .node .node-body .port-container .port .port-grip.isFunction {\n                border-style: dashed;\n                background-color: gray;\n                border-radius: 0px; }\n\n.viewer .node-container .node .node-body .port-container .port .port-grip.selected {\n                border: 2px solid #8AA8C0;\n                background-color: #F0BFA0; }\n\n.viewer .node-container .node .node-body .port-container .port .port-grip:hover {\n                background-color: #F0BFA0; }\n\n.viewer .node-container .node .node-body .port-container .port .port-name {\n              font-size: 12px;\n              margin: 0px 5px; }\n\n.viewer .node-container .node .node-body .port-container .port .port-name.isFunction {\n                color: black;\n                font-size: 9.6px; }\n\n.viewer .node-container .node .node-body .port-container .port.input {\n              -webkit-box-pack: start;\n                  -ms-flex-pack: start;\n                      justify-content: flex-start;\n              margin-left: -7.5px; }\n\n.viewer .node-container .node .node-body .port-container .port.output {\n              -webkit-box-pack: end;\n                  -ms-flex-pack: end;\n                      justify-content: flex-end;\n              margin-right: -7.5px; }\n\n.viewer .node-container .node:active {\n        cursor: none; }\n"

/***/ }),

/***/ "./src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowchartViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_flowchart_FlowchartUtils__ = __webpack_require__("./src/app/base-classes/flowchart/FlowchartUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_flowchart_FlowchartConnectionUtils__ = __webpack_require__("./src/app/base-classes/flowchart/FlowchartConnectionUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_classes_node_NodeModule__ = __webpack_require__("./src/app/base-classes/node/NodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_classes_port_PortModule__ = __webpack_require__("./src/app/base-classes/port/PortModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_services_console_service__ = __webpack_require__("./src/app/global-services/console.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_services_mobius_service__ = __webpack_require__("./src/app/global-services/mobius.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global_services_node_library_service__ = __webpack_require__("./src/app/global-services/node-library.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









class FlowchartRenderUtils {
    static node_width(node) {
        let max = Math.max(node.inputs.length, node.outputs.length);
        let width = FlowchartRenderUtils._margin * (max + 1) + (max) * FlowchartRenderUtils._portWidth;
        return width;
    }
    static port_dom_element(node, portIndex, portType) {
        let name = "n" + node.id + portType + portIndex;
        let el = document.getElementById(name);
        if (el == undefined)
            throw Error(`Element with ID ${name} not found`);
        //else console.log(`Element with ID ${name} was found`)
        return el;
    }
    static get_port_position(node, portIndex, portType) {
        let x;
        let y;
        let port_size = 15;
        // let name: string = "n" + node.id + portType + portIndex;
        // let el: any = document.getElementById(name);
        let el = FlowchartRenderUtils.port_dom_element(node, portIndex, portType);
        if (el == null || node == undefined) {
            return { x: 0, y: 0 };
        }
        let node_pos = node.position;
        let port_pos_x = el.offsetLeft;
        let port_pos_y = el.offsetTop;
        let node_width = el.offsetParent.offsetWidth;
        if (portType == "pi") {
            x = node_pos[0];
            y = node_pos[1] + (port_pos_y + port_size / 2);
        }
        else if (portType == "po") {
            x = node_pos[0] + node_width;
            y = node_pos[1] + (port_pos_y + port_size / 2);
        }
        else {
            throw Error("Unknown port type");
        }
        return { x: x, y: y };
    }
}
FlowchartRenderUtils._portWidth = 15;
FlowchartRenderUtils._margin = 10;
let FlowchartViewerComponent = class FlowchartViewerComponent {
    constructor(_fs, _mb, $log, _ns) {
        this._fs = _fs;
        this._mb = _mb;
        this.$log = $log;
        this._ns = _ns;
        this.pan_mode = false;
        this.left = 0;
        this.top = 0;
        this.zoom = 1;
        this.showLibrary = false;
        this.showDialog = { status: false, position: [0, 0] };
        this.subscriptions = [];
        //
        //  Node Draggin
        //
        this.dragStart = { x: 0, y: 0 };
        this.trend = { x: 1, y: 1 };
        this.shakeCount = 0;
        this._linkMode = false;
        this.mouse_pos = {
            start: { x: 0, y: 0 },
            current: { x: 0, y: 0 }
        };
    }
    ngOnInit() {
        this.subscriptions.push(this._fs.flowchart$.subscribe((fc) => { if (fc) {
            this.fc = fc;
            this.render_flowchart();
        } }));
        //this.subscriptions.push(this._fs.node$.subscribe( (node) => this.active_node = node ));
    }
    ngOnDestroy() {
        this.subscriptions.map(function (s) {
            s.unsubscribe();
        });
    }
    push_flowchart() {
        this._fs.push_flowchart(this.fc);
    }
    push_node() {
        this._fs.push_node(this.active_node);
    }
    render_edges() {
        try {
            this.fc.edges.map((edge) => {
                edge["inputPosition"] = FlowchartRenderUtils.get_port_position(this.fc.nodes[edge.input_address[0]], edge.input_address[1], "pi");
                edge["outputPosition"] = FlowchartRenderUtils.get_port_position(this.fc.nodes[edge.output_address[0]], edge.output_address[1], "po");
            });
            //console.log(`Edges rendered successfully`);
        }
        catch (ex) {
            console.log(`Error while rendering edges, trying again in 0.5s`);
            //TODO: Find a better way!
            let that = this;
            setTimeout(() => { that.render_edges(); }, 500);
        }
    }
    render_flowchart() {
        if (this.fc) {
            this.fc.nodes.map((node) => node["width"] = FlowchartRenderUtils.node_width(node));
            this.render_edges();
        }
        //this.$log.log(`Re-rendering flowchart`);
    }
    duplicate_node() {
        this._fs.flowchart.nodes.push(__WEBPACK_IMPORTED_MODULE_3__base_classes_node_NodeModule__["b" /* NodeUtils */].copy_node(this.active_node));
        console.log(this._fs.flowchart.nodes.length);
    }
    // node utils
    delete_node(node_id) {
        this._selectedNode = undefined;
        if (this.active_node.id == node_id)
            this._fs.push_node(undefined);
        this.fc = __WEBPACK_IMPORTED_MODULE_1__base_classes_flowchart_FlowchartUtils__["a" /* FlowchartUtils */].delete_node(this.fc, node_id);
    }
    save_node_to_library() {
        __WEBPACK_IMPORTED_MODULE_8__global_services_node_library_service__["a" /* NodeLibraryService */].save_library_node(this.active_node);
    }
    //
    //
    //  Viewer Related Functions
    //
    //
    resetViewer() {
        this.zoom = 1;
        this.left = 0;
        this.top = 0;
        this.pan_mode = false;
    }
    //
    //
    //
    pan($event) {
        //console.log("mousedown", $event);
    }
    //
    //  node class is assigned a zoom value based on this value
    //  this position of this node is absolute coordinates
    //
    scale($event) {
        $event.preventDefault();
        $event.stopPropagation();
        let scaleFactor = 0.1;
        let value = this.zoom + (Math.sign($event.wheelDelta)) * scaleFactor;
        if (value > 0.2 && value < 1.5) {
            this.zoom = Number((value).toPrecision(2));
            this.render_flowchart();
        }
    }
    startPan($event) {
        this.pan_mode = true;
        this.pan_init = [$event.clientX, $event.clientY];
    }
    panning($event) {
        if (this.pan_mode == true) {
            let relX = $event.clientX - this.pan_init[0];
            let relY = $event.clientY - this.pan_init[1];
            let factor = 1;
            this.left += relX;
            this.top += relY;
            this.pan_init = [$event.clientX, $event.clientY];
        }
    }
    stopPan($event) {
        this.pan_mode = false;
        this.pan_init = undefined;
    }
    //
    //
    //  Data Related Functions
    //
    //
    updateEdges() {
    }
    resetData() {
    }
    //
    //
    //
    isSelected(node) {
        if (node == undefined) {
            return false;
        }
    }
    isPortSelected(nodeIndex, portIndex) {
        return (nodeIndex == this._selectedNodeIndex && portIndex == this._selectedPortIndex);
    }
    //
    // Add node and edges
    //
    add_node($event) {
        $event.stopPropagation();
        this.fc = __WEBPACK_IMPORTED_MODULE_1__base_classes_flowchart_FlowchartUtils__["a" /* FlowchartUtils */].add_node(this.fc);
        this.push_flowchart();
    }
    addEdge(outputPortAddress, inputPortAddress) {
        this._fs.addEdge(outputPortAddress, inputPortAddress);
    }
    //
    //
    //  Events
    //
    //
    deselect($event) {
        $event.stopPropagation();
    }
    clickPort($event, nodeIndex, portIndex) {
        // select the node
        $event.stopPropagation();
    }
    nodeDragStart($event, node) {
        $event.dataTransfer.setDragImage(new Image(), 0, 0);
        // todo : find more elegant solution
        this.dragStart = { x: $event.pageX, y: $event.pageY };
        this.trend = { x: 1, y: 1 };
        this.shakeCount = 0;
    }
    nodeDragging($event, node, nodeIndex) {
        this.pan_mode = false;
        let relX = $event.pageX - this.dragStart.x;
        let relY = $event.pageY - this.dragStart.y;
        // if node is going beyond canvas, do nothing
        if ((node.position[0] + relX / this.zoom) < 0 || (node.position[1] + relY / this.zoom) < 0) {
            return;
        }
        node.position[0] += relX / this.zoom;
        node.position[1] += relY / this.zoom;
        this.dragStart = { x: $event.pageX, y: $event.pageY };
        if (relX && relY) {
            if (Math.sign(relX) !== this.trend.x || Math.sign(relY) !== this.trend.y) {
                this.trend = { x: Math.sign(relX), y: Math.sign(relY) };
                this.shakeCount++;
                if (this.shakeCount == 8) {
                    this.$log.log(`Disconnecting node ${node.name}`);
                    this.fc = __WEBPACK_IMPORTED_MODULE_2__base_classes_flowchart_FlowchartConnectionUtils__["a" /* FlowchartConnectionUtils */].disconnect_node(this.fc, nodeIndex);
                    this.push_flowchart();
                }
            }
        }
        this.render_flowchart();
    }
    nodeDragEnd($event, node) {
        this.pan_mode = false;
        let relX = $event.pageX - this.dragStart.x;
        let relY = $event.pageY - this.dragStart.y;
        if ((node.position[0] + relX / this.zoom) < 0 || (node.position[1] + relY / this.zoom) < 0) {
            return;
        }
        node.position[0] += relX;
        node.position[1] += relY;
        this.dragStart = { x: 0, y: 0 };
        this.trend = { x: 1, y: 1 };
        this.shakeCount = 0;
        this.render_flowchart();
    }
    portDragStart($event, port, address) {
        $event.stopPropagation();
        $event.dataTransfer.setDragImage(new Image(), 0, 0);
        this._startPort = port;
        this._startPort['address'] = address;
        this._linkMode = true;
        let type;
        if (port instanceof __WEBPACK_IMPORTED_MODULE_4__base_classes_port_PortModule__["a" /* InputPort */]) {
            type = "pi";
        }
        if (port instanceof __WEBPACK_IMPORTED_MODULE_4__base_classes_port_PortModule__["c" /* OutputPort */]) {
            type = "po";
        }
        let port_position = FlowchartRenderUtils.get_port_position(this.fc.nodes[address[0]], address[1], type);
        this.mouse_pos.start = { x: port_position.x, y: port_position.y };
        this.mouse_pos.current = { x: port_position.x, y: port_position.y };
        this.dragStart = { x: $event.clientX, y: $event.clientY };
    }
    portDragging($event, port) {
        $event.stopPropagation();
        // todo: compute total offset of this div dynamically
        // urgent!
        let relX = $event.clientX - this.dragStart.x;
        let relY = $event.clientY - this.dragStart.y;
        this.mouse_pos.current.x += relX / this.zoom;
        this.mouse_pos.current.y += relY / this.zoom;
        this.dragStart = { x: $event.clientX, y: $event.clientY };
    }
    portDragEnd($event, port) {
        $event.stopPropagation();
        let relX = $event.clientX - this.dragStart.x;
        let relY = $event.clientY - this.dragStart.y;
        this.mouse_pos.current.x += relX;
        this.mouse_pos.current.y += relY;
        this.dragStart = { x: 0, y: 0 };
        this._startPort = undefined;
        this._endPort = undefined;
        this._linkMode = false;
    }
    portDrop($event, port, address) {
        this._endPort = port;
        this._endPort["address"] = address;
        if (this._startPort !== undefined && this._endPort !== undefined) {
            let inputPort;
            let outputPort;
            if (this._startPort instanceof __WEBPACK_IMPORTED_MODULE_4__base_classes_port_PortModule__["a" /* InputPort */]) {
                inputPort = this._startPort["address"];
            }
            if (this._startPort instanceof __WEBPACK_IMPORTED_MODULE_4__base_classes_port_PortModule__["c" /* OutputPort */]) {
                outputPort = this._startPort["address"];
            }
            if (this._endPort instanceof __WEBPACK_IMPORTED_MODULE_4__base_classes_port_PortModule__["a" /* InputPort */]) {
                inputPort = this._endPort["address"];
            }
            if (this._endPort instanceof __WEBPACK_IMPORTED_MODULE_4__base_classes_port_PortModule__["c" /* OutputPort */]) {
                outputPort = this._startPort["address"];
            }
            if (inputPort !== undefined && outputPort !== undefined) {
                this.addEdge(outputPort, inputPort);
            }
            else {
                this.$log.log("Invalid connection");
            }
            // clear the variables
            this._startPort = undefined;
            this._endPort = undefined;
        }
        this.render_flowchart();
    }
    getZoomStyle() {
        let value = "scale(" + this.zoom + ")";
        return value;
    }
    //
    // Edge drawing functions
    //
    getEdgePath(edge) {
        let output_position, input_position;
        try {
            output_position = FlowchartRenderUtils.get_port_position(this.fc.nodes[edge.output_address[0]], edge.output_address[1], "po");
            input_position = FlowchartRenderUtils.get_port_position(this.fc.nodes[edge.input_address[0]], edge.input_address[1], "pi");
            edge["inputPosition"] = input_position;
            edge["outputPosition"] = output_position;
        }
        catch (ex) {
        }
        return edge;
    }
};
FlowchartViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-flowchart-viewer',
        template: __webpack_require__("./src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/editors/flowchart-viewer/flowchart-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__global_services_flowchart_service__["a" /* FlowchartService */],
        __WEBPACK_IMPORTED_MODULE_7__global_services_mobius_service__["a" /* MobiusService */],
        __WEBPACK_IMPORTED_MODULE_6__global_services_console_service__["a" /* ConsoleService */],
        __WEBPACK_IMPORTED_MODULE_8__global_services_node_library_service__["a" /* NodeLibraryService */]])
], FlowchartViewerComponent);



/***/ }),

/***/ "./src/app/ui-components/editors/parameter-editor/parameter-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\r\n\t<div class=\"container\">\r\n\t\t\r\n\t\t<!-- default -->\r\n\t\t<div class=\"default\" *ngIf=\"!active_node\">No node selected</div>\r\n\r\n\t\t<!-- main -->\r\n\t\t<div class=\"view-container\" *ngIf=\"active_node\">\r\n\t\t\t\r\n\t\t\t<mat-accordion multi=\"true\" [displayMode]=\"flat\">\r\n\r\n\t\t\t\t<!-- inputs -->\r\n\t\t\t\t<mat-expansion-panel [disabled]=\"active_node.inputs.length == 0\" [expanded]=\"true\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t  Inputs ({{ active_node.inputs.length }})\r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t<div class='port input' *ngFor=\"let inp of active_node.inputs; let i=index\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<input \r\n\t\t\t\t\t\t\t\t    name={{inp.name}}_name\r\n\t\t\t\t\t\t\t\t    class=\"content\"\r\n\t\t\t\t\t\t\t\t\tcontenteditable=\"true\"\r\n\t\t\t\t\t\t\t\t\tspellcheck=\"false\" \r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"inp.name\">\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t\t\t<!--<span class='label'>Type</span>-->\r\n\t\t\t\t\t\t\t\t<span class='content'>\r\n\t\t\t\t\t\t\t\t\t<select \r\n\t\t\t\t\t\t\t\t\t    name={{inp.name}}_type\r\n\t\t\t\t\t\t\t\t\t    [(ngModel)]=\"inp.type\">\r\n\t\t\t\t\t\t         \t    <option *ngFor=\"let x of inputPortOpts\" [value]=\"x\" [selected]=\"inp.type == x\">\r\n\t\t\t\t\t\t         \t    \t{{x}}\r\n\t\t\t\t\t\t         \t    </option>\r\n\t\t\t\t\t\t            </select>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\r\n\t\t\t\t\t\t</div>\t\t\t\r\n\r\n\t\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t\t\t<button mat-button *ngIf='inp.type == \"Slider\"'  \r\n\t\t\t\t\t\t\t\t(click)='openSettingsDialog(inp)' tabindex=\"-1\">\r\n\t\t\t\t\t\t\t\t<mat-icon>settings</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t        <button mat-button (click)='delete_port($event, inp)' tabindex=\"-1\">\r\n\t\t\t\t\t    \t\t<mat-icon>delete</mat-icon>\r\n    \t\t\t\t\t    </button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</mat-expansion-panel>\r\n\r\n\t\t\t\t<!-- outputs -->\r\n\t\t\t\t<mat-expansion-panel [disabled]=\"active_node.outputs.length == 0\" [expanded]=\"true\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t  Outputs ({{ active_node.outputs.length }})\r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t<div class='port output' *ngFor=\"let output of active_node.outputs; let o=index\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t\t\t<input \r\n\t\t\t\t\t\t\t\t\t    name={{output.name}}_name\r\n\t\t\t\t\t\t\t\t\t    class=\"content\"\r\n\t\t\t\t\t\t\t\t\t\tcontenteditable=\"true\"\r\n\t\t\t\t\t\t\t\t\t\tspellcheck=\"false\" \r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"output.name\"/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class='row'>\r\n\t\t\t\t\t\t\t\t<span class='content'>\r\n\t\t\t\t\t\t\t\t\t<select name={{output.name}}_type\r\n\t\t\t\t\t\t\t\t\t    [(ngModel)]=\"output.type\">\r\n\t\t\t\t\t\t         \t    <option *ngFor=\"let x of outputPortOpts\" [value]=\"x\" [selected]=\"x == output.type\">\r\n\t\t\t\t\t\t         \t    \t{{ x | port_type_name }}\r\n\t\t\t\t\t\t         \t    </option>\r\n\t\t\t\t\t\t            </select>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t\t        <button mat-button (click)='delete_port($event, output)' tabindex=\"-1\">\r\n\t\t\t\t\t\t    \t\t<mat-icon>delete</mat-icon>\r\n\t    \t\t\t\t\t    </button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t</mat-expansion-panel>\r\n\r\n\t\t\t</mat-accordion>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-components/editors/parameter-editor/parameter-editor.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.addBtn {\n  font-size: 12px; }\n\n.viewer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  /*.port-heading{\r\n\t\tfont-size: $fsize2;\r\n\t\tline-height: $header-height;\r\n\t\tpadding: 0px 4px;\r\n\t\ttext-align: center;\r\n\t}*/ }\n\n.viewer .port {\n    font-family: 'Ubuntu Mono', monospace;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important;\n    padding-left: 15px;\n    height: auto;\n    min-height: 24px;\n    border-bottom: 1px solid #8AA8C0;\n    background-color: white; }\n\n.viewer .port:hover .content {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      height: auto; }\n\n.viewer .port:hover .controls {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n\n.viewer .port span {\n      width: 100px;\n      height: 12px; }\n\n.viewer .port .content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row nowrap;\n              flex-flow: row nowrap;\n      height: auto;\n      font-size: 12px;\n      line-height: 15px;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      padding: 0;\n      margin: 2px 0px;\n      /*.row{\t\t\t\t\r\n\t\t\t\tdisplay: flex; \r\n\t\t\t\tflex-direction: row;\r\n\r\n\t\t\t\t.label{\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\ttext-transform: uppercase;\r\n\t\t\t\t\tfont-size: 10px; \r\n\t\t\t\t\tcolor: gray; \r\n\t\t\t\t\twidth: 100px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.content{\r\n\t\t\t\t\tmin-width: 50px;\r\n\r\n\t\t\t\t\t&.undefined{\r\n\t\t\t\t\t\tborder-bottom: 1px dashed blue;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}*/ }\n\n.viewer .port .content .row {\n        height: auto !important; }\n\n.viewer .port .content .hidden {\n        display: none !important; }\n\n.viewer .port .content span {\n        padding: 0 !important;\n        text-align: center !important;\n        border-bottom: 1px solid #8AA8C0 !important;\n        margin-right: 5px; }\n\n.viewer .port .content select {\n        font-size: 12px;\n        font-family: 'Ubuntu Mono', monospace;\n        width: 100px;\n        border: 0px !important;\n        color: #395D73; }\n\n.viewer .port .controls {\n      margin: 0 !important;\n      display: none; }\n\n.viewer .port .controls button {\n        max-width: 15px !important;\n        height: 15px;\n        min-width: 15px !important;\n        padding: 0px !important;\n        -webkit-box-flex: 0 !important;\n            -ms-flex-positive: 0 !important;\n                flex-grow: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n\n.viewer .port .controls button mat-icon {\n          height: 12px;\n          vertical-align: top !important;\n          font-size: 15px !important;\n          text-align: left !important; }\n\n.viewer .port .controls button:hover {\n          background-color: #F1F1F1 !important; }\n\n.viewer .port .controls button:hover mat-icon {\n            color: #F07A79 !important; }\n\n.hidden {\n  display: inline-block !important;\n  visibility: hidden !important; }\n\n.container {\n  overflow: hidden !important; }\n\n.container mat-expansion-panel-header {\n    background-color: #F1F1F1 !important;\n    border-top: 1px solid #8AA8C0 !important;\n    border-bottom: 1px solid #8AA8C0 !important;\n    padding-left: 15px !important; }\n\n.container mat-expansion-panel-header mat-panel-title {\n      color: #395D73 !important;\n      font-weight: bold !important;\n      font-size: 12px !important; }\n\n.container mat-expansion-panel-header:hover {\n      background-color: #F1F1F1 !important; }\n\n.view-container {\n  padding: 0 !important;\n  overflow: hidden !important; }\n"

/***/ }),

/***/ "./src/app/ui-components/editors/parameter-editor/parameter-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_node_NodeUtils__ = __webpack_require__("./src/app/base-classes/node/NodeUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__ = __webpack_require__("./src/app/base-classes/port/PortModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parameter_settings_dialog_component__ = __webpack_require__("./src/app/ui-components/editors/parameter-editor/parameter-settings-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_classes_procedure_ProcedureModule__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureModule.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let ParameterEditorComponent = class ParameterEditorComponent {
    constructor(_fs, dialog) {
        this._fs = _fs;
        this.dialog = dialog;
        this.inputPortOpts = [
            __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["b" /* InputPortTypes */].Input,
            __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["b" /* InputPortTypes */].Slider,
            __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["b" /* InputPortTypes */].Checkbox,
            __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["b" /* InputPortTypes */].FilePicker,
            __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["b" /* InputPortTypes */].URL
        ];
        this.outputPortOpts = [
            __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["d" /* OutputPortTypes */].Text,
            __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["d" /* OutputPortTypes */].Code,
            __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["d" /* OutputPortTypes */].Console,
            __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["d" /* OutputPortTypes */].Cesium
            // OutputPortTypes.Three, 
        ];
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this._fs.node$.subscribe((node) => this.active_node = node));
    }
    ngOnDestroy() {
        this.subscriptions.map(function (s) {
            s.unsubscribe();
        });
    }
    /// other functions
    delete_port(event, port) {
        event.stopPropagation();
        __WEBPACK_IMPORTED_MODULE_1__base_classes_node_NodeUtils__["a" /* NodeUtils */].delete_port(this.active_node, port);
    }
    /// setting dialog
    openSettingsDialog(input) {
        let dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__parameter_settings_dialog_component__["a" /* ParameterSettingsDialogComponent */], {
            height: '400px',
            width: '600px',
            data: {
                inputPortTypes: this.inputPortOpts,
                input: input
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    // higher order functions
    addFunctionToProcedure(inp) {
        // get functional graph node
        let value = inp.getValue().port;
        if (value) {
            let prod = __WEBPACK_IMPORTED_MODULE_6__base_classes_procedure_ProcedureModule__["a" /* ProcedureFactory */].getProcedure(__WEBPACK_IMPORTED_MODULE_6__base_classes_procedure_ProcedureModule__["b" /* ProcedureTypes */].Function, { node: this.active_node, port: inp });
            __WEBPACK_IMPORTED_MODULE_1__base_classes_node_NodeUtils__["a" /* NodeUtils */].add_procedure(this.active_node, prod);
        }
    }
    portHasFunction(port) {
        let value = port.getValue();
        if (value && value.port !== undefined && value.port.length == 2) {
            return true;
        }
        else {
            return false;
        }
    }
};
ParameterEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-parameter-editor',
        template: __webpack_require__("./src/app/ui-components/editors/parameter-editor/parameter-editor.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/editors/parameter-editor/parameter-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__global_services_flowchart_service__["a" /* FlowchartService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialog */]])
], ParameterEditorComponent);



/***/ }),

/***/ "./src/app/ui-components/editors/parameter-editor/parameter-settings-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterSettingsDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__ = __webpack_require__("./src/app/base-classes/port/PortModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




//
// Component for Parameter Settings
//
let ParameterSettingsDialogComponent = class ParameterSettingsDialogComponent {
    constructor(dialogRef, data, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.inputPortTypes = __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["b" /* InputPortTypes */];
        this.type = data.input.type;
        this.input = data.input;
    }
    updateDefaultValue($event) {
        let value = $event.srcElement.value;
        if (value.trim().length > 0) {
            if (this.type == __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["b" /* InputPortTypes */].Slider) {
                if (isNaN(parseInt(value))) {
                    alert("Slider values can only be numbers");
                    return;
                }
            }
            this.input.setDefaultValue(value);
        }
        else {
            this.input.setDefaultValue(undefined);
        }
    }
    updateSliderOpts($event, prop) {
        let value = $event.srcElement.value;
        if (value.trim().length > 0) {
            if (isNaN(parseInt(value))) {
                alert("Slider values can only be numbers");
                return;
            }
            else {
                this.opts[prop] = value;
            }
        }
        else {
            this.opts[prop] = 0;
        }
        this.input.opts = this.opts;
    }
    default(input) {
        return input.getDefaultValue();
    }
    onNoClick() {
        this.dialogRef.close();
    }
    updateURL($event, input) {
        let value;
        if ($event.srcElement) {
            value = $event.srcElement.value;
            value = value.trim();
            if (value.length != 0) {
                input.setOpts({ url: value });
            }
        }
    }
    handleFileInput(fileList, input) {
        let file = fileList[0];
        var reader = new FileReader();
        reader.onload = (function (reader) {
            return function () {
                var contents = reader.result;
                /*var lines = contents.split('\n');
                contents = lines.join("\\\n");*/
                input.setDefaultValue(contents);
            };
        })(reader);
        reader.readAsText(file);
    }
    clear($event, input) {
        input.setDefaultValue(undefined);
    }
    //
    // Web URL
    // 
    getDataFromURL($event, input) {
        let urlString = input.getOpts().url;
        this.http.get(urlString)
            .subscribe(data => {
            console.log(data);
            input.setDefaultValue(JSON.stringify(data));
        });
    }
};
ParameterSettingsDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'parameter-settings-dialog',
        template: __webpack_require__("./src/app/ui-components/editors/parameter-editor/parameter-settings-dialog.html"),
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
], ParameterSettingsDialogComponent);



/***/ }),

/***/ "./src/app/ui-components/editors/parameter-editor/parameter-settings-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2>Input Name: {{input.name}}</h2>\r\n<h3>Input Type: {{input.type}}</h3>\r\n\r\n<div *ngIf='type == inputPortTypes.Slider'>\r\n\t<form class=\"example-form\" style=\"display: flex; flex-direction: column;\">\r\n\t  <input placeholder=\"Minimum Value\" [(ngModel)]=\"input.opts.min\" value=\"{{ input.opts.min }}\" name='{{input.id}}#min'>\r\n\t  <input placeholder=\"Maximum Value\" [(ngModel)]=\"input.opts.max\" value=\"{{ input.opts.max }}\"  name='{{input.id}}#max'>\r\n      <input placeholder=\"Step\" [(ngModel)]=\"input.opts.step\"  value=\"{{ input.opts.step }}\"  name='{{input.id}}#step'>\r\n\t</form>\r\n</div>\r\n\r\n\r\n<ng-container *ngIf='false'>\r\n\r\n<div *ngIf='type == inputPortTypes.Input'>\r\n\r\n\t<form class=\"example-form\">\r\n\t  <mat-form-field class=\"example-full-width\">\r\n\t    <textarea matInput \r\n\t    \t\tmatTextareaAutosize \r\n\t\t\t\tmatAutosizeMinRows=\"2\"\r\n    \t\t\tmatAutosizeMaxRows=\"8\" \r\n    \t\t\tplaceholder=\"Default Value\" \r\n    \t\t\tvalue=\"{{ default(input) }}\"\r\n    \t\t\t(change)=\"updateDefaultValue($event, input)\">\r\n\t\t</textarea>\r\n\t  </mat-form-field>\r\n\t</form>\r\n</div>\r\n\r\n<div *ngIf='type == inputPortTypes.FilePicker'>\r\n\t<div class=\"value\">\r\n\t\t<input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files, input)\">\r\n\t\t<br><br>\r\n\t\t<div *ngIf=\"input.getDefaultValue()\">\r\n\t\t\t<h3>Default File:</h3> \r\n\t\t\t<div style=\"max-height: 150px; overflow-y: auto\">File Loaded<!-- {{input.getDefaultValue()}} --></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div *ngIf='type == inputPortTypes.URL'>\r\n\tURL:\r\n\t<small><input type=\"text\" value=\"{{input.getOpts().url}}\" (change)=\"updateURL($event, input)\" #url></small>\r\n</div>\r\n\r\n<div *ngIf='type == inputPortTypes.Checkbox'>\r\n\t<div>\r\n\t\t<mat-checkbox #val \r\n\t\t(change)=\"input.setDefaultValue(val.checked)\" \r\n\t\t[checked]=\"input.getDefaultValue()\"></mat-checkbox>\r\n\t</div>\r\n</div>\r\n\r\n</ng-container>"

/***/ }),

/***/ "./src/app/ui-components/editors/procedure-editor/procedure-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\t<mat-accordion>\r\n\t\t<mat-expansion-panel [expanded]=\"true\">\r\n\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t  Procedure ({{active_node?.procedure.length}})\r\n\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t<div class=\"prod-container\" style=\"padding: 10px 15px;\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let p of active_node?.procedure\">\r\n\t\t\t\t\t\t\t<app-procedure-item \r\n\t\t\t\t\t\t\t\t[prod]=\"p\" \r\n\t\t\t\t\t\t\t\t[active_procedure]=\"active_node?.active_procedure\"\r\n\t\t\t\t\t\t\t\t[level]=\"0\"\r\n\t\t\t\t\t\t\t\t[root]=\"active_node\"\r\n\t\t\t\t\t\t\t\t(action)=\"onAction($event)\">\t\r\n\t\t\t\t\t\t\t</app-procedure-item>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t</mat-expansion-panel> \r\n\t</mat-accordion>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/editors/procedure-editor/procedure-editor.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.seg1.disabled {\n  opacity: 0.4; }\n\n.seg1.print {\n  background-color: #A5F3A5; }\n\n.seg1.error {\n  background-color: red; }\n\nmat-expansion-panel-header {\n  background-color: #F1F1F1 !important;\n  border-top: 1px solid #8AA8C0 !important;\n  border-bottom: 1px solid #8AA8C0 !important;\n  padding-left: 15px !important; }\n\nmat-expansion-panel-header mat-panel-title {\n    color: #395D73 !important;\n    font-weight: bold !important;\n    font-size: 12px !important; }\n\nmat-expansion-panel-header:hover {\n    background-color: #F1F1F1 !important; }\n\ninput {\n  border: none; }\n\ninput:focus {\n  border-bottom: 1px dashed gray; }\n\n.selected {\n  background-color: gray; }\n"

/***/ }),

/***/ "./src/app/ui-components/editors/procedure-editor/procedure-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KEY_CODE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcedureEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_classes_node_NodeModule__ = __webpack_require__("./src/app/base-classes/node/NodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_procedure_ProcedureModule__ = __webpack_require__("./src/app/base-classes/procedure/ProcedureModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_services_console_service__ = __webpack_require__("./src/app/global-services/console.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["CUT"] = 88] = "CUT";
    KEY_CODE[KEY_CODE["COPY"] = 67] = "COPY";
    KEY_CODE[KEY_CODE["PASTE"] = 86] = "PASTE";
    KEY_CODE[KEY_CODE["LEFT"] = 37] = "LEFT";
    KEY_CODE[KEY_CODE["UP"] = 38] = "UP";
    KEY_CODE[KEY_CODE["RIGHT"] = 39] = "RIGHT";
    KEY_CODE[KEY_CODE["DOWN"] = 40] = "DOWN";
    KEY_CODE[KEY_CODE["DELETE"] = 46] = "DELETE";
    KEY_CODE[KEY_CODE["CTRL"] = 17] = "CTRL";
    KEY_CODE[KEY_CODE["SHIFT"] = 16] = "SHIFT";
})(KEY_CODE || (KEY_CODE = {}));
/*
 *	Displays the drag-drop procedure for a node
 *
 * 	Updates on:
 * 	- selected_node is changed
 * 	- selected_node is updated
 */
let ProcedureEditorComponent = class ProcedureEditorComponent {
    constructor($log, _fs) {
        this.$log = $log;
        this._fs = _fs;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this._fs.node$.subscribe((node) => {
            this.$log.log("Active node updated in Procedure Editor");
            this.active_node = node;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.map(function (s) {
            s.unsubscribe();
        });
    }
    // ---- Cut / Copy / Paste Functions
    keyEvent(event) {
        try {
            var key = event.keyCode;
            var ctrlDown = event.ctrlKey || event.metaKey; // Makey support
            var shiftDown = event.shiftKey;
            /// key events triggered from typing - return without action
            if (!this.validateKeystroke(event))
                return;
            /// return if there is no active procedure
            if (this.active_node.active_procedure === undefined)
                return;
            if (ctrlDown)
                this.handleCutCopyPaste(key);
            else if (shiftDown)
                this.handleMove(key);
            else if (key == KEY_CODE.DELETE)
                this.handleDelete();
            this.$log.log(`Successfully executed key command: ${KEY_CODE[key]}`);
        }
        catch (ex) {
            this.$log.log(`Error occured during key command: ${KEY_CODE[key]} \nError: ${ex}`);
            console.log(ex);
        }
    }
    validateKeystroke(event) {
        if ((event.srcElement.className.indexOf("input") > -1)) {
            event.stopPropagation();
            return 0;
        }
        ;
        return 1;
    }
    handleCutCopyPaste(key) {
        /// 
        /// key events with ctrl
        /// 
        switch (key) {
            case KEY_CODE.CUT:
                this.handleCut();
                this.$log.log(`Cut-Copied Procedure with keys: ${this.copiedProd.type}`);
                break;
            case KEY_CODE.COPY:
                this.handleCopy();
                this.$log.log(`Copied Procedure with keys: ${this.copiedProd.type}`);
                break;
            case KEY_CODE.PASTE:
                try {
                    this.handlePaste();
                    this.$log.log(`Pasted Procedure with keys: ${this.copiedProd.type}`);
                }
                catch (ex) {
                    this.$log.log("Copied Procedure with keys failed because no copied procedure found.");
                }
                break;
        }
    }
    handleMove(key) {
        /// 
        /// event with shift
        /// 
        let selected_procedure = this.active_node.active_procedure;
        let parent = selected_procedure.parent;
        if (parent == undefined) {
            /// directly inside node
        }
        else {
            //
        }
        // if left, 
        // 	  if no parent, nothing happens
        // 	  
        // if right, 
        //    if above procedure has children, becomes child of above in last index
        //    
        let position;
        let procedure_above;
        if (parent == undefined) {
            position = __WEBPACK_IMPORTED_MODULE_1__base_classes_node_NodeModule__["b" /* NodeUtils */].get_child_position(this.active_node, selected_procedure);
            procedure_above = this.active_node.children[position - 1];
        }
        else {
            position = __WEBPACK_IMPORTED_MODULE_2__base_classes_procedure_ProcedureModule__["c" /* ProcedureUtils */].get_child_position(parent, selected_procedure);
            procedure_above = parent.children[position - 1];
        }
        switch (key) {
            case KEY_CODE.LEFT:
                if (!this.active_node.active_procedure.parent) { }
                else {
                    let grandparent = parent.parent;
                    if (grandparent) {
                        __WEBPACK_IMPORTED_MODULE_2__base_classes_procedure_ProcedureModule__["c" /* ProcedureUtils */].shift_level_up(this.active_node.active_procedure);
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_2__base_classes_procedure_ProcedureModule__["c" /* ProcedureUtils */].delete_child(parent, selected_procedure);
                        let position = __WEBPACK_IMPORTED_MODULE_1__base_classes_node_NodeModule__["b" /* NodeUtils */].get_child_position(this.active_node, parent);
                        __WEBPACK_IMPORTED_MODULE_1__base_classes_node_NodeModule__["b" /* NodeUtils */].add_procedure_at_position(this.active_node, selected_procedure, position + 1);
                    }
                }
                break;
            case KEY_CODE.RIGHT:
                if (position == 0 || procedure_above === undefined || !procedure_above.hasChildren)
                    return;
                __WEBPACK_IMPORTED_MODULE_1__base_classes_node_NodeModule__["b" /* NodeUtils */].delete_procedure(this.active_node, selected_procedure);
                __WEBPACK_IMPORTED_MODULE_2__base_classes_procedure_ProcedureModule__["c" /* ProcedureUtils */].add_child(procedure_above, selected_procedure);
                break;
        }
    }
    handleDelete() { __WEBPACK_IMPORTED_MODULE_1__base_classes_node_NodeModule__["b" /* NodeUtils */].delete_procedure(this.active_node); }
    ;
    onAction(actionString) {
        switch (actionString) {
            case 'cut':
                this.handleCut();
                break;
            case 'copy':
                this.handleCopy();
                break;
            case 'paste':
                this.handlePaste();
                break;
            case 'delete':
                this.handleDelete();
                break;
            default:
                console.log("Unknown keyboard action");
        }
    }
    handleCut() {
        this.copiedProd = __WEBPACK_IMPORTED_MODULE_2__base_classes_procedure_ProcedureModule__["c" /* ProcedureUtils */].copy_procedure(this.active_node.active_procedure);
        __WEBPACK_IMPORTED_MODULE_1__base_classes_node_NodeModule__["b" /* NodeUtils */].delete_procedure(this.active_node);
    }
    handleCopy() {
        this.copiedProd = __WEBPACK_IMPORTED_MODULE_2__base_classes_procedure_ProcedureModule__["c" /* ProcedureUtils */].copy_procedure(this.active_node.active_procedure);
    }
    handlePaste() {
        try {
            __WEBPACK_IMPORTED_MODULE_1__base_classes_node_NodeModule__["b" /* NodeUtils */].add_procedure(this.active_node, this.copiedProd);
            this.copiedProd = __WEBPACK_IMPORTED_MODULE_2__base_classes_procedure_ProcedureModule__["c" /* ProcedureUtils */].copy_procedure(this.copiedProd);
        }
        catch (ex) {
            console.log("Error Pasting");
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], ProcedureEditorComponent.prototype, "keyEvent", null);
ProcedureEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-procedure-editor',
        template: __webpack_require__("./src/app/ui-components/editors/procedure-editor/procedure-editor.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/editors/procedure-editor/procedure-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__global_services_console_service__["a" /* ConsoleService */], __WEBPACK_IMPORTED_MODULE_4__global_services_flowchart_service__["a" /* FlowchartService */]])
], ProcedureEditorComponent);



/***/ }),

/***/ "./src/app/ui-components/editors/procedure-editor/procedure-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class.selected] = \"prod.id == active_procedure?.id\"\r\n\t\t[class.print] = \"prod.print\"\r\n\t\t[class.error] = \"prod.error\"\r\n\t\t[class.disabled] = \"!prod.enabled\">\r\n\t<div class = \"full-container\" \r\n\t\t*ngIf='prod'>\r\n\t\t<!-- (mouseover)=\"_activeProcedure = prod\" -->\r\n\t\t<div class = \"seg1\" \r\n\t\t\t[class.print]=\"prod.print\"\r\n\t\t\t[class.error]=\"prod.error\" \r\n\t\t\t[class.disabled]=\"!prod.enabled\"\r\n\t\t\t(click)=\"onSelect($event)\">\r\n\r\n\t\t\t<!-- template for data -->\r\n\t\t\t<div *ngIf=\"prod.type == 'Data'\"> \r\n\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t[style.width.ch]=\"prod.left.expression?.length + 4\" \r\n\t\t\t\t\t[(ngModel)]=\"prod.left.expression\" \r\n\t\t\t\t\trequired spellcheck=\"false\" \r\n\t\t\t\t\tlist=\"variable-suggestions\">\r\n\r\n\t\t\t\t\t<span class=\"equal\">=</span>\r\n\r\n\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t[style.width.ch]=\"prod.right.expression?.length + 4\" \r\n\t\t\t\t\t[(ngModel)]=\"prod.right.expression\" required spellcheck=\"false\" \r\n\t\t\t\t\tlist=\"variable-suggestions\">\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div *ngIf=\"prod.type == 'If' || prod.type == 'ElseIf'\">\r\n\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t <span>{{prod.type}} :::</span> \r\n\t\t\t\t <input matInput class=\"tree-input\" \r\n\t\t\t\t\t[style.width.ch]=\"prod.left.expression?.length + 4\"  \r\n\t\t\t\t\t[(ngModel)]=\"prod.left.expression\"\r\n\t\t\t\t\trequired spellcheck=\"false\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div *ngIf=\"prod.type == 'Else'\">\r\n\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t <span>{{prod.type}}</span> \r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div *ngIf=\"prod.type == 'For Loop'\">\r\n\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t<span>for each (</span> \r\n\t\t\t\r\n\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t\t[style.width.ch]=\"prod.left.expression?.length + 4\" \r\n\t\t\t\t\t\t\t[(ngModel)]=\"prod.left.expression\" \r\n\t\t\t\t\t\t\tspellcheck=\"false\">\r\n\t\t\t\r\n\t\t\t\t\t<span style=\"margin: 0px 10px;\">in</span>  \r\n\t\t\t\r\n\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t\t\t[style.width.ch]=\"prod.right.expression?.length + 4\" \r\n\t\t\t\t\t\t\t[(ngModel)]=\"prod.right.expression\" spellcheck=\"false\" list=\"variable-suggestions\"> \r\n\t\t\t\t\t)\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div *ngIf=\"prod.type == 'While'\">\r\n\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t<span>while :::</span> \r\n\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t\t[style.width.ch]=\"prod.right.expression?.length + 4\" \r\n\t\t\t\t\t\t[(ngModel)]=\"prod.right.expression\" \r\n\t\t\t\t\t\tspellcheck=\"false\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div *ngIf=\"prod.type == 'Action'\">\r\n\t\t\t\t<div class='procedure-item'>\r\n\r\n\t\t\t\t\t<ng-container *ngIf='prod.hasReturn'>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t\t[style.width.ch]=\"prod.left.expression?.length + 4\" \r\n\t\t\t\t\t\t[(ngModel)]=\"prod.left.expression\" required\r\n\t\t\t\t\t\tspellcheck=\"false\" list=\"variable-suggestions\">\r\n\t\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\t<span class=\"equal\">=</span>\r\n\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\r\n\t\t\t\t\t<span class=\"module\">{{prod.right.module.replace(\"_\",  \".\")}}</span>\r\n\t\t\t\t\t.\r\n\t\t\t\r\n\t\t\t\t\t  <span class=\"function\">{{prod.right.fn_name}}</span> \r\n\t\t\t\r\n\t\t\t\t\t( <span *ngIf=\"prod.right.params.length>0\">\r\n\t\t\t\t\t\t\t<div class=\"param-container\" \r\n\t\t\t\t\t\t\t\t*ngFor=\"let p of prod.right.params; let i=index\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<input matInput class=\"tree-input\" \r\n\t\t\t\t\t\t\t\t [style.width.ch]=\"prod.right.params[i].value.length + 4\" \r\n\t\t\t\t\t\t\t\t [(ngModel)]=\"prod.right.params[i].value\"\r\n\t\t\t\t\t\t\t\t required spellcheck=\"false\" list=\"variable-suggestions\">\r\n\t\t\t\r\n\t\t\t\t\t\t\t\t<span *ngIf='i<prod.right.params.length-1'>,</span>\r\n\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t</span>\t)\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div *ngIf=\"prod.type == 'Loop Break' || prod.type == 'Loop Continue'\">\r\n\t\t\t\t<div class='procedure-item'>\r\n\t\t\t\t\t {{prod.left.expression}}\r\n\t\t\t\t</div>\r\n\t\t\t</div> \r\n\r\n\t\t\t<div *ngIf=\"prod.type == 'Comment'\">\r\n\t\t\t\t<input matInput class=\"tree-input comment\" \r\n\t\t\t\t\t\t[style.width.ch]=\"prod.left.expression?.length + 4\" \r\n\t\t\t\t\t\t[(ngModel)]=\"prod.left.expression\" \r\n\t\t\t\t\t\tspellcheck=\"false\">\r\n\t\t\t</div>\r\n\r\n\t\t\t\t\r\n\t\t\t<!--button-->\r\n\t\t\t<div style=\"float: right;\" *ngIf='prod.id == active_procedure?.id'>\r\n\t\t\t\t<button class=\"btn--action\"\r\n\t\t\t   \t\t(click)=\"prod.print = !prod.print\" \r\n\t\t\t   \t\tmatTooltip=\"Print value to console\"\r\n\t\t\t   \t\t*ngIf=\"prod.type =='Action' || prod.type =='Data'\" tabindex=\"-1\">\r\n\t\t    \t\t<mat-icon>print</mat-icon>\r\n\t\t\t    </button>\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"btn--action\"\r\n\t\t\t\t\t(click)=\"prod.enabled = !prod.enabled\" \r\n\t\t\t\t\tmatTooltip=\"Enable/Disable Line\" tabindex=\"-1\">\r\n\t\t    \t\t<mat-icon>check_circle</mat-icon>\r\n\t\t\t    </button>\r\n\r\n\t\t\t    <button class=\"btn--action\" matTooltip=\"Cut\" \r\n\t\t        \ttabindex=\"-1\"\r\n\t\t       \t\t(click)=\"cut($event)\">\r\n\t\t    \t\t<mat-icon>content_cut</mat-icon>\r\n\t\t\t    </button>\r\n\r\n\t\t\t    <button class=\"btn--action\" matTooltip=\"Copy\" \r\n\t\t        \ttabindex=\"-1\"\r\n\t\t       \t\t(click)=\"copy($event)\">\r\n\t\t    \t\t<mat-icon>content_copy</mat-icon>\r\n\t\t\t    </button>\r\n\r\n\t\t\t    <button class=\"btn--action\" matTooltip=\"Paste\" \r\n\t\t        \ttabindex=\"-1\"\r\n\t\t       \t\t(click)=\"paste($event)\">\r\n\t\t    \t\t<mat-icon>content_paste</mat-icon>\r\n\t\t\t    </button>\r\n\r\n\t\t\t   \t<button class=\"btn--action\" matTooltip=\"Delete Line\" \r\n\t\t        \ttabindex=\"-1\"\r\n\t\t       \t\t(click)=\"delete($event)\">\r\n\t\t    \t\t<mat-icon>delete</mat-icon>\r\n\t\t\t    </button>\r\n\t\t\t    \r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\t</div>\r\n\r\n\r\n\t<div class=\"children\" *ngIf=\"prod.children.length > 0 && prod.enabled\">\r\n\t\t<app-procedure-item \r\n\t\t\t*ngFor=\"let child of prod.children; trackBy: trackByFn\" \r\n\t\t\t[prod]=\"child\"\r\n\t\t\t[root]=\"root\"\r\n\t\t\t[active_procedure]=\"active_procedure\"\r\n\t\t\t[level]=\"level+1\"\r\n\t\t\t(action)=\"onAction($event)\">\r\n\t\t</app-procedure-item>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/editors/procedure-editor/procedure-item.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.children {\n  padding-left: 15px; }\n\n.print {\n  background-color: #B9E788; }\n\n.disabled {\n  background-color: gray;\n  color: white !important; }\n\n.btn--action {\n  background: none;\n  border: none;\n  padding: 0px; }\n\n.btn--action mat-icon {\n    font-size: 18px; }\n\n.full-container {\n  padding: 4px;\n  font-size: 14px;\n  font-weight: lighter;\n  font-family: sans-serif; }\n\n.full-container::hover {\n    background-color: gray; }\n\ninput {\n  border-bottom: 1px dashed;\n  text-align: center; }\n\ninput.comment {\n    text-align: left;\n    font-weight: bold;\n    padding: 10px 5px;\n    margin: 10px 0px;\n    color: green;\n    font-size: 16px;\n    letter-spacing: 2px;\n    border: 1px solid green; }\n\n.procedure-item {\n  font-family: 'Ubuntu Mono', monospace; }\n\n.procedure-item span.module {\n    color: #F3A32A !important;\n    font-weight: bold; }\n\n.procedure-item span.function {\n    color: #7B52AB !important;\n    font-weight: bold; }\n\n.procedure-item span.equal {\n    text-align: center;\n    width: 15px; }\n\n.selected {\n  border: 1px solid #395D73;\n  border-radius: 2px; }\n\n.full-container {\n  width: 100% !important;\n  padding: 0px !important;\n  border-radius: 0px;\n  -webkit-transition: none;\n  transition: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-flow: column nowrap !important;\n          flex-flow: column nowrap !important;\n  white-space: nowrap !important;\n  overflow-y: hidden !important;\n  overflow-x: auto !important;\n  -webkit-box-pack: justify !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important; }\n\n.full-container:hover .seg2 {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n\n.full-container:hover .seg2 .seg2btncontainer {\n      position: absolute;\n      right: 5px; }\n\n.full-container .seg1 {\n    min-width: 80% !important;\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-flow: row nowrap !important;\n            flex-flow: row nowrap !important;\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important;\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important;\n    -ms-flex-negative: 0 !important;\n        flex-shrink: 0 !important; }\n\n.full-container .procedure-item {\n    color: #82BF6E !important;\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-flow: row nowrap !important;\n            flex-flow: row nowrap !important;\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n\n.full-container .procedure-item span {\n      font-weight: bold !important;\n      color: #82BF6E !important; }\n\n.full-container .procedure-item .tree-input {\n      min-width: 30px !important;\n      color: #395D73 !important;\n      background-color: white;\n      border-style: solid !important;\n      border: 0px;\n      border-bottom: 1px solid #395D73;\n      font-weight: normal !important;\n      text-align: center;\n      margin: 2px 0px; }\n\n.full-container .procedure-item .tree-input:focus {\n        background-color: #F0BFA0 !important; }\n\n.full-container .procedure-item .tree-input:focus:hover {\n          color: #395D73 !important; }\n\n.full-container .procedure-item .tree-input:hover {\n        color: #F0BFA0 !important; }\n\n.full-container .seg2 {\n    display: none !important; }\n\n.full-container .seg2 .seg2btncontainer {\n      height: 15px !important;\n      padding: 2px;\n      border-radius: 2px;\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -webkit-box-orient: horizontal !important;\n      -webkit-box-direction: normal !important;\n          -ms-flex-flow: row nowrap !important;\n              flex-flow: row nowrap !important;\n      -webkit-box-pack: end !important;\n          -ms-flex-pack: end !important;\n              justify-content: flex-end !important;\n      background-color: #f0bfa0 !important;\n      -webkit-box-flex: 1 !important;\n          -ms-flex-positive: 1 !important;\n              flex-grow: 1 !important;\n      -ms-flex-negative: 0 !important;\n          flex-shrink: 0 !important; }\n\n.full-container .seg2 .seg2btncontainer button {\n        margin: 0px !important;\n        max-width: 15px !important;\n        max-height: 15px !important;\n        min-width: 15px !important;\n        padding: 0px !important;\n        -webkit-box-flex: 0 !important;\n            -ms-flex-positive: 0 !important;\n                flex-grow: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n\n.full-container .seg2 .seg2btncontainer button mat-icon {\n          max-height: 15px !important;\n          vertical-align: top !important;\n          font-size: 15px !important;\n          text-align: left !important; }\n\n.full-container .seg2 .seg2btncontainer button:hover {\n          background-color: #F1F1F1 !important; }\n\n.full-container .seg2 .seg2btncontainer button:hover mat-icon {\n            color: #F07A79 !important; }\n\n.full-container .seg2 .seg2btncontainer:hover {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n"

/***/ }),

/***/ "./src/app/ui-components/editors/procedure-editor/procedure-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcedureItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ProcedureItemComponent = class ProcedureItemComponent {
    constructor() {
        //@Output() action = new EventEmitter<{prod: IProcedure, type:string}>();
        this.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ngOnInit() { }
    ngOnDestroy() { }
    updateProcedure($event, prod, comp) {
    }
    onSelect($event) {
        this.root.active_procedure = this.prod;
    }
    trackByFn(procedure) {
        return procedure.id; // or song.id
    }
    delete($event) {
        this.onSelect($event);
        this.onAction("delete");
    }
    cut($event) {
        this.onSelect($event);
        this.onAction("cut");
    }
    copy($event) {
        this.onSelect($event);
        this.onAction("copy");
    }
    paste($event) {
        this.onSelect($event);
        this.onAction("paste");
    }
    onAction(actionString) {
        this.action.emit(actionString);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ProcedureItemComponent.prototype, "prod", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ProcedureItemComponent.prototype, "active_procedure", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ProcedureItemComponent.prototype, "level", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ProcedureItemComponent.prototype, "root", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", Object)
], ProcedureItemComponent.prototype, "action", void 0);
ProcedureItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-procedure-item',
        template: __webpack_require__("./src/app/ui-components/editors/procedure-editor/procedure-item.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/editors/procedure-editor/procedure-item.component.scss")]
    })
], ProcedureItemComponent);



/***/ }),

/***/ "./src/app/ui-components/graph/graph-edge/graph-edge.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"edge-container\" \r\n\tstyle=\"position: absolute;\"\r\n\t[style.top.px]=\"top\"\r\n\t[style.left.px]=\"left\"\r\n\t[style.width.px]=\"width\"\r\n\t[style.height.px]=\"height\"\r\n\t(click)=\"onSelect()\">\r\n\r\n\t<canvas #canvas id='edge{{edge.id}}'></canvas>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/graph/graph-edge/graph-edge.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/graph/graph-edge/graph-edge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphEdgeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let GraphEdgeComponent = class GraphEdgeComponent {
    constructor() {
        this.visible = false;
        this._buffer = 50;
    }
    ngOnInit() {
        let canvas = this.canvas.nativeElement;
        let context = canvas.getContext('2d');
        this.drawEdge();
    }
    ngDoCheck() {
        this.drawEdge();
    }
    setDimensions() {
        this.top = this.getTop();
        this.left = this.getLeft();
        this.width = this.getWidth();
        this.height = this.getHeight();
    }
    getTop() {
        // return smallest y value
        return Math.min(this.edge.outputPosition.y, this.edge.inputPosition.y) - this._buffer;
    }
    getLeft() {
        // return smallest x value
        return Math.min(this.edge.outputPosition.x, this.edge.inputPosition.x); //this.edge.outputPosition[0];
    }
    getWidth() {
        return Math.max(10, Math.abs(this.edge.inputPosition.x - this.edge.outputPosition.x)); //this.edge.outputPosition[0];
    }
    getHeight() {
        return 2 * this._buffer + Math.max(10, Math.abs(this.edge.inputPosition.y - this.edge.outputPosition.y));
    }
    getPosition(edge) {
        return JSON.stringify(edge);
    }
    edgeClicked() {
    }
    isValid() {
        return Boolean(this.edge && this.edge.inputPosition && this.edge.outputPosition);
    }
    drawEdge() {
        try {
            if (this.isValid()) {
                this.setDimensions();
                let canvas = this.canvas.nativeElement;
                let context = canvas.getContext('2d');
                canvas.width = this.getWidth();
                canvas.height = this.getHeight();
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.lineWidth = 2;
                context.strokeStyle = this.temporary ? '#8AA8C0' : '#395D73';
                // if temporary edge
                if (this.temporary) {
                    context.setLineDash([5, 10]);
                }
                ;
                let left_point = this.edge.outputPosition.x <= this.edge.inputPosition.x ? this.edge.outputPosition : this.edge.inputPosition;
                let right_point = this.edge.outputPosition.x > this.edge.inputPosition.x ? this.edge.outputPosition : this.edge.inputPosition;
                let startPoint;
                let endPoint;
                if (left_point.y < right_point.y) {
                    //
                    //    sp---
                    //    |   |
                    //    |__ep
                    //
                    startPoint = [0, this._buffer];
                    endPoint = [this.width, this.height - this._buffer];
                }
                else {
                    //    __ep
                    //   |    |
                    //   |    |
                    //    sp---
                    //    
                    startPoint = [0, this.height - this._buffer];
                    endPoint = [this.width, this._buffer];
                }
                // move downwards/upwards in straight line
                let translate = 10;
                let shifted_startPoint = [startPoint[0] + translate, startPoint[1]];
                let shifted_endPoint = [endPoint[0] - translate, endPoint[1]];
                context.beginPath();
                context.moveTo(startPoint[0], startPoint[1]);
                context.lineTo(shifted_startPoint[0], shifted_startPoint[1]);
                if (Math.abs(startPoint[0] - endPoint[0]) < 50 || Math.abs(startPoint[1] - endPoint[1]) < 50) {
                    context.lineTo(shifted_endPoint[0], shifted_endPoint[1]);
                }
                else {
                    // compute curvy line
                    var x0 = shifted_startPoint[0];
                    var y0 = startPoint[1];
                    var x3 = shifted_endPoint[0];
                    var y3 = endPoint[1];
                    let seg1 = 0.75;
                    let seg2 = 0.25;
                    var mx1 = seg1 * x0 + seg2 * x3;
                    var mx2 = seg2 * x0 + seg1 * x3;
                    var my1 = seg1 * y0 + seg2 * y3;
                    var my2 = seg2 * y0 + seg1 * y3;
                    // should be between 0.25 - 0, mapping to width
                    // [0, inf) --> [0.01, 0.3]
                    // fn(x) = (0.3*2/Math.PI)*tanh(x) + (1/ln(x + e^100))
                    //let x: number = this.getWidth();
                    //let distance_factor: number = (0.3*2/Math.PI)*Math.tanh(x) + (1/Math.log(x + Math.exp(100)));
                    let distance_factor = 0.25; //canvas.width < canvas.height ? (canvas.width/canvas.height) : (canvas.height/canvas.width);
                    var distance = distance_factor * Math.round(Math.sqrt(Math.pow((x3 - x0), 2) + Math.pow((y3 - y0), 2)));
                    var pSlope = (x0 - x3) / (y3 - y0);
                    var multi = Math.round(Math.sqrt(distance * distance / (1 + (pSlope * pSlope))));
                    var x1, y1, x2, y2 = 0;
                    x1 = mx1 + multi;
                    x2 = mx2 - multi;
                    if (y0 == y3) {
                        y1 = y0 + distance;
                        y2 = y0 - distance;
                    }
                    else {
                        y1 = my1 + (pSlope * multi);
                        y2 = my2 - (pSlope * multi);
                    }
                    context.bezierCurveTo(x1, y1, x2, y2, shifted_endPoint[0], shifted_endPoint[1]);
                }
                context.lineTo(endPoint[0], endPoint[1]);
                context.stroke();
            }
        }
        catch (ex) {
            console.log(`Error drawing edge`);
        }
    }
    onSelect() {
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], GraphEdgeComponent.prototype, "edge", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], GraphEdgeComponent.prototype, "inputPosition", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], GraphEdgeComponent.prototype, "outputPosition", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], GraphEdgeComponent.prototype, "temporary", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('canvas'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], GraphEdgeComponent.prototype, "canvas", void 0);
GraphEdgeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-graph-edge',
        template: __webpack_require__("./src/app/ui-components/graph/graph-edge/graph-edge.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/graph/graph-edge/graph-edge.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], GraphEdgeComponent);



/***/ }),

/***/ "./src/app/ui-components/help/help-viewer/help-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\t\r\n\t<h1>Möbius Functions</h1>\r\n\r\n\t<!-- <div class='!helpAvailable'>\r\n\t\t<p>Sorry! The help documentation seems to be missing</p>\r\n\t</div> -->\r\n\r\n\t<div class=\"helpAvailable\">\r\n\r\n\t\t<mat-accordion *ngIf='!fnObj'>\r\n\r\n\t\t\t<mat-expansion-panel \r\n\t\t \t\t*ngFor=\"let mod of _loadedModules\"\r\n\t\t \t\t[expanded]=\"mod._name ==_activeMod\">\r\n\t\t \t\t    \t<mat-expansion-panel-header>\r\n\t\t \t\t    \t\t<mat-panel-title>\r\n\t\t \t\t\t\t      {{ mod._name }} \r\n\t\t \t\t\t\t    </mat-panel-title>\r\n\t\t \t\t    \t</mat-expansion-panel-header>\r\n\t\t \t\r\n\t\t \t\t\t\t<mat-list id=\"mod._name\" \r\n\t\t \t\t\t\t\tstyle=\"max-height: 500px; overflow: auto;\" *ngIf=\"mod._helpObj\">\r\n\r\n\t\t \t\t\t\t \t<mat-list-item \r\n\t\t \t\t\t\t \t \tstyle=\"padding: 10px 20px; height: auto;\"\r\n\t\t \t\t\t\t \t\t*ngFor=\"let fn of getSubModule(mod._helpObj , mod._name)\">\r\n\t\t \t\t\t\t \t\t<div>\r\n\t\t \t\t\t\t\t \t\t<h4 mat-line>{{fn.name}}</h4>\r\n\r\n\t\t \t\t\t\t\t \t\t<ng-container *ngIf=\"fn.signatures\">\r\n\t\t \t\t\t\t\t \t\t\t<!-- description -->\r\n\t\t\t \t\t    \t\t\t\t<p class=\"head-descr\" mat-line *ngIf=\"fn.signatures[0].comment\">\r\n\t\t\t \t\t    \t\t\t\t{{fn.signatures[0].comment.shortText}}</p>\r\n\t\t\t \t\t\t\t\t\t\t\r\n\t\t\t \t\t\t\t\t\t\t<!-- parameters -->\r\n\t\t\t \t\t\t\t\t\t\t<ul  class=\"parameters\" mat-line *ngIf='fn.signatures[0].parameters'>\r\n\t\t\t \t\t\t\t\t\t\t\t<li *ngFor=\"let pa of fn.signatures[0].parameters\">\r\n\t\t\t \t\t\t\t\t\t\t\t\t<span class=\"topic\">{{pa.name}}: </span>\r\n\t\t\t \t\t\t\t\t\t\t\t\t<span class=\"descr\"  *ngIf=\"pa.comment\">{{pa.comment.text}}</span>\r\n\r\n\t\t\t \t\t\t\t\t\t\t\t\t<!-- @derek: parameter type and default value -->\r\n\t\t\t \t\t\t\t\t\t\t\t\t<span class=\"type\" *ngIf=\"pa.type && pa.type.name\">(Type:{{pa.type.name}})</span>\r\n\t\t\t \t\t\t\t\t\t\t\t\t<span class=\"type\" *ngIf=\"pa.type && pa.type.elementType\">(Type:{{pa.type.type}})</span>\r\n\t\t\t \t\t\t\t\t\t\t\t\t<span class=\"descr\" *ngIf=\"pa.defaultValue\">Default: {{pa.defaultValue}}</span>\r\n\t\t\t \t\t\t\t\t\t\t\t\t<span class=\"descr\" *ngIf=\"pa.comment\">{{pa.comment.shortText}}</span>\r\n\t\t\t \t\t\t\t\t\t\t\t</li>\r\n\t\t\t \t\t\t\t\t\t\t\t<li><div class=\"return-block\" *ngIf=\"fn.signatures[0].comment\">\r\n\t\t\t\t \t\t\t    \t\t\t\t<span class=\"topic\" >Returns:  </span>\r\n\t\t\t\t \t\t\t    \t\t\t\t<span class=\"descr\">{{fn.signatures[0].comment.returns}}</span>\t\r\n\t\t\t \t\t\t    \t\t\t\t</div></li>\r\n\t\t\t \t\t\t\t\t\t\t</ul>\r\n\t\t\t \t\r\n\t\t\t \t\t\t\t\t\t\t<!-- return block-->\r\n\r\n\r\n\t\t\t \t\t\t    \t\t\t<div class=\"example-block\">\r\n\t\t\t\t \t\t\t    \t\t\t<span class=\"topic\">Example: </span>\r\n\t\t\t \t\t\t    \t\t\t\t<code>\r\n\t\t\t\t \t\t\t    \t\t\t\t<span class=\"example\" \r\n\t\t\t\t \t\t\t    \t\t\t\t\t*ngIf=\"fn.signatures[0].comment.tags && fn.signatures[0].comment.tags[0]\"\r\n\t\t\t\t \t\t\t    \t\t\t\t\t[innerHTML]=\"replaceLineBreaks(fn.signatures[0].comment.tags[0].text)\"></span>\r\n\t\t\t \t\t\t    \t\t\t\t</code>\r\n\t\t\t \t\t\t\t\t\t\t</div>\r\n\t\t\t \t\t    \t\t\t\t<!-- <p mat-line>\t\r\n\t\t\t \t\t    \t\t\t\t\t<a href=\"https://phtj.github.io/gs-modelling/docs/modules/{{mod._url}}#{{fn.name}}\" target=\"_blank\">More</a>\r\n\t\t\t \t\t    \t\t\t\t</p> -->\r\n\t\t \t\t    \t\t\t\t</ng-container>\r\n\t\t \t\r\n\t\t \t    \t\t\t\t</div>\r\n\t\t \t\t\t\t \t</mat-list-item>\r\n\r\n\t\t \t\r\n\t\t \t\t\t\t \t<mat-divider></mat-divider>\r\n\t\t \t\t\t\t\r\n\t\t \t\t\t\t</mat-list>\r\n\t\t \t\r\n\t\t \t</mat-expansion-panel>\r\n\t\t \t\r\n\t\t</mat-accordion>\r\n\r\n\t\t<!-- specific function -->\r\n\t\t<div *ngIf='fnObj && fnObj.name'>\r\n\r\n\t\t\t<h4 mat-line>Module: {{fnObj.module}}</h4>\r\n\t\t\t<h4 mat-line>{{fnObj.name}}</h4>\r\n\t\t\t\r\n\t\t\t<div *ngIf='fnObj.content'>\r\n\t\t\t\t<div class=\"content\">\r\n\r\n\t\t\t\t\t<p class=\"head-descr\" mat-line>{{fnObj.content.signatures[0].comment.shortText}}</p>\r\n\t\t\t\t\r\n\t\t\t\t\t<div  class=\"parameters\" mat-line *ngIf='fnObj.content.signatures[0].parameters'>\r\n\t\t\t\t\t\t<div *ngFor=\"let pa of fnObj.content.signatures[0].parameters\">\r\n\t\t\t\t\t\t\t<span class=\"topic\">{{pa.name}}: </span>\r\n\t\t\t\t\t\t\t<!-- <span *ngIf=\"pa.type\">Type: {{pa.type.type}}</span> -->\r\n\t\t\t\t\t\t\t<span class=\"descr\" *ngIf=\"pa.comment\" [innerHTML]=\"pa.comment.text\"></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"return-block\">\r\n\t    \t\t\t\t<span class=\"topic\">Returns: </span>\r\n\t    \t\t\t\t<span class=\"descr\" [innerHTML]=\"fnObj.content.signatures[0].comment.returns\"></span>\r\n\t    \t\t\t</div>\r\n\r\n\t\t\t\t\t<p mat-line>\t\r\n\t\t\t\t\t\t<a href=\"https://phtj.github.io/gs-modelling/docs/modules/{{fnObj._url}}#{{fnObj.name}}\" target=\"_blank\">More</a>\r\n\t\t\t\t\t</p>\r\n\r\n\t\t\t\t</div>\t\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\t<hr>\r\n\t\t\t\r\n\t\t\t<div (click)=\"showAll()\" style=\"cursor: pointer;\">[Show All]</div>\r\n\t\t\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/help/help-viewer/help-viewer.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer {\n  padding: 15px;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 30px;\n  overflow: auto; }\n\n.viewer h1 {\n    padding-left: 15px;\n    padding-bottom: 5px;\n    color: #395D73;\n    display: block;\n    border-bottom: 1px solid #F1F1F1; }\n\nmat-expansion-panel {\n  margin: 0 !important;\n  overflow: hidden !important; }\n\nmat-expansion-panel mat-list {\n    overflow: hidden !important;\n    max-height: 100% !important; }\n\nmat-expansion-panel mat-expansion-panel-header mat-panel-title {\n    color: #F3A32A !important;\n    border-bottom: 0px !important; }\n\nmat-panel-description {\n  display: none; }\n\n/*\r\n.mat-list-item-content{\r\n\tpadding: 0;\r\n\tborder: 0;\r\n}\r\n\r\n.mat-line{\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tline-height: $fsize1;\r\n}*/\n\nmat-list .mat-subheader {\n  font-size: 12px;\n  color: #8AA8C0; }\n\nmat-list mat-list-item h4 {\n  color: #7B52AB;\n  font-size: 12px;\n  border-bottom: 1px solid #8AA8C0;\n  font-weight: bold;\n  display: block;\n  margin: 0; }\n\nmat-list mat-list-item p {\n  white-space: normal;\n  font-size: 12px !important;\n  color: #395D73;\n  margin: 0 !important; }\n\nmat-list mat-list-item p a {\n    color: #8AA8C0;\n    font-size: 12px; }\n\nmat-list div {\n  padding: 0 !important; }\n\nmat-list div:hover {\n    color: #395D73; }\n\n.parameters {\n  height: auto;\n  margin: 0;\n  padding-left: 20px; }\n\n.parameters:hover {\n    color: #395D73; }\n\n.topic {\n  color: #395D73;\n  cursor: default !important;\n  font-weight: bold;\n  font-size: 12px; }\n\n.topic:hover {\n    color: #395D73; }\n\n.descr, .type {\n  font-size: 12px;\n  color: #395D73;\n  cursor: default !important;\n  white-space: normal; }\n\n.descr:hover, .type:hover {\n    color: #395D73; }\n\n.return-block {\n  font-size: 12px;\n  color: #395D73;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row no-wrap;\n          flex-flow: row no-wrap; }\n\n.return-block .topic {\n    margin-right: 5px; }\n\n.return-block:hover {\n    color: #395D73; }\n\n.example-block, .example {\n  font-size: 12px; }\n\n.example-block:hover, .example:hover {\n    color: #395D73;\n    cursor: default; }\n"

/***/ }),

/***/ "./src/app/ui-components/help/help-viewer/help-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services_module_service__ = __webpack_require__("./src/app/global-services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let HelpViewerComponent = class HelpViewerComponent {
    //modules/_group_.html
    constructor(sanitizer, flowchartService, _ms) {
        this.sanitizer = sanitizer;
        this.flowchartService = flowchartService;
        this._ms = _ms;
        this.helpAvailable = false;
        this.sanitizer = sanitizer;
        try {
            let mods = __WEBPACK_IMPORTED_MODULE_2__global_services_module_service__["a" /* ModuleService */].modules.map(function (m) {
                return m["_name"].toLowerCase();
            });
            this._loadedModules = __WEBPACK_IMPORTED_MODULE_2__global_services_module_service__["a" /* ModuleService */].modules;
            this.helpAvailable = true;
        }
        catch (ex) {
            this.helpAvailable = false;
        }
    }
    ;
    getSubModule(alldocs, modname) {
        for (let i = 0; i < alldocs.length; i++) {
            let m = alldocs[i];
            if (("\"" + modname.split("_")[1] + "\"") == (m.name)) {
                return ((m.children && m.children.length > 0) ? m.children : []);
            }
        }
    }
    ;
    notify() {
    }
    showAll() {
    }
    ;
    ngOnInit() {
        this.notify();
    }
    ;
    replaceLineBreaks(str) {
        return str.split("\n").join("<br>");
    }
};
HelpViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-help-viewer',
        template: __webpack_require__("./src/app/ui-components/help/help-viewer/help-viewer.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/help/help-viewer/help-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__["a" /* FlowchartService */],
        __WEBPACK_IMPORTED_MODULE_2__global_services_module_service__["a" /* ModuleService */]])
], HelpViewerComponent);



/***/ }),

/***/ "./src/app/ui-components/help/info-viewer/help.about.tpl.html":
/***/ (function(module, exports) {

module.exports = "    <h1>\r\n        Möbius Modeller\r\n    </h1>\r\n    <p>\r\n        Möbius Modeller is a free and open-source web-application for parametric\r\n        modelling. It runs in the Chrome browser.\r\n    </p>\r\n\r\n    <h3 style=\"text-align: center;\">\r\n       Getting started with Möbius\r\n    </h3>\r\n    <p style=\"text-align: center;\">\r\n        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/285M8St3WHQ\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen>\r\n        </iframe>\r\n    </p>\r\n\r\n    <h2>\r\n        Visual Programming\r\n    </h2>\r\n    <p>\r\n        In Möbius, users are provided with a set of visual programming tools to\r\n        define scripts for generating models. These tools integrate two types of\r\n        visual programming: flowcharts and procedures.\r\n    </p>\r\n    <p>\r\n        Flowcharts consist of nodes connected together with wires. Each node in the\r\n        flowchart has a set of input and output ports, and contains a small\r\n        procedure to perform some type of action.\r\n    </p>\r\n    <p>\r\n        Procedures consist of a sequence of lines of code. There are four types of\r\n        code lines: 1) variables assignments, 2) ‘for-each’ loops, 3) ‘if-else’\r\n        conditions, and 4) function calls.\r\n    </p>\r\n    <p>\r\n        Function calls are lines of code that call a particular function. Libraries\r\n        of different functions are provided. Additional libraries of functions can\r\n        be added at any stage.\r\n    </p>\r\n    <h2>\r\n        User Interface\r\n    </h2>\r\n    <p>\r\n        The Möbius Modeller user interface consists of four main viewports, with\r\n        one viewport on the left and three viewports on the right. The viewports\r\n        can be rearrange into any configuration. By default, the Output viewport is\r\n        on the right side, and the Flowchart, Procedure and Parameters viewports\r\n        are on the right side.\r\n    </p>\r\n    <p>\r\n        · The Flowchart viewports is for defining the flowcharts, consisting of\r\n        nodes connected with wires. Selecting one of the nodes in the Flowchart\r\n        viewport will change the contents of the other three viewports.\r\n    </p>\r\n    <p>\r\n        · The Procedure viewport is for defining the procedure inside each node.\r\n        The procedure that is shown is for the node selected in the Flowchart\r\n        viewport.\r\n    </p>\r\n    <p>\r\n        · The Parameters viewport is for setting the parameter values associated\r\n        with each node. The parameters that are shown are for the node selected in\r\n        the Flowchart viewport. This viewport also contain the green ‘Execute\r\n        Flowchart’ button, which will execute the flowchart using the specified\r\n        parameter values.\r\n    </p>\r\n    <p>\r\n        · The Output viewport is for viewing the output generated by executing the\r\n        script, as well as for viewing Help. The Output viewport has a number of\r\n        different viewers. The most basic viewer is the Text Viewer, which is for\r\n        viewing basic text. There is also an Output console, which is where various\r\n        messages (including error messages) get printed.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"600\"\r\n            height=\"310\"\r\n            src=\"./assets/img/info/image002.png\"\r\n        />\r\n    </p>\r\n    <h2>\r\n        Flowchart\r\n    </h2>\r\n    <p>\r\n        The Flowchart viewport allows you to create and delete nodes, and to wire\r\n        them together into a network. The flowchart flows from left to right, and\r\n        form a chain of execution. Nodes without wires attached to any of the\r\n        inputs are called “start nodes”, and nodes without wires attached to any of\r\n        the outputs are called “end nodes”. (An “isolated node” has neither.)\r\n    </p>\r\n    <p>\r\n        When a flowchart is executed, the first nodes to be executed are all the\r\n        start nodes. The data produced by the nodes will travel down the wires to\r\n        the next set of nodes, which are then executed. This continues until end\r\n        nodes are reached on the right hand side.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"249\"\r\n            height=\"91\"\r\n            src=\"./assets/img/info/image004.jpg\"\r\n        />\r\n    </p>\r\n    <p>\r\n        When a flowchart is executed, the data generated by each output of each\r\n        node is saved. This means that after execution, you can explore the data\r\n        generated by each node by clicking on its output ports and view the results\r\n        in one of the Output viewers. (See the section on Outputs.)\r\n    </p>\r\n    <p>\r\n        When wiring nodes together, inputs can only have a single wire attached.\r\n        However, outputs can have multiple wires attached. If an output has\r\n        multiple wires attached, then the data is copied and sent down each wire\r\n        separately.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"186\"\r\n            height=\"193\"\r\n            src=\"./assets/img/info/image006.jpg\"\r\n        />\r\n    </p>\r\n    <p>\r\n        If a node has multiple inputs, then it will not be executed until all the\r\n        data for all its inputs has been received.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"165\"\r\n            height=\"166\"\r\n            src=\"./assets/img/info/image008.jpg\"\r\n        />\r\n    </p>\r\n    <p>\r\n        The left sidebar allows you perform various operations:\r\n    </p>\r\n    <p>\r\n        · Save and Load Flowcharts as a file. These are saved as .mob files. It is\r\n        important to save often.\r\n    </p>\r\n    <p>\r\n        · Create new nodes and subnets. (Subnets are coming soon.)\r\n    </p>\r\n    <ul>\r\n        <li>\r\n            Save and Load Libraries of nodes as a file.\r\n        </li>\r\n    </ul>\r\n    <p>\r\n        Each node has three buttons (only displayed when the node is selected):\r\n    </p>\r\n    <p>\r\n        · Delete: Deletes the node. This cannot be undone, so be careful!\r\n    </p>\r\n    <p>\r\n        · Disable: Disables the node. When the network is executed, the network\r\n        behaves as if the node did not exist.\r\n    </p>\r\n    <p>\r\n        · Save: Saves the node to your library, stored in the browser cache.\r\n    </p>\r\n    <p>\r\n        Saving nodes allows you to use them multiple times in different Flowcharts.\r\n        It also allows you to share nodes with others. Note that the library is\r\n        stored in the browser cache. If you clear your cache, then you will lose\r\n        all your saved nodes. Therefore, if you have nodes that you want to keep,\r\n        it is a good idea to save them to file.\r\n    </p>\r\n    <h2>\r\n        Procedure\r\n    </h2>\r\n    <p>\r\n        The Procedure viewport allows you to define the procedure that gets\r\n        executed inside a node. The Procedure shown in this viewport is for the\r\n        node selected in the flowchart.\r\n    </p>\r\n    <p>\r\n        The procedure is basically a small script, but rather than typing the\r\n        script in a text editor, you create your Procedure by dragging and dropping\r\n        lines of code into the script.\r\n    </p>\r\n    <p>\r\n        The procedure consists of three sections, each of which can be expanded and\r\n        contracted. The Input and Outputs sections list the input and outputs for\r\n        the node. For each input and output, the name can be set, and the type can\r\n        be selected from a drop-down list. Based on the selection, other settings\r\n        can be set. Selecting an input or output line will show a ‘delete’ button\r\n        on the right hand side, allowing you to delete it.\r\n    </p>\r\n    <p>\r\n        The main procedure is define under the Procedure section. The procedure\r\n        consists of a sequence of lines of code that get executed one at a time.\r\n        These lines of code will read data from the inputs and write data to the\r\n        outputs. In the example below, the procedure has three lines of code that\r\n        do the following:\r\n    </p>\r\n    <p>\r\n        1. Creates a variable called ‘my_var’ and sets its value to the value from\r\n        the first input multiplied by 10.\r\n    </p>\r\n    <p>\r\n        2. Creates a second variable called ‘rand_num’ and uses a function call to\r\n        set its value to a random number between 0 and 1.\r\n    </p>\r\n    <p>\r\n        3. Set the value of the first output (named ‘out0’) to the value of\r\n        ‘my_var’ divided by the value of ‘rand_num’.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"201\"\r\n            height=\"152\"\r\n            src=\"./assets/img/info/image010.jpg\"\r\n        />\r\n    </p>\r\n    <p>\r\n        Procedures will typically include one or more function calls, and may also\r\n        include various variable assignments, for-each loops, and if-else\r\n        conditions. Clicking any of these items in the left sidebar will add them\r\n        to the procedure, underneath the currently selected line. The lines of code\r\n        can be repositioned by dragging and dropping.\r\n    </p>\r\n    <p>\r\n        There are four types of lines of code that can be inserted:\r\n    </p>\r\n    <p>\r\n        · Variable: Create a new variable or assigns a value to an existing\r\n        variable. Variables can have different data types. See Data Types for a\r\n        more detailed explanation.\r\n    </p>\r\n    <p>\r\n        · For-each loop: Create a loop that repeats the operations inside it,\r\n        multiple times. See For-Loop for a more detailed explanation.\r\n    </p>\r\n    <p>\r\n        · If-else condition: Create a conditional statement, and execute the\r\n        operations inside it based on whether the condition is true or false.\r\n    </p>\r\n    <p>\r\n        · Function: Call a function in the built the function library.\r\n    </p>\r\n    <p>\r\n        Selecting or hovering on a line in the procedure will show a set of buttons\r\n        on the right hand side.\r\n    </p>\r\n    <p>\r\n        · Help: Show the help for the particular function. The help will be\r\n        displayed in under the Output viewport.\r\n    </p>\r\n    <p>\r\n        · Print: Prints the value generated by that line of code to the console.\r\n        This is mainly used for debugging.\r\n    </p>\r\n    <p>\r\n        · Disable: Disables the line of code. When the code is executed, it will\r\n        simply ignore this line of code.\r\n    </p>\r\n    <ul>\r\n        <li>\r\n            Delete: Deletes the line of code.\r\n        </li>\r\n    </ul>\r\n    <p>\r\n        For more information about writing Procedures, see the Procedure help file.\r\n    </p>\r\n    <h2>\r\n        Parameters\r\n    </h2>\r\n    <p>\r\n        Each node can have zero or more parameters whose values can be set in the\r\n        Parameters viewport. The parameters shown in this viewport are for the node\r\n        selected in the flowchart.\r\n    </p>\r\n    <p>\r\n        The parameters are all node inputs for which no wires have been attached.\r\n        In the example below, the node has three inputs. The first input (‘in0’)\r\n        has a wire attached, so it does not appear as a parameter. The other two\r\n        parameters have no wires, so these will appear as Parameters whose values\r\n        you can set manually in the parameters viewport.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"82\"\r\n            height=\"117\"\r\n            src=\"./assets/img/info/image012.jpg\"\r\n        />\r\n        <img\r\n            width=\"294\"\r\n            height=\"112\"\r\n            src=\"./assets/img/info/image014.jpg\"\r\n        />\r\n    </p>\r\n    <p>\r\n        Clicking the execute button will execute the flowchart with the specified\r\n        parameters.\r\n    </p>\r\n    <h2>\r\n        Output\r\n    </h2>\r\n    <p>\r\n        Once a flowchart has been executed, the results can be viewed in the Output\r\n        viewport. The outputs that are shown in this viewport are for the node\r\n        selected in the flowchart.\r\n    </p>\r\n    <p>\r\n        The Output viewport has a number of different viewers.\r\n    </p>\r\n    <p>\r\n        The Console viewer shows messages resulting from the execution of the\r\n        flowchart. Each message has a time stamp and a short piece of text. If any\r\n        errors occurred, then an error message will also be shown. These outputs\r\n        are not linked to any particular node. As a result, selecting different\r\n        nodes in the flowchart has no effect on what is being displayed in the\r\n        Console. This is not the case with the other Output viewers.\r\n    </p>\r\n    <p>\r\n        The Console is an important viewer when debugging. For example, in the\r\n        example below, the ‘print’ on the variable called ‘rand_num’ was enabled,\r\n        which resulted in the value being printed out as a console message. This\r\n        allows you to see that variable was set to a value of ‘0.154…’.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"202\"\r\n            height=\"189\"\r\n            src=\"./assets/img/info/image016.jpg\"\r\n        />\r\n    </p>\r\n    <p>\r\n        The Text viewer shows the output or all the outputs of the node selected in\r\n        the Viewport. This is the most basic was of looking at the output of the\r\n        node, and works for any type of output. If the output is actually a text\r\n        value, then it is directly printed in the text viewer. If the output is not\r\n        text, then it is first converted to text and shown in the viewer.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"132\"\r\n            height=\"219\"\r\n            src=\"./assets/img/info/image018.jpg\"\r\n        />\r\n        <img\r\n            width=\"77\"\r\n            height=\"100\"\r\n            src=\"./assets/img/info/image020.jpg\"\r\n        />\r\n    </p>\r\n    <p>\r\n        The 3D viewer shows the output for the selected output port for the\r\n        selected node in the flowchart. Selecting different nodes and different\r\n        output ports in the flowchart will change what is being displayed in the 3D\r\n        viewer. However, note that the 3D viewer will only be able to display the\r\n        output if the content is compatible. Thus, if an output port is outputting\r\n        some text, then there is little that the 3D viewer will be able to do with\r\n        this and as a result nothing will be displayed.\r\n    </p>\r\n    <p>\r\n        In order to make switching between viewers easier, each output port has a\r\n        default Viewer. When an output port is selected, and the Output window will\r\n        automatically switch to that default Viewer. In the example below, the\r\n        first output (‘out0’) is set to use the Console viewer is set to use the\r\n        Console Viewer, while the other two outputs (‘out1’ and ‘out2’) are set to\r\n        use the Text Viewer.\r\n    </p>\r\n    <p align=\"center\">\r\n        <img\r\n            width=\"217\"\r\n            height=\"70\"\r\n            src=\"./assets/img/info/image022.jpg\"\r\n        />\r\n    </p>"

/***/ }),

/***/ "./src/app/ui-components/help/info-viewer/help.about.tpl.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/help/info-viewer/help.fundamentals.tpl.html":
/***/ (function(module, exports) {

module.exports = "<h1>Fundamentals</h1>\r\n\r\n<p>\r\n    In order to get a better understanding of creating procedures in Möbius, it will be helpful to review some of the fundamental constructs of programming.\r\n</p>\r\n\r\n<ul>\r\n    <li><a href=\"#execution\">Execution</a></li>\r\n    <li><a href=\"#variables\">Variables</a></li>\r\n    <li><a href=\"#primitive\">Primitive Data Types</a></li>\r\n    <li><a href=\"#list\">List Data Type</a></li>\r\n    <li><a href=\"#passing\">Passing Data: By Value and By Reference</a></li>\r\n    <li><a href=\"#expressions\">Expressions</a></li>\r\n    <li><a href=\"#if-else\"><i>If-else</i> Conditions</a></li>\r\n    <li><a href=\"#for-each\"><i>For-each</i> Loop</a></li>\r\n    <li><a href=\"#variable-scope\">Variable Scope</a></li>\r\n    <li><a href=\"#functions\">Functions</a></li>\r\n</ul>\r\n\r\n<a name=\"execution\"><h2>Execution</h2></a>\r\n\r\n<p>\r\n    A procedure consists of a sequence of lines of code. When you execute the procedure, your computer will execute the each line of code, one by one. It is like a sequence of instructions.\r\n</p>\r\n\r\n<code>\r\n    // code on line 1<br>\r\n    // code on line 2<br>\r\n    // code on line 3<br>\r\n</code>\r\n\r\n<p>\r\n    (Note that in the code example above, each line starts with a \"//\". This is actually a shorthand to indicate that this line consists of a comment. The computer will ignore such lines.)\r\n</p>\r\n\r\n<p>\r\n    (Note also that in this document, various code snippet are given as examples. The code that you create in Möbius of course looks a little different, but the structure is exactly the same. We are just writing the code snippets in this way in order to avoid having to do lots of screen captures. Each code snippet is assumed to be independent and stand alone.)\r\n</p>\r\n\r\n<p>\r\n    In general, the flow of the execution goes one line at a time, top to bottom. You can change this linear behaviour by using <i>if-else</i> conditions and <i>for-loops</i>. More on that later.\r\n</p>\r\n\r\n<p>\r\n    Each line of code can contain various types of statements. The most basic is a variable assignment.\r\n</p>\r\n\r\n<a name=\"variables\"><h2>Variables</h2></a>\r\n\r\n<p>\r\n    A variable can be thought of as a named container in which you can place some data. A variable is something like this:\r\n</p>\r\n\r\n<code>\r\n    x = 123<br>\r\n</code>\r\n\r\n<p>\r\n    In the above code, the variable named <code>x</code> contains the number <code>123</code>. We can say: \"the value of the variable is 123\". The first time you use a variable like this, it gets declared, which creates the container in memory. Once it is declared, you can change the value at any time.\r\n</p>\r\n\r\n<code>\r\n    x = 123<br>\r\n    x = 456<br>\r\n</code>\r\n\r\n<p>\r\n    In the above code, the variable named <code>x</code> was used for the first time, and value was set to <code>123</code>. Then, on the second line, the value <code>123</code> was discarded and replaced with the value <code>456</code>. We can say: \"the value of 456 was assigned to the variable x\". You can change the value as many times as you like.\r\n</p>\r\n\r\n<p>\r\n    By convention, variables are typically named using lowercase letters only. For example, \"my_variable\". The variable name should not contain spaces, or any special character. Also, it should not start with a number.\r\n</p>\r\n\r\n<a name=\"primitive\"><h2>Primitive Data Types</h2></a>\r\n\r\n<p>\r\n    The data that you assign to a variable can have different types. Möbius allows you to work with three primitive data types:\r\n</p>\r\n\r\n<ul>\r\n    <li>Numbers, eg. 123, 120.50 etc.</li>\r\n    <li>Strings of text e.g. \"This text string\" etc.</li>\r\n    <li>Boolean e.g. true or false.</li>\r\n</ul>\r\n\r\n<p>\r\n    Below is an example of some variable assignments for the three different primitive data types:\r\n</p>\r\n\r\n<code>\r\n    my_age = 47<br>\r\n    my_name = \"Patrick\"<br>\r\n    lives_in_sg = true<br>\r\n</code>\r\n\r\n<p>\r\n    There is also a special data type called <code>null</code>. When a value has already been assigned, and you want to clear it without assigning some other value, then you can assign <code>null</code>.\r\n</p>\r\n\r\n<code>\r\n    my_age = 47<br>\r\n    // do some other stuff<br>\r\n    my_age = null<br>\r\n</code>\r\n\r\n<p>\r\n    Strings can contain a lot of data. Here is an example of a longer string:\r\n</p>\r\n\r\n<code>\r\n    some_text = \"The Möbius Modeller is a 3D parametric modelling software. It has a visual programming interface that combines dataflow programming with blocks-based programming. Dataflow programming is used to define the overall structure of your code, using nodes connected by wires. Blocks-based programming is used to define the individual procedures in each of your nodes. Procedures contain fours main types if elements: 1) variables, 2) if-else conditions, 3) for loops, and 4) function calls.\"\r\n</code>\r\n\r\n<p>\r\n    In the example above, the variable called <code>some_text</code> is assigned a longer string. A string can also be much longer than that - for example, maybe a whole book.\r\n</p>\r\n\r\n<p>\r\n    Also, note also that strings can contain text that looks like a number, but that is actually not a number data type. Here is an example:\r\n</p>\r\n\r\n<code>\r\n    text_that_looks_like_number = \"123.456\"<br>\r\n    a_number = 123.456<br>\r\n</code>\r\n\r\n<p>\r\n    Note that characters in a string can also be accessed using the square bracket notation. For example:\r\n</p>\r\n\r\n<code>\r\n    my_name = \"patrick\"<br>\r\n    first_letter = my_name[0]<br>\r\n    last_letter = my_name[6]<br>\r\n</code>\r\n\r\n<p>\r\n    The square bracket notation for indexing will be explained in more detail in the section on lists.\r\n</p>\r\n\r\n<a name=\"list\"><h2>List Data Types</h2></a>\r\n\r\n<p>\r\n    The three primitive data types already allow many useful procedures to be written. However, there is one key problem: none of them allow you to handle collections of data items. When creating procedures, you will find that a lot of data needs to managed as a collection.\r\n</p>\r\n\r\n<p>\r\n    For example, lets say you have 10 people in your group, and you want to store their names. You could create 10 variables, named <code>person1=\"patrick\"</code>, <code>person2=\"kainwee\"</code>, <code>person3=\"akshata\"</code>,etc, and assign each one a different name. But that would get tedious. You could store them all in one string, for example: <code>people=\"patrick, kainwee, akshata\"</code>. But that is rather inflexible, since everything is stored in a single lump of text.\r\n</p>\r\n\r\n<p>\r\n    In order to be easily handle collections of data, Möbius allows you to use a list data type. A list lets you store multiple values in a single variable. A list is defined using square brackets, like this:\r\n</p>\r\n\r\n<code>\r\n    names_list = [\"patrick\", \"kianwee\", \"akshata\"]<br>\r\n    some_numbers = [1, 2, 3, 4.5, 6.7, 1000, 2000]<br>\r\n</code>\r\n\r\n<p>\r\n    In the first line of the above code, a variable called <code>names_list</code> has been created, and a value has been assigned to it that has a list data type. The list has three items inside it, each of which is a string. In the second line, a variable called <code>some_numbers</code> has been created, and the value is a list of various numbers.\r\n</p>\r\n\r\n<p>\r\n    The items in a list can be accessed using a zero based index. This index starts at zero, and counts up the list, one item at a time. So in the <code>names_list</code> above, <code>\"patrick\"</code> is at index 0, <code>\"kianwee\"</code> at 1, and <code>\"akshata\"</code> at 2. Below is an example of accessing items in names_list:\r\n</p>\r\n\r\n<code>\r\n    names_list = [\"patrick\", \"kianwee\", \"akshata\"]<br>\r\n    person = names_list[1]<br>\r\n</code>\r\n\r\n<p>\r\n    The variable called <code>person</code> is now assigned the value \"kianwee\". (This is because \"kainwee\" is at index position 1.) If you wanted to assign <code>\"patrick\"</code> to <code>person</code>, one would write <code>names_list[0]</code>, if you wanted \"akshata\", one would write <code>names_list[2]</code>. Note that for the first item, the index is 0, and for teh last item the index is the list length minus 1.\r\n</p>\r\n\r\n<p>\r\n    The same approach can be used in order to set the values of the items in a list. For example, we could change one of the names as follows:\r\n</p>\r\n\r\n<code>\r\n    names_list = [\"patrick\", \"kianwee\", \"akshata\"]<br>\r\n    names_list[0] = \"patrick_janssen\"<br>\r\n</code>\r\n\r\n<p>\r\n    The <code>names_list</code> would contain three items, namely <code>[\"patrick_janssen\", \"kianwee\", \"akshata\"]</code>. You can also add items to the list, like this.\r\n</p>\r\n\r\n<code>\r\n    names_list = [\"patrick\", \"kianwee\", \"akshata\"]<br>\r\n    names_list[3] = \"kamel\"<br>\r\n</code>\r\n\r\n<p>\r\n    The <code>names_list</code> would contain four items, namely <code>[\"patrick\", \"kianwee\", \"akshata\", \"kamel\"]</code>.\r\n</p>\r\n\r\n<p>\r\n    In some cases, rather than filling a list with items, we may instead need to create an empty list, that then gets filled later. Here is an example:\r\n</p>\r\n\r\n<code>\r\n    names_list = []<br>\r\n    // some other code<br>\r\n    names_list[0] = \"joie\"<br>\r\n    names_list[1] = \"derek\"<br>\r\n</code>\r\n\r\n<a name=\"passing\"><h2>Passing Data: By Value and By Reference</h2></a>\r\n\r\n<p>\r\n    Finally, the last thing to say about lists goes a little deeper into programming concepts. It may not be immediately relevant when you first get started, but still it s worth mentioning. It relates to how data is passed around. There are basically two ways that data can get passed: by value and by reference. Lets say you set <code>variable_a = variable_b</code>:\r\n</p>\r\n\r\n<ul>\r\n    <li>By Value: The data value in <code>variable_a</code> is copied, and assigned to <code>variable_b</code>. The two variables now have separate values stored in different locations in memory. The two values will currently be the same, but if you later change one, the other will not be affected.</li>\r\n    <li>By Reference: A reference to the data value in <code>variable_a</code> is copied, and the reference is assigned to <code>variable_b</code>. The two variables now have the same value stored in the same locations in memory. This means that is you change the value of one variable, the other will change as well.</li>\r\n\r\n</ul>\r\n\r\n<p>\r\n    The easiest way to understand this is with a pair of example. The first example will be using primitive data types (which are passed by value), and the second with a list data type (which is passed by reference).\r\n</p>\r\n\r\n<code>\r\n    a = 5<br>\r\n    b = a<br>\r\n    a = 6<br>\r\n</code>\r\n\r\n<p>\r\n    The question is, after executing all three lines of code, what is the value of <code>b</code>? The answer is 5. If we follow this line by line it makes sense.\r\n</p>\r\n\r\n<ul>\r\n    <li>Line 1) We set the value of <code>a</code> to 5. </li>\r\n    <li>Line 2) We set the value of <code>b</code> to <code>a</code>. This results in the value being passed <i>by value</i>.</li>\r\n    <li>Line 3) We change the value of a to 6. This does not affect b in any way,</li>\r\n</ul>\r\n\r\n<p>\r\n    Now lets look at a similar case using lists.\r\n</p>\r\n\r\n\r\n<code>\r\n    list_a = [1, 2, 3] <br>\r\n    list_b = list_a<br>\r\n    list_a[0] = 10<br>\r\n</code>\r\n\r\n<p>\r\n    The question again is, after executing all three lines of code, what is the value of <code>b</code>? The answer is [10, 2, 3]. This may be more surprising. Why is the first item now 10? In the third line, we change a, not b. Lets set through it line by line.\r\n</p>\r\n\r\n<ul>\r\n    <li>Line 1: We set the value of <code>list_a</code> to [1, 2, 3]. </li>\r\n    <li>Line 2: We set the value of <code>list_b</code> to <code>list_a</code>. This results in the value being passed <i>by reference</i>.</li>\r\n    <li>Line 3: We change the value of a to [10, 2, 3]. Since list_a and list_b are referencing the same value, this means that list_b now also has a value of [10, 2, 3]. </li>\r\n</ul>\r\n\r\n<a name=\"expressions\"><h2>Expressions</h2></a>\r\n\r\n<p>\r\n    As we have see above, a variable assignment has an \"=\" with something on the left and something on the right. The left hand side must specify a container in which the data will be stored. This can either be a variable name (for example <code>my_variable</code>), or, if the variable type is a list, then it can be a variable name with an index (for example, <code>my_list[1]</code>).\r\n</p>\r\n\r\n<p>\r\n    The right hand side of the assignment operator can be more interesting. So far, we have only been assigning a value. But on the right side you can write more complex expressions. For example:\r\n</p>\r\n\r\n<code>\r\n    my_variable = ((4 * 3) / 2) - 1<br>\r\n</code>\r\n\r\n<p>\r\n    Expressions can use arithmetic and comparison operators. For example, let us take a simple expression: 4 + 5 is equal to 9. Here 4 and 5 are called operands and ‘+’ is called the operator, which in this case is an arithmetic operator.\r\n</p>\r\n\r\n<p>\r\n    The arithmetic operators are as follows:\r\n</p>\r\n\r\n<ul>\r\n    <li>+ (Addition) Adds two operands</li>\r\n    <li>- (Subtraction) Subtracts the second operand from the first</li>\r\n    <li>* (Multiplication) Multiply both operands</li>\r\n    <li>/ (Division) Divide the numerator by the denominator</li>\r\n    <li>% (Modulus) Outputs the remainder of an integer division</li>\r\n    <li>++ (Increment) Increases an integer value by one</li>\r\n    <li>-- (Decrement) Decreases an integer value by one</li>\r\n</ul>\r\n\r\n<p>\r\n    The comparison operators are as follows:\r\n</p>\r\n\r\n<ul>\r\n    <li>(A == B) Checks if the value of two operands are equal or not, if yes, then the condition becomes true. </li>\r\n    <li>(A != B) Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.</li>\r\n    <li>(A > B) Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition becomes true.</li>\r\n    <li>(A < B) Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true.</li>\r\n    <li>(A >= B) Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, then the condition becomes true.</li>\r\n    <li>(A <= B) Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes true.</li>\r\n</ul>\r\n\r\n<a name=\"if-else\"><h2><i>If-else</i> Conditions</h2></a>\r\n\r\n<p>\r\n    While creating a procedure, there may be a situation when you need to perform different actions based on different conditions.\r\n</p>\r\n\r\n<p>\r\n    Möbius supports an <code>if-else</code> conditional statements. Here is an example:\r\n</p>\r\n\r\n<code>\r\n    if (variable_a > 100)<br>\r\n    &nbsp;&nbsp;// execute the code that is inside the if, only if the condition is true<br>\r\n    else<br>\r\n    &nbsp;&nbsp;// execute the code that is inside the else, only if the condition is not true<br>\r\n</code>\r\n\r\n<p>\r\n    (In the Möbius procedure window, pay attention to the left indentation of the code. You can drag your lines of code into the if-else block, and they will become indented. This indicates that they are inside the if-condition, or the else condition.)\r\n</p>\r\n\r\n<p>\r\n    In this case, if <code>variable_a</code> is greater than <code>100</code>, then the first set of code is executed. Otherwise the second set of code is executed.\r\n</p>\r\n\r\n<a name=\"for-each\"><h2><i>For-each</i> Loops</h2></a>\r\n\r\n<p>\r\n    While creating a procedure, you may encounter a situation where you need to perform an action over and over again. In such situations, you would need to write loop statements.\r\n</p>\r\n\r\n<p>\r\n    Möbius provides a for-each loop that allows you to loop over a list of values.\r\n</p>\r\n\r\n<code>\r\n    list_of_items = [10, 20, 30, 40, 50]<br>\r\n    if (item in list_of_items)<br>\r\n    &nbsp;&nbsp;// execute the code that is inside the loop multiple times, using item<br>\r\n</code>\r\n\r\n<p>\r\n    (In the Möbius procedure window, pay attention to the left indentation of the code. You can drag your lines of code into the for-loop block, and they will become indented. This indicates that they are inside the loop.)\r\n</p>\r\n\r\n<p>\r\n    The example above shows the basic loop construct. The <code>list_of_items</code> contains five values, so the loop will execute five times. Each time, the a variable called <code>item</code> is created with a new value. The first time around the loop, <code>item</code> will have a value of 10, the second time, it will have a value of 20, and so forth. Each time around the loop, the code will most likely do something useful with this <code>item</code> variable.\r\n</p>\r\n\r\n<a name=\"variable-scope\"><h2>Variable Scope</h2></a>\r\n\r\n<p>\r\n    When using if-else conditions and for-each loops, it is important to look a little deeper at creating variables. If-else condition and for-each loops define inner blocks of code (shown graphically by the level of indentation). These blocks of code can have multiple lines, and these lines may include the creation of new variables. The are certain rules that define where variables are visible, referred to as the <i>variable scope</i>.\r\n</p>\r\n\r\n<p>\r\n    Lets assume you you create variable in your procedure called <code>variable_a</code>. Where can you use that variable name? Which is the same as asking, where is that variable \"in scope\"? (If you do it wrong, you will get a \"ReferenceError\" when you run your program.) To figure this out, you need to follow two basic rules (both rules need to be true).:\r\n</p>\r\n\r\n<ul>\r\n    <li>Rule 1: The line of code accessing the variable must come after the line of code that created the variable. </li>\r\n    <li>Rule 2: The line of code accessing the variable must be contained inside the code block that created the variable.</li>\r\n</ul>\r\n\r\n<p>\r\n    Lets look at an example, and analyse it line by line.\r\n</p>\r\n\r\n<code>\r\n    a = 2<br>\r\n    if (condition)<br>\r\n    &nbsp;&nbsp;b = a * 4<br>\r\n    c = b * 6 // ReferenceError<br>\r\n</code>\r\n\r\n<ul>\r\n    <li>Line 1:The variable <code>a</code> is created.</li>\r\n    <li>Line 2:The <i>if</i> creates a code sub-block, with a single line of code in it. There are now two code blocks, the main code block of the procedure, and nested inside that, this <i>if</i> code sub-block.</li>\r\n    <li>Line 3:This line is inside the <i>if</i> code block, which is inside the main code block. A new variable, <code>b</code> is created. The value is set to <code>a</code> multiplied by 4. In this cases, there is no problem accessing the variable <code>a</code>, because both rules are true. Rule 1: Line 3 come after line 1. Rule 2: Line 3 is inside the line 1 code block.</li>\r\n    <li>Line 4:This line is inside the <i>if</i> code block. This line generates an ReferenceError. A new variable, <code>c</code> is created, no problem here. But the problem occurs when the value is set to <code>b</code> multiplied by 6. In this cases, line 4 cannot access the variable <code>b</code> define on line 3. Rule 1 is still OK: Line 4 come after line 3. However, Rule 2 is not OK: Line 4 is not inside the line 3 code block. So, as far as this line is concerned, variable <code>b</code> does not exist.</li>\r\n</ul>\r\n\r\n<p>\r\n    Basically, anything you create in these inner code blocks is not visible to the code outside the block. To someone who is new to programming, this may seem annoying. However, it is actually a good thing, since it avoids many errors that are hard to catch. Furthermore, there is actually a simple way to fix this, as follows:\r\n</p>\r\n\r\n<code>\r\n    a = 2<br>\r\n    b = 0 // a default value<br>\r\n    if (condition)<br>\r\n    &nbsp;&nbsp;b = a * 4<br>\r\n    c = b * 6<br>\r\n</code>\r\n\r\n<p>\r\n    Since <code>b</code> is now created in the main code block, the last line no longer has an error.\r\n</p>\r\n\r\n<a name=\"functions\"><h2>Functions</h2></a>\r\n\r\n<p>\r\n    Finally, we get to the functions, which is where most of the useful operations can be performed. Möbius allow users to create procedures that call a set of predefined functions, organised into modules to make the easier to find. These functions are all called it the same way.\r\n</p>\r\n\r\n<ul>\r\n    <li>The function name species the function to be called.</li>\r\n    <li>The function inputs are called the \"arguments\", and are specified in round brackets after the function name. </li>\r\n    <li>The function may have an output, which is called the \"return value\". If it has a return value, then the return value will typically be assigned to a variable.</li>\r\n</ul>\r\n\r\n<p>\r\n    For example, consider the <code>string.len()</code> function that calculates the length of a string.\r\n</p>\r\n\r\n<code>\r\n    my_str = \"This is some text.\"<br>\r\n    result = string.len(my_str)<br>\r\n</code>\r\n\r\n<p>\r\n    In this case, the module name is <code>string</code>, and the function name is <code>len</code>. The function takes one argument as input, which is the string whose length needs to be calculated, which in this case is <code>my_str</code>. The function returns a number (the length of the string), which gets assigned to the variable called <code>result</code>.\r\n</p>\r\n\r\n<p>\r\n    The sections below give help documentation on all the functions available in Möbius.\r\n</p>\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-components/help/info-viewer/help.fundamentals.tpl.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/help/info-viewer/help.model.tpl.html":
/***/ (function(module, exports) {

module.exports = "<h1>About the Model</h1>\r\n\r\n<p>Mobius v0.9.19-cesium</p>\r\n"

/***/ }),

/***/ "./src/app/ui-components/help/info-viewer/help.model.tpl.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-components/help/info-viewer/help.template.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MobiusAbout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpFundamentals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HelpModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let MobiusAbout = class MobiusAbout {
    constructor() { }
    ngOnInit() {
    }
};
MobiusAbout = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-help-about',
        template: __webpack_require__("./src/app/ui-components/help/info-viewer/help.about.tpl.html"),
        styles: [__webpack_require__("./src/app/ui-components/help/info-viewer/help.about.tpl.scss")]
    }),
    __metadata("design:paramtypes", [])
], MobiusAbout);

let HelpFundamentals = class HelpFundamentals {
    constructor() { }
    ngOnInit() {
    }
};
HelpFundamentals = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-help-fundamentals',
        template: __webpack_require__("./src/app/ui-components/help/info-viewer/help.fundamentals.tpl.html"),
        styles: [__webpack_require__("./src/app/ui-components/help/info-viewer/help.fundamentals.tpl.scss")]
    }),
    __metadata("design:paramtypes", [])
], HelpFundamentals);

let HelpModel = class HelpModel {
    constructor() { }
    ngOnInit() {
    }
};
HelpModel = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-help-model',
        template: __webpack_require__("./src/app/ui-components/help/info-viewer/help.model.tpl.html"),
        styles: [__webpack_require__("./src/app/ui-components/help/info-viewer/help.model.tpl.scss")]
    }),
    __metadata("design:paramtypes", [])
], HelpModel);



/***/ }),

/***/ "./src/app/ui-components/help/info-viewer/info-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\r\n    <!-- <h1>Möbius Procedures</h1> -->\r\n\r\n    <mat-accordion *ngIf='!fnObj'>\r\n\r\n        <mat-expansion-panel [expanded]='false' class=\"panel\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    ABOUT\r\n                </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <div class=\"panel-content\"> \r\n                <app-help-about></app-help-about>\r\n            </div>\r\n            \r\n        </mat-expansion-panel>\r\n\r\n        <!-- fundamentals -->\r\n        <mat-expansion-panel class=\"panel\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    FUNDAMENTALS\r\n                </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <div class=\"panel-content\"> \r\n                <app-help-fundamentals></app-help-fundamentals>\r\n            </div>\r\n\r\n        </mat-expansion-panel>\r\n\r\n        <!-- model -->\r\n        <mat-expansion-panel class=\"panel\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    MODEL\r\n                </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <div class=\"panel-content\"> \r\n                <app-help-model></app-help-model>\r\n            </div>\r\n\r\n        </mat-expansion-panel>\r\n\r\n    </mat-accordion>\r\n\r\n</div>    \r\n"

/***/ }),

/***/ "./src/app/ui-components/help/info-viewer/info-viewer.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer {\n  padding: 15px;\n  height: auto;\n  overflow: auto; }\n\n.viewer .panel-content {\n    max-height: 700px;\n    overflow: auto; }\n"

/***/ }),

/***/ "./src/app/ui-components/help/info-viewer/info-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let InfoViewerComponent = class InfoViewerComponent {
    constructor() { }
    ngOnInit() {
    }
};
InfoViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-info-viewer',
        template: __webpack_require__("./src/app/ui-components/help/info-viewer/info-viewer.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/help/info-viewer/info-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InfoViewerComponent);



/***/ }),

/***/ "./src/app/ui-components/layout/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n\t<div class=\"title\">\r\n\t\t\t{{active_viewer}} \r\n\t\t\t<span *ngIf=\"active_node\">:: {{active_node?.name}}</span> \r\n\t</div>\r\n\t\r\n\t<div class=\"btn-group\">\r\n\t\t<div (click)=\"maximize()\">\r\n\t\t\t<span matTooltip=\"Expand\">\r\n\t\t\t\t<mat-icon [class.disabled]=\"panel_id == 'main'\">aspect_ratio</mat-icon>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<ng-container #container></ng-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-components/layout/panel/panel.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid #8AA8C0;\n  background-color: #395D73;\n  color: white;\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n  padding: 0px 15px; }\n\n.header .btn-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n\n.header .btn-group span {\n      color: #F1F1F1; }\n\n.header .btn-group span mat-icon {\n        font-size: 14px;\n        cursor: pointer; }\n\n.header .btn-group span mat-icon.disabled {\n          color: #8AA8C0 !important; }\n\n.header .btn-group span mat-icon:hover {\n          color: #F0BFA0; }\n"

/***/ }),

/***/ "./src/app/ui-components/layout/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services_layout_service__ = __webpack_require__("./src/app/global-services/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PanelComponent = class PanelComponent {
    constructor(_fs, layoutService, r) {
        this._fs = _fs;
        this.layoutService = layoutService;
        this.r = r;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.updateView();
        this.subscriptions.push(this._fs.node$.subscribe((node) => this.active_node = node));
        this.subscriptions.push(this.layoutService.getMessage().subscribe(message => {
            this.updateView();
        }));
    }
    ngOnDestroy() {
        this.subscriptions.map(function (s) {
            s.unsubscribe();
        });
    }
    updateView() {
        let layout = this.layoutService.getView(this.panel_id);
        let pos = this.container.indexOf(layout.view);
        if (this.active_viewer === layout.name) {
        }
        else {
            this.active_viewer = layout.name;
            if (pos === -1) {
                this.container.insert(layout.view);
            }
            this.container.move(layout.view, 0);
        }
    }
    // shifts component to main panel
    maximize() {
        this.layoutService.maximize(this.panel_id);
    }
    // reduces size of component
    minimize() {
        this.layoutService.minimize(this.panel_id);
    }
    // refreshes size of component
    restore() {
        this.layoutService.restore(this.panel_id);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */])
], PanelComponent.prototype, "container", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], PanelComponent.prototype, "panel_id", void 0);
PanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-panel',
        template: __webpack_require__("./src/app/ui-components/layout/panel/panel.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/layout/panel/panel.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__["a" /* FlowchartService */],
        __WEBPACK_IMPORTED_MODULE_2__global_services_layout_service__["a" /* LayoutService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
], PanelComponent);



/***/ }),

/***/ "./src/app/ui-components/main/mobius-editor/mobius-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\" *ngIf=\"supported\">\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"wrapper\">\r\n\r\n      <split  direction=\"horizontal\" \r\n              gutterColor=\"#8AA8C0\"\r\n              [gutterSize]=\"layout.gutter\" \r\n              [useTransition]=\"layout.useTransition\">\r\n\r\n            <!-- main pane -->\r\n            <split-area [size]=\"layout.size.main\" order=\"1\">\r\n              <app-panel panel_id=\"main\"></app-panel>\r\n            </split-area>\r\n\r\n            <!-- secondary split pane -->\r\n            <split-area \r\n              [size]=\"layout.size.side\"  order=\"2\">\r\n\r\n                <split  direction=\"vertical\"\r\n                        gutterColor=\"#8AA8C0\"\r\n                        [gutterSize]=\"layout.gutter\" \r\n                        [useTransition]=\"layout.useTransition\">\r\n\r\n                    <split-area [size]=\"layout.size.top\" order=\"1\" [visible]=\"layout.mode == 'Editor'\">\r\n                      <app-panel panel_id=\"top\"></app-panel>\r\n                    </split-area>\r\n\r\n                    <split-area [size]=\"layout.size.middle\" order=\"2\" [visible]=\"layout.mode == 'Editor'\">\r\n                      <app-panel panel_id=\"middle\"></app-panel>\r\n                    </split-area>\r\n\r\n                    <!-- fixed -->\r\n                    <split-area [size]=\"layout.size.bottom\" order=\"3\">\r\n                      <app-panel panel_id=\"bottom\"></app-panel>\r\n                    </split-area>\r\n\r\n                </split>\r\n\r\n            </split-area>\r\n            \r\n      </split>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"message-general processing\" *ngIf=\"processing\">\r\n    <div class=\"message-general loading\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-components/main/mobius-editor/mobius-editor.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n#app-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  /* Webkit */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE 10  */\n  /* Currently not supported in Opera but will be soon */\n  -o-user-select: none;\n  user-select: none; }\n\n#app-container #setting {\n    position: absolute;\n    left: 30px;\n    bottom: 30px; }\n\n#app-container .container {\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    background-color: white; }\n\n#app-container .container .wrapper {\n      position: absolute;\n      width: 100%;\n      height: 100%; }\n\n#app-container .container .wrapper .split {\n        height: 100%;\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1; }\n\n#app-container .container .wrapper .split-area {\n        overflow: hidden; }\n\n#app-container .container .wrapper .split-area .view-wrapper {\n          position: absolute;\n          height: 100%;\n          width: 100%; }\n"

/***/ }),

/***/ "./src/app/ui-components/main/mobius-editor/mobius-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobiusEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__ = __webpack_require__("./src/app/global-services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_services_mobius_service__ = __webpack_require__("./src/app/global-services/mobius.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let MobiusEditorComponent = class MobiusEditorComponent {
    constructor(layoutService, flowchartService, _mb) {
        this.layoutService = layoutService;
        this.flowchartService = flowchartService;
        this._mb = _mb;
        this.supported = false;
        this.processing = false;
        let browser = this.checkBrowser();
        if (browser == "Chrome") {
            this.layout = layoutService.getAssets();
            this.toggle = layoutService.toggleMode;
            this.supported = true;
            this.processing = _mb.processing;
            let self = this;
            _mb.stateChangedEmitter().subscribe({
                next(value) { self.processing = value; },
                error(message) { }
            });
        }
        else {
            alert("Oops... You seem to be using a browser not supported by Mobius. Please use Chrome.");
            this.supported = false;
        }
    }
    ngOnInit() {
        if (this.mode == "Editor") {
            this.layoutService.setEditor();
        }
        else if (this.mode == "Viewer") {
            this.layoutService.setViewer();
        }
        if (this.layout.mode == 'Editor') {
            window.onbeforeunload = function (e) {
                var dialogText = 'Dialog text here';
                e.returnValue = dialogText;
                return dialogText;
            };
        }
        else {
            window.onbeforeunload = undefined;
        }
    }
    checkBrowser() {
        let brw = "";
        if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
            brw = 'Opera';
        }
        else if (navigator.userAgent.indexOf("Chrome") != -1) {
            brw = 'Chrome';
        }
        else if (navigator.userAgent.indexOf("Safari") != -1) {
            brw = 'Safari';
        }
        else if (navigator.userAgent.indexOf("Firefox") != -1) {
            brw = 'Firefox';
        }
        else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document["documentMode"] == true)) {
            brw = 'IE';
        }
        else if (window.navigator.userAgent.indexOf("Edge") > -1) {
            brw = 'Edge';
        }
        else {
            brw = 'unknown';
        }
        return brw;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], MobiusEditorComponent.prototype, "mode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], MobiusEditorComponent.prototype, "filepath", void 0);
MobiusEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-mobius-editor',
        template: __webpack_require__("./src/app/ui-components/main/mobius-editor/mobius-editor.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/main/mobius-editor/mobius-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_layout_service__["a" /* LayoutService */],
        __WEBPACK_IMPORTED_MODULE_2__global_services_flowchart_service__["a" /* FlowchartService */],
        __WEBPACK_IMPORTED_MODULE_3__global_services_mobius_service__["a" /* MobiusService */]])
], MobiusEditorComponent);



/***/ }),

/***/ "./src/app/ui-components/main/mobius-gallery/mobius-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"container__element container__element--header\">\r\n    Möbius Gallery\r\n  </div>\r\n\r\n  <div class=\"container__element container__element--subheader\">\r\n      Displaying {{all_files.length}} projects\r\n  </div>\r\n\r\n  <div class=\"container__element container__element--project-container\">\r\n    <div class=\"project-container__project\" *ngFor=\"let f of all_files\">\r\n        <div class=\"project__content\">\r\n          <a href=\"./viewer/{{f.name}}\">\r\n            {{ f.name | simplename }}\r\n          </a>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<a href=\"https://github.com/design-automation/mobius-cesium\"><img style=\"position: absolute; top: 0; right: 0; border: 0;\" src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png\" alt=\"Fork me on GitHub\"></a>"

/***/ }),

/***/ "./src/app/ui-components/main/mobius-gallery/mobius-gallery.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 0px;\n  margin: 0px;\n  height: 100%;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.container__element {\n  padding: 0px 10% 0px 10%; }\n\n.container__element--header {\n  padding-top: 150px;\n  padding-bottom: 15px;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(247, 107, 229, 0.25)), to(rgba(24, 23, 23, 0.95))), url('mobius-cesium-1.950bdee00fe0cd8a065b.JPG');\n  background: linear-gradient(rgba(247, 107, 229, 0.25), rgba(24, 23, 23, 0.95)), url('mobius-cesium-1.950bdee00fe0cd8a065b.JPG');\n  font-size: 48px;\n  line-height: 64px;\n  font-weight: 600;\n  color: lightsteelblue; }\n\n.container__element--subheader {\n  font-size: 26px;\n  line-height: 32px;\n  font-weight: 300;\n  padding-top: 60px;\n  padding-bottom: 30px;\n  color: #222; }\n\n.container__element--project-container {\n  font-size: 26px;\n  line-height: 32px;\n  font-weight: 300;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  overflow: auto; }\n\n.project-container__project {\n  position: relative;\n  width: 25%;\n  height: 150px;\n  min-width: 200px; }\n\n.project-container__project .project__content {\n    height: 90%;\n    width: 90%;\n    font-size: 16px;\n    line-height: 24px;\n    color: #000;\n    font-weight: 300;\n    overflow: hidden;\n    border-radius: 4px;\n    vertical-align: middle;\n    /* https://css-tricks.com/snippets/css/prevent-long-urls-from-breaking-out-of-container */\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-word;\n    border: 1px solid #bbb;\n    border-radius: 2px; }\n\n.project-container__project .project__content a {\n      display: block;\n      height: 100%;\n      margin: 10px;\n      text-decoration: none;\n      text-align: center;\n      text-transform: uppercase;\n      color: inherit;\n      font-weight: 600; }\n\n.project-container__project .project__content a:visited {\n        color: inherit; }\n\n.project-container__project .project__content:hover {\n      border-color: #222; }\n"

/***/ }),

/***/ "./src/app/ui-components/main/mobius-gallery/mobius-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobiusGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./src/app/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MobiusGalleryComponent = class MobiusGalleryComponent {
    constructor(http) {
        this.http = http;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].GALLERY_URL).subscribe(data => this.all_files = data);
    }
    ngOnInit() {
    }
};
MobiusGalleryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'mobius-gallery',
        template: __webpack_require__("./src/app/ui-components/main/mobius-gallery/mobius-gallery.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/main/mobius-gallery/mobius-gallery.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], MobiusGalleryComponent);



/***/ }),

/***/ "./src/app/ui-components/main/mobius-landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<h1>Mobius Modeller</h1>\r\n\t<p>Cesium Integration</p>\r\n\t\r\n\t<div class=\"description\">\r\n\t\t\r\n\t\t<p>\r\n\t\t\tThe Möbius Modeller is a web application that allows users to create automated procedures using visual programming. All procedures are executed in the browser on the client side, and as such no server side process is required.\r\n\t\t</p>\r\n\t\t\r\n\t\t<p>\t\t\r\n\t\t\tCurrently, Möbius Modeller has be developed to support Parametric Information Modelling (PIM) in the architectural and urban design domain, allowing procedures to be developed for generating and evaluating 3D models of buildings and urban neighbourhoods.\r\n\t\t</p>\r\n\r\n\t\t<p>\r\n\t\t\tThe Möbius Modeller can be customised to a wide different domains by developing specialized function libraries and specialized viewers. Contact us if you are interested in applying the Möbius Modeller in your domain.\r\n\t\t</p>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"link-container\">\r\n\r\n\t\t<a href=\"./editor\">\r\n\t\t\tTry Mobius\r\n\t\t</a>\r\n\r\n\t\t<a href=\"./gallery\">\r\n\t\t\tView Gallery\r\n\t\t</a>\r\n\r\n\t\t<a href=\"https://github.com/design-automation\" target=\"_blank\">\r\n\t\t\tContribute on Github\r\n\t\t</a>\r\n\r\n\t</div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-components/main/mobius-landing/landing.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 60%;\n  margin: 0 auto;\n  padding-top: 10%;\n  text-align: center; }\n  .container a {\n    font-size: 16px;\n    line-height: 20px;\n    padding: 10px;\n    margin: 10px;\n    border: 1px solid gray;\n    border-radius: 10px;\n    color: black;\n    text-decoration: none; }\n  .container a:hover {\n      background: gray;\n      color: white; }\n  .container .description {\n    padding-top: 10px;\n    width: 400px;\n    margin: 0 auto;\n    font-size: 14px;\n    line-height: 24px;\n    text-align: justify; }\n  .container .link-container {\n    padding-top: 45px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n"

/***/ }),

/***/ "./src/app/ui-components/main/mobius-landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__("./src/app/ui-components/main/mobius-landing/landing.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/main/mobius-landing/landing.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);



/***/ }),

/***/ "./src/app/ui-components/main/mobius-viewer/mobius-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\" *ngIf=\"supported && visible\">\r\n\r\n    <div class=\"container\">\r\n        <app-viewer-container viewer_mode=true></app-viewer-container>\r\n    </div>\r\n\r\n\r\n    <div class=\"side-bar-container\" [@slide_in_out]=\"slider_state\">\r\n    \t<div class=\"nav-toggle-btn\" (click)=\"toggleMenu()\">\r\n    \t\t<span *ngIf=\"slider_state == 'slide_in'\">▹</span>\r\n    \t\t<span *ngIf=\"slider_state == 'slide_out'\">◃</span>\r\n    \t</div>\r\n        <app-parameter-viewer globals=true></app-parameter-viewer>\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<div class=\"message-general sad-face\" *ngIf=\"!supported\">\r\n\r\n</div>\r\n\r\n\r\n<div class=\"message-general loading\" *ngIf=\"!visible\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/main/mobius-viewer/mobius-viewer.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n#app-container {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow: hidden !important; }\n\n#app-container .container {\n    position: relative;\n    height: 100vh !important;\n    overflow: hidden; }\n\n#app-container .side-bar-container {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    z-index: 100;\n    width: 380px;\n    height: 100vh;\n    padding-left: 30px;\n    overflow: hidden; }\n\n#app-container .side-bar-container .nav-toggle-btn {\n      position: absolute;\n      top: 50%;\n      margin-top: -35px;\n      margin-left: -30px;\n      z-index: 200;\n      width: 30px;\n      height: 70px;\n      border-top: 1px solid gray;\n      border-left: 1px solid gray;\n      border-bottom: 1px solid gray;\n      border-radius: 4px;\n      background-color: rgba(20, 20, 20, 0.5);\n      color: #ddd;\n      text-align: center;\n      font-size: 32px;\n      line-height: 70px;\n      cursor: pointer; }\n\n#app-container .side-bar-container .nav-toggle-btn span {\n        vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/ui-components/main/mobius-viewer/mobius-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobiusViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_services_layout_service__ = __webpack_require__("./src/app/global-services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_services_mobius_service__ = __webpack_require__("./src/app/global-services/mobius.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__("./src/app/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let MobiusViewerComponent = class MobiusViewerComponent {
    constructor(_router, http, layoutService, _mb, _fs) {
        this._router = _router;
        this.http = http;
        this.layoutService = layoutService;
        this._mb = _mb;
        this._fs = _fs;
        this.visible = false;
        this.supported = false;
        this.router = _router;
        let browser = this.checkBrowser();
        if (browser == "Chrome") {
            this.layout = layoutService.getAssets();
            this.toggle = layoutService.toggleMode;
            this.supported = true;
        }
        else {
            alert("Oops... You seem to be using a browser not supported by Mobius. Please use Chrome.");
            this.supported = false;
        }
    }
    ngOnInit() {
        this.sub = this.router.params.subscribe(params => {
            this.filepath = this.getFlowchart(params.id);
            this._fs.load_file_from_url(this.filepath);
        });
        this.slider_state = 'slide_in';
    }
    ngAfterViewInit() {
        this.visible = true;
        //this.editable = this._fs.getFlowchart().editable;
    }
    getFlowchart(filename) {
        let filepath = __WEBPACK_IMPORTED_MODULE_7__constants__["a" /* Constants */].FILE_URL + filename;
        return filepath;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    checkBrowser() {
        let brw = "";
        if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
            brw = 'Opera';
        }
        else if (navigator.userAgent.indexOf("Chrome") != -1) {
            brw = 'Chrome';
        }
        else if (navigator.userAgent.indexOf("Safari") != -1) {
            brw = 'Safari';
        }
        else if (navigator.userAgent.indexOf("Firefox") != -1) {
            brw = 'Firefox';
        }
        else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document["documentMode"] == true)) {
            brw = 'IE';
        }
        else if (window.navigator.userAgent.indexOf("Edge") > -1) {
            brw = 'Edge';
        }
        else {
            brw = 'unknown';
        }
        return brw;
    }
    toggleMenu() {
        this.slider_state = this.slider_state == 'slide_in' ? 'slide_out' : 'slide_in';
    }
};
MobiusViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-mobius-viewer',
        template: __webpack_require__("./src/app/ui-components/main/mobius-viewer/mobius-viewer.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/main/mobius-viewer/mobius-viewer.component.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* trigger */])('slide_in_out', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('slide_in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                    "right": "0px"
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('slide_out', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                    //background: 'blue',
                    "right": "-380px"
                })),
                //transition('slide_in <=> slide_out', animate('300ms')),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])("slide_in <=> slide_out", Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])("3s")),
            ]),
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_4__global_services_layout_service__["a" /* LayoutService */],
        __WEBPACK_IMPORTED_MODULE_5__global_services_mobius_service__["a" /* MobiusService */],
        __WEBPACK_IMPORTED_MODULE_6__global_services_flowchart_service__["a" /* FlowchartService */]])
], MobiusViewerComponent);



/***/ }),

/***/ "./src/app/ui-components/viewers/EViewer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EViewer; });
var EViewer;
(function (EViewer) {
    EViewer["Viewer"] = "Output";
    EViewer["Flowchart"] = "Flowchart";
    EViewer["Editor"] = "Procedure";
    EViewer["Parameter"] = "Parameters";
})(EViewer || (EViewer = {}));


/***/ }),

/***/ "./src/app/ui-components/viewers/cesium-viewer/cesium-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\" style=\"position: absolute;\">\r\n\t<div class=\"container\">\r\n\t\t\r\n\t\t<mobius-cesium [data]=\"port.value\" [mode]=\"mode\" \r\n\t\t\tstyle=\"width: 100%;\">\r\n\t\t</mobius-cesium>\r\n\r\n\r\n\t\t<button \r\n\t\t    class=\"btn--save\"\r\n\t\t    style=\"\"\r\n\t\t    *ngIf=\"gs_dummy_data\"\r\n\t\t\t(click)=\"save_geojson()\">\r\n\t\t\tSave GeoJSON\r\n\t\t</button>\r\n\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/viewers/cesium-viewer/cesium-viewer.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer {\n  height: 100%;\n  width: 100%; }\n\n.viewer .container {\n    height: 100%;\n    width: 100%; }\n\n.viewer .container .default {\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      color: #222;\n      background-color: rgba(255, 255, 255, 0.3);\n      z-index: 100; }\n\n.viewer .container #app-geometry-viewer {\n      height: 100%;\n      width: 100%; }\n\n.viewer .container #app-geometry-viewer canvas {\n        height: 100% !important;\n        width: 100% !important; }\n\nbutton.btn--save {\n  position: absolute;\n  right: 30px;\n  bottom: 100px;\n  width: 150px;\n  height: 45px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  border: none;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/ui-components/viewers/cesium-viewer/cesium-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CesiumViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let CesiumViewerComponent = class CesiumViewerComponent {
    constructor(_fs) {
        this._fs = _fs;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this._fs.node$.subscribe((node) => this.port = node.outputs[0]));
    }
    ngOnDestroy() {
        this.subscriptions.map(function (s) {
            s.unsubscribe();
        });
    }
    // save the geojson
    save_geojson() {
        let fileString = JSON.stringify(this.port.value);
        let blob = new Blob([fileString], { type: 'application/json' });
        FileUtils.downloadContent(blob, "output.geojson");
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CesiumViewerComponent.prototype, "mode", void 0);
CesiumViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-cesium-viewer',
        template: __webpack_require__("./src/app/ui-components/viewers/cesium-viewer/cesium-viewer.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/viewers/cesium-viewer/cesium-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__["a" /* FlowchartService */]])
], CesiumViewerComponent);

class FileUtils {
    static downloadContent(blob, filename) {
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        }
        else {
            const a = document.createElement('a');
            document.body.appendChild(a);
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = filename;
            a.click();
            setTimeout(() => {
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            }, 0);
        }
    }
}


/***/ }),

/***/ "./src/app/ui-components/viewers/code-viewer/code-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\t<div class=\"ace-editor\" \r\n\t\tace-editor \r\n\t\t[(text)]=\"_codeString\"\r\n\t\t[readOnly]=\"true\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/viewers/code-viewer/code-viewer.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  -webkit-box-sizing: border-box !important;\n          box-sizing: border-box !important;\n  padding-bottom: 60px !important; }\n\n.viewer .ace-editor {\n    height: 100%; }\n\n.viewer .ace-editor .ace-content {\n      height: 100%; }\n"

/***/ }),

/***/ "./src/app/ui-components/viewers/code-viewer/code-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services_code_service__ = __webpack_require__("./src/app/global-services/code.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_js_beautify__ = __webpack_require__("./node_modules/js-beautify/js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_js_beautify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_js_beautify__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let CodeViewerComponent = class CodeViewerComponent {
    constructor(_cs, _fs) {
        this._cs = _cs;
        this._fs = _fs;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this._fs.flowchart$.subscribe((fc) => this._codeString = __WEBPACK_IMPORTED_MODULE_3_js_beautify__["js_beautify"](this._cs.generator.get_code_display(fc))));
    }
    ngOnDestroy() {
        this.subscriptions.map(function (s) {
            s.unsubscribe();
        });
    }
};
CodeViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-code-viewer',
        template: __webpack_require__("./src/app/ui-components/viewers/code-viewer/code-viewer.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/viewers/code-viewer/code-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__global_services_code_service__["a" /* CodeService */],
        __WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__["a" /* FlowchartService */]])
], CodeViewerComponent);



/***/ }),

/***/ "./src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\r\n\t<div class=\"container\">\r\n\t\t\r\n\t\t<div class=\"default\" *ngIf='!gs_dummy_data'>\r\n\t\t\tNo Model Available\r\n\t\t</div>\r\n\r\n\t\t<gs-viewer [data]=\"gs_dummy_data\"></gs-viewer>\r\n\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer {\n  height: 100%;\n  width: 100%; }\n\n.viewer .container {\n    height: 100%;\n    width: 100%; }\n\n.viewer .container .default {\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      color: #222;\n      background-color: rgba(255, 255, 255, 0.3);\n      z-index: 100; }\n\n.viewer .container #app-geometry-viewer {\n      height: 100%;\n      width: 100%; }\n\n.viewer .container #app-geometry-viewer canvas {\n        height: 100% !important;\n        width: 100% !important; }\n"

/***/ }),

/***/ "./src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeometryViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let GeometryViewerComponent = class GeometryViewerComponent {
    constructor(_fs) {
        this._fs = _fs;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this._fs.node$.subscribe((node) => {
            this._port = node.outputs[0];
        }));
    }
    ngOnDestroy() {
        this.subscriptions.map(function (s) {
            s.unsubscribe();
        });
    }
    reset() {
        this.gs_dummy_data = undefined;
    }
};
GeometryViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-geometry-viewer',
        template: __webpack_require__("./src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__["a" /* FlowchartService */]])
], GeometryViewerComponent);



/***/ }),

/***/ "./src/app/ui-components/viewers/module-viewer/module-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel class='viewer'>\r\n  \t<mat-expansion-panel-header>\r\n\t    <mat-panel-title class='header'>\r\n\t      <div class='header'>Modules</div>\r\n\t    </mat-panel-title>\r\n  \t</mat-expansion-panel-header>\r\n\t<div class='container'>\r\n\t\t<div *ngFor=\"let fn of functions\">\r\n\t\t\t<div class='function'>{{fn}}</div>\r\n\t\t</div>\r\n\t</div>\r\n</mat-expansion-panel>"

/***/ }),

/***/ "./src/app/ui-components/viewers/module-viewer/module-viewer.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer .function {\n  border-bottom: 1px solid gray;\n  padding: 5px;\n  margin: 0px 5px 0px 5px; }\n\n.viewer .function:hover {\n    background-color: #BDBABA;\n    cursor: move; }\n"

/***/ }),

/***/ "./src/app/ui-components/viewers/module-viewer/module-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ModuleViewerComponent = class ModuleViewerComponent {
    constructor(injector) {
        this.functions = [];
        /*this.module_service = injector.get(ModuleService);
        let modules = this.module_service.getModule("gis");
        let fn_names = Object.keys(Object.getPrototypeOf(modules)).filter(function(t){  return (t != "constructor"); });
        this.functions = this.functions.concat(fn_names); */
    }
    ;
};
ModuleViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-module-viewer',
        template: __webpack_require__("./src/app/ui-components/viewers/module-viewer/module-viewer.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/viewers/module-viewer/module-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
], ModuleViewerComponent);



/***/ }),

/***/ "./src/app/ui-components/viewers/node-library/node-library.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"disabled\">Save Library</div>\r\n<div class=\"disabled\">Load Library</div>\r\n\r\n<div class=\"node\" (click)=\"clearLibrary()\">\r\n\tClear Library\r\n</div>\r\n<br>\r\n<div class=\"node\" *ngFor=\"let n of _savedNodes; let i=index\"\r\n\t(click)=\"addNode($event, i)\">\r\n\t<div class=\"node-name\">\r\n\t{{n._name}}\r\n\t</div>\r\n\t<div class=\"node-functions\" (click)=\"deleteNode($event, n)\">\r\n\t\t[x]\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-components/viewers/node-library/node-library.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.node {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-right: 15px; }\n\n.node .node-functions {\n    color: gray; }\n\n.node:hover {\n    color: white; }\n\n.disabled {\n  color: #8AA8C0; }\n"

/***/ }),

/***/ "./src/app/ui-components/viewers/node-library/node-library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeLibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_node_library_service__ = __webpack_require__("./src/app/global-services/node-library.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let NodeLibraryComponent = class NodeLibraryComponent {
    constructor() { }
    reset() {
        this._savedNodes = __WEBPACK_IMPORTED_MODULE_1__global_services_node_library_service__["a" /* NodeLibraryService */].nodes;
    }
    addNode($event, type) {
    }
    deleteNode($event, node) {
        $event.stopPropagation();
        __WEBPACK_IMPORTED_MODULE_1__global_services_node_library_service__["a" /* NodeLibraryService */].delete_library_node(node["_id"]);
    }
    clearLibrary() {
        __WEBPACK_IMPORTED_MODULE_1__global_services_node_library_service__["a" /* NodeLibraryService */].delete_library_node();
    }
    downloadLibrary() {
        // todo	
    }
    loadLibrary() {
        // todo
    }
};
NodeLibraryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-node-library',
        template: __webpack_require__("./src/app/ui-components/viewers/node-library/node-library.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/viewers/node-library/node-library.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NodeLibraryComponent);



/***/ }),

/***/ "./src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\" [class.globals-viewer]=\"globals\">\r\n\r\n\t<div class=\"container\" id=\"param-container-cesium\" #cesium_param_container>\r\n\r\n\t\t<div class=\"default\" \r\n\t\t\t*ngIf='!globals && !active_node'>\r\n\t\t\tNo node selected \r\n\t\t</div>\r\n \r\n \t\t<!-- Description in Mobius-Viewer-Mode-->\r\n\t\t<div class=\"param-in-viewer\" *ngIf=\"globals\">\r\n\t\t\t<h3 class=\"flo_title\">{{flowchartService.flowchart.name | simplename }}</h3>\r\n\t\t\t<div [innerHTML]=\"flowchartService.getFlowchart().description\"></div>\r\n\t\t\t<h4 *ngIf=\"_editable && _inputs.length\">Parameters</h4>\r\n\t\t</div>\r\n\r\n\t\t\r\n\t\t<div class=\"p-container\" *ngIf=\"active_node\">\r\n\t\t\t\r\n\t\t\t<div class='paramater-container single-param-container'\r\n\t\t\t\t *ngFor=\"let inp of active_node.inputs\" >\r\n\r\n\t\t\t\t<ng-container *ngIf='!inp.isConnected'>\r\n\r\n\t\t\t\t\t<div class=\"param-name\">{{ inp.name }}</div>\r\n\r\n\t\t\t\t\t<div class=\"param-value\" [ngSwitch]=\"inp.type\">\r\n\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t<!-- if input type == Input -->\r\n\t\t\t\t\t\t<div *ngSwitchCase=\"InputPortTypes.Input\">\r\n\t\t\t\t\t\t\t<form  class='content'>\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<textarea \r\n\t\t\t\t\t\t\t\t\t\tname=\"inp.name_{{inp.id}}\" \r\n\t\t\t\t\t\t\t\t\t\tmatInput \r\n\t\t\t\t\t\t\t\t\t\tmatTextareaAutosize \r\n\t\t\t\t\t\t\t\t\t\tmatAutosizeMinRows=\"1\"\r\n\t\t\t\t            \t\t\tmatAutosizeMaxRows=\"5\" \r\n\t\t\t\t            \t\t\t[(ngModel)]=\"inp.value\">\r\n\t\t\t\t            \t\t</textarea>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div> \r\n\r\n\t\t\t\t\t\t<!-- if input type == Slider -->\r\n\t\t\t\t\t\t<div *ngSwitchCase=\"InputPortTypes.Slider\">\r\n\r\n\t\t\t\t\t\t\t<mat-form-field class=\"curr-value\">\r\n\t\t\t\t\t\t\t\t<textarea matInput \r\n\t\t\t\t\t\t\t\t\tname=\"inp.name_{{inp.id}}\" \r\n\t\t\t\t\t\t\t\t\tmatTextareaAutosize \r\n\t\t\t\t\t\t\t\t\tmatAutosizeMinRows=\"1\"\r\n\t\t\t            \t\t\tmatAutosizeMaxRows=\"5\" \r\n\t\t\t            \t\t\t[(ngModel)]=\"inp.value\">\r\n\t\t\t            \t\t</textarea>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"slider-container\" *ngIf=\"el.nativeElement.offsetWidth > 200\">\r\n\t\t\t\t\t\t\t\t<span class='content'>{{inp.opts.min}}</span>\r\n\t\t\t\t\t\t\t\t<mat-slider min=\"{{inp.opts.min}}\" \r\n\t\t\t\t\t\t\t\t\t\t\tmax=\"{{inp.opts.max}}\" \r\n\t\t\t\t\t\t\t\t\t\t\tstep=\"{{inp.opts.step}}\" \r\n\t\t\t\t\t\t\t\t\t\t\t[thumb-label]=\"true\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"inp.value\"></mat-slider>\r\n\t\t\t\t\t\t\t\t<span class='content'>{{inp.opts.max}}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<!-- if input type == FilePicker -->\r\n\t\t\t\t\t\t<div *ngSwitchCase=\"InputPortTypes.FilePicker\" class=\"file-picker\">\r\n\t\t\t\t\t\t\t<input type=\"file\" id=\"file\" (change)=\"handleFileInput($event, inp)\">\r\n\t\t\t\t\t\t\t<span *ngIf='inp._hasDefault && !inp._hasComputed'>(has default)</span>\r\n\t\t\t\t\t\t\t<span *ngIf='inp._hasComputed'>(file loaded)</span>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<!-- if input type == URL -->\r\n\t\t\t\t\t\t<div *ngSwitchCase=\"InputPortTypes.URL\">\r\n\t\t\t\t\t\t\t<small><input type=\"text\" value=\"{{inp.opts.url}}\" [(ngModel)]=\"inp.opts.url\"></small>\r\n\t\t\t\t\t\t\t<span *ngIf='inp._hasComputed'>(has data)</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t \r\n\t\t\t\t\t\t<!-- if input type == Checkbox -->\r\n\t\t\t\t\t\t<div *ngSwitchCase=\"InputPortTypes.Checkbox\">\r\n\t\t\t\t\t\t\t\t<mat-checkbox name=\"inp.name_{{inp.id}}\" [(ngModel)]=\"inp.value\"></mat-checkbox>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\r\n\t\t<!-- Execute Button -->\r\n\t\t<button id=\"execute\" \r\n\t\t\t*ngIf=\"!globals || _editable\"\r\n\t\t\tmat-raised-button \r\n\t\t\tcolor=\"accent\" \r\n\t\t\t(click)=\"executeFlowchart($event)\">\r\n\t\t\t<span>Execute Flowchart</span>\r\n\t\t</button> \t\r\n\t\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.globals-viewer {\n  background-color: red; }\n\n#param-container-cesium {\n  overflow: hidden !important; }\n\n#param-container-cesium .p-container {\n    height: 100%;\n    overflow-y: auto !important; }\n\n#param-container-cesium .p-container .paramater-container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal !important;\n      -webkit-box-direction: normal !important;\n          -ms-flex-flow: row nowrap !important;\n              flex-flow: row nowrap !important;\n      -webkit-box-flex: 0;\n          -ms-flex-positive: 0;\n              flex-grow: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      height: auto; }\n\n#param-container-cesium .p-container .paramater-container .param-name {\n        width: 10%;\n        -webkit-box-flex: 0;\n            -ms-flex-positive: 0;\n                flex-grow: 0;\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n        height: auto !important; }\n\n#param-container-cesium .p-container .paramater-container .param-value {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal !important;\n        -webkit-box-direction: normal !important;\n            -ms-flex-flow: row nowrap !important;\n                flex-flow: row nowrap !important;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between; }\n\n#param-container-cesium .p-container .paramater-container .param-value textarea {\n          padding: 0px 2px;\n          padding-top: 4px;\n          text-align: justify;\n          line-height: 15px;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box; }\n\n#param-container-cesium .p-container .paramater-container .param-value small {\n          background-color: white;\n          border: 1px solid #395D73; }\n\n#param-container-cesium .p-container .paramater-container .param-value input {\n          background-color: white;\n          border-style: none; }\n\ndiv.mat-input-wrapper.mat-form-field-wrapper {\n  padding: 0; }\n\n.flo_title {\n  text-transform: uppercase; }\n\n.param-in-viewer {\n  font-size: 14px;\n  line-height: 16px;\n  text-align: left;\n  padding: 45px 10px 10px 10px; }\n\n.box-text-values, #param-container-cesium .single-param-container .param-value .slider-container .content {\n  font-size: 12px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  color: #395D73; }\n\n.viewer {\n  font-family: sans-serif;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: no-wrap;\n      flex-wrap: no-wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: white;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  padding-bottom: 30px; }\n\n.viewer.globals-viewer {\n    padding: 0px;\n    background-color: rgba(20, 20, 20, 0.5);\n    border-left: 1px solid gray;\n    color: #ddd; }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    overflow: auto;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    height: auto;\n    padding-bottom: 36px; }\n\n.viewer .container .paramater-container {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      height: auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: space-equally;\n          -ms-flex-pack: space-equally;\n              justify-content: space-equally;\n      font-size: 15px;\n      line-height: 18px;\n      width: 100%;\n      padding: 2px 0px;\n      /*.connection{\r\n\t\t\t\t\t//border-bottom: 1px solid $color2;\r\n\t\t\t\t\tpadding: 0 0 $default-side-padding 0;\r\n\t\t\t\t\tmargin: 0;\r\n\t\t\t}*/\n      /*border-top: 1px dashed $color1;\r\n\t\t\tborder-bottom: 1px dashed $color1;*/ }\n\n.viewer .container .paramater-container .info {\n        background-color: white;\n        padding: 0 15px;\n        color: #395D73;\n        width: 20%;\n        max-width: 100px; }\n\n.viewer .container .paramater-container .info .param {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          height: 100%;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -webkit-box-pack: end;\n              -ms-flex-pack: end;\n                  justify-content: flex-end; }\n\n.viewer .container .paramater-container .info .param .content {\n            font-size: 12px; }\n\n.viewer .container .paramater-container .value {\n        font-family: 'Ubuntu Mono', monospace;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n        width: 80%;\n        -webkit-box-flex: 0;\n            -ms-flex-positive: 0;\n                flex-grow: 0;\n        -ms-flex-negative: 0;\n            flex-shrink: 0; }\n\n.viewer .container .paramater-container .value .curr-value {\n          width: 100px; }\n\n.viewer .container .paramater-container .value .slider-container {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: reverse;\n              -ms-flex-flow: row-reverse no-wrap;\n                  flex-flow: row-reverse no-wrap;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          padding: 0 15px;\n          width: 100%; }\n\n.viewer .container .paramater-container .value .slider-container .content {\n            font-size: 12px;\n            color: #395D73; }\n\n#execute {\n  width: 100%;\n  background-color: #82BF6E;\n  color: white;\n  height: 36px;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n\n#execute:hover {\n    background-color: #F0BFA0;\n    color: #F07A79; }\n\n#param-container-cesium {\n  overflow-x: hidden;\n  padding: 3px;\n  margin-top: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  height: 100%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n#param-container-cesium .mat-input-element {\n    vertical-align: middle !important;\n    font-family: 'Roboto', sans-serif; }\n\n#param-container-cesium .mat-input-element textarea {\n      padding-left: 5px; }\n\n#param-container-cesium .mat-input-element .mat-input-wrapper {\n      border-bottom: none !important; }\n\n#param-container-cesium textarea {\n    height: 24px;\n    font-size: 12px;\n    line-height: 24px;\n    border: 1px solid #395D73;\n    text-align: center; }\n\n#param-container-cesium .single-param-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    margin: 0px 0px 5px 0px;\n    padding: 0px;\n    font-family: 'Roboto', sans-serif; }\n\n#param-container-cesium .single-param-container .param-name {\n      width: 90px;\n      min-height: 24px;\n      line-height: 24px;\n      vertical-align: middle;\n      word-wrap: break-word;\n      padding-left: 5px;\n      font-size: 12px; }\n\n#param-container-cesium .single-param-container .param-value {\n      min-width: 40px;\n      padding: 0px;\n      margin: 0px 0px 0px 10px;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n\n#param-container-cesium .single-param-container .param-value .content {\n        width: 100%;\n        height: 100%;\n        vertical-align: middle; }\n\n#param-container-cesium .single-param-container .param-value .content .mat-input-container {\n          width: 100%; }\n\n#param-container-cesium .single-param-container .param-value .content .mat-input-container .mat-input-wrapper {\n            border-bottom: 0px; }\n\n#param-container-cesium .single-param-container .param-value .curr-value {\n        width: 40px;\n        height: 24px; }\n\n#param-container-cesium .single-param-container .param-value .slider-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n        margin-left: 5px; }\n\n#param-container-cesium .single-param-container .param-value .slider-container .content {\n          width: 40px; }\n\n#param-container-cesium .single-param-container .param-value .slider-container .mat-slider-horizontal {\n          padding: 0px;\n          height: 24px;\n          min-width: 50px;\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1; }\n\n#param-container-cesium .single-param-container .param-value .slider-container .mat-slider-horizontal .mat-slider-wrapper {\n            top: 12px !important; }\n"

/***/ }),

/***/ "./src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__ = __webpack_require__("./src/app/base-classes/port/PortModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_services_mobius_service__ = __webpack_require__("./src/app/global-services/mobius.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_services_execute_service__ = __webpack_require__("./src/app/global-services/execute.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let ParameterViewerComponent = class ParameterViewerComponent {
    constructor(_fs, _ms, _ex, http) {
        this._fs = _fs;
        this._ms = _ms;
        this._ex = _ex;
        this.http = http;
        this.subscriptions = [];
        this.InputPortTypes = __WEBPACK_IMPORTED_MODULE_2__base_classes_port_PortModule__["b" /* InputPortTypes */];
        //
        this.processing = { value: false };
    }
    ngOnInit() {
        this.subscriptions.push(this._fs.node$.subscribe((node) => {
            this.active_node = node;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.map(function (s) {
            s.unsubscribe();
        });
    }
    // todo: refactor and remove
    updateURL($event, input) {
        let value;
        if ($event.srcElement) {
            value = $event.srcElement.value;
            value = value.trim();
            if (value.length != 0) {
                input.setOpts({ url: value });
            }
        }
    }
    handleFileInput($event, input) {
        let fileList = $event.target.files;
        let file = fileList[0];
        let size = Math.round(file.size / Math.pow(10, 6));
        let run_file = true;
        if (size > 300) {
            run_file = confirm(`The file you are trying to load is ${size}MB and might cause unexpected crashes. Do you want to continue?`);
        }
        if (run_file) {
            var reader = new FileReader();
            let fs = this._fs;
            let ms = this._ms;
            ms.processing = true;
            reader.onload = (function (reader) {
                return function () {
                    let contents = reader.result;
                    try {
                        contents = JSON.parse(contents); //Function('use strict; return ' + value);
                    }
                    catch (ex) {
                        console.error("Not JSON");
                        // do nothing
                    }
                    //fs.freeze = false;
                    input.setComputedValue(contents);
                    ms.processing = false;
                };
            })(reader);
            //fs.freeze = true;
            reader.readAsText(file);
        }
        else {
            // reset
            //$event.target.files = [];
            $event.target.value = '';
        }
    }
    executeFlowchart($event) {
        $event.stopPropagation();
        this._ms.processing = true;
        let ex = this._ex;
        setTimeout(function () {
            ex.execute();
        }, 400);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], ParameterViewerComponent.prototype, "globals", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('cesium_param_container'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ParameterViewerComponent.prototype, "el", void 0);
ParameterViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-parameter-viewer',
        template: __webpack_require__("./src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/viewers/parameter-viewer/parameter-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__global_services_flowchart_service__["a" /* FlowchartService */],
        __WEBPACK_IMPORTED_MODULE_3__global_services_mobius_service__["a" /* MobiusService */],
        __WEBPACK_IMPORTED_MODULE_5__global_services_execute_service__["a" /* ExecuteService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], ParameterViewerComponent);



/***/ }),

/***/ "./src/app/ui-components/viewers/text-viewer/text-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"default\" *ngIf=\"!active_node\">\r\n\tNo Node Selected\r\n</div>\r\n\r\n<div class=\"container\" *ngIf=\"active_node\">\r\n\t<!-- <h3>Selected Node: {{_selectedNode.getName()}}</h3>\r\n\t<hr> -->\r\n\t<mat-accordion multi=\"true\" [displayMode]=\"flat\">\r\n\t\t\t<!-- inputs -->\r\n\t\t\t<mat-expansion-panel [expanded]=\"true\" *ngFor=\"let output of active_node?.outputs\">\r\n\t\t\t\t\r\n\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t  {{ output.name }}\r\n\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t  <!-- This is a summary of the content -->\r\n\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t{{output.value}}\r\n\r\n\t\t\t\t<!-- <p *ngIf=\"!output.value.isJSON\" [innerHTML]=\"output.text\"></p>\r\n\r\n\t\t\t\t<p *ngIf=\"output.isJSON\" [innerHTML]=\"output.text\"></p> -->\r\n\t\t\t\t\r\n\t\t\t\t<!-- <ngx-json-viewer *ngIf=\"output.isJSON\" [json]=\"output.value\" [expanded]=\"false\"></ngx-json-viewer> -->\r\n\r\n\t\t\t</mat-expansion-panel>\r\n\t\t\t\r\n\t</mat-accordion>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/viewers/text-viewer/text-viewer.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.container {\n  height: 100%;\n  width: 100%;\n  padding: 15px;\n  color: #395D73;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: auto;\n  font-family: 'Ubuntu Mono', monospace; }\n\n.container .nameLabel {\n    width: 100%; }\n\n.container .outputPort {\n    width: 100%; }\n\n.container .content {\n    margin-right: 15px;\n    width: 100%;\n    color: #F07A79;\n    font-size: 12px; }\n\n.container mat-expansion-panel-header {\n    background-color: #F1F1F1 !important;\n    border-top: 1px solid #8AA8C0 !important;\n    border-bottom: 1px solid #8AA8C0 !important;\n    padding-left: 15px !important; }\n\n.container mat-expansion-panel-header mat-panel-title {\n      color: #395D73 !important;\n      font-weight: bold !important;\n      font-size: 12px !important; }\n\n.container mat-expansion-panel-header:hover {\n      background-color: #F1F1F1 !important; }\n\nspan {\n  font-size: 15px;\n  display: block;\n  border-bottom: 1px solid #8AA8C0; }\n"

/***/ }),

/***/ "./src/app/ui-components/viewers/text-viewer/text-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TextViewerComponent = class TextViewerComponent {
    constructor(_fs) {
        this._fs = _fs;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this._fs.node$.subscribe((node) => { this.active_node = node; this.render_node(node); }));
    }
    ngOnDestroy() {
        this.subscriptions.map(function (s) {
            s.unsubscribe();
        });
    }
    render_node(node) {
        try {
            let self = this;
            this._outResults = node.outputs.map(function (output) {
                let name = output.name;
                let isJSON = self.isJSON(output);
                let text = self.getText(output);
                let value = output.value;
                let outObj = { name: name, isJSON: isJSON, text: text, value: value };
                return outObj;
            });
        }
        catch (ex) {
        }
    }
    getText(output) {
        try {
            let val = output.value;
            if (val) {
                let result = val;
                if (Array.isArray(val)) {
                    result = "<em>Array(" + val.length + " items)</em>";
                }
                else if (typeof (val) == "object") {
                    let strRep = val.toString();
                    if (strRep !== "[object Object]") {
                        result = strRep.replace(/\n/g, '<br>');
                    }
                    else {
                        let keys = Object.keys(val);
                        result = "<b>JSON Object</b><br>";
                        result += output.name;
                        result += "<ul>" + keys.map(function (k) {
                            let type = typeof (val[k]);
                            if (Array.isArray(val[k])) {
                                type = "<em>array(" + val[k].length + " items)</em>";
                            }
                            else if (type == "string") {
                                type = "\"" + val[k] + "\"";
                            }
                            else if (type == "number") {
                                type = val[k];
                            }
                            else if (type == "object") {
                                type = "<em>" + type + "</em>";
                            }
                            return "<li>" + k + " :: " + type + "</li>";
                        }).join("") + "</ul>";
                    }
                }
                return result;
            }
            else {
                return "no-value-available";
            }
        }
        catch (ex) {
            return "error-generating-input";
        }
    }
    isJSON(output) {
        let val = output.value;
        return (typeof (val) == "object" && val.toString() == "[object Object]");
    }
};
TextViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-text-viewer',
        template: __webpack_require__("./src/app/ui-components/viewers/text-viewer/text-viewer.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/viewers/text-viewer/text-viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_services_flowchart_service__["a" /* FlowchartService */]])
], TextViewerComponent);



/***/ }),

/***/ "./src/app/ui-components/viewers/viewer-container/viewer-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer-container\">  \r\n\t\r\n\t<mat-button-toggle-group class=\"viewer-toggle\" \r\n\t\t*ngIf='!viewer_mode'\r\n\t\t[(ngModel)]=\"active_viewer\"\r\n\t\t(change)=\"update_viewer()\">\r\n\t\t<div class= \"btn-grp1\">\r\n\t\t\t<!-- <mat-button-toggle value=\"three-viewer\" class=\"viewer-toggle-btn\" matTooltip=\"3D Viewer\">\r\n\t\t\t  <mat-icon>3d_rotation</mat-icon>\r\n\t\t\t</mat-button-toggle> -->\r\n\t\t\t<mat-button-toggle value=\"cesium-viewer\" class=\"viewer-toggle-btn\" matTooltip=\"Cesium Viewer\">\r\n\t\t\t  <mat-icon>public</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t\t<mat-button-toggle value=\"text-viewer\" class=\"viewer-toggle-btn\" matTooltip=\"Text Viewer\">\r\n\t\t\t  <mat-icon>description</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t\t<!-- <mat-button-toggle value=\"3\" disabled class=\"viewer-toggle-btn\" matTooltip=\"??\">\r\n\t\t\t  <mat-icon>text_format</mat-icon>\r\n\t\t\t</mat-button-toggle> -->\r\n\t\t\t<mat-button-toggle value=\"console-viewer\" class=\"viewer-toggle-btn\" matTooltip=\"Console\">\r\n\t\t\t  <mat-icon>info_outline</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t\t<mat-button-toggle value=\"help-viewer\" class=\"viewer-toggle-btn\" matTooltip=\"Function Help\" >\r\n\t\t\t  <mat-icon>help_outline</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t\t<mat-button-toggle value=\"info-viewer\" class=\"viewer-toggle-btn\" matTooltip=\"About Mobius\" >\r\n\t\t\t  <mat-icon>info</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t</div>\r\n\r\n\t\t<div class = \"btn-grp2\">\r\n\t\t\t<mat-button-toggle value=\"code-viewer\" id=\"codeViewer\" class=\"viewer-toggle-btn\" matTooltip=\"Code Viewer\">\r\n\t\t\t  <mat-icon>code</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t</div>\r\n\t\t\r\n\t</mat-button-toggle-group>\r\n\r\n\t<ng-container #vc></ng-container>\r\n</div>"

/***/ }),

/***/ "./src/app/ui-components/viewers/viewer-container/viewer-container.component.scss":
/***/ (function(module, exports) {

module.exports = ".reset {\n  margin: 0px;\n  padding: 0px; }\n\n.default {\n  font-size: 12px;\n  color: #8AA8C0;\n  line-height: 150px;\n  text-align: center; }\n\n.viewer {\n  /* \twidth: 100%; \r\noverflow: auto;\r\n\r\npadding: 0px;\r\nmargin: 0px;\r\n\r\n.header{\r\n\r\n\tdisplay: flex; \r\n\tflex-direction: row; \r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n\tfont-size: 14px; \r\n\tfont-weight: 600; \r\n\tline-height: $header-height;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1.5px;\r\n\theight: $header-height;\r\n\r\n\tcolor: #ADADAD;\r\n\r\n\t.btn-group{\r\n\t\theight: $header-height; \r\n\r\n\t\tbutton{\r\n\t\t\twidth: 0.9*$header-height; \r\n\t\t\theight: 0.9*$header-height; \r\n\t\t\tmargin: 0px;\r\n\t\t\tborder: 1px solid #B4B1B1;\r\n\t\t\tbox-shadow: none;\r\n\r\n\t\t\t&:focus{\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n}\r\n\r\n.container{\r\n}\r\n\r\nbutton{\r\n\t&:focus{\r\n\t\t\r\n\t}\r\n} */ }\n\n.viewer .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n\n.viewer .container .sidebar {\n      z-index: 100; }\n\n.viewer .container .view-container {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      height: 100%;\n      width: 100%;\n      padding-bottom: 30px;\n      overflow: auto; }\n\n.viewer-toggle {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  width: 100%;\n  background-color: #395D73; }\n\n.viewer-toggle span {\n    font-style: italic;\n    font-weight: bold; }\n\n.viewer-toggle mat-icon {\n    color: #8AA8C0;\n    height: 30px !important;\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important;\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important;\n    font-size: 15px; }\n\n.viewer-toggle:hover .btn-grp1 {\n    -ms-flex-flow: wrap;\n        flex-flow: wrap; }\n\n.viewer-toggle .mat-button-toggle {\n    height: 30px !important; }\n\n.viewer-toggle .mat-button-toggle-disabled {\n    background-color: #395D73; }\n\n.viewer-toggle .mat-button-toggle-disabled mat-icon {\n      color: #F07A79 !important; }\n\n.viewer-toggle .btn-grp1 {\n    max-width: 100% !important;\n    -webkit-box-flex: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important;\n    -ms-flex-negative: 1 !important;\n        flex-shrink: 1 !important;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap; }\n\n.viewer-toggle .btn-grp2 {\n    width: 56px !important;\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-flow: row-reverse nowrap !important;\n            flex-flow: row-reverse nowrap !important;\n    -webkit-box-flex: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important;\n    -ms-flex-negative: 0 !important;\n        flex-shrink: 0 !important; }\n\n.viewer-toggle .mat-button-toggle-checked {\n    background-color: #F1F1F1 !important; }\n\n.viewer-toggle-btn:hover mat-icon {\n  color: #F0BFA0; }\n\n.viewer-container {\n  position: relative;\n  height: 100%;\n  min-width: 56px !important;\n  margin: 0px !important;\n  overflow: hidden !important;\n  padding-bottom: 67.5px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n"

/***/ }),

/***/ "./src/app/ui-components/viewers/viewer-container/viewer-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geometry_viewer_geometry_viewer_component__ = __webpack_require__("./src/app/ui-components/viewers/geometry-viewer/geometry-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cesium_viewer_cesium_viewer_component__ = __webpack_require__("./src/app/ui-components/viewers/cesium-viewer/cesium-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_viewer_text_viewer_component__ = __webpack_require__("./src/app/ui-components/viewers/text-viewer/text-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__code_viewer_code_viewer_component__ = __webpack_require__("./src/app/ui-components/viewers/code-viewer/code-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__console_console_component__ = __webpack_require__("./src/app/ui-components/console/console.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__help_help_viewer_help_viewer_component__ = __webpack_require__("./src/app/ui-components/help/help-viewer/help-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__help_info_viewer_info_viewer_component__ = __webpack_require__("./src/app/ui-components/help/info-viewer/info-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global_services_flowchart_service__ = __webpack_require__("./src/app/global-services/flowchart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let ViewerContainerComponent = ViewerContainerComponent_1 = class ViewerContainerComponent {
    constructor(_fs, injector, r) {
        this._fs = _fs;
        this.injector = injector;
        this.r = r;
        this.viewer_mode = false;
        this.subscriptions = [];
        this.views = [];
        this.active_viewer = "info-viewer";
    }
    ngOnInit() {
        this.subscriptions.push(this._fs.node$.subscribe((node) => this.set_view(node)));
    }
    ngOnDestroy() {
        this.subscriptions.map(function (s) {
            s.unsubscribe();
        });
    }
    set_view(node) {
        let portType;
        if (node) {
            this.active_node = node;
            portType = parseInt((this.active_node.outputs[0].type).toString());
        }
        else {
            this.active_node = undefined;
            portType = 3;
        }
        let viewer_name;
        switch (portType) {
            // case 0: 
            // 	this.active_viewer = "three-viewer"
            // 	break;
            case 1:
                viewer_name = "code-viewer";
                break;
            case 2:
                viewer_name = "text-viewer";
                break;
            case 3:
                viewer_name = "console-viewer";
                break;
            case 4:
                viewer_name = "cesium-viewer";
                break;
            default:
                viewer_name = "console-viewer";
                break;
        }
        // if same as before, don't update
        if (this.active_viewer == viewer_name) {
            return;
        }
        else {
            this.active_viewer = viewer_name;
            this.update_viewer();
        }
    }
    update_viewer() {
        // update the view
        if (!this.views[this.active_viewer]) {
            this.views[this.active_viewer] = this.createView(this.active_viewer);
        }
        this.vc.detach();
        this.vc.insert(this.views[this.active_viewer]);
    }
    showConsole() {
        this.active_viewer = "console-viewer";
    }
    showHelp() {
        this.active_viewer = "help-viewer";
    }
    createView(component_name) {
        let component = ViewerContainerComponent_1.ComponentMap[component_name];
        let factory = this.r.resolveComponentFactory(component);
        let componentRef = factory.create(this.injector);
        if (component_name == "cesium-viewer") {
            componentRef.instance["mode"] = this.viewer_mode ? "viewer" : "editor";
        }
        let view = componentRef.hostView;
        return view;
    }
};
ViewerContainerComponent.ComponentMap = {
    "three-viewer": __WEBPACK_IMPORTED_MODULE_1__geometry_viewer_geometry_viewer_component__["a" /* GeometryViewerComponent */],
    "cesium-viewer": __WEBPACK_IMPORTED_MODULE_2__cesium_viewer_cesium_viewer_component__["a" /* CesiumViewerComponent */],
    "text-viewer": __WEBPACK_IMPORTED_MODULE_3__text_viewer_text_viewer_component__["a" /* TextViewerComponent */],
    "code-viewer": __WEBPACK_IMPORTED_MODULE_4__code_viewer_code_viewer_component__["a" /* CodeViewerComponent */],
    "console-viewer": __WEBPACK_IMPORTED_MODULE_5__console_console_component__["a" /* ConsoleComponent */],
    "help-viewer": __WEBPACK_IMPORTED_MODULE_6__help_help_viewer_help_viewer_component__["a" /* HelpViewerComponent */],
    "info-viewer": __WEBPACK_IMPORTED_MODULE_7__help_info_viewer_info_viewer_component__["a" /* InfoViewerComponent */]
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('vc', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */])
], ViewerContainerComponent.prototype, "vc", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], ViewerContainerComponent.prototype, "viewer_mode", void 0);
ViewerContainerComponent = ViewerContainerComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-viewer-container',
        template: __webpack_require__("./src/app/ui-components/viewers/viewer-container/viewer-container.component.html"),
        styles: [__webpack_require__("./src/app/ui-components/viewers/viewer-container/viewer-container.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__global_services_flowchart_service__["a" /* FlowchartService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
], ViewerContainerComponent);

var ViewerContainerComponent_1;


/***/ }),

/***/ "./src/assets/modules/AllModules.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllModules; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__ = __webpack_require__("./src/app/base-classes/code/CodeModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobius_math__ = __webpack_require__("./node_modules/mobius-math/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobius_math_docs_json_mobius_math_json__ = __webpack_require__("./node_modules/mobius-math/docs_json/mobius-math.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobius_math_docs_json_mobius_math_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobius_math_docs_json_mobius_math_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobius_array__ = __webpack_require__("./node_modules/mobius-array/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobius_array_docs_json_mobius_array_json__ = __webpack_require__("./node_modules/mobius-array/docs_json/mobius-array.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobius_array_docs_json_mobius_array_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mobius_array_docs_json_mobius_array_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mobius_turf__ = __webpack_require__("./node_modules/mobius-turf/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobius_turf_docs_json_mobius_turf_json__ = __webpack_require__("./node_modules/mobius-turf/docs_json/mobius-turf.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mobius_turf_docs_json_mobius_turf_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mobius_turf_docs_json_mobius_turf_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mobius_string__ = __webpack_require__("./node_modules/mobius-string/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobius_string_docs_json_mobius_string_json__ = __webpack_require__("./node_modules/mobius-string/docs_json/mobius-string.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mobius_string_docs_json_mobius_string_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_mobius_string_docs_json_mobius_string_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mobius_geojson__ = __webpack_require__("./node_modules/mobius-geojson/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobius_geojson_docs_json_mobius_geojson_json__ = __webpack_require__("./node_modules/mobius-geojson/docs_json/mobius-geojson.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobius_geojson_docs_json_mobius_geojson_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_mobius_geojson_docs_json_mobius_geojson_json__);

let AllModules = [];
var MODULE_KEY;
(function (MODULE_KEY) {
    MODULE_KEY["MATH"] = "math";
    MODULE_KEY["ARRAY"] = "arr";
    MODULE_KEY["TURF"] = "geo";
    MODULE_KEY["STRING"] = "str";
    MODULE_KEY["GEOJSON"] = "geo";
    MODULE_KEY["CSV"] = "io";
})(MODULE_KEY || (MODULE_KEY = {}));
const SPACER = "_";
// mobius-math module


Object.keys(__WEBPACK_IMPORTED_MODULE_1_mobius_math__).map(function (submodule) {
    let module = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule(MODULE_KEY.MATH + SPACER + submodule, __WEBPACK_IMPORTED_MODULE_1_mobius_math__[submodule], "attrib", __WEBPACK_IMPORTED_MODULE_2_mobius_math_docs_json_mobius_math_json___default.a);
    AllModules.push(module);
});
// mobius-array module


Object.keys(__WEBPACK_IMPORTED_MODULE_3_mobius_array__).map(function (submodule) {
    let module = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule(MODULE_KEY.ARRAY + SPACER + submodule, __WEBPACK_IMPORTED_MODULE_3_mobius_array__[submodule], "attrib", __WEBPACK_IMPORTED_MODULE_4_mobius_array_docs_json_mobius_array_json___default.a);
    AllModules.push(module);
});
// mobius-turf module


Object.keys(__WEBPACK_IMPORTED_MODULE_5_mobius_turf__).map(function (submodule) {
    let module = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule(MODULE_KEY.TURF + SPACER + submodule, __WEBPACK_IMPORTED_MODULE_5_mobius_turf__[submodule], "attrib", __WEBPACK_IMPORTED_MODULE_6_mobius_turf_docs_json_mobius_turf_json___default.a);
    AllModules.push(module);
});
// mobius-string module


Object.keys(__WEBPACK_IMPORTED_MODULE_7_mobius_string__).map(function (submodule) {
    let module = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule(MODULE_KEY.STRING + SPACER + submodule, __WEBPACK_IMPORTED_MODULE_7_mobius_string__[submodule], "attrib", __WEBPACK_IMPORTED_MODULE_8_mobius_string_docs_json_mobius_string_json___default.a);
    AllModules.push(module);
});
// mobius-geojson module


Object.keys(__WEBPACK_IMPORTED_MODULE_9_mobius_geojson__).map(function (submodule) {
    let module = __WEBPACK_IMPORTED_MODULE_0__app_base_classes_code_CodeModule__["b" /* ModuleUtils */].createModule(MODULE_KEY.GEOJSON + SPACER + submodule, __WEBPACK_IMPORTED_MODULE_9_mobius_geojson__[submodule], "attrib", __WEBPACK_IMPORTED_MODULE_10_mobius_geojson_docs_json_mobius_geojson_json___default.a);
    AllModules.push(module);
});
// mobius-csv module
// import * as MCsv from "mobius-csv";
// import csv_docs from "mobius-csv/docs_json/mobius-csv.json"; 
// Object.keys(MCsv).map(function(submodule){
// 	let module: IModule = ModuleUtils.createModule( MODULE_KEY.CSV + SPACER + submodule, MCsv[submodule], "attrib", csv_docs);
// 	AllModules.push(module);
// });



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");



if (true /*environment.production*/) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
// needs ./assets/cesium for deployment on server
window['CESIUM_BASE_URL'] = './assets/cesium';
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map