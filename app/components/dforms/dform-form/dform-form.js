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
var form_store_1 = require('../../../form-store');
var DformForm = (function () {
    function DformForm(route, store) {
        // See this blig post about model-driven forms http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
        this.route = route;
        this.store = store;
        this.close = new core_1.EventEmitter();
        this.showFormErrors = false;
    }
    DformForm.prototype.ngOnInit = function () {
        console.log(this.dform); // object here
        this.formGroup = new forms_1.FormGroup({
            'name': new forms_1.FormControl(this.dform.name, forms_1.Validators.required),
            'description': new forms_1.FormControl(this.dform.description, forms_1.Validators.required),
            'apps': new forms_1.FormControl(this.dform.apps),
        });
    };
    DformForm.prototype.onSubmit = function (form) {
        console.log("Form submitted, isvalid: ", this.formGroup.valid);
        console.log("Form submitted, isvalid: ", this.formGroup.value);
        if (!this.formGroup.valid) {
            this.showFormErrors = true;
            return;
        }
        else {
            this.showFormErrors = false;
        }
        this.goBack(this.formGroup.value);
    };
    DformForm.prototype.goBack = function (dform) {
        this.close.emit(dform);
        this.editIndex = null;
    };
    __decorate([
        core_1.Input('dform'), 
        __metadata('design:type', Object)
    ], DformForm.prototype, "dform", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DformForm.prototype, "close", void 0);
    DformForm = __decorate([
        core_1.Component({
            selector: 'dform-form',
            templateUrl: 'app/components/dforms/dform-form/dform-form.html',
            styleUrls: ['app/app.css', 'app/components/dforms/dforms.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, form_store_1.FormStore])
    ], DformForm);
    return DformForm;
}());
exports.DformForm = DformForm;
//# sourceMappingURL=dform-form.js.map