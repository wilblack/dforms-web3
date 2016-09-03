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
var reducers_1 = require('./reducers');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var actions_1 = require('./actions');
/* redux-obseravble stuff
 * https://github.com/redux-observable/redux-observable
 */
var redux_observable_1 = require('redux-observable');
var actions_2 = require('./actions');
var epicMiddleware = redux_observable_1.createEpicMiddleware(actions_2.epics);
var DappModel = (function () {
    function DappModel() {
    }
    return DappModel;
}());
exports.DappModel = DappModel;
var Dform = (function () {
    function Dform() {
    }
    return Dform;
}());
exports.Dform = Dform;
var initialState = Immutable.Map({
    dforms: [],
    apps: []
});
var FormStore = (function () {
    function FormStore(http) {
        var _this = this;
        //store = createStore(reducer, initialState);
        this.store = redux_1.createStore(reducers_1.default, epicMiddleware);
        this.stateLoaded = false;
        this.formsSub = http.get("/app/components/dforms/mock_data.json")
            .map(function (response) { return response.json(); });
        this.formsSub.subscribe(function (res) {
            console.log("[DForm constructor()]got the forms and put them in Dform Store ", res);
            res.dforms.forEach(function (form) {
                _this.dispatch(actions_1.addForm(form.id, form));
            });
            res.dapps.forEach(function (app) {
                _this.dispatch(actions_1.addApp(app.slug, app));
            });
            _this.stateLoaded = true;
        }, function (err) { return console.log("Error getting forms", err); });
    }
    Object.defineProperty(FormStore.prototype, "dforms", {
        get: function () {
            return this.store.getState().get("dforms");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormStore.prototype, "dapps", {
        get: function () {
            return this.store.getState().get("apps");
        },
        enumerable: true,
        configurable: true
    });
    FormStore.prototype.getDform = function (id) {
        if (this.stateLoaded === true) {
            var res = this.dforms.find(function (form) { return form.id === id; });
            var subject = new BehaviorSubject_1.BehaviorSubject(res);
            return subject;
        }
        else {
            return this.formsSub.map(function (res) {
                var out = res.dforms.find(function (form) { return form.id === id; });
                console.log("Returning ", out);
                return out;
            });
        }
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