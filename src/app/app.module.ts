import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeFaqComponent } from './components/home-faq/home-faq.component';
import { CactusThreeDimensionalComponent } from './components/cactus-three-dimensional/cactus-three-dimensional.component';
import { ToolCactusScriptsComponent } from './components/tool-cactus-scripts/tool-cactus-scripts.component';
import { ToolDiscordAloComponent } from './components/tool-discord-alo/tool-discord-alo.component';
import { FeaturesComponent } from './components/features/features.component';
import { HomeToolsComponent } from './components/home-tools/home-tools.component';
import { HomeFeaturesComponent } from './components/home-features/home-features.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { HomeFaqMobileComponent } from './components/home-faq-mobile/home-faq-mobile.component';

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
    FeaturesComponent,
    HomeToolsComponent,
    HomeFeaturesComponent,
    HomeFooterComponent,
    HomeFaqMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxMaskModule.forRoot(/*options*/),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
