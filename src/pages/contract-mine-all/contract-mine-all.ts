import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 我的合同 - 全部
 */

@IonicPage({
  name:'contract-mine-all',
  segment:'contract-mine-all'
})
@Component({
  selector: 'page-contract-mine-all',
  templateUrl: 'contract-mine-all.html',
})
export class ContractMineAllPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractMineAllPage');
  }

  goToContractMine() {
    this.navCtrl.push('contract-mine');
  }

  goToContractMineDetail(contractId){
    this.navCtrl.push('contract-mine-detail',{contractId:contractId});
  }

}
