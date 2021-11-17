import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product/product.model';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.scss']
})
export class BurgersComponent implements OnInit {

  products: Array<IProduct> = [];
  currentCategory: string = '';
  hidden = false;
  countMore = false;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     const categoryName = this.activatedRoute.snapshot.paramMap.get('category');
    //     this.loadProducts(categoryName as string);
    //   }
    // })

   }

  ngOnInit(): void {
    this.loadProducts();
  }
  
  showTextAbout(){
    this.hidden = !this.hidden;
  }
  
  hideThemAll(){
    this.hidden =!this.hidden;
  }

  loadProducts(): void {
    // console.log(categoryName);
    
    this.productService.getByCategory('burgers').subscribe(
      data => {
        this.products = data;
        console.log(this.products);
        
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
      this.countMore = true;
    } else {
      if (product.count > 1) {
        product.count--;
        
      }
      else{
        if(product.count <= 1){
        this.countMore = false;

        }
      }
    }
  }

  addToBusket(product: IProduct): void {
   this.orderService.addToBusket(product);
    product.count = 1;
  }  

  



}
