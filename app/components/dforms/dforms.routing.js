"use strict";
var router_1 = require('@angular/router');
var dform_list_1 = require('./dform-list');
var dform_edit_1 = require('./dform-edit');
var dform_1 = require('./dform');
var dapp_list_1 = require('./dapp-list');
var dformsRoutes = [
    { path: 'form-list', component: dform_list_1.DformList },
    { path: 'form/:id', component: dform_1.Dform },
    { path: 'form-edit/:formId', component: dform_edit_1.DformEdit },
    { path: 'dapp-list', component: dapp_list_1.DappList },
];
exports.dformsRouting = router_1.RouterModule.forChild(dformsRoutes);
//# sourceMappingURL=dforms.routing.js.map