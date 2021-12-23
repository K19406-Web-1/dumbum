export class Cart {
  Items: CartItems[] = [];

}
export class CartItems {
  productName: string;
  quantity: number;

  constructor(productName: string, quantity: number) {
    this.productName = productName
    this.quantity = quantity
  }

}
