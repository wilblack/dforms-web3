"use strict";
function addForm(name, id, description) {
    return {
        type: 'ADD',
        id: id,
        name: name,
        description: description
    };
}
exports.addForm = addForm;
function removeForm(id) {
    return {
        type: 'REMOVE',
        id: id
    };
}
exports.removeForm = removeForm;
function starForm(id) {
    return {
        type: 'STAR',
        id: id
    };
}
exports.starForm = starForm;
//# sourceMappingURL=actions.js.map