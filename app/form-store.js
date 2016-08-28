"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Immutable = require('immutable');
var redux_1 = require('redux');
var form_reducer_1 = require('./form-reducer');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var actions_1 = require('./actions');
var Dform = (function () {
    function Dform() {
    }
    return Dform;
}());
exports.Dform = Dform;
var FormStore = (function () {
    function FormStore(http) {
        var _this = this;
        this.store = redux_1.createStore(form_reducer_1.reducer, Immutable.List());
        var formsSub = http.get("/app/components/dforms/mock_data.json")
            .map(function (response) { return response.json(); });
        formsSub.subscribe(function (res) {
            console.log("[DForm constructor()]got the forms and put them in Dform Store ", res);
            res.forEach(function (form) {
                _this.dispatch(actions_1.addForm(form.name, form.id, form.description));
            });
        }, function (err) { return console.log("Error getting forms", err); });
    }
    Object.defineProperty(FormStore.prototype, "forms", {
        get: function () {
            return this.store.getState();
        },
        enumerable: true,
        configurable: true
    });
    FormStore.prototype.getDform = function (id) {
        return this.forms.find(function (form) { return form.id === id; });
    };
    FormStore.prototype.dispatch = function (action) {
        console.log("[FormStore.dispatch] action: ", action);
        this.store.dispatch(action);
    };
    FormStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FormStore);
    return FormStore;
}());
exports.FormStore = FormStore;
//# sourceMappingURL=form-store.js.map