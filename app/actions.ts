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
