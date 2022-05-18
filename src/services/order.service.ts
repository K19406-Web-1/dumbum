import { Injectable } from '@angular/core';
import { ProductInCart } from 'src/models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  keyCart = 'cart';

  constructor() { }

  getProducts(): ProductInCart[] {
    return localStorage.getItem(this.keyCart) ? JSON.parse(localStorage.getItem(this.keyCart)!) : [];
  }

  addProduct(product: ProductInCart): void {
    let cart = this.getProducts();
    let productNeedUpdate = cart.find(p => p.name === product.name);
    //có thì remove trong cart -> tăng 1 -> push lại
    //chưa có push
    if (productNeedUpdate) {
      let indexOfCartNeedRemove = cart.indexOf(productNeedUpdate);
      cart.splice(indexOfCartNeedRemove, 1);
      productNeedUpdate.quantity += product.quantity;
      cart.push(productNeedUpdate);
    } else cart.push(product);
    localStorage.setItem(this.keyCart, JSON.stringify(cart));
  }

  increaseProduct(product: ProductInCart) {
    product.quantity = 1;
    this.addProduct(product);
  }

  decreaseProduct(product: ProductInCart): void {
    let cart = this.getProducts();
    let productNeedUpdate = cart.find(p => p.name === product.name);
    if (productNeedUpdate) {
        if (productNeedUpdate.quantity === 1){
            this.deleteProduct(product);
        } else {
            productNeedUpdate.quantity = -1;
            this.addProduct(productNeedUpdate);
        }
    } else return;

  }


  deleteProduct(product: ProductInCart): void {
    let cart = this.getProducts();
    let indexOfCartNeedRemove = cart.indexOf(product);
    cart.splice(indexOfCartNeedRemove, 1);
    localStorage.setItem(this.keyCart, JSON.stringify(cart));
  }
  clearProduct(): void {
    localStorage.removeItem(this.keyCart);
  }


}
