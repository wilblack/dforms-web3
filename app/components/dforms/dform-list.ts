import { Component } from '@angular/core';
import { FormStore } from '../../form-store';

import { Dform } from './dform';

import { addForm } from '../../actions';



@Component({
  selector: 'form-list',
  templateUrl: 'app/components/dforms/dform-list.html',
  styleUrls: ['app/components/dforms/dforms.css'],
  directives: [Dform]
})

export class DformList {
    formID: number;

    constructor(private store: FormStore) {
        this.formID = 0;
    }

  addForm(form) {
    this.store.dispatch(addForm(form, this.formID++, "Description Goes Here"));
  }
}