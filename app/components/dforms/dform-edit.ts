import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormStore, Dform as DformModel} from '../../form-store';


@Component({
  selector: 'dform-edit',
  templateUrl: 'app/components/dforms/dform-edit.html',
  styleUrls: ['app/components/dforms/dforms.css']
})

export class DformEdit {
    private sub: any;
    public dform: DformModel;

    constructor(private store: FormStore, private route: ActivatedRoute) {
        console.log("[DformEdit.constructor()]");
    }

    ngOnInit() {
        console.log("[DformEdit.ngOnInit()]");

        this.sub = this.route.params.subscribe(params => {
           let id = +params['formId']; // (+) converts string 'id' to a number
           console.log("[ngOnInit()] Got id ", id);

           //this.dform = this.store.dforms.find( form => form.id === id);
           this.store.getDform(id)
             .subscribe(res => {
               this.dform = res;
               console.log("setting this.dform to ", res);
             });
           //console.log("this.dform ", this.dform);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
