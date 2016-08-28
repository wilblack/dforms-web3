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
var actions_1 = require('../../actions');
var Dform = (function () {
    function Dform(store) {
        this.store = store;
    }
    Dform.prototype.removeForm = function (form) {
        this.store.dispatch(actions_1.removeForm(form.id));
    };
    Dform.prototype.starForm = function (form) {
        this.store.dispatch(actions_1.starForm(form.id));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', form_store_1.Dform)
    ], Dform.prototype, "form", void 0);
    Dform = __decorate([
        core_1.Component({
            selector: 'dform',
            templateUrl: 'app/components/dform/dform.html',
            styleUrls: ['app/components/dform/dform.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [form_store_1.FormStore])
    ], Dform);
    return Dform;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dform;
//# sourceMappingURL=dform.js.map