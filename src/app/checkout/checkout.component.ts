import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { getProvinces, getDistricts } from 'src/models/province';
import { UserInformation } from 'src/models/information';
import { disableLoading, enableLoading } from '../app.component';
import { Location } from '../../models/province';
import { MessageBoxComponent, MessageData } from '../message-box/message-box.component';
import { MatDialog } from '@angular/material/dialog';
import { Invoice } from 'src/models/invoice';
import { User } from 'firebase/auth';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, DoCheck {

  @ViewChild('cart') cart!: CartComponent;
  provinces!: Location[];
  districts?: Location[];
  user: UserInformation = new UserInformation('', '', { provinceCode: 0, districtCode: 0 });
  order: Invoice = new Invoice(0, 0, 0, this.user, '', 0, [])

  constructor(private dialog: MatDialog) { }
  ngDoCheck(): void {
    if (this.cart) {
      this.updateOrder();
    }
  }

  ngOnInit(): void {
    enableLoading();
    getProvinces()
      .then(data => this.provinces = data)
      .then(disableLoading);

    this.onProvinceChange();

    if (localStorage.getItem('currentUser') != null) {
      let currentUser = JSON.parse(localStorage.getItem('currentUser')!) as User;
      console.log(currentUser);
      this.user = new UserInformation(currentUser.displayName!, currentUser.phoneNumber!, { provinceCode: 0, districtCode: 0 });
    }
  }

  onProvinceChange() {
    enableLoading();
    getDistricts(this.user.address.provinceCode)
      .then(data => this.districts = data)
      .then(disableLoading);
  }

  messageFailed() {
    let messageData: MessageData = {
      title: 'Thất bại',
      content: 'Bạn đã thanh toán thất bại',
      icon: 'sms_failed',
      type: 'danger',
      actions: [
        {
          title: 'Đóng',
          icon: undefined,
          action: () => {
            this.dialog.closeAll();
          }
        }
      ]
    }
    this.dialog.open(MessageBoxComponent, { data: messageData });
  }

  messageSuccess() {
    let messageData: MessageData = {
      title: 'Thành công',
      content: 'Bạn đã thanh toán thành công',
      icon: 'check_circle',
      type: 'success',
      actions: [
        {
          title: 'Đóng',
          icon: undefined,
          action: () => {
            this.dialog.closeAll();
          }
        }
      ]
    }
    this.dialog.open(MessageBoxComponent, { data: messageData });
  }

  onPayment() {
    if (new Date().getSeconds() % 2 == 0) {
      this.messageFailed();
    }
    else {
      this.messageSuccess();
    }
  }

  updateOrder() {
    console.log(this.cart);
    this.order = new Invoice(0, 0, 0, this.user, '', 0, []);
    this.order.amount = 0;
    this.order.items = [];

    this.cart.products.forEach(item => {
      this.order.items.push({
        productName: item.name,
        quantity: item.quantity,
        unitPrice: item.unitPrice
      });
      this.order.amount += item.quantity * item.unitPrice;
    });

  }
}
