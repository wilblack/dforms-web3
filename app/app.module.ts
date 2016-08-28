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



@NgModule({
  imports: [
    BrowserModule,
    //FormsModule,
    HttpModule,
    routing,
    DformsModule
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


