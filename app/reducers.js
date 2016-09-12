"use strict";
var Immutable = require('immutable');
function dforms(state, action) {
    if (state === void 0) { state = []; }
    console.log("[form-reducer] action: ", action);
    switch (action.type) {
        case 'ADD_DFORM':
            state.push(action.form);
            return state;
        case 'UPDATE_DFORM':
            var i = state.findIndex(function (form) {
                return form.id === action.form.id;
            });
            state[i] = action.form;
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
exports.dforms = dforms;
function dapps(state, action) {
    if (state === void 0) { state = []; }
    console.log("[appReducer] action: ", action);
    switch (action.type) {
        case 'ADD_DAPP':
            state.push(action.app);
            return state;
        default:
            return state;
    }
}
exports.dapps = dapps;
var reducers = {
    "dforms": dforms,
    "dapps": dapps
};
var combineReducers = function (state, action) {
    if (state === void 0) { state = Immutable.Map({}); }
    var key = 'dforms';
    var oldState = state.get(key);
    var newState = reducers.dforms(oldState, action);
    state = state.set(key, newState);
    key = 'dapps';
    var oldState = state.get(key);
    var newState = reducers.dapps(oldState, action);
    state = state.set(key, newState);
    // reducers.forEach((reducer, key) => {
    //   var oldState = state.get(key)
    //   var newState = reducer(oldState, action)
    //   state = state.set(key, newState)
    // })
    return state;
};
var reducer = combineReducers;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducer;
//# sourceMappingURL=reducers.js.map