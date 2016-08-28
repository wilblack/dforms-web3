import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { FormList } from './components/dform-list/dform-list';
import { FormEdit } from './components/dform-edit/dform-edit';

import { Home } from './components/home/home';
import { NoContent } from './components/no-content/no-content';

const appRoutes: Routes = [
    // { 
    //     path: 'form-list', 
    //     component: FormList
    // },
    // { 
    //     path: 'form-edit/:formId', 
    //     component: FormEdit
    // },

    { path: 'home', component: Home },
    { path: '**', component: NoContent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);