import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products: Menu[] = [
    new Menu([
      new MenuItem(new Product('Mít sấy', 40000, '5-min.png')),
      new MenuItem(new Product('Khô cá Thiêu que', 40000, '6-min.png')),
      new MenuItem(new Product('Rong biển', 40000, '7-min.png')),
      new MenuItem(new Product('Da heo', 40000, '8-min.png'))
    ], 'SẢN PHẨM NỔI BẬT'),
    new Menu([
      new MenuItem(new Product('Gà sấy khô', 40000, '1-min.png'), 'product-detail'),
      new MenuItem(new Product('Cơm cháy', 40000, '2-min.png')),
      new MenuItem(new Product('Cơm cháy', 40000, '3-min.png')),
      new MenuItem(new Product('Mực xé', 40000, '4-min.png'))
    ], 'GIẢM GIÁ')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
