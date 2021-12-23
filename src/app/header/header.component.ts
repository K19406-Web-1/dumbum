import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '@firebase/auth';
import { auth } from 'src/firebase';
import { categories } from 'src/models/dbcontext';
import { Menu, MenuItem } from 'src/models/menu';
import { CartComponent } from '../cart/cart.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { SignInComponent } from '../sign-in/sign-in.component';

const REDIECT_PATH = 'product-list?category=';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mainPages: Menu = new Menu([
    new MenuItem('Trang chủ', ''),
    new MenuItem('Tin tức'),
    new MenuItem('Liên hệ', 'contact-us'),
    new MenuItem('Hỗ trợ')
  ]);

  categories: Menu = new Menu([
    new MenuItem('Thịt sấy khô', REDIECT_PATH + categories['Thịt sấy khô']),
    new MenuItem('Hải sản khô', REDIECT_PATH + categories['Hải sản khô']),
    new MenuItem('Da chiên', REDIECT_PATH + categories['Da chiên']),
    new MenuItem('Cơm cháy', REDIECT_PATH + categories['Cơm cháy']),
    new MenuItem('Đồ chay', REDIECT_PATH + categories['Đồ chay']),
    new MenuItem('Kẹo mứt', REDIECT_PATH + categories['Kẹo mứt'])
  ]);

  currentUser!: User | null;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  upSignUp() {
    this.dialog.open(SignInComponent)
      .afterClosed().subscribe(this.currentUser?.reload);
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')!) : null;
    auth.onAuthStateChanged(user => {
      this.currentUser = user;
      console.log(this.currentUser)
      localStorage.setItem('userId', user!.uid);
      localStorage.setItem('currentUser', JSON.stringify(user));
    }, () => {
      this.currentUser = null;
      console.log(this.currentUser)
      localStorage.removeItem('currentUser');
    })

    //Update user information per thirty seconds
    setInterval(() => {
      this.currentUser?.reload();
    }, 30 * 1000);
  }

  openCart(){
    this.dialog.open(CartComponent);
  }

}
