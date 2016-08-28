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
var router_1 = require('@angular/router');
var form_store_1 = require('../../form-store');
var FormEdit = (function () {
    function FormEdit(store, route) {
        this.store = store;
        this.route = route;
        console.log("[FormEdit.constructor()]");
    }
    FormEdit.prototype.ngOnInit = function () {
        console.log("[FormEdit.ngOnInit()]");
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            console.log("[ngOnInit()] Got id ", id);
        });
    };
    FormEdit = __decorate([
        core_1.Component({
            selector: 'dform-edit',
            templateUrl: 'app/components/dform-edit/dform-edit.html',
            styleUrls: ['app/components/dform-edit/dform-edit.css']
        }), 
        __metadata('design:paramtypes', [form_store_1.FormStore, router_1.ActivatedRoute])
    ], FormEdit);
    return FormEdit;
}());
exports.FormEdit = FormEdit;
//# sourceMappingURL=dform-edit.js.map