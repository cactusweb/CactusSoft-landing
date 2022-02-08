import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { finalize, take } from 'rxjs/operators'

@Component({
  selector: 'app-bind-key-by-nft',
  templateUrl: './bind-key-by-nft.component.html',
  styleUrls: ['./bind-key-by-nft.component.scss']
})
export class BindKeyByNftComponent implements OnInit {
  isLoggedIn: boolean = false;
  loading: boolean = false;

  constructor(
    public auth: AuthService,
    private http: HttpService
  ) {
    this.isLoggedIn = !!localStorage.accessToken
  }

  ngOnInit(): void {
    if ( this.isLoggedIn )
      this.getLicense()
  }

  getLicense(){
    this.loading = true;

    this.http.getLicenseData()
      .pipe(
        take(1),
        finalize(() => this.loading = false)
      )
      .subscribe(
        res => window.location.href = 'https://dash.cactussoft.io/dashboard',
        err => {}
      )
      
  }

}
