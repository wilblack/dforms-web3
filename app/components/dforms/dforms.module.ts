import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
//import { FormsModule }    from '@angular/forms';

import { DformList }    from './dform-list';
import { Dform }  from './dform';
import { DformEdit }  from './dform-edit';

import { FormStore } from '../../form-store';
import { dformsRouting } from './dforms.routing';

@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    dformsRouting
  ],
  declarations: [
    DformList,
    Dform,
    DformEdit
  ],
  providers: [
    FormStore
  ]
})
export class DformsModule {}