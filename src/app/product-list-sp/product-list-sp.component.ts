import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';
import { ProductBase } from 'src/models/product';

@Component({
  selector: 'app-product-list-sp',
  templateUrl: './product-list-sp.component.html',
  styleUrls: ['./product-list-sp.component.scss']
})
export class ProductListSpComponent implements OnInit {
  readonly CATEGORY_PATH = location.pathname + '&category=';
  categories: Menu = new Menu([
    new MenuItem('Sản phẩm nổi bật', this.CATEGORY_PATH + 0),
    new MenuItem('Sản phẩm khuyến mãi', this.CATEGORY_PATH + 1),
    new MenuItem('Sản phẩm bán chạy', this.CATEGORY_PATH + 2),
    new MenuItem('Tất cả sản phẩm', this.CATEGORY_PATH + 3)
  ], 'DANH MỤC');

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
