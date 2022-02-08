import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { HomeFaqComponent } from './components/home/home-faq/home-faq.component';
import { CactusThreeDimensionalComponent } from './components/home/cactus-three-dimensional/cactus-three-dimensional.component';
import { ZoomImgDirective } from './directives/zoom-img.directive';
import { AboutComponent } from './components/home/about/about.component';
import { BindKeyByNftComponent } from './screens/bind-key-by-nft/bind-key-by-nft.component';
import { NavbarBindComponent } from './components/bind/navbar-bind/navbar-bind.component';
import { LoginComponent } from './screens/login/login.component';
import { BindBtnComponent } from './components/bind/bind-btn/bind-btn.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BtnLoaderComponent } from './components/btn-loader/btn-loader.component';
import { BindErrorViewComponent } from './components/bind/bind-error-view/bind-error-view.component';
import { DoxxedComponent } from './components/home/doxxed/doxxed.component';
import { HomeFeaturesComponent } from './components/home/home-features/home-features.component';
import { HomeFooterComponent } from './components/home/home-footer/home-footer.component';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';
import { HomeToolsComponent } from './components/home/home-tools/home-tools.component';
import { BindBlockComponent } from './components/bind/bind-block/bind-block.component';
import { FooterBindComponent } from './components/bind/footer-bind/footer-bind.component';
import { PricingComponent } from './components/home/pricing/pricing.component';
import { RoadmapComponent } from './components/home/roadmap/roadmap.component';
import { ToolCactusScriptsComponent } from './components/home/tool-cactus-scripts/tool-cactus-scripts.component';
import { ToolDiscordAloComponent } from './components/home/tool-discord-alo/tool-discord-alo.component';
// import { MintComponent } from './screens/mint/mint.component';
// import { NavbarMintComponent } from './components/navbar-mint/navbar-mint.component';
// import { FooterMintComponent } from './components/footer-mint/footer-mint.component';
// import { MintBlockComponent } from './components/mint-block/mint-block.component';
// import { MintTitleComponent } from './components/mint-title/mint-title.component';
// import { MintAboutComponent } from './components/mint-about/mint-about.component';
// import { MintBtnComponent } from './components/mint-btn/mint-btn.component';
// import { PurchaseStatusComponent } from './components/purchase-status/purchase-status.component';
// import { BtnTimerComponent } from './components/btn-timer/btn-timer.component';
// import { BtnLoaderComponent } from './components/btn-loader/btn-loader.component';
// import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    NavbarComponent,
    HomeFaqComponent,
    CactusThreeDimensionalComponent,
    ToolCactusScriptsComponent,
    ToolDiscordAloComponent,
    HomeToolsComponent,
    HomeFeaturesComponent,
    HomeFooterComponent,
    ZoomImgDirective,
    PricingComponent,
    AboutComponent,
    RoadmapComponent,
    DoxxedComponent,
    BindKeyByNftComponent,
    NavbarBindComponent,
    LoginComponent,
    BindBtnComponent,
    BtnLoaderComponent,
    BindErrorViewComponent,
    BindBlockComponent,
    FooterBindComponent,
    // MintComponent,
    // FooterMintComponent,
    // NavbarMintComponent,
    // MintBlockComponent,
    // MintTitleComponent,
    // MintAboutComponent,
    // MintBtnComponent,
    // PurchaseStatusComponent,
    // BtnTimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
