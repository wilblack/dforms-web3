"use strict";
var redux_1 = require('redux');
function dformReducer(state, action) {
    console.log("[form-reducer] action: ", action);
    switch (action.type) {
        case 'ADD_DFORM':
            state.get('dforms').push(action.form);
            return state;
        case 'REMOVE_DFORM':
            return state.delete(findIndexById());
        default:
            return state;
    }
    function findIndexById() {
        return state.findIndex(function (form) { return form.id === action.id; });
    }
}
exports.dformReducer = dformReducer;
function appReducer(state, action) {
    console.log("[appReducer] action: ", action);
    switch (action.type) {
        case 'ADD_APP':
            state.get('apps').push(action.app);
            return state;
        default:
            return state;
    }
}
exports.appReducer = appReducer;
var reducers = redux_1.combineReducers({
    dformReducer: dformReducer,
    appReducer: appReducer
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducers;
//# sourceMappingURL=form-reducer.js.map