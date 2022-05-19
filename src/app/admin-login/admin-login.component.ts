import { Component, OnInit } from '@angular/core';
import { AdminAccount } from 'src/models/admin-account';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  admin!: AdminAccount;

  constructor() { }

  ngOnInit(): void {
    this.admin = new AdminAccount('', '');
  }

}
