import { Component, OnInit, ViewChild } from '@angular/core';
import { loadProductByName } from 'src/models/dbcontext';
import { Menu, MenuItem } from 'src/models/menu';
import { Product } from 'src/models/product';
import { Cart, CartItems } from 'src/models/cart';
import { QuantityInputComponent } from '../quantity-input/quantity-input.component';
import { MessageBoxComponent, MessageData } from '../message-box/message-box.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @ViewChild('quantityInput') quantityInput!: QuantityInputComponent;

  path: Menu = new Menu([
    new MenuItem('Trang chủ', ''),
    new MenuItem(''),
    new MenuItem('Tất cả sản phẩm'),
    new MenuItem('')
  ]);
  product!: Product;
  currentImageURL!: string;

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
    let urlParams = new URLSearchParams(location.search);
    if (urlParams.has('name')) {
      let name = urlParams.get('name')!;
      loadProductByName(name)
        .then(data => {
          if (data) {
            this.product = data.product;
            this.path.items[1].value = data.category;
            this.path.items[3].value = this.product.name;
            this.currentImageURL = this.product.productDetails[0].imageURL[0];
          }
        })
    }
  }

  onImageChange(imageURL: string) {
    this.currentImageURL = imageURL;
  }
  addToCart() {
    // Gọi localStorage, lấy từ LS gắn vô biến cart. nếu có thì...
    let cartLS = localStorage.getItem('cart');
    let cart: Cart;
    if (cartLS != null) {
      cart = Cart.parse(cartLS);
    }
    else {
      cart = new Cart();
    }

    cart.addUnique(new CartItems(this.product.name, this.quantityInput.quantity));

    localStorage.setItem('cart', JSON.stringify(cart));

    let messageData: MessageData = {
      title: 'Thành công',
      content: 'Bạn đã gửi thông tin liên hệ thành công',
      icon: 'check_circle',
      type: 'success',
      actions: [
        {
          title: 'Đóng',
          icon: undefined,
          action: () => {
            this.dialog.closeAll();
          }
        }
      ]
    }
    //Dependency InjectF
    this.dialog.open(MessageBoxComponent, { data: messageData });
  }
  // set: JSON.stringify(product) | get: JSON.parse(localStorage)
  // cart: Giỏ hàng tạm -> class Cart (cart.ts)
  // product.name -> add to cart

}
