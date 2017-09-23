import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare let jQuery: any;
declare let laydate: any;

/**
 * 合同审批 - 支出合同
 */

@IonicPage({
  name:'contract-approve-expend',
  segment:'contract-approve-expend'
})
@Component({
  selector: 'page-contract-approve-expend',
  templateUrl: 'contract-approve-expend.html',
})
export class ContractApproveExpendPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractApproveExpendPage');

    this.initStyle();
  }

  goToContractApproveIncome(){
    this.navCtrl.push('contract-approve-income');
  }

  goToContractApprove() {
    this.navCtrl.push('contract-approve');
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
