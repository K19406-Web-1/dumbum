import { UserInformation } from "./information";

export class Invoice {
  unitPrice: number;
  amount: number;
  user:UserInformation;
  promotionCode: string;
  shippingFee: number;
  items: InvoiceLine[];

  constructor(
    unitPrice: number,
    amount: number,
    total: number,
    user:UserInformation,
    promotionCode: string,
    shippingFee: number,
    lines: InvoiceLine[]
  ) {
    this.unitPrice = unitPrice
    this.amount = amount
    this.user = user;
    this.promotionCode = promotionCode
    this.shippingFee = shippingFee
    this.items = lines
  }
}

export class InvoiceLine {
  productName: string;
  quantity: number;
  unitPrice: number;

  constructor(productName: string, quantity: number, unitPrice: number) {
    this.productName = productName
    this.quantity = quantity
    this.unitPrice = unitPrice
  }

}
