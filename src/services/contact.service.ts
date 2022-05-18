import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from 'src/models/contact';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) { }
  url_api: string = 'http://localhost:3000/api/contacts';
  getById(id: string): Observable<Contact> {
    return this._http.get<Contact>(this.url_api + "/" + id).pipe();
  }

  getAll(): Observable<Contact[]> {
    return this._http.get<Contact[]>(this.url_api).pipe();
  }

  post(contact: string) {
    return this._http.post(this.url_api, contact).pipe();
  }

}
