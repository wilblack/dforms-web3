import Immutable = require('immutable');

import { IFormAction, IAppAction } from './actions';
import { Dform as DformModel} from './form-store';


export function dforms(state: any = [], action: IFormAction) {
    console.log("[form-reducer] action: ", action)
    switch (action.type) {
      case 'ADD_DFORM':
        state.push(action.form);
        return state;
      case 'UPDATE_DFORM':
        
        let i = state.findIndex(form =>{
          return form.id === action.form.id
        })
        state[i] = action.form;
        return state;

      case 'REMOVE_DFORM':
        return state.delete(findIndexById());
      
      default:
        return state;
    }

    function findIndexById() {
      return state.findIndex((form) => form.id === action.id);
    }
}


export function dapps(state: any = [], action: IAppAction) {
    console.log("[appReducer] action: ", action)
    switch (action.type) {

      case 'ADD_DAPP':
        state.push(action.app);
        return state;
      default:
        return state;
    }
}


const reducers = Immutable.Map({
  "dforms": dforms,
  "apps": dapps
})

const combineReducers = function(state = Immutable.Map({}), action) {
  reducers.forEach((reducer, key) => {
    var oldState = state.get(key)
    var newState = reducer(oldState, action)
    state = state.set(key, newState)
  })

  return state
}

const reducer = combineReducers;

export default reducer