
import Immutable = require('immutable');
import { createStore } from 'redux';
import { IFormAction } from './actions';
import { reducer } from './form-reducer';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { addForm } from './actions';

// export interface Form {
//   id?: number;
//   appSlug: string; 
//   appName: string;
//   fields: Array<Field>;
// }

export interface Field {
  type: string;
  slug: string; 
  label: string;
  helpText: string;
  required: boolean;
}


export class Dform {
  id: number;
  name: string;
  appSlug: string; 
  description: string;
  fields: Array<any>;
}

@Injectable()
export class FormStore {

  store = createStore(reducer, Immutable.List<Dform>());

  constructor(http: Http){
    let formsSub = http.get("/app/components/dforms/mock_data.json")
      .map(response => response.json());

    formsSub.subscribe(
      res => {
       
        console.log("[DForm constructor()]got the forms and put them in Dform Store ", res);
        res.forEach( form => {
          this.dispatch(addForm(form.name, form.id, form.description))
        })
      },
      err => console.log("Error getting forms", err)
    );
  }
  
  get forms(): Immutable.List<Dform> {
    return this.store.getState();
  }

  getDform(id: number): Dform {
    return this.forms.find( form => form.id === id);
  }

  dispatch(action: IFormAction) {
    console.log("[FormStore.dispatch] action: ", action)
    this.store.dispatch(action);
  }
}