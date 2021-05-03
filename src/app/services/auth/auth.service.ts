import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers: Headers;
  url = environment.apiUrl;

  constructor(
    public router: Router,
    private http: HttpClient
  ) { }

  async discordAuth( redirectParam: string = 'purchase' ){
    // return await this.http.get( 
      window.location.href = 
      `${this.url}/auth?redirect_to=${redirectParam}` 
      // ).toPromise();
  }

  async logout(){
    localStorage.removeItem( 'accessToken' );
    localStorage.removeItem( 'member' );
    this.router.navigate( ['/'] );
  }
}
