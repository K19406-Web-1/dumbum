import { Injectable } from '@angular/core';
import { ProductInCart } from 'src/models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderTrackingService {

    keyCart = 'cart';
    url_api: string = "http://localhost:3000/api/orders";
    constructor(private _http: HttpClient) { }
    getById(id: string): Observable<ProductInCart> {
        return this._http.get<ProductInCart>(this.url_api + "/" + id).pipe();
      }
      getOnId(id: string): Observable<ProductInCart> {
        return this._http.get<ProductInCart>(this.url_api + "/" + id);
      }
}
