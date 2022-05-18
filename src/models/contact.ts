export interface ContactService {}
export class Contact {
    name: string;
    email: string;
    phonenumber: number;
    purpose: string;
    constructor(name: string, email: string, phonenumber: number, purpose: string) {
        this.name = name;
        this.email = email;
        this.phonenumber = phonenumber;
        this.purpose = purpose;
      }
}
