import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TieuDeComponent } from './tieu-de/tieu-de.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TranComponent } from './tran/tran.component';

@NgModule({
  declarations: [
    AppComponent,
    TieuDeComponent,
    HeaderComponent,
    TranComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    RouterModule.forRoot([
      { path: 'tieu-de', component: TieuDeComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
