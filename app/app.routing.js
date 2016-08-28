"use strict";
var router_1 = require('@angular/router');
var home_1 = require('./components/home/home');
var no_content_1 = require('./components/no-content/no-content');
var appRoutes = [
    // { 
    //     path: 'form-list', 
    //     component: FormList
    // },
    // { 
    //     path: 'form-edit/:formId', 
    //     component: FormEdit
    // },
    { path: 'home', component: home_1.Home },
    { path: '**', component: no_content_1.NoContent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map