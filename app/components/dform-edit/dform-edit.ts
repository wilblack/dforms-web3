import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormStore, Dform as DformModel} from '../../form-store';

@Component({
  selector: 'dform-edit',
  templateUrl: 'app/components/dform-edit/dform-edit.html',
  styleUrls: ['app/components/dform-edit/dform-edit.css']
})

export class FormEdit {
    
    constructor(private store: FormStore, private route: ActivatedRoute) {
        console.log("[FormEdit.constructor()]");
    }

    ngOnInit() {
        console.log("[FormEdit.ngOnInit()]");
    
        this.sub = this.route.params.subscribe(params => {
           let id = +params['id']; // (+) converts string 'id' to a number
           console.log("[ngOnInit()] Got id ", id);
        });

    }

}