"use strict";
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
exports.epics = function (action$) {
    action$.ofType('UPDATE_DFORM')
        .map(updateForm);
    action$.ofType('ADD_DFORM')
        .map(addForm);
    action$.ofType('ADD_DAPP')
        .map(addApp);
};
//# sourceMappingURL=actions.js.map