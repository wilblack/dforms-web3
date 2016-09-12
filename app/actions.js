"use strict";
var redux_observable_1 = require('redux-observable');
function addForm(id, form) {
    return {
        type: 'ADD_DFORM',
        id: id,
        form: form
    };
}
exports.addForm = addForm;
function updateForm(form) {
    return {
        type: 'UPDATE_DFORM',
        id: form.id,
        form: form
    };
}
exports.updateForm = updateForm;
function updateForm2(form) {
    return {
        type: 'UPDATE_DFORM',
        id: form.id,
        form: form
    };
}
function removeForm(id) {
    return {
        type: 'REMOVE_DFORM',
        id: id
    };
}
exports.removeForm = removeForm;
function addApp(slug, app) {
    return {
        type: 'ADD_DAPP',
        slug: slug,
        app: app
    };
}
exports.addApp = addApp;
function addApp2(slug, app) {
    return {
        type: 'ADD_DAPP',
        slug: slug,
        app: app
    };
}
var dappEpic = function (action$) {
    return action$.ofType('APP_DAPP')
        .map(addApp2);
};
var dformEpic = function (action$) {
    return action$.ofType('UPDATE_DFORM')
        .map(updateForm2);
};
debugger;
exports.rootEpic = redux_observable_1.combineEpics(dappEpic, dformEpic);
// export const rootEpic = (action$, store) => merge(
//   dappEpic(action$),
//   dformEpic(action$)
// );
//# sourceMappingURL=actions.js.map