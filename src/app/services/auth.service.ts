import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  
  private getCurrentRoute(){
    let urlParams = this.router.parseUrl(this.router.url)
    
    let currentLink = urlParams.root.children['primary'].segments.map(it => it.path).join('/');
    return {
      queryParams: urlParams.queryParams,
      link: `/${currentLink}`,
    };
  }

  
  onLogin( redirectParam?: any ){
    if (!redirectParam)
      redirectParam = this.getCurrentRoute();

    redirectParam = JSON.stringify(redirectParam);
    localStorage.removeItem('accessToken');
    window.location.href = `https://api.cactusweb.io/api/v2/user/auth?redirect_to=${redirectParam}`;
  }


  loginByQueryParams(){
    
    let data = this.activatedRoute.snapshot.queryParams;
    let redirect_to = JSON.parse(data.redirect_to || '{}');
    if ( data.accessToken ){
      localStorage.setItem( 'accessToken', data.accessToken );
      this.router.navigate( [redirect_to?.link || redirect_to[0]?.link || '/bind'], { queryParams: redirect_to?.queryParams || redirect_to[0]?.queryParams } );
    }else
      window.location.href = 'https://cactussoft.app';
  }
}
