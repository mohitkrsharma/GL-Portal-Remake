import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment,api_url } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  rootURL:any;
  constructor(public http:HttpClient) {
    this.rootURL = api_url;
  }

  /*service method for getting background image*/
  getBackGroundImage(){
    let header = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS',
      'Accept': 'image/gif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      'sec-fetch-mode':'no-cors',
    }
    return this.http.get(`${this.rootURL}/login/cors/img/backgrounds/login/28.jpg?1907c5373b7`,{headers: header});
  }

  /*service method for login functionality*/
  login(username:any,password:any){
    environment.login = username;
    environment.password = password;
    let headers = {
      'Accept': '*/*'
    }
    return this.http.post(`${this.rootURL}/api/oauth/v2.0/authorize/`,environment,{headers});
  }
}
