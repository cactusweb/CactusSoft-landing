import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ethers } from 'ethers';
import { MintService } from 'src/app/services/mint.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mint-btn',
  templateUrl: './mint-btn.component.html',
  styleUrls: ['./mint-btn.component.scss']
})
export class MintBtnComponent implements OnInit, OnDestroy {

  env = environment

  isConnected: boolean = false;
  proof: any[] = [];


  mintState: number;
  supply: number;
  mintedCount: number;
  showStatus: boolean = false;
  tokenCount: number = 0;


  transactionHash: string = '';

  @Output() onGetMintedCount = new EventEmitter<number>()
  @Output() onGetSupplyCount = new EventEmitter<number>()
  @Output() onSoldOut = new EventEmitter();
  

  loading: boolean = false;

  constructor(
    public mint: MintService,
    private notif: NotificationsService
  ) {
  }

  async ngOnInit() {
    if ( document.readyState != 'complete' )
      window.addEventListener('load', () => this.checkWalletConnectionState())
    else this.checkWalletConnectionState()
  }

  ngOnDestroy(): void {
  }


  checkWalletConnectionState(){
    try{
      this.isConnected = this.mint.isMetaMaskConnected()
      console.log(this.isConnected)
      if ( this.isConnected ){
        this.getData();
        this.getProof()
      }
      else this.onConnectWallet();
    }
    catch{}
  }


  async getData(){
    this.loading = true;

    await this.getMintStatus();
    await this.getMintedCount();
    await this.getSupply();
    await this.getWalletTokenCount()

    this.loading = false;
    console.log(this.tokenCount, this.mintState, this.mintedCount, this.supply )
  }

  async getProof(){

    if ( this.mintState == 2 )
      this.proof = []
    else
      this.proof = await this.mint.getProof( window.ethereum.selectedAddress )

    this.proof = this.proof.map(e => Uint8Array.from(atob(e), c => c.charCodeAt(0)))
  }

  async getWalletTokenCount(){
    let res = await this.mint.getWalletTokenCount(window.ethereum.selectedAddress)
    this.tokenCount = Number(res)
    // this.tokenCount = 1
  }

  async getMintStatus(){
    this.mintState = await this.mint.getMintState()
    this.mintState = Number(this.mintState)

    if ( this.mintState == 3 )
      this.onSoldOut.emit()
  }

  async getSupply(){
    this.supply = await this.mint.getMaxNftCount()
    this.onGetSupplyCount.emit(this.supply)
  }

  async getMintedCount(){
    this.mintedCount = await this.mint.getCurrentNftCount()
    this.onGetMintedCount.emit(this.mintedCount)
  }

  async onMint(){
    this.loading = true;
    if (await this.mint.getCurrentNftCount() === await this.mint.getMaxNftCount()) {
        this.mintedCount = this.supply
        this.loading = false;
        return;
    }


    let res = await this.mint.onMint( this.proof, environment.mintPrice )
    this.loading = false;

    if ( res.status == 'suc' ){
      this.transactionHash = res.res?.hash
      this.showStatus = true;
    }
    if ( res.status == 'err' ) this.notif.generateNotif(res.message)
  }


  async onConnectWallet(){
    let res = await this.mint.onConnect()
    if ( !res ) return;
    this.getData();
    this.getProof()
  }
}
