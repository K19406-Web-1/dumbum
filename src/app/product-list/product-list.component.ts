import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';
import { ProductBase } from 'src/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Menu[] = [
    new Menu([
      new MenuItem(new ProductBase('Mít sấy', 40000, '5-min.png')),
      new MenuItem(new ProductBase('Khô cá Thiêu que', 40000, '6-min.png')),
      new MenuItem(new ProductBase('Rong biển', 40000, '7-min.png')),
      new MenuItem(new ProductBase('Da heo', 40000, '8-min.png'))
    ], 'SẢN PHẨM NỔI BẬT'),
    new Menu([
      new MenuItem(new ProductBase('Gà sấy khô', 40000, '1-min.png'), 'product-detail'),
      new MenuItem(new ProductBase('Cơm cháy', 40000, '2-min.png')),
      new MenuItem(new ProductBase('Cơm cháy', 40000, '3-min.png')),
      new MenuItem(new ProductBase('Mực xé', 40000, '4-min.png'))
    ], 'GIẢM GIÁ')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
