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
var actions_1 = require('../../actions');
var Dfield = (function () {
    function Dfield(store, route) {
        this.store = store;
        this.route = route;
    }
    Dfield.prototype.ngOnInit = function () {
        console.log("[Dfield.ngOnInit()]");
    };
    Dfield.prototype.dfieldFormClose = function (dfield) {
        var index = this.dform.fields.findIndex(function (field) {
            return field.slug == dfield.slug;
        });
        this.dform.fields[index];
        this.store.dispatch(actions_1.updateForm(this.dform));
        this.editSlug = null;
    };
    Dfield.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Dfield.prototype, "dfield", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', form_store_1.Dform)
    ], Dfield.prototype, "dform", void 0);
    Dfield = __decorate([
        core_1.Component({
            selector: 'dfield',
            templateUrl: 'app/components/dforms/dfield.html',
            styleUrls: ['app/app.css', 'app/components/dforms/dforms.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [form_store_1.FormStore, router_1.ActivatedRoute])
    ], Dfield);
    return Dfield;
}());
exports.Dfield = Dfield;
//# sourceMappingURL=dfield.js.map