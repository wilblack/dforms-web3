import { Component } from '@angular/core';

@Component({
  selector: 'dform-edit',
  templateUrl: 'app/components/dforms/dform-edit.html',
  styleUrls: ['app/components/dforms/dforms.css']
})

export class DformEdit {
    
    constructor() {
        console.log("[DformEdit.constructor()]");
    }

    ngOnInit() {
        console.log("[DformEdit.ngOnInit()]");
    }

}