import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * 我的合同 - 流转进度
 */

@IonicPage({
  name: 'contract-mine-progress',
  segment: 'contract-mine-progress'
})
@Component({
  selector: 'page-contract-mine-progress',
  templateUrl: 'contract-mine-progress.html',
})
export class ContractMineProgressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractMineProgressPage');
  }

  goToBackPage() {
    //如果可以返回上一页，则执行pop
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop({duration: 100});
    }
  }

}
