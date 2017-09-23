import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractPaymentConfirmPage } from './contract-payment-confirm';

@NgModule({
  declarations: [
    ContractPaymentConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractPaymentConfirmPage),
  ],
})
export class ContractPaymentConfirmPageModule {}
