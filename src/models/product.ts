import { Weight } from "./weight";

export class ProductBase {
  name: string;
  productDetails: ProductDetail[];

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

export interface ProductType
{
  categories:number;
  highlights:string[];
  promotions:[];
  bestSeller:string[];
}

interface ProductPromotionType{
  name:string,
  
}
