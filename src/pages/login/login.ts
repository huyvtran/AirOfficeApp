import {Component} from '@angular/core';
import {IonicPage, NavController, LoadingController, AlertController, NavParams} from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {StorageServiceProvider} from "../../providers/storage-service/storage-service";
import {AppConfig} from "../../app/app.config";

@IonicPage({
  name: 'login',
  segment: 'login'
})

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserServiceProvider, StorageServiceProvider]
})
export class LoginPage {

  private userInfo: any = {
    username: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
              public alertCtrl: AlertController, public navParams: NavParams,
              public userService: UserServiceProvider, public storageService: StorageServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    console.log('username:' + this.userInfo.username);
    console.log('password:' + this.userInfo.password);

    if (!Boolean(this.userInfo.username)) {
      let alert = this.alertCtrl.create({
        title: '提示',
        subTitle: '请输入用户名',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    if (!Boolean(this.userInfo.password)) {
      let alert = this.alertCtrl.create({
        title: '提示',
        subTitle: '请输入密码',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let loader = this.loadingCtrl.create({
      content: "登录中..."
    });
    loader.present();

    this.userService.login(this.userInfo.username, this.userInfo.password).then(data => {
      console.log(data);
      loader.dismiss();
      //将登陆的用户信息保存到本地
      this.storageService.write(AppConfig.LOGIN_USER_NAME, data);
      this.navCtrl.push('home');
    }, err => {
      loader.dismiss();
      let alert = this.alertCtrl.create({
        title: '提示',
        subTitle: '登录失败!原因：' + err,
        buttons: ['OK']
      });
      alert.present();
      console.log('user login fail...' + err);
    });

  }

  test(){
    this.navCtrl.push('home');
  }

}
