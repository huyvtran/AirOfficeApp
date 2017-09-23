import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 我的合同-流转中
 */

@IonicPage({
  name:'contract-mine-flowing',
  segment:'contract-mine-flowing'
})
@Component({
  selector: 'page-contract-mine-flowing',
  templateUrl: 'contract-mine-flowing.html',
})
export class ContractMineFlowingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractMineFlowingPage');
  }

  goToContractMine() {
    this.navCtrl.push('contract-mine');
  }

  goToContractMineDetail(contractId){
    this.navCtrl.push('contract-mine-detail',{contractId:contractId});
  }

}
