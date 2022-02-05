import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ethers } from 'ethers';
import { MintService } from 'src/app/services/mint.service';
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

  @Output() onGetMintedCount = new EventEmitter<number>()
  @Output() onGetSupplyCount = new EventEmitter<number>()
  

  loading: boolean = false;

  constructor(
    public mint: MintService
  ) {
  }

  async ngOnInit() {
      await this.getData();
  
      if ( document.readyState != 'complete' )
        window.addEventListener('load', () => this.checkWalletConnectionState())
      else this.checkWalletConnectionState()
  }

  ngOnDestroy(): void {
  }


  checkWalletConnectionState(){
    this.isConnected = this.mint.isMetaMaskConnected()
    if ( this.isConnected ) this.getProof()
    else this.onConnectWallet();
  }


  async getData(){
    this.loading = true;
    await this.getMintStatus();
    await this.getMintedCount();
    await this.getSupply();
    this.loading = false;
  }

  async getProof(){
    this.loading = true;

    if ( this.mintState == 2 )
      this.proof = []
    else
      this.proof = await this.mint.getProof( window.ethereum.selectedAddress )

    this.loading = false;
  }

  async getMintStatus(){
    this.mintState = await this.mint.getMintState()
    this.mintState = Number(this.mintState)
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

    if ( res.status == 'suc' ) this.showStatus = true;
  }


  onConnectWallet(){
    if ( !this.mint.onConnect() ) return;
    
    this.getProof()
  }
}
