import { Component } from '@angular/core';

@Component({
  selector: 'dform-edit',
  templateUrl: 'app/components/dform-edit/dform-edit.html',
  styleUrls: ['app/components/dform-edit/dform-edit.css']
})

export class FormEdit {
    
    constructor() {
        console.log("[FormEdit.constructor()]");
    }

    ngOnInit() {
        console.log("[FormEdit.ngOnInit()]");
    }

}