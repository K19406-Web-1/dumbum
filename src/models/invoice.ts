import { UserInformation } from "./information";

export class Order {
  unitPrice: number;
  amount: number;
  user:UserInformation;
  promotionCode: string;
  shippingFee: number;
  items: OrderItems[];

  constructor(
    unitPrice: number,
    amount: number,
    total: number,
    user:UserInformation,
    promotionCode: string,
    shippingFee: number,
    items: OrderItems[]
  ) {
    this.unitPrice = unitPrice
    this.amount = amount
    this.user = user;
    this.promotionCode = promotionCode
    this.shippingFee = shippingFee
    this.items = items
  }
}

export class OrderItems {
  productName: string;
  quantity: number;
  unitPrice: number;

  constructor(productName: string, quantity: number, unitPrice: number) {
    this.productName = productName
    this.quantity = quantity
    this.unitPrice = unitPrice
  }

}
