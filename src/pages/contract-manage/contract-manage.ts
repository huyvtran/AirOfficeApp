import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * 合同管理
 */
@IonicPage({
  name: 'contract-manage',
  segment: 'contract-manage'
})
@Component({
  selector: 'page-contract-manage',
  templateUrl: 'contract-manage.html',
})
export class ContractManagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractManagePage');
  }

  goToHomePage() {
    this.navCtrl.push('home');
  }

  goToContractMine() {
    this.navCtrl.push('contract-mine');
  }

  goToContractApprove() {
    this.navCtrl.push('contract-approve');
  }

  goToContractApproveDetail(contractId) {
    this.navCtrl.push('contract-approve', {contractId: contractId});
  }

  goToContractRegisterIncome() {
    this.navCtrl.push('contract-register-income');
  }

  goToContractPaymentIncome() {
    this.navCtrl.push('contract-payment-income');
  }

}
