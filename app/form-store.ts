
import Immutable = require('immutable');
import { createStore } from 'redux';
import { IFormAction } from './actions';
import  reducer from './reducers';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'; 

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { addForm, addApp } from './actions';


export interface DfieldModel {
  type: string;
  slug: string; 
  label: string;
  helpText: string;
  required: boolean;
  choices: any;
}

export class DappModel {
  slug: string;
  name: string;
  description: string;
  supportEmail: string;
  version: string;
}

export class Dform {
  id: number;
  name: string;
  description: string;
  fields: Array<any>;
  apps: Array<any>;
  version: string;
}

const initialState = Immutable.Map({
  dforms: [],
  dapps: []
})

@Injectable()
export class FormStore {

  //store = createStore(reducer, Immutable.List<Dform>());
  store = createStore(reducer, initialState);
  formsSub: any;
  stateLoaded: boolean
  constructor(http: Http){
    this.stateLoaded = false;
    this.formsSub = http.get("/app/components/dforms/mock_data.json")
      .map(response => response.json());

    this.formsSub.subscribe(
      res => {
      
        console.log("[DForm constructor()]got the forms and put them in Dform Store ", res);
        res.dforms.forEach( form => {
          this.dispatch(addForm(form.id, form))
        })

        res.dapps.forEach( app => {
          this.dispatch(addApp(app.slug, app))
        })
        this.stateLoaded = true;
      },
      err => console.log("Error getting forms", err)
    );
  }
  
  get dforms(): Immutable.List<Dform> {
    return this.store.getState().get("dforms");
  }

  get dapps(): Immutable.List<DappModel> {
    return this.store.getState().get("dapps");
  }

  getDform(id: number): any {
    
    if (this.stateLoaded === true){
      let res = this.dforms.find( form => form.id === id);
      var subject = new BehaviorSubject(res);
      return subject;
    } else {

      return this.formsSub.map(
        res => {
          let out = res.dforms.find( form => form.id === id);
          console.log("Returning ", out);
          return out;
        }
      )
    }
    
  }

  dispatch(action: any) {
    console.log("[FormStore.dispatch] action: ", action)
    this.store.dispatch(action);
  }
}