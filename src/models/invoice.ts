import { UserInformation } from "./information";

export class Invoice {
  amount: number;
  user: UserInformation;
  promotionCode: string;
  shippingFee: number;
  paymentMethod: string;
  lines: InvoiceLine[];

  constructor(
    amount: number,
    productCount: number,
    user: UserInformation,
    promotionCode: string,
    shippingFee: number,
    paymentMethod: string,
    lines: InvoiceLine[]
  ) {
    this.amount = amount
    this.user = user;
    this.promotionCode = promotionCode
    this.shippingFee = shippingFee
    this.paymentMethod = paymentMethod
    this.lines = lines
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

export interface InvoiceApi {
  id:string;
  amount: number;
  user: {
    id: string,
    name: string
  };
  promotionCode?: string;
  totalPrice: number;
  shippingFee?: number;
  paymentMethod: string;
  status: string;
  createdAt: Date;
  lines: InvoiceLine[];
}
