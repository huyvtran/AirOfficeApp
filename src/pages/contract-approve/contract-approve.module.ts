import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractApprovePage } from './contract-approve';

@NgModule({
  declarations: [
    ContractApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(ContractApprovePage),
  ],
})
export class ContractApprovePageModule {}
