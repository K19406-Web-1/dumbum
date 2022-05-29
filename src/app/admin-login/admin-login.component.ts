import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AdminAccountLogin } from 'src/models/admin-account';
import { AdminAccountService } from 'src/services/admin-account.service';
=======
import { AdminAccount } from 'src/models/admin-account';
>>>>>>> 92e00e899c838bd34cd0a286222cc1107e4231ba

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
    this.admin = new AdminAccount('', '');
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
