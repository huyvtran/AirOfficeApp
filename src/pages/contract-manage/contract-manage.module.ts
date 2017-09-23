import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractManagePage } from './contract-manage';

@NgModule({
  declarations: [
    ContractManagePage,
  ],
  imports: [
    IonicPageModule.forChild(ContractManagePage),
  ],
})
export class ContractManagePageModule {}
