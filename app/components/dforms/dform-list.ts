import { Component } from '@angular/core';

import { FormStore, Dform as DformModel } from '../../form-store';
import { Dform } from './dform';
import { DformForm } from './dform-form/dform-form';
import { Dapp } from './dapp';

import { addForm } from '../../actions';



@Component({
  selector: 'form-list',
  templateUrl: 'app/components/dforms/dform-list.html',
  styleUrls: ['app/app.css',  'app/components/dforms/dforms.css'],
  directives: [Dform, DformForm, Dapp]
})

export class DformList {
    formID: number;
    showDformForm: boolean;
    newForm: DformModel;

    constructor(private store: FormStore) {
        this.formID = 0;
        this.showDformForm = false;

        this.newForm = {
          'id': null,
          'name': '',
          'description': '',
          'fields': []
        }
    }

  addForm(form) {
    if (form.id === undefined) form.id = 1;
    this.store.dispatch(addForm(form.id, form));
    this.showDformForm = false;
  }


}