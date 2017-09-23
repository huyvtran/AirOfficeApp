import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare let jQuery:any;
declare let laydate: any;

/**
 * 我的合同
 */

@IonicPage({
  name:'contract-mine',
  segment:'contract-mine'
})
@Component({
  selector: 'page-contract-mine',
  templateUrl: 'contract-mine.html',
})
export class ContractMinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractMinePage');

    this.initStyle();
  }

  goToContractManage() {
    this.navCtrl.push('contract-manage');
  }

  goToContractMineFlowing(){
    this.navCtrl.push('contract-mine-flowing');
  }

  goToContractMineAll(){
    this.navCtrl.push('contract-mine-all');
  }

  goToContractMineFinished(){
    this.navCtrl.push('contract-mine-finished');
  }

  goToContractMineReceiving(){
    this.navCtrl.push('contract-mine-receiving');
  }

  goToContractMineDetail(contractId){
    this.navCtrl.push('contract-mine-detail',{contractId:contractId});
  }

  private initStyle() {
    //执行一个laydate实例
    laydate.render({
      elem: '.txt_sdate' //指定元素
    });

    laydate.render({
      elem: '.txt_edate' //指定元素
    });
  }

}
