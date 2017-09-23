import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseServiceProvider {

  constructor(public http: Http) {
    console.log('Hello BaseServiceProvider Provider');
  }

  get(url) {
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        });
    });
  }

  post(url, paramObj) {
    let header = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    // header.append('Content-Type', 'application/x-www-form-urlencoded');
    // header.append('Access-Control-Allow-Origin', '*');
    // header.append('Access-Control-Allow-Headers', 'Authentication');
    let options = new RequestOptions({headers: header});
    let param = this.toQueryString(paramObj);
    console.log("param:" + param);
    return new Promise((resolve, reject) => {
      this.http.post(url, param, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          if (Boolean(data)) {
            resolve(data);
          } else {
            reject('服务器未响应');
          }
        }, err => {
          console.log(err);
          reject(err);
        })
    });
  }

  //参数序列化
  private toQueryString(obj) {
    let result = [];
    for (let key in obj) {
      key = encodeURIComponent(key);
      let values = obj[key];
      if (values && values.constructor == Array) {
        let queryValues = [];
        for (let i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(this.toQueryPair(key, value));
        }
        result = result.concat(queryValues);
      } else {
        result.push(this.toQueryPair(key, values));
      }
    }
    return result.join('&');
  }

  //参数序列化
  private toQueryPair(key, value) {
    if (typeof value == 'undefined') {
      return key;
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  }

}
