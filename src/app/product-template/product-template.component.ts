import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart, CartItems } from 'src/models/cart';
import { ProductBase } from 'src/models/product';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.scss']
})
export class ProductTemplateComponent implements OnInit {

  @Input() product!: ProductBase;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  seeMore() {
    location.href = '/product-detail?name=' + this.product.name;
  }

  addToCart() {
    let cartLS = localStorage.getItem('cart');
    let cart: Cart;
    if (cartLS != null) {
      cart =  Cart.parse(cartLS);
    }
    else {
      cart = new Cart();
    }
    cart.addUnique(new CartItems(this.product.name));

    localStorage.setItem('cart', JSON.stringify(cart));
    this.snackBar.open(`Đã thêm ${this.product.name} vào giỏ`);
  }
}
