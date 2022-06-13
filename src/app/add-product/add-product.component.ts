import { Component, OnInit } from '@angular/core';
import { Product, ProductDetail } from 'src/models/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product('', [], [], 0, []);
  productDetail: ProductDetail = {
    weight: {
      unit: 'g',
      value: 0
    },
    unitPrice: 0,
    imageURL: []
  }

  constructor(private _productService: ProductService ) { }

  ngOnInit(): void {
  }

}
