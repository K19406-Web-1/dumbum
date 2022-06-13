import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductBase } from 'src/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  url_api: string = "http://localhost:3000/api/products";

  getById(id: string): Observable<ProductBase> {
    return this._http.get<ProductBase>(this.url_api + "/" + id).pipe();
  }
  getByCategory(category: string): Observable<ProductBase[]> {
    return this._http.get<ProductBase[]>(this.url_api + "?category=" + category).pipe();
  }
  getBestSeller(bestSeller: string): Observable<ProductBase[]> {
    return this._http.get<ProductBase[]>(this.url_api).pipe();
  }

  async post(product: Product) {
    await this._http.post<Product>(this.url_api, product).pipe();
  }
}
