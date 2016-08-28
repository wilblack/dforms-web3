import Immutable = require('immutable');
import { createStore } from 'redux';
import { IFormAction } from './actions';
import { reducer } from './form-reducer';




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
  fields: Array<any>;
}

export class FormStore {
  store = createStore(reducer, Immutable.List<Dform>());

  get forms(): Immutable.List<Dform> {
    return this.store.getState();
  }

  dispatch(action: IFormAction) {
    console.log("[FormStore.dispatch] action: ", action)
    this.store.dispatch(action);
  }
}