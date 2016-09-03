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
var dform_form_1 = require('./dform-form/dform-form');
var dapp_1 = require('./dapp');
var actions_1 = require('../../actions');
var DformList = (function () {
    function DformList(store) {
        this.store = store;
        this.formID = 0;
        this.showDformForm = false;
        this.newForm = {
            'id': null,
            'name': '',
            'description': '',
            'fields': []
        };
    }
    DformList.prototype.addForm = function (form) {
        if (form.id === undefined)
            form.id = 1;
        this.store.dispatch(actions_1.addForm(form.id, form));
        this.showDformForm = false;
    };
    DformList = __decorate([
        core_1.Component({
            selector: 'form-list',
            templateUrl: 'app/components/dforms/dform-list.html',
            styleUrls: ['app/app.css', 'app/components/dforms/dforms.css'],
            directives: [dform_1.Dform, dform_form_1.DformForm, dapp_1.Dapp]
        }), 
        __metadata('design:paramtypes', [form_store_1.FormStore])
    ], DformList);
    return DformList;
}());
exports.DformList = DformList;
//# sourceMappingURL=dform-list.js.map