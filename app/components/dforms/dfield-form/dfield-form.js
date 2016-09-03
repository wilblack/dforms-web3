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
var DfieldForm = (function () {
    function DfieldForm(route) {
        this.route = route;
        this.close = new core_1.EventEmitter();
        // See this blig post about model-driven forms http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
        console.log("[DfieldForm]");
        this.dfieldTypeChoices = [
            {
                'verbose': 'Single Select',
                'value': 'single-select'
            },
            {
                'verbose': 'Multi-Select',
                'value': 'multi-select'
            },
            {
                'verbose': 'Small Text Input',
                'value': 'text'
            },
            {
                'verbose': 'Larger Text Input',
                'value': 'textarea'
            },
            {
                'verbose': 'Numeric Value',
                'value': 'number'
            },
            {
                'verbose': 'Yes / No',
                'value': 'yes-no'
            },
            {
                'verbose': 'Custom Type',
                'value': 'custom'
            }
        ];
    }
    DfieldForm.prototype.ngOnInit = function () {
        console.log(this.dfield); // object here
        this.formGroup = new forms_1.FormGroup({
            'label': new forms_1.FormControl(this.dfield.label, forms_1.Validators.required),
            'slug': new forms_1.FormControl(this.dfield.slug, forms_1.Validators.required),
            'type': new forms_1.FormControl(this.dfield.type, forms_1.Validators.required),
            'required': new forms_1.FormControl(this.dfield.required, forms_1.Validators.required),
            'helpText': new forms_1.FormControl(this.dfield.helpText),
            'choicesJson': new forms_1.FormControl(JSON.stringify(this.dfield.choices))
        });
        //this.formGroup.controls.choicesJson.setValue(this.)
    };
    DfieldForm.prototype.choicesJsonOnChange = function (e) {
        var json = this.formGroup.value.choicesJson;
        this.dfield.choices = JSON.parse(json);
    };
    DfieldForm.prototype.onSubmit = function () {
        if (!this.formGroup.valid) {
            this.showFormErrors = true;
            return;
        }
        else {
            this.showFormErrors = false;
        }
        this.goBack(this.formGroup.value);
    };
    DfieldForm.prototype.goBack = function (dfield) {
        this.close.emit(dfield);
        this.editSlug = null;
    };
    __decorate([
        core_1.Input('dfield'), 
        __metadata('design:type', Object)
    ], DfieldForm.prototype, "dfield", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DfieldForm.prototype, "close", void 0);
    DfieldForm = __decorate([
        core_1.Component({
            selector: 'dfield-form',
            templateUrl: 'app/components/dforms/dfield-form/dfield-form.html',
            styleUrls: ['app/app.css', 'app/components/dforms/dforms.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], DfieldForm);
    return DfieldForm;
}());
exports.DfieldForm = DfieldForm;
//# sourceMappingURL=dfield-form.js.map