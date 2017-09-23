import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractMineDetailPage } from './contract-mine-detail';

@NgModule({
  declarations: [
    ContractMineDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractMineDetailPage),
  ],
})
export class ContractMineDetailPageModule {}
