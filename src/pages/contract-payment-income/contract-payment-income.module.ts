import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractPaymentIncomePage } from './contract-payment-income';

@NgModule({
  declarations: [
    ContractPaymentIncomePage,
  ],
  imports: [
    IonicPageModule.forChild(ContractPaymentIncomePage),
  ],
})
export class ContractPaymentIncomePageModule {}
