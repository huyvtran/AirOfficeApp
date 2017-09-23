import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
/**
 * 合同审核
 */
@IonicPage({
  name: 'contract-approve',
  segment: 'contract-approve'
})
@Component({
  selector: 'page-contract-approve',
  templateUrl: 'contract-approve.html',
})
export class ContractApprovePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractApprovePage');
  }

  goToContractManage() {
    this.navCtrl.push('contract-manage');
  }

  goToContractApproveIncome(contractId){
    this.navCtrl.push('contract-approve-income',{contractId:contractId});
  }

}
