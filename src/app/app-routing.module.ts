import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindKeyByNftComponent } from './screens/bind-key-by-nft/bind-key-by-nft.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bind', component: BindKeyByNftComponent },
  { path: 'login', component: LoginComponent }
  // { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
