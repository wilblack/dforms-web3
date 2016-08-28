import { Component } from '@angular/core';
import { FormStore } from './form-store';


@Component({
  selector: 'app',
  templateUrl: 'app/app.html',
  styleUrls: ['app/app.css'],

})

export class AppComponent {
    

    constructor(private store: FormStore) {
        
    }

}