import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from'@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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

import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminDiscountComponent } from './admin/admin-discount/admin-discount.component';
import { from } from 'rxjs';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { PointsComponent } from './pages/points/points.component';


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
    BasketDetailsComponent,
    AdminComponent,
    AdminCategoryComponent,
    AdminProductComponent,
    AdminOrderComponent,
    AdminDiscountComponent,
    LoginComponent,
    
    OrderHistoryComponent,
    PointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
