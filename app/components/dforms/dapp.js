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
var Dapp = (function () {
    function Dapp(store, route) {
        this.store = store;
        this.route = route;
    }
    Dapp.prototype.ngOnInit = function () {
        console.log("[Dapp.ngOnInit()]");
    };
    Dapp.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', form_store_1.DappModel)
    ], Dapp.prototype, "app", void 0);
    Dapp = __decorate([
        core_1.Component({
            selector: 'dapp',
            templateUrl: 'app/components/dforms/dapp.html',
            styleUrls: ['app/components/dforms/dforms.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [form_store_1.FormStore, router_1.ActivatedRoute])
    ], Dapp);
    return Dapp;
}());
exports.Dapp = Dapp;
//# sourceMappingURL=dapp.js.map