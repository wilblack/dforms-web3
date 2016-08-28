import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { FormStore, Dform as FormModel} from '../../form-store';
import { removeForm, starForm } from '../../actions';

@Component({
  selector: 'dform',
  templateUrl: 'app/components/dform/dform.html',
  styleUrls: ['app/components/dform/dform.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export default class Dform {
  @Input()
  form: FormModel;

  constructor(private store: FormStore) { }

  removeForm(form) {
    this.store.dispatch(removeForm(form.id));
  }

  starForm(form) {
    this.store.dispatch(starForm(form.id));
  }
}
