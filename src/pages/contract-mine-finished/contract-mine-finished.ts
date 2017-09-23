import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 我的合同 - 已完成
 */

@IonicPage({
  name:'contract-mine-finished',
  segment:'contract-mine-finished'
})
@Component({
  selector: 'page-contract-mine-finished',
  templateUrl: 'contract-mine-finished.html',
})
export class ContractMineFinishedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractMineFinishedPage');
  }

  goToContractMine() {
    this.navCtrl.push('contract-mine');
  }

  goToContractMineDetail(contractId){
    this.navCtrl.push('contract-mine-detail',{contractId:contractId});
  }

}
