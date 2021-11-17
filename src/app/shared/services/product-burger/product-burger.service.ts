import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../../models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductBurgerService {
  private resourceUrl = environment.BACKEND_URL;

  private api = {
    burgers: `${this.resourceUrl}burgers`
  }
  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<any> {
    return this.http.get<any>(this.api.burgers);
  }

  getByCategory(categoryName:string): Observable<any> {
    return this.http.get<any>(`${this.api.burgers}?category.path=${categoryName}`);
  }

  getById(id: number):  Observable<any> {
    return this.http.get<any>(`${this.api.burgers}/${id}`);
  }

  create(product: IProduct): Observable<any> {
    return this.http.post<any>(this.api.burgers, product);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api.burgers}/${id}`);
  }

  update(product: IProduct, id: number): Observable<any> {
    return this.http.patch<any>(`${this.api.burgers}/${id}`, product);
  }

}
