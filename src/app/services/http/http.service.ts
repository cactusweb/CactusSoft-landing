import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  headers: HttpHeaders;
  url = environment.apiUrl;
  ownerName = environment.ownerName;


  constructor(
    private http: HttpClient
  ) {
   }

  setHeaders(){
    let token = localStorage.getItem('accessToken');
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }


  
  async bind( data ){
    this.setHeaders();
    return await this.http.post( `${this.url}/bind`, data, { headers: this.headers } ).toPromise();
  }

  async unbind( licenseId ){
    this.setHeaders();
    return await this.http.get( `${this.url}/license/${licenseId}/unbind`, { headers: this.headers } ).toPromise();
  }
  
  async getLicense(){
    this.setHeaders();
    return await this.http.get( `${this.url}/${this.ownerName}/license`, { headers: this.headers } ).toPromise();
  }

  async getUser(){
    this.setHeaders();
    return await this.http.get( `${this.url}/@me`, { headers: this.headers } ).toPromise();
  }

  getLocalUser(){
    return JSON.parse(localStorage.getItem( 'userData' ));
  }

  async resetActivations( licenseId: string ){
    this.setHeaders();
    return await this.http.get( `${this.url}/reset/${licenseId}`, { headers: this.headers } ).toPromise();
  }


  async getDrop( password ){
    this.setHeaders();
    return await this.http.get( `${this.url}/${this.ownerName}/purchase?password=${password}`, { headers: this.headers } ).toPromise();
  }

  async purchaseDrop( data, password ){
    this.setHeaders();
    return await this.http.post( `${this.url}/${this.ownerName}/init-payment?password=${password}`, data, { headers: this.headers } ).toPromise();
  }


  

  async startSubscribe( licenseId ){
    this.setHeaders();
    return this.http.get( `${this.url}/start-auto-payment/${licenseId}`, { headers: this.headers } ).toPromise();
  }

  async stopSubscribe( licenseId ){
    this.setHeaders();
    return this.http.get( `${this.url}/stop-auto-payment/${licenseId}`, { headers: this.headers } ).toPromise();
  }

}
