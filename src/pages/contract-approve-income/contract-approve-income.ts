import {Component} from '@angular/core';
import {IonicPage, NavController, App, NavParams} from 'ionic-angular';
import {FileTransfer, FileTransferObject, FileUploadOptions} from '@ionic-native/file-transfer';
import {FileOpener} from '@ionic-native/file-opener';
import {File} from '@ionic-native/file';

declare let jQuery: any;
declare let laydate: any;

/**
 * 合同审批 - 收入合同
 */

@IonicPage({
  name: 'contract-approve-income',
  segment: 'contract-approve-income'
})
@Component({
  selector: 'page-contract-approve-income',
  templateUrl: 'contract-approve-income.html',
  providers: [FileTransfer, File, FileOpener]
})
export class ContractApproveIncomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, private transfer: FileTransfer,
              private file: File, private fileOpener: FileOpener) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractApproveIncomePage');

    this.initStyle();
  }

  goToContractApprove() {
    this.navCtrl.push('contract-approve');
  }

  goToContractApproveExpend() {
    this.navCtrl.push('contract-approve-expend');
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

  //下载文件的方法
  download() {
    const url = 'http://www.example.com/file.pdf';
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
      this.openFile(entry);
    }, (error) => {
      // handle error
    });

    // 进度
    fileTransfer.onProgress(progressEvent => {
      if (progressEvent.lengthComputable) {
        // 下载过程会一直打印，完成的时候会显示 1
        console.log(progressEvent.loaded / progressEvent.total);
      } else {

      }
    });

  }

  //打开文件的方法
  openFile(entry) {
    this.fileOpener.open(entry.nativeURL, this.getFileMimeType(this.getFileType("test")))
      .then(() => {
        console.log('打开成功');
      })
      .catch(() => {
        console.log('打开失败');
      });
  }

  getFileMimeType(fileType: string): string {
    let mimeType: string = '';

    switch (fileType) {
      case 'txt':
        mimeType = 'text/plain';
        break;
      case 'docx':
        mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;
      case 'doc':
        mimeType = 'application/msword';
        break;
      case 'pptx':
        mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        break;
      case 'ppt':
        mimeType = 'application/vnd.ms-powerpoint';
        break;
      case 'xlsx':
        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        break;
      case 'xls':
        mimeType = 'application/vnd.ms-excel';
        break;
      case 'zip':
        mimeType = 'application/x-zip-compressed';
        break;
      case 'rar':
        mimeType = 'application/octet-stream';
        break;
      case 'pdf':
        mimeType = 'application/pdf';
        break;
      case 'jpg':
        mimeType = 'image/jpeg';
        break;
      case 'png':
        mimeType = 'image/png';
        break;
      default:
        mimeType = 'application/' + fileType;
        break;
    }
    return mimeType;
  }

  getFileType(fileName: string): string {
    return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();
  }

}
