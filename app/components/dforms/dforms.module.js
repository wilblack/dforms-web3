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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var dform_list_1 = require('./dform-list');
var dform_edit_1 = require('./dform-edit');
var dform_1 = require('./dform');
var dapp_list_1 = require('./dapp-list');
var dapp_1 = require('./dapp');
var dfield_1 = require('./dfield');
var dfield_form_1 = require('./dfield-form/dfield-form');
var form_store_1 = require('../../form-store');
var dforms_routing_1 = require('./dforms.routing');
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var grid_list_1 = require('@angular2-material/grid-list/grid-list');
var input_1 = require('@angular2-material/input/input');
var DformsModule = (function () {
    function DformsModule() {
    }
    DformsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                dforms_routing_1.dformsRouting,
                card_1.MdCardModule,
                button_1.MdButtonModule,
                grid_list_1.MdGridListModule,
                input_1.MdInputModule
            ],
            declarations: [
                dform_list_1.DformList,
                dapp_list_1.DappList,
                dform_1.Dform,
                dapp_1.Dapp,
                dfield_1.Dfield,
                dform_edit_1.DformEdit,
                dfield_form_1.DfieldForm
            ],
            providers: [
                form_store_1.FormStore
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DformsModule);
    return DformsModule;
}());
exports.DformsModule = DformsModule;
//# sourceMappingURL=dforms.module.js.map