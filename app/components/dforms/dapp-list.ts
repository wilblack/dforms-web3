import { Component } from '@angular/core';

import { FormStore, DappModel } from '../../form-store';
import { DformForm } from './dform-form/dform-form';
import { Dapp } from './dapp';

import { addApp } from '../../actions';



@Component({
  selector: 'dapp-list',
  templateUrl: 'app/components/dforms/dapp-list.html',
  styleUrls: ['app/app.css','app/components/dforms/dforms.css'],
  directives: [Dapp]
})

export class DappList {
    formID: number;
    showDappForm: boolean;
    newDapp: DappModel;

    constructor(private store: FormStore) {
        this.showDappForm = false;

        this.newDapp = {
          'slug': '',
          'name': '',
          'description': '',
          'version': 1
        }
    }

  addDapp(form) {
    // This runs when the user is done filliing out the form and it passed validation.
    //this.store.dispatch(addDapp(dapp.slug, dapp));
    this.showDappForm = false;
  }

}