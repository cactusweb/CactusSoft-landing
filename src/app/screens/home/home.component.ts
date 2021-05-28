import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router
  ){
    if ( this.router.url == '' || this.router.url == '/' || this.router.url[1] == '?' )
      return;

    window.location.href = `https://dash.cactussoft.io/${this.router.url}`
  }

}
