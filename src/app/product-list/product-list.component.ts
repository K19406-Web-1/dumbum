import { Component, OnInit } from '@angular/core';
import { loadProducts } from 'src/models/dbcontext';
import { Menu, MenuItem, MenuItemIsCurrentOptions } from 'src/models/menu';
import { Product } from 'src/models/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  categories!: Menu;

  products!: Product[];

  constructor() {
    let urlParams = new URLSearchParams(location.search);
    if (!urlParams.has('type')) {
      urlParams.set('type', '3');
      location.search = urlParams.toString();
    }
    urlParams.set('type', 'typeValue');
    const TYPE_PATH = location.pathname + '?' + urlParams.toString();

    this.categories = new Menu([
      new MenuItem('Sản phẩm nổi bật', TYPE_PATH.replace('typeValue', '0')),
      new MenuItem('Sản phẩm khuyến mãi', TYPE_PATH.replace('typeValue', '1')),
      new MenuItem('Sản phẩm bán chạy', TYPE_PATH.replace('typeValue', '2')),
      new MenuItem('Tất cả sản phẩm', TYPE_PATH.replace('typeValue', '3'))
    ], 'DANH MỤC', MenuItemIsCurrentOptions.search);
  }

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);

    // url: http://localhost:1234/product-list?category=1&type=4


    //Bắt URL................................
    let category: number = parseInt(params.get('category')!);
    let type: number = parseInt(params.get('type')!);

    //Load data
    loadProducts(category, type)
      .then(data => this.products = data);
  }
}
