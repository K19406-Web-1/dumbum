import { Component, NgModule, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Information } from 'src/models/information';
import { MessageBoxComponent, MessageData } from '../message-box/message-box.component';

@Component({
  selector: 'app-subscribe-inform',
  templateUrl: './subscribe-inform.component.html',
  styleUrls: ['./subscribe-inform.component.scss']
})

export class SubscribeInformComponent implements OnInit {

  user!: Information;
  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {

    this.user = new Information('', '', '', '');
  }
  onSubmit() {
    let messageData: MessageData = {
      title: 'Thành công',
      content: 'Bạn đã đăng ký thành công',
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
