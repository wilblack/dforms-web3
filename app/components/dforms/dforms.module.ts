import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';

import { DformList }    from './dform-list';
import { DformEdit }  from './dform-edit';
import { Dform }  from './dform';
import { DappList }  from './dapp-list';
import { Dapp }  from './dapp';
import { Dfield }  from './dfield';

import { FormStore } from '../../form-store';
import { dformsRouting } from './dforms.routing';


import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdGridListModule } from '@angular2-material/grid-list/grid-list';
import {MdInputModule} from '@angular2-material/input/input';

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule,
    dformsRouting,
    MdCardModule,
    MdButtonModule,
    MdGridListModule,
    MdInputModule
  ],
  declarations: [
    DformList,
    DappList,
    Dform,
    Dapp,
    Dfield,
    DformEdit,
    // REACTIVE_FORM_DIRECTIVES
  ],
  providers: [
    FormStore
  ]
})
export class DformsModule {}