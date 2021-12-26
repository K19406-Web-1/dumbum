import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
menuPayment: Menu = new Menu([
new MenuItem('Giao hàng', 'delivery'),
new MenuItem('Hình thức thanh toán','payment'),
new MenuItem('Cách thức mua hàng', 'buying')
], 'HỖ TRỢ KHÁCH HÀNG');
constructor() { }


  ngOnInit(): void {
  }

}
