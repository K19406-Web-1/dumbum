import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
    menuDelivery: Menu = new Menu([
    new MenuItem('Giao hàng', 'delivery'),
    new MenuItem('Hình thức thanh toán', 'payment'),
    new MenuItem('Cách thức mua hàng', 'buying')
    ], 'HỖ TRỢ KHÁCH HÀNG');

  constructor() { }

  ngOnInit(): void {
  }

}
