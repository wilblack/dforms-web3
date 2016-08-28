import Immutable = require('immutable');
import { IFormAction } from './actions';
import { Dform as DformModel} from './form-store';

export function reducer(state: Immutable.List<DformModel> = Immutable.List<DformModel>(), action: IFormAction) {
    console.log("[form-reducer] action: ", action)
    switch (action.type) {
      case 'ADD':
        return state.push({
          id: action.id,
          name: action.name,
          description: action.description,
          appSlug: '',
          fields: []
        });

      case 'GET':
        return state.get(findIndexById());

      case 'REMOVE':
        return state.delete(findIndexById());
      
      case 'STAR':
        return (<any>state).update(findIndexById(), (form) => {
          return {
            id: form.id,
            name: form.name,
            star: !form.star
          };
        });
      default:
        return state;
    }

    function findIndexById() {
      return state.findIndex((form) => form.id === action.id);
    }
}