import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DformList }    from './dform-list';
import { DformEdit}    from './dform-edit';
import { Dform }  from './dform';

import { DappList }    from './dapp-list';


const dformsRoutes: Routes = [
  { path: 'form-list',  component: DformList },
  { path: 'form/:id',  component: Dform },
  { path: 'form-edit/:formId', component: DformEdit },

  { path: 'dapp-list',  component: DappList },
  //{ path: 'dapp/:id',  component: Dapp },
];

export const dformsRouting: ModuleWithProviders = RouterModule.forChild(dformsRoutes);