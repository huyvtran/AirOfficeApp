import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

declare let jQuery: any;

@IonicPage({
  name: 'setting',
  segment: 'setting'
})
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
    this.initToggleStyle();
  }

  goToHomePage() {
    this.navCtrl.push('home');
  }

  logOut() {
    let confirm = this.alertCtrl.create({
      title: '提示',
      message: '确认退出登录?',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确认',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push('login');
          }
        }
      ]
    });
    confirm.present();
  }

  private initToggleStyle() {
    jQuery(".toggle").on("click", function () {

      if (jQuery(this).hasClass("on")) {
        jQuery(this).removeClass("on");
        jQuery(this).addClass("off");
      } else {
        jQuery(this).removeClass("off");
        jQuery(this).addClass("on");
      }

    });
  }

  goToPersonCenter(){
    this.navCtrl.push('person-center');
  }


}
