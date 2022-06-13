import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Invoice, InvoiceApi } from 'src/models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  url_api: string = "http://localhost:3000/api/invoices";

  constructor(private _http: HttpClient) { }

  getAll(): Observable<InvoiceApi[]> {
    return this._http.get<InvoiceApi[]>(this.url_api).pipe();
  }

  create(invoice: InvoiceApi) {
    return this._http.post(this.url_api, invoice).pipe();
  }
}
