import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * 个人中心
 */

@IonicPage({
  name: 'person-center',
  segment: 'person-center'
})
@Component({
  selector: 'page-person-center',
  templateUrl: 'person-center.html',
})
export class PersonCenterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonCenterPage');
  }

  goToBackPage() {
    //如果可以返回上一页，则执行pop
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop({duration: 100});
    }
  }

  goToSetting(){
    this.navCtrl.push('setting');
  }

}
