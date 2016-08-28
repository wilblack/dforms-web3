"use strict";
var router_1 = require('@angular/router');
// import { FormList } from './components/dform-list/dform-list';
// import { FormEdit } from './components/dform-edit/dform-edit';
var home_1 = require('./components/home/home');
var no_content_1 = require('./components/no-content/no-content');
var appRoutes = [
    { path: '', component: home_1.Home },
    { path: 'home', component: home_1.Home },
    { path: '**', component: no_content_1.NoContent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map