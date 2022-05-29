import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminAccount, AdminAccountLogin } from 'src/models/admin-account';

@Injectable({
  providedIn: 'root'
})
export class AdminAccountService {
  url_api: string = 'http://localhost:3000/api/admin-accounts';

  constructor(private _http: HttpClient) { }

  login(loginInfo: AdminAccountLogin): Observable<AdminAccount> {
    return this._http.post<AdminAccount>(this.url_api + '/login', loginInfo).pipe();
  }
}
