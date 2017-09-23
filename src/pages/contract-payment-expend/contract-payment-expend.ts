import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

declare let jQuery: any;
declare let laydate: any;

/**
 * 收付款登记 - 付款
 */

@IonicPage({
  name: 'contract-payment-expend',
  segment: 'contract-payment-expend'
})
@Component({
  selector: 'page-contract-payment-expend',
  templateUrl: 'contract-payment-expend.html',
})
export class ContractPaymentExpendPage {
  private percent = 60;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractPaymentExpendPage');

    this.initStyle();
  }

  goToContractManage() {
    this.navCtrl.push('contract-manage');
  }

  goToContractPaymentIncome() {
    this.navCtrl.push('contract-payment-income');
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
  private initCircle(percent) {
    // let _value = jQuery(".cprogress").attr("data-value");
    // console.log(_value);
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
