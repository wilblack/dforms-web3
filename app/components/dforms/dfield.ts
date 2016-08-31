import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormStore, DfieldModel} from '../../form-store';



@Component({
  selector: 'dfield',
  templateUrl: 'app/components/dforms/dfield.html',
  styleUrls: ['app/components/dforms/dforms.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Dfield {
  @Input() dfield: DfieldModel;
  private sub: any;

  constructor(private store: FormStore, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    console.log("[Dfield.ngOnInit()]");
  }


  ngOnDestroy() {
  }
}