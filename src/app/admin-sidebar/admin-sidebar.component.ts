import { Component, OnInit } from '@angular/core';
import { AdminAccount } from 'src/models/admin-account';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  adminAccount: AdminAccount = JSON.parse(localStorage.getItem('adminAccount')!);

  constructor() { }

  ngOnInit(): void {
  }

  onChangeScreen(screen: 'product' | 'order') {
    location.href = `/admin/${screen}`;
  }

  isScreen(screen: 'product' | 'order') {
    return location.pathname.startsWith(`/admin/${screen}`);
  }

}
