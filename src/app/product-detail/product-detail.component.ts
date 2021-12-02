import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  path: Menu = new Menu([
    new MenuItem('Trang chủ'),
    new MenuItem('Thịt sấy khô'),
    new MenuItem('Tất cả sản phẩm'),
    new MenuItem('Khô gà lá chanh xé cay')
  ])

  constructor() { }

  ngOnInit(): void {
  }

}
