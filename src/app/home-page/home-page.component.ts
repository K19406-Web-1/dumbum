import { Component, OnInit } from '@angular/core';
import { categories, loadProducts, types } from 'src/models/dbcontext';
import { ProductBase } from 'src/models/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  hightlightProducts: ProductBase[] = [];
  promotionProducts: ProductBase[] = [];

  constructor() { }

  ngOnInit(): void {
    Object.values(categories).forEach(category => {
      loadProducts(category as unknown as categories, types['Nổi bật'])
        .then(products => {
          let product = products[0];
          this.hightlightProducts.push(new ProductBase(
            product.name,
            product.productDetails[0].unitPrice,
            product.productDetails[0].imageURL[0]));
        });
        loadProducts(category as unknown as categories, types['Khuyến mãi'])
        .then(products => {
          let product = products[0];
          this.promotionProducts.push(new ProductBase(
            product.name,
            product.productDetails[0].unitPrice,
            product.productDetails[0].imageURL[0]));
        })
    });
  }
}
