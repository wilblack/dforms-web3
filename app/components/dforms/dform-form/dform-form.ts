import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Field } from '../../services/dforms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormStore, Dform } from '../../../form-store';

@Component({
  selector: 'dform-form',
  templateUrl: 'app/components/dforms/dform-form/dform-form.html',
  styleUrls: ['app/app.css', 'app/components/dforms/dforms.css']
    
})
export class DformForm {
    @Input('dform') dform: any;
    @Output() close = new EventEmitter();
    public formGroup: FormGroup;
    public editIndex: number;
    public apps;
    showFormErrors: boolean;

    constructor(public route: ActivatedRoute, private store: FormStore){
        // See this blig post about model-driven forms http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html

        this.showFormErrors = false;
    }

    ngOnInit() {
        console.log(this.dform); // object here
        
        this.formGroup = new FormGroup({
            'name': new FormControl(this.dform.name, Validators.required),
            'description': new FormControl(this.dform.description, Validators.required),
            'apps': new FormControl(this.dform.apps ),
        });
      }

    onSubmit(form): void {
        console.log("Form submitted, isvalid: ", this.formGroup.valid);
        console.log("Form submitted, isvalid: ", this.formGroup.value);
        
        if (!this.formGroup.valid){
            this.showFormErrors = true;
            return;
        } else {
            this.showFormErrors = false;
        }

        this.goBack(this.formGroup.value);
    }

    goBack(dform: Dform): void {
        this.close.emit(dform);
        this.editIndex = null;
    }


}