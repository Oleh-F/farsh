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
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();
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
