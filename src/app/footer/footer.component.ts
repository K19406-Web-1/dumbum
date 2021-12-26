import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  aboutUs: Menu = new Menu([
    new MenuItem('Giới thiệu', 'intro-page'),
    new MenuItem('Lịch sử hình thành', 'historydumbum'),
    new MenuItem('Liên hệ', 'contact-us')

  ]);
  supportKH: Menu = new Menu([
    new MenuItem('Giao hàng', 'delivery'),
    new MenuItem('Hình thức thanh toán', 'payment'),
    new MenuItem('Cách thức mua hàng', 'buying')

  ]);
  policy: Menu = new Menu([
    new MenuItem('Chính sách đổi trả', 'chinhsach'),
    new MenuItem('Chính sách bảo mật', 'policy'),
    new MenuItem('Điều khoản dịch vụ', 'dieukhoandv'),
  ]);


  constructor() { }

  ngOnInit(): void {
  }

}
