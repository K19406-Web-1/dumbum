import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import localeVN  from '@angular/common/locales/vi';

import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './banner/banner.component';
import { ProductTemplateComponent } from './product-template/product-template.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PolicyComponent } from './policy/policy.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SubscribeInformComponent } from './subscribe-inform/subscribe-inform.component';
import { NavigationListComponent } from './navigation-list/navigation-list.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { DieukhoandvComponent } from './dieukhoandv/dieukhoandv.component';
import { ChinhsachComponent } from './chinhsach/chinhsach.component';
import { HistoryDumbumComponent } from './historydumbum/historydumbum.component';
import { QuantityInputComponent } from './quantity-input/quantity-input.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentComponent } from './payment/payment.component';
import { BuyingComponent } from './buying/buying.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeVN, 'vi-VN');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    BannerComponent,
    ProductTemplateComponent,
    ProductDetailComponent,
    ProductListComponent,
    SignInComponent,
    SpinnerComponent,
    NavigationListComponent,
    MessageBoxComponent,
    SubscribeInformComponent,
    ContactComponent,
    IntroPageComponent,
    CartComponent,
    CheckoutComponent,
    DieukhoandvComponent,
    ChinhsachComponent,
    PolicyComponent,
    HistoryDumbumComponent,
    QuantityInputComponent,
    DeliveryComponent,
    PaymentComponent,
    BuyingComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'product-detail', component: ProductDetailComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'policy', component: PolicyComponent },
      { path: 'contact-us', component: ContactComponent },
      { path: 'intro-page', component: IntroPageComponent },
      { path: 'subscribe-inform', component: SubscribeInformComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'dieukhoandv', component: DieukhoandvComponent },
      { path: 'chinhsach', component: ChinhsachComponent },
      { path: 'historydumbum', component: HistoryDumbumComponent },
      { path: 'delivery', component: DeliveryComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'buying', component: BuyingComponent },
    ]),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'vi-VN'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'VND'
    },
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: []
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
