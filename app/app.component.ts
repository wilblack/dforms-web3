import { Component } from '@angular/core';
import { FormStore } from './form-store';


@Component({
  selector: 'app',
  templateUrl: 'app/app.html',
  styleUrls: ['app/app.css'],

})

export class AppComponent {
    sidenav: any;

    constructor(private store: FormStore) {
        
    }

    ngOnInit() {
        console.log("[AppComponent]")
    }

}