import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

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
import { UserAgreementComponent } from './screens/user-agreement/user-agreement.component';
import { ZoomImgDirective } from './directives/zoom-img.directive';
import { PricingComponent } from './components/pricing/pricing.component';
import { AboutComponent } from './components/about/about.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';

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
    UserAgreementComponent,
    ZoomImgDirective,
    PricingComponent,
    AboutComponent,
    RoadmapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
