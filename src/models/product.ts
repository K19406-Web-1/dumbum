import { Weight } from "./weight";

export class ProductBase {
  name: string;
  productDetails: ProductDetail[];
  quantiy: any;

  constructor(...args: [name: string, productDetails: ProductDetail[]] | [name: string, unitPrice: number, imageURL: string]) {
    this.name = args[0];
    this.productDetails = (args[1] instanceof Array) ? args[1] :
      [{ unitPrice: args[1], imageURL: [args[2]!], weight: { value: NaN, unit: 'g' } }];
  }

}
export class Product extends ProductBase {
  materials: string[];
  lifeTimeByMonth: number;
  illustratedImageURL: string[];
  howToUse: string = 'Dùng ăn trực tiếp';
  storageCondition: string = 'Nhiệt độ thường';
  madeBy: string = 'Việt Nam';

  constructor(name: string, productDetails: ProductDetail[], materials: string[], lifeTimeByMonth: number, illustratedImageURL: string[], howToUse?: string, storageCondition?: string, madeBy?: string) {
    super(name, productDetails);
    this.materials = materials;
    this.lifeTimeByMonth = lifeTimeByMonth;
    this.illustratedImageURL = illustratedImageURL;
    howToUse && (this.howToUse = howToUse);
    storageCondition && (this.storageCondition = storageCondition);
    madeBy && (this.madeBy = madeBy);
  }
}

export interface ProductDetail {
  weight: Weight;
  unitPrice: number;
  imageURL: string[];
}

export interface ProductType {
  categories: number;
  highlights: string[];
  promotions: [];
  bestSeller: string[];
}

export class ProductInCart {
  name: string;
  unitPrice: number;
  imageURL: string;
  quantity: number;

  constructor(
    name: string,
    unitPrice: number,
    imageURL: string,
    quantity: number
  ) {
    this.name = name
    this.unitPrice = unitPrice
    this.imageURL = imageURL
    this.quantity = quantity
  }

}

interface ProductPromotionType {
  name: string
}

export interface ProductTracking {
  productId: string
  name: string
  imageURL: string
  quantity: number
  unitWeight: number
  unitPrice: number
  status: string
  category: string
  createdAt: Date
  expiredAt: Date
}
