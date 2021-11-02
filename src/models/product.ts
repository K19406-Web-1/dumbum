export class Product {
  name: string;
  unitPrice: number;
  imageURL?: string;

  constructor(name: string, unitPrice: number, imageURL?: string) {
    this.name = name
    this.unitPrice = unitPrice
    this.imageURL = imageURL
  }
}
