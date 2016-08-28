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
var form_store_1 = require('../../form-store');
var dform_1 = require('./dform');
var actions_1 = require('../../actions');
var DformList = (function () {
    function DformList(store) {
        this.store = store;
        this.formID = 0;
    }
    DformList.prototype.addForm = function (form) {
        this.store.dispatch(actions_1.addForm(form, this.formID++));
    };
    DformList = __decorate([
        core_1.Component({
            selector: 'form-list',
            templateUrl: 'app/components/dforms/dform-list.html',
            styleUrls: ['app/components/dforms/dforms.css'],
            directives: [dform_1.Dform]
        }), 
        __metadata('design:paramtypes', [form_store_1.FormStore])
    ], DformList);
    return DformList;
}());
exports.DformList = DformList;
//# sourceMappingURL=dform-list.js.map