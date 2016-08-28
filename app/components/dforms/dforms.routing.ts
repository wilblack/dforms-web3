import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DformList }    from './dform-list';
import { DformEdit}    from './dform-edit';
import { Dform }  from './dform';

const dformsRoutes: Routes = [
  { path: 'form-list',  component: DformList },
  { path: 'form/:id',  component: Dform },
  { path: 'form-edit/:formId', component: DformEdit }
];

export const dformsRouting: ModuleWithProviders = RouterModule.forChild(dformsRoutes);