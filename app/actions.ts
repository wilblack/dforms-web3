import { combineEpics } from 'redux-observable';
import { merge } from 'rxjs/observable/merge';

import { Dform as DformModel, DappModel} from './form-store';


export interface IFormAction {
  type: string;
  id: number;
  form?: DformModel;
}

export interface IAppAction {
  type: string;
  slug: string;
  app?: DappModel;
}


export function addForm(id: number, form: DformModel): IFormAction {
  return {
    type: 'ADD_DFORM',
    id,
    form
  };
}

export function updateForm(form: DformModel): IFormAction {
  return {
    type: 'UPDATE_DFORM',
    id: form.id,
    form
  };
}

function updateForm2(form: DformModel): IFormAction {
  return {
    type: 'UPDATE_DFORM',
    id: form.id,
    form
  };
}

export function removeForm(id: number): IFormAction {
  return {
    type: 'REMOVE_DFORM',
    id
  };
}




export function addApp(slug: string, app: DappModel): IAppAction {
  return {
    type: 'ADD_DAPP',
    slug,
    app
  };
}

function addApp2(slug: string, app: DappModel): IAppAction {
  return {
    type: 'ADD_DAPP',
    slug,
    app
  };
}



const dappEpic = action$ => 
  action$.ofType('APP_DAPP')
    .map(addApp2);


const dformEpic = action$ => 
  action$.ofType('UPDATE_DFORM')
    .map(updateForm2);


debugger
export const rootEpic = combineEpics(dappEpic, dformEpic);

// export const rootEpic = (action$, store) => merge(
//   dappEpic(action$),
//   dformEpic(action$)
// );


