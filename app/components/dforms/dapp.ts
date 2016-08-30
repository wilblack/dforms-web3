import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormStore, Dform as DformModel, DappModel} from '../../form-store';
import { removeForm } from '../../actions';



@Component({
  selector: 'dapp',
  templateUrl: 'app/components/dforms/dapp.html',
  styleUrls: ['app/components/dforms/dforms.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Dapp {
  @Input() app: DappModel;
  private sub: any;

  constructor(private store: FormStore, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    console.log("[Dapp.ngOnInit()]");
  }



  ngOnDestroy() {
  }
}