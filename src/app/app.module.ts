import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TieuDeComponent } from './tieu-de/tieu-de.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './banner/banner.component';
import { ProductTemplateComponent } from './product-template/product-template.component';

@NgModule({
  declarations: [
    AppComponent,
    TieuDeComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    BannerComponent,
    ProductTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatTabsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
