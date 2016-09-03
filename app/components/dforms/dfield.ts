import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormStore, Dform as DformModel, DfieldModel} from '../../form-store';

import { updateForm } from '../../actions';


@Component({
  selector: 'dfield',
  templateUrl: 'app/components/dforms/dfield.html',
  styleUrls: ['app/app.css', 'app/components/dforms/dforms.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Dfield {
  @Input() dfield: DfieldModel;
  @Input() dform: DformModel;
  editSlug: string
  private sub: any;

  constructor(private store: FormStore, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    console.log("[Dfield.ngOnInit()]");
  }

  dfieldFormClose (dfield: DfieldModel) {

    let index = this.dform.fields.findIndex(field =>{
      return field.slug == dfield.slug
    })
    this.dform.fields[index];
    this.store.dispatch(updateForm(this.dform));
    this.editSlug = null;
  }

  ngOnDestroy() {
  }
}