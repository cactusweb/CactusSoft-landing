import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeFaqComponent } from './components/home-faq/home-faq.component';
import { CactusThreeDimensionalComponent } from './components/cactus-three-dimensional/cactus-three-dimensional.component';
import { ToolCactusScriptsComponent } from './components/tool-cactus-scripts/tool-cactus-scripts.component';
import { ToolDiscordAloComponent } from './components/tool-discord-alo/tool-discord-alo.component';
import { HomeToolsComponent } from './components/home-tools/home-tools.component';
import { HomeFeaturesComponent } from './components/home-features/home-features.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { ZoomImgDirective } from './directives/zoom-img.directive';
import { PricingComponent } from './components/pricing/pricing.component';
import { AboutComponent } from './components/about/about.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { DoxxedComponent } from './components/doxxed/doxxed.component';
import { MintComponent } from './screens/mint/mint.component';
import { NavbarMintComponent } from './components/navbar-mint/navbar-mint.component';
import { FooterMintComponent } from './components/footer-mint/footer-mint.component';
import { MintBlockComponent } from './components/mint-block/mint-block.component';
import { MintTitleComponent } from './components/mint-title/mint-title.component';
import { MintAboutComponent } from './components/mint-about/mint-about.component';
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
    MintComponent,
    NavbarMintComponent,
    FooterMintComponent,
    MintBlockComponent,
    MintTitleComponent,
    MintAboutComponent,
    // MintBtnComponent,
    // PurchaseStatusComponent,
    // BtnTimerComponent,
    // BtnLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
