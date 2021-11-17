import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product/product.model';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerBasket: Array<IProduct> = [];
  public totalPrice: number = 0;
  public isShow = !true;
  public basketIsShow = false;
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();
  }
  showBasket(): void {
    this.basketIsShow = !this.basketIsShow;
  }
  hideBasket():void {
    this.basketIsShow = false;
  }

  private getTotal(products: Array<IProduct>): number {
    return products.reduce((total,prod) => total + (prod.price * prod.count), 0);
  }

  removeProduct(product: IProduct): void {
    if (confirm('Are you sure?')){
      const index = this.headerBasket.findIndex(prod => prod.id === product.id);
      this.headerBasket.splice(index, 1);
      this.totalPrice = this.getTotal(this.headerBasket);
      this.orderService.changeBasket$.next(true);
      localStorage.setItem('basket', JSON.stringify(this.headerBasket));
      
    }
  }
  
  showMenu():void {
    this.isShow = !this.isShow;
  }
  hideMenu():void {
    this.isShow = false;
  }

  loadBasket(): void {
    if (localStorage.getItem('basket')) {
      this.headerBasket = JSON.parse(<string>localStorage.getItem('basket'));
    }
    this.getTotalPrice();
  }

  getTotalPrice(): void {
    if (this.headerBasket.length > 0) {
      this.totalPrice = this.headerBasket.reduce((total, prod) => total + prod.price * prod.count, 0);
    } else {
      this.totalPrice = 0;
    }
  }

  updateBasket(): void {
    this.orderService.changeBasket$.subscribe(
      () => {
        this.loadBasket();
      }, err => {
        console.log(err);
      }
    )
  }
  
  
  

}
