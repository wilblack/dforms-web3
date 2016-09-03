import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Field } from '../../services/dforms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DfieldModel } from '../../../form-store';


@Component({
  selector: 'dfield-form',
  templateUrl: 'app/components/dforms/dfield-form/dfield-form.html',
  styleUrls: ['app/app.css',  'app/components/dforms/dforms.css'],
    
})
export class DfieldForm {
    @Input('dfield') dfield: any;
    @Output() close = new EventEmitter();
    public formGroup: FormGroup;
    public editSlug: string;
    public dfieldTypeChoices;
    choicesJson: string;
    showFormErrors: boolean;

    constructor (public route: ActivatedRoute){
        // See this blig post about model-driven forms http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
        console.log("[DfieldForm]")
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
          ]
    }

    ngOnInit() {
        console.log(this.dfield); // object here
        
        this.formGroup = new FormGroup({
            'label': new FormControl(this.dfield.label, Validators.required),
            'slug': new FormControl(this.dfield.slug, Validators.required),
            'type': new FormControl(this.dfield.type, Validators.required),
            'required': new FormControl(this.dfield.required, Validators.required),
            'helpText': new FormControl(this.dfield.helpText),
            'choicesJson': new FormControl(JSON.stringify(this.dfield.choices))
        });
        //this.formGroup.controls.choicesJson.setValue(this.)
      }

    choicesJsonOnChange(e) {
       let json = this.formGroup.value.choicesJson;
       this.dfield.choices = JSON.parse(json);


    }

    onSubmit() {
        if (!this.formGroup.valid){
            this.showFormErrors = true;
            return;
        } else {
            this.showFormErrors = false;
        }

        this.goBack(this.formGroup.value);
    }

    goBack(dfield: DfieldModel): void {
        this.close.emit(dfield);
        this.editSlug = null;
    }


}