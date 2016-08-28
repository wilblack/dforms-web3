"use strict";
var Immutable = require('immutable');
function reducer(state, action) {
    if (state === void 0) { state = Immutable.List(); }
    console.log("[form-reducer] action: ", action);
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
            return state.update(findIndexById(), function (form) {
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
        return state.findIndex(function (form) { return form.id === action.id; });
    }
}
exports.reducer = reducer;
//# sourceMappingURL=form-reducer.js.map