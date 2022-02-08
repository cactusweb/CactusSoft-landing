import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }


  getLicenseData(){
    let headers = new HttpHeaders().set('authorization', `Bearer ${localStorage.accessToken}`)
    return this.http.get(`https://api.cactusweb.io/api/v2/user/license/CactusSoft`, { headers: headers })
  }

  getMe(){
    let headers = new HttpHeaders().set('authorization', `Bearer ${localStorage.accessToken}`)
    return this.http.get<{avatar: string, full_name: string}>(`https://api.cactusweb.io/api/v2/user/@me`, { headers: headers })
  }
  
  async getNonce(walletAddress: string) {
    let res: any = await this.http.get(`${this.apiUrl}/user/getNonce?publicAddress=${walletAddress}`).toPromise()
    return res.nonce || "";
  }

  createKey(signature: string, walletAddress: string){
    let headers = new HttpHeaders().set('authorization', `Bearer ${localStorage.accessToken}`)
    return this.http.post(`${this.apiUrl}/user/createKey`, { walletAddress, signature }, { headers: headers })
  }


// const onVerify = async () => {
//     const address = localStorage.getItem("wallet-address")

//     const nonce = await getNonce(address);

//     const signature = await signer.signMessage(nonce);

//     const res = await sendCreateKey(signature, address);

// }
}
