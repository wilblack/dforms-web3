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
//import { Field } from '../../services/dforms';
var forms_1 = require('@angular/forms');
var dforms_1 = require('../../services/dforms');
var FieldFormComponent = (function () {
    function FieldFormComponent(dform, route) {
        // See this blig post about model-driven forms http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
        this.dform = dform;
        this.route = route;
        this.close = new core_1.EventEmitter();
        debugger;
        this.questionTypeChoices = this.dform.questionTypeChoices;
    }
    FieldFormComponent.prototype.ngOnInit = function () {
        console.log(this.field); // object here
        this.formGroup = new forms_1.FormGroup({
            'label': new forms_1.FormControl(this.field.label, forms_1.Validators.required),
            'slug': new forms_1.FormControl(this.field.slug, forms_1.Validators.required),
            'type': new forms_1.FormControl(this.field.type, forms_1.Validators.required),
            'required': new forms_1.FormControl(this.field.required, forms_1.Validators.required),
            'helpText': new forms_1.FormControl(this.field.helpText)
        });
    };
    FieldFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log("Form submitted", form);
        if (!this.formGroup.valid) {
            return;
        }
        this.dform.saveField(this.route.params.value.appSlug, this.formGroup.value)
            .then(function (field) {
            _this.field = field;
            _this.goBack(field);
        });
    };
    FieldFormComponent.prototype.goBack = function (field) {
        if (field === void 0) { field = null; }
        this.close.emit(field);
        this.editIndex = null;
    };
    __decorate([
        core_1.Input('field'), 
        __metadata('design:type', Object)
    ], FieldFormComponent.prototype, "field", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FieldFormComponent.prototype, "close", void 0);
    FieldFormComponent = __decorate([
        core_1.Component({
            selector: 'field-form',
            templateUrl: './field-form.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof dforms_1.DForm !== 'undefined' && dforms_1.DForm) === 'function' && _a) || Object, router_1.ActivatedRoute])
    ], FieldFormComponent);
    return FieldFormComponent;
    var _a;
}());
exports.FieldFormComponent = FieldFormComponent;
//# sourceMappingURL=field-form.js.map