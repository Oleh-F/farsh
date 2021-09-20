import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../../models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public changeBasket$ = new Subject<boolean>();

  private resourceUrl = environment.BACKEND_URL;

  private api = {
    orders: `${this.resourceUrl}orders`
  }
  
  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<any> {
    return this.http.get<any>(this.api.orders);
  }

  
  create(order: any): Observable<any> {
    return this.http.post<any>(this.api.orders, order);
  }

  addToBusket(product: IProduct): void {
    let basket: Array<IProduct> = [];
    if (localStorage.getItem('basket')) {
      basket = JSON.parse(<string>localStorage.getItem('basket'));
      if (basket.some(prod => prod.id === product.id)) {
        const index = basket.findIndex(prod => prod.id === product.id);
        basket[index].count += product.count;
      } else {
        basket.push(product);
      }
    } else {
      basket.push(product);
    }
    localStorage.setItem('basket', JSON.stringify(basket));
    this.changeBasket$.next(true);
    product.count = 1;
  }





}
