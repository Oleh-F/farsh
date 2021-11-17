import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product/product.model';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  products: Array<IProduct> = [];
  currentCategory: string = '';

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const categoryName = this.activatedRoute.snapshot.paramMap.get('category');
        this.loadProducts(categoryName as string);
      }
    })
  }

  ngOnInit(): void {

  }

  loadProducts(categoryName: string): void {

    this.productService.getByCategory(categoryName as string).subscribe(
      data => {
        this.products = data;
        this.currentCategory = this.products[0].category.name;
        console.log("user page", this.products);

      }, err => {
        console.log(err);
      }
    )
  }

  countProduct(product: IProduct, checker: boolean): void {
    if (checker) {
      product.count++;
    } else {
      if (product.count > 1) {
        product.count--;
      }
    }
  }

  addToBusket(product: IProduct): void {
   this.orderService.addToBusket(product);
    product.count = 1;
  }


}
