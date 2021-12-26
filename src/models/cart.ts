export class Cart {
  items: CartItems[] = [];

  /**@summary Thêm item vào nếu chưa tồn tại, nếu đã có sẽ tăng số lượng */
  addUnique(item: CartItems) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].productName === item.productName) {
        this.items[i].quantity += item.quantity;
        return;
      }
    }
    this.items.push(item);
  }

  get totalQuantityOfItems() {
    let total = 0;
    this.items.forEach(product => {
      total += product.quantity;
    });
    return total;
  }

  static parse(data: string): Cart {
    let items: CartItems[] = JSON.parse(data).items as unknown as CartItems[];
    let cart: Cart = new Cart();
    cart.items = items;
    return cart;
  }
}
export class CartItems {
  productName: string;
  quantity: number;

  constructor(productName: string, quantity: number = 1) {
    this.productName = productName
    this.quantity = quantity
  }
}
