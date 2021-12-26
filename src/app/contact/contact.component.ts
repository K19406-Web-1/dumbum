import { Component, NgModule, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';
import { MatDialog } from '@angular/material/dialog';
import { ContactUser } from 'src/models/information';
import { MessageBoxComponent, MessageData } from '../message-box/message-box.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  menu: Menu = new Menu([
    new MenuItem('Giới thiệu Dumbum', 'intro-page'),
    new MenuItem('Lịch sử hình thành', 'historydumbum'),
    new MenuItem('Liên hệ', 'contact-us'),
  ], 'VỀ CHÚNG TÔI');

  contactUs!: ContactUser;
  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {
    this.contactUs = new ContactUser('', '', '', '');
  }
  onSubmit() {
    let messageData: MessageData = {
      title: 'Thành công',
      content: 'Bạn đã gửi thông tin liên hệ thành công',
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
    //Dependency InjectF
    this.dialog.open(MessageBoxComponent, { data: messageData });
  }
}
