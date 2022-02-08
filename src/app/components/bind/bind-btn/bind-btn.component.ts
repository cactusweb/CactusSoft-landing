import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { MintService } from 'src/app/services/mint.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-bind-btn',
  templateUrl: './bind-btn.component.html',
  styleUrls: ['./bind-btn.component.scss']
})
export class BindBtnComponent implements OnInit {
  isConnected: boolean = false;
  loading: boolean = false;

  @Output() onErr = new EventEmitter<number>()

  constructor(
    public mint: MintService,
    private http: HttpService,
    private notif: NotificationsService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    if ( document.readyState != 'complete' )
      window.addEventListener('load', () => this.checkWalletConnectionState())
    else this.checkWalletConnectionState()
  }

  

  checkWalletConnectionState(){
    try{
      this.isConnected = this.mint.isMetaMaskConnected()
      if (this.isConnected){
        this.createKey()
      }
      else this.onConnectWallet();
    }
    catch{
      this.notif.generateNotif('Smth went wrong')
    }
  }


  
  async onConnectWallet(){
    let res = await this.mint.onConnect()
    if ( !res ) return;
    this.createKey();
  }

  async createKey(){
    this.loading = true;
    try{
      let nonce = await this.http.getNonce(window.ethereum.selectedAddress)
      // let nonce = "wewefwefewfwef"
      let signature = await this.mint.signer.signMessage(nonce);
      this.http.createKey( signature, window.ethereum.selectedAddress )
        .pipe(take(1))
        .subscribe(
          res => window.location.href = 'https://dash.cactussoft.io/dashboard',
          err => {
            let errCode = err?.error?.status
            if ( errCode === undefined ){
              this.notif.generateNotif('Smth went wrong')
              return
            }

            switch (errCode){
              case -1: 
                this.notif.generateNotif('You are not authorized')            
                this.auth.onLogin()
                break;
              case -2: 
                this.notif.generateNotif('Wrong signature'); 
                break;
              case -3: 
                this.notif.generateNotif('You are already have license'); 
                window.location.href = 'https://dash.cactussoft.io/dashboard';
                break;
              case -4:
                this.notif.generateNotif('This wallet is already licensed')
                break;
              case -5:
                this.notif.generateNotif(`You don't have the CactusSoft+ NFT`)
                this.onErr.emit(-5)
                break;

              case -6:
                this.notif.generateNotif(`Can't create license`)
                break;
              case -7:
                this.notif.generateNotif(`Can't bind license to discord`)
                break
            }
          }
        )
    }
    catch(e){
      this.notif.generateNotif( e?.message || 'Smth went wrong')
    }
    this.loading = false;
  }

}
