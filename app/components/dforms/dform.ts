import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormStore, Dform as DformModel} from '../../form-store';
import { removeForm, starForm } from '../../actions';


@Component({
  selector: 'dform',
  templateUrl: 'app/components/dforms/dform.html',
  styleUrls: ['app/components/dforms/dforms.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Dform {
  @Input() form: DformModel;
  private sub: any;

  constructor(private store: FormStore, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    console.log("[Dform.ngOnInit()]");
    this.sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       console.log("[ngOnInit()] Got id ", id);
     });
  }

  removeForm(form) {
    this.store.dispatch(removeForm(form.id));
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
