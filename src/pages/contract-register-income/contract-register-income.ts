import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FileTransfer, FileTransferObject, FileUploadOptions} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';

declare let jQuery: any;
declare let laydate: any;

/**
 * 合同流转登记-收入合同
 */

@IonicPage({
  name: 'contract-register-income',
  segment: 'contract-register-income'
})
@Component({
  selector: 'page-contract-register-income',
  templateUrl: 'contract-register-income.html',
  providers: [FileTransfer, File]
})
export class ContractRegisterIncomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private transfer: FileTransfer,
              private file: File) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractRegisterIncomePage');

    this.initStyle();
  }

  goToContractManage() {
    this.navCtrl.push('contract-manage');
  }

  goToContractRegisterExpend() {
    this.navCtrl.push('contract-register-expend',null,{duration:500});
  }

  private initStyle() {
    console.log('initStyle');

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

  upload() {
    // ionic 官方文档例子漏写了这句话
    // http://ionicframework.com/docs/native/file-transfer/
    //
    const fileTransfer: FileTransferObject = this.transfer.create();
    // 更多的 Options 可以点进去自己看看，不懂的就谷歌翻译他的注释
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'name.jpg',  // 文件类型
      headers: {},
      params: {}    // 如果要传参数，写这里
    };

    fileTransfer.upload('<file path>', '<api endpoint>', options)
      .then((data) => {
        // success
      }, (err) => {
        // error
      })
  }


}
