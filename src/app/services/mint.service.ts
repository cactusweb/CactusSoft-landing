import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contract, ethers, Signer } from 'ethers';
import { environment } from 'src/environments/environment';


declare global {
  interface Window { ethereum: any }
}

@Injectable({
  providedIn: 'root'
})
export class MintService {
  apiUrl = environment.apiUrl;
  provider;
  contract: Contract
  public signer: Signer

  constructor(
    private http: HttpClient
  ) {
    if ( !window.ethereum ) return

    this.provider = new ethers.providers.Web3Provider(window.ethereum);
    this.contract = new ethers.Contract(environment.contractAddress, environment.abiMint, this.provider.getSigner())
    this.signer = this.provider.getSigner();
  
  }

  async getCurrentNftCount() {
    return Number((await this.contract.totalSupply()).toString());
  }

  async getMaxNftCount() {
    return Number((await this.contract.maxSupply()).toString());
  }

  async getMintState() {
    return await this.contract.state();
  }


  isMetaMaskConnected() {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.selectedAddress);
  }

  
  async getProof(walletAddress: string) {
    let res: any;
    await this.http.get(`${this.apiUrl}/proof/get?address=${walletAddress}`).toPromise()
      .then( (w: any) => res = w.proof )
      .catch( e => res = [] )

    return res;
  }



  async getBalance() {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const balance = await this.provider.getBalance(account);
    const formattedBalance = ethers.utils.formatEther(balance);

    return formattedBalance
  }



  async onConnect() {
    try {
        // эта штука откроет окно метамаска, где запросит доступ на чтение кошелька
        return await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
        return false;
    }
    
  }


  async getWalletTokenCount(address: string) {
    return parseInt(await this.contract.balanceOf(address))
  }

  
  async onMint(proof: any[], price: string): Promise<{ status: 'err' | 'suc'; message?: string, res?: any }> {

    try {
        const result = await this.contract.mint(proof, {
            value: ethers.utils.parseEther(price)
        });
        console.log(result)
        return { status: 'suc', res: result };
    } catch (e) {
        return { status: 'err', message: `${e.error?.code || e.code}: ${e.error?.message || e.message}` }
    }
  }
}
