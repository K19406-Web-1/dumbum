import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';
@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.scss']
})
export class BuyingComponent implements OnInit {
  menuBuying: Menu = new Menu([
    new MenuItem('Giao hàng', 'delivery'),
    new MenuItem('Hình thức thanh toán', 'payment'),
    new MenuItem('Cách thức mua hàng', 'buying')
  ], 'HỖ TRỢ KHÁCH HÀNG');

  constructor() { }

  ngOnInit(): void {
  }

}
