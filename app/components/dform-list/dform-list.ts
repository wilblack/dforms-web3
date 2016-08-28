import { Component } from '@angular/core';
import { FormStore } from '../../form-store';
import Dform from '../dform/dform';
import { addForm } from '../../actions';

@Component({
  selector: 'form-list',
  templateUrl: 'app/components/dform-list/dform-list.html',
  styleUrls: ['app/components/dform-list/dform-list.css'],
  directives: [Dform]
})

export class FormList {
    formID: number;

    constructor(private store: FormStore) {
        this.formID = 0;
    }

  addForm(form) {
    this.store.dispatch(addForm(form, this.formID++));
  }
}