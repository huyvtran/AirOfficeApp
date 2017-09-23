import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * 我的合同 - 详情
 */

@IonicPage({
  name: 'contract-mine-detail',
  segment: 'contract-mine-detail'
})
@Component({
  selector: 'page-contract-mine-detail',
  templateUrl: 'contract-mine-detail.html',
})
export class ContractMineDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractMineDetailPage');
  }

  goToContractMineProgress() {
    this.navCtrl.push('contract-mine-progress');
  }

  goToBackPage() {
    //如果可以返回上一页，则执行pop
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop({duration: 100});
    }
  }

}
