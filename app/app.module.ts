import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
//import { FormsModule }    from '@angular/forms';

// import { FormList } from './components/dform-list/dform-list';
import { Home } from './components/home/home';
import { FormStore } from './form-store';

import { HttpModule} from '@angular/http';

import { DformsModule } from './components/dforms/dforms.module';
import { AppComponent }       from './app.component';
import { routing,
         appRoutingProviders } from './app.routing';

import {MdButtonModule} from '@angular2-material/button/button';
import {MdCardModule} from '@angular2-material/card/card';
import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
import {MdIconModule} from '@angular2-material/icon/icon';
import {MdListModule} from '@angular2-material/list/list';
import {MdGridListModule} from '@angular2-material/grid-list/grid-list';


@NgModule({
  imports: [
    BrowserModule,
    //FormsModule,
    HttpModule,
    routing,
    DformsModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdSidenavModule,
    MdIconModule,
    MdListModule,
    MdGridListModule
  ],
  declarations: [
    AppComponent,
    
    //FormList,
    Home
  ],
  providers: [
    appRoutingProviders,
    FormStore
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


