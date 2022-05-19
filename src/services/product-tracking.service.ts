import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductBase } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductTrackingService {

  constructor(private _http: HttpClient) { }

  url_api: string = "http://localhost:3000/api/products";

  updateProduct(id: string): Observable<ProductBase>{
    return this._http.put<ProductBase>(this.url_api + "/", id)
  }

  deleteProduct(id: string):void{
    this._http.delete(this.url_api)
  }
}