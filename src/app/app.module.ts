import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { BurgersComponent } from './pages/burgers/burgers.component';
import { BurgersDetailsComponent } from './pages/burgers-details/burgers-details.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { BasketComponent } from './pages/basket/basket.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { DiscountDetailsComponent } from './pages/discount-details/discount-details.component';
import { CareerComponent } from './pages/career/career.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { MenuComponent } from './components/menu/menu.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { BasketDetailsComponent } from './components/basket-details/basket-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BurgersComponent,
    BurgersDetailsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    BasketComponent,
    DiscountComponent,
    DiscountDetailsComponent,
    CareerComponent,
    DeliveryComponent,
    MenuComponent,
    PrivacyComponent,
    AboutComponent,
    ContactsComponent,
    BasketDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
