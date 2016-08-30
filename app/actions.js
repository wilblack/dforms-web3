"use strict";
function addForm(id, form) {
    return {
        type: 'ADD_DFORM',
        id: id,
        form: form
    };
}
exports.addForm = addForm;
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
//# sourceMappingURL=actions.js.map