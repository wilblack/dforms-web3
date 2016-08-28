"use strict";
var Immutable = require('immutable');
var redux_1 = require('redux');
var form_reducer_1 = require('./form-reducer');
var Dform = (function () {
    function Dform() {
    }
    return Dform;
}());
exports.Dform = Dform;
var FormStore = (function () {
    function FormStore() {
        this.store = redux_1.createStore(form_reducer_1.reducer, Immutable.List());
    }
    Object.defineProperty(FormStore.prototype, "forms", {
        get: function () {
            return this.store.getState();
        },
        enumerable: true,
        configurable: true
    });
    FormStore.prototype.dispatch = function (action) {
        console.log("[FormStore.dispatch] action: ", action);
        this.store.dispatch(action);
    };
    return FormStore;
}());
exports.FormStore = FormStore;
//# sourceMappingURL=form-store.js.map