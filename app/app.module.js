"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
//import { FormsModule }    from '@angular/forms';
// import { FormList } from './components/dform-list/dform-list';
var home_1 = require('./components/home/home');
var form_store_1 = require('./form-store');
var http_1 = require('@angular/http');
var dforms_module_1 = require('./components/dforms/dforms.module');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var button_1 = require('@angular2-material/button/button');
var card_1 = require('@angular2-material/card/card');
var toolbar_1 = require('@angular2-material/toolbar/toolbar');
var sidenav_1 = require('@angular2-material/sidenav/sidenav');
var icon_1 = require('@angular2-material/icon/icon');
var list_1 = require('@angular2-material/list/list');
var grid_list_1 = require('@angular2-material/grid-list/grid-list');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                //FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
                dforms_module_1.DformsModule,
                toolbar_1.MdToolbarModule,
                button_1.MdButtonModule,
                card_1.MdCardModule,
                sidenav_1.MdSidenavModule,
                icon_1.MdIconModule,
                list_1.MdListModule,
                grid_list_1.MdGridListModule
            ],
            declarations: [
                app_component_1.AppComponent,
                //FormList,
                home_1.Home
            ],
            providers: [
                app_routing_1.appRoutingProviders,
                form_store_1.FormStore
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map