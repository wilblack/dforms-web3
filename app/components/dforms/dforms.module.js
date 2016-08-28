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
//import { FormsModule }    from '@angular/forms';
var dform_list_1 = require('./dform-list');
var dform_1 = require('./dform');
var dform_edit_1 = require('./dform-edit');
var form_store_1 = require('../../form-store');
var dforms_routing_1 = require('./dforms.routing');
var DformsModule = (function () {
    function DformsModule() {
    }
    DformsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                //FormsModule,
                dforms_routing_1.dformsRouting
            ],
            declarations: [
                dform_list_1.DformList,
                dform_1.Dform,
                dform_edit_1.DformEdit
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