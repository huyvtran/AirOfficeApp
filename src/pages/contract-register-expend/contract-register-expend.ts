import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare let jQuery:any;
declare let laydate: any;

/**
 * 合同流转登记-支出合同
 */


@IonicPage({
  name:'contract-register-expend',
  segment:'contract-register-expend'
})
@Component({
  selector: 'page-contract-register-expend',
  templateUrl: 'contract-register-expend.html',
})
export class ContractRegisterExpendPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractRegisterExpendPage');

    this.initStyle();
  }

  goToContractManage() {
    this.navCtrl.push('contract-manage');
  }

  goToContractRegisterIncome(){
    this.navCtrl.push('contract-register-income');
  }

  private initStyle() {
    //执行一个laydate实例
    laydate.render({
      elem: '.txt_sdate' //指定元素
    });

    console.log('bind success one');

    laydate.render({
      elem: '.txt_edate' //指定元素
    });

    console.log('bind success two');
  }

}
