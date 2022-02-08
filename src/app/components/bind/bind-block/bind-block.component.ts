import { Component, OnInit, Output } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-bind-block',
  templateUrl: './bind-block.component.html',
  styleUrls: ['./bind-block.component.scss']
})
export class BindBlockComponent implements OnInit {
  user: { avatar: string, full_name: string }

  errStatus: number;

  constructor(
    private http: HttpService,
    private auth: AuthService,
    private notif: NotificationsService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.http.getMe()
      .pipe(
        take(1), 
      )
      .subscribe(
        res => this.user = res,
        err => {
          if (err.error.status == 401){
            this.notif.generateNotif('You are not authorized')            
            this.auth.onLogin()
          }
        }
      )
  }

}
