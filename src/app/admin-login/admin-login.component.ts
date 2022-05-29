import { Component, OnInit } from '@angular/core';
import { AdminAccountLogin } from 'src/models/admin-account';
import { AdminAccountService } from 'src/services/admin-account.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginInfo: AdminAccountLogin = {
    id: '',
    password: ''
  }

  constructor(private _adminAccountService:AdminAccountService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this._adminAccountService.login(this.loginInfo).subscribe(
      (data) => {
        if(!data.id){
          alert((data as unknown as any).message);
          return;
        }
        localStorage.setItem('adminAccount', JSON.stringify(data));
        location.href = '/admin/product';
      }
    );
  }

}
