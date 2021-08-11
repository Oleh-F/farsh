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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'burgers', component: BurgersComponent},
  {path: 'burgers/:name', component: BurgersDetailsComponent},
  {path: 'produts', component: ProductsComponent},
  {path: 'produts/:name', component: ProductDetailsComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'discount', component: DiscountComponent},
  {path: 'discount/:name', component: DiscountDetailsComponent},
  {path: 'career', component: CareerComponent},
  {path: 'delivary', component: DeliveryComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'privacy', component: PrivacyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
