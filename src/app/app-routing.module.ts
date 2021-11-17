import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
import { LoginComponent } from './pages/login/login.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';

import { PointsComponent } from './pages/points/points.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'burgers', component: BurgersComponent},
  {path: 'burgers/:name', component: BurgersDetailsComponent},
  {path: 'products/:category', component: ProductsComponent},
  {path: 'products/:category/:name', component: ProductDetailsComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'discount', component: DiscountComponent},
  {path: 'discount/:name/:id', component: DiscountDetailsComponent},
  {path: 'career', component: CareerComponent},
  {path: 'delivary', component: DeliveryComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactsComponent},
  {path: 'basketDetails', component: BasketDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'order-history', component: OrderHistoryComponent},
  
  {path: 'points', component: PointsComponent},
  {path: 'admin', component: AdminComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'discount'},
    {path: 'discount', component: AdminDiscountComponent},
    {path: 'category', component: AdminCategoryComponent},
    {path: 'product', component: AdminProductComponent},
    {path: 'order', component: AdminOrderComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
