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
var dapp_1 = require('./dapp');
var DappList = (function () {
    function DappList(store) {
        this.store = store;
        this.showDappForm = false;
        this.newDapp = {
            'slug': '',
            'name': '',
            'description': '',
            'version': '1',
            'supportEmail': ''
        };
    }
    DappList.prototype.addDapp = function (form) {
        // This runs when the user is done filliing out the form and it passed validation.
        //this.store.dispatch(addDapp(dapp.slug, dapp));
        this.showDappForm = false;
    };
    DappList = __decorate([
        core_1.Component({
            selector: 'dapp-list',
            templateUrl: 'app/components/dforms/dapp-list.html',
            styleUrls: ['app/app.css', 'app/components/dforms/dforms.css'],
            directives: [dapp_1.Dapp]
        }), 
        __metadata('design:paramtypes', [form_store_1.FormStore])
    ], DappList);
    return DappList;
}());
exports.DappList = DappList;
//# sourceMappingURL=dapp-list.js.map