import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-bind',
  templateUrl: './navbar-bind.component.html',
  styleUrls: ['./navbar-bind.component.scss']
})
export class NavbarBindComponent implements OnInit {
  isLoggedIn: boolean = false;

  @Output() onLogout = new EventEmitter()

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.accessToken
  }


  logout(){
    localStorage.removeItem('accessToken')
    this.onLogout.emit();
    this.isLoggedIn = false;
    // this.router.navigate(['/'])
    
  }

}
