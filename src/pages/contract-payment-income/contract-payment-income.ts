import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

declare let jQuery: any;
declare let laydate: any;

/**
 * 收付款登记 - 收款
 */

@IonicPage({
  name: 'contract-payment-income',
  segment: 'contract-payment-income'
})
@Component({
  selector: 'page-contract-payment-income',
  templateUrl: 'contract-payment-income.html',
})
export class ContractPaymentIncomePage {
  private percent = 20;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractPaymentIncomePage');

    this.initStyle();
  }

  goToContractManage() {
    this.navCtrl.push('contract-manage');
  }

  goToContractPaymentExpend() {
    this.navCtrl.push('contract-payment-expend');
  }

  private initStyle() {

    //执行一个laydate实例
    laydate.render({
      elem: '.txt_sdate' //指定元素
    });

    laydate.render({
      elem: '.txt_edate' //指定元素
    });

    //初始化圆形进度条
    this.initCircle(this.percent);

    //点击列表弹出 金额对话框
    jQuery(".ul_blist li").on("click", function () {
      jQuery(".model").fadeIn();
    });

    //点击取消按钮隐藏 金额对话框
    jQuery(".a_mcancel").on("click", function () {
      jQuery(".model").fadeOut();
    });
  }

//圆形进度条
  private initCircle(percent:number) {
    // var _value = jQuery(".cprogress").attr("data-value");
    jQuery('.cprogress_container').radialIndicator({
      barColor: '#35c8bc',
      barBgColor: '#00a2a0',
      radius: 30,
      barWidth: 7,
      initValue: percent,
      roundCorner: false,
      displayNumber: false,
      percentage: false
    });

    jQuery(".cprogress_container").append("<span>" + percent + "<i>%</i></span>")
  }


}
