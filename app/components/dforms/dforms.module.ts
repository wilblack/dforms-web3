import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
//import { FormsModule }    from '@angular/forms';

import { DformList }    from './dform-list';
import { DformEdit }  from './dform-edit';
import { Dform }  from './dform';


import { FormStore } from '../../form-store';
import { dformsRouting } from './dforms.routing';



import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdGridListModule } from '@angular2-material/grid-list/grid-list';

@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    dformsRouting,
    MdCardModule,
    MdButtonModule,
    MdGridListModule
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