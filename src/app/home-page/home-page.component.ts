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
      new MenuItem(new Product('Gà sấy khô', 40000, '1.png')),
      new MenuItem(new Product('Gà sấy khô', 40000, '2.png')),
      new MenuItem(new Product('Gà sấy khô', 40000, '3.png')),
      new MenuItem(new Product('Gà sấy khô', 40000, '4.png'))
    ], 'SẢN PHẨM NỔI BẬT'),
    new Menu([
      new MenuItem(new Product('Gà sấy khô', 40000, '5.png')),
      new MenuItem(new Product('Gà sấy khô', 40000, '6.png')),
      new MenuItem(new Product('Gà sấy khô', 40000, '7.png')),
      new MenuItem(new Product('Gà sấy khô', 40000, '8.png'))
    ], 'GIẢM GIÁ')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
