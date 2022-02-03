import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { MintComponent } from './screens/mint/mint.component';
import { UserAgreementComponent } from './screens/user-agreement/user-agreement.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mint', component: MintComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
