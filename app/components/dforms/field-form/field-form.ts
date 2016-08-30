import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Field } from '../../services/dforms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Dform, Field } from '../../../form-store';

@Component({
  selector: 'field-form',
  templateUrl: './field-form.html'
    
})
export class FieldFormComponent {
    @Input('field') field: any;
    @Output() close = new EventEmitter();
    public formGroup: FormGroup;
    public editIndex: number;
    public questionTypeChoices;

    constructor (private dform: Dform, public route: ActivatedRoute){
        // See this blig post about model-driven forms http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html


        this.questionTypeChoices = [];
    }

    ngOnInit() {
        console.log(this.field); // object here
        
        this.formGroup = new FormGroup({
            'label': new FormControl(this.field.label, Validators.required),
            'slug': new FormControl(this.field.slug, Validators.required),
            'type': new FormControl(this.field.type, Validators.required),
            'required': new FormControl(this.field.required, Validators.required),
            'helpText': new FormControl(this.field.helpText)
        });
      }

    onSubmit(form): void {
        console.log("Form submitted", form);
        if (!this.formGroup.valid){
            return;
        }

   
    }

    goBack(field: Field = null): void {
        this.close.emit(field);
        this.editIndex = null;
    }


}