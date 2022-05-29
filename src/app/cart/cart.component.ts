import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cart, CartItems } from 'src/models/cart';
import { loadProductByName } from 'src/models/dbcontext';
import { Invoice } from 'src/models/invoice';
import { ProductInCart } from 'src/models/product';
import { MessageBoxComponent, MessageData } from '../message-box/message-box.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends MessageBoxComponent implements OnInit {

  products: ProductInCart[] = [];
  totalQuantity: number = 0;

  constructor(public dialogRef: MatDialogRef<CartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessageData) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    let cartLS = localStorage.getItem('cart');
    let cart: Cart;
    if (cartLS != null) {
      cart = Cart.parse(cartLS);
    }
    else {
      cart = new Cart();
    }
    this.totalQuantity = cart.totalQuantityOfItems;
    cart.items.forEach(item => {
      loadProductByName(item.productName)
        .then(product => {
          if (product === null) {
            return;
          }
          this.products.push(new ProductInCart(
            item.productName,
            product!.product.productDetails[0].unitPrice,
            product!.product.productDetails[0].imageURL[0],
            item.quantity));
        })
    })
  }

  close(name: string) {
    let cartLS = localStorage.getItem('cart')!;
    let cart = Cart.parse(cartLS);

    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.totalQuantity -= this.products[i].quantity;
        this.products.splice(i, 1);
        cart.items.splice(i, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        break;
      }
    }
  }
}
