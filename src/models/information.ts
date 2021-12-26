interface Address {
  provinceCode: number;
  districtCode: number;
}

export class UserInformation {
  username: string;
  phone: string;
  address: Address;

  constructor(username: string, phone: string, address: Address) {
    this.username = username;
    this.phone = phone;
    this.address = address;
  }
}

export class Information {
  constructor(
    public username: string,
    public email: string,
    public phone: string,
    public content: string) {
  }
}

export class ContactUser {
  constructor(
    public contactName: string,
    public contactEmail: string,
    public contactPhone: string,
    public contactContent: string) {
  }
}
