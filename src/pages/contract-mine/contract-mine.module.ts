import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractMinePage } from './contract-mine';

@NgModule({
  declarations: [
    ContractMinePage,
  ],
  imports: [
    IonicPageModule.forChild(ContractMinePage),
  ],
})
export class ContractMinePageModule {}
