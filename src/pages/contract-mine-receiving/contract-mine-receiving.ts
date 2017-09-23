import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 我的合同 - 收付款中
 */

@IonicPage({
  name:'contract-mine-receiving',
  segment:'contract-mine-receiving'
})
@Component({
  selector: 'page-contract-mine-receiving',
  templateUrl: 'contract-mine-receiving.html',
})
export class ContractMineReceivingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractMineReceivingPage');
  }

  goToContractMine() {
    this.navCtrl.push('contract-mine');
  }

  goToContractMineDetail(contractId){
    this.navCtrl.push('contract-mine-detail',{contractId:contractId});
  }

}
