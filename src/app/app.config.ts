export class AppConfig {
  //登录用户
  public static LOGIN_USER_NAME: string = 'loginUser';

  //使用的url
  public static getUrl() {
    return "http://127.0.0.1:8080/air_office";
  }

  //测试环境URL
  public static getDebugUrl() {
    return "http://127.0.0.1:8080/air_office";
  }

  //生产环境URL
  public static getProdUrl() {
    return "http://service:8080";
  }

  //获取设备高度
  public static getWindowHeight() {
    return window.screen.height;
  }

  //获取设备宽度
  public static getWindowWidth() {
    return window.screen.width;
  }
}
