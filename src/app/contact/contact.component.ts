import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';
//import { thongtin, Thongtin } from './'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  readonly MENU_PATH = location.href;
  menu: Menu = new Menu([
    new MenuItem('Giới thiệu Dumbum', this.MENU_PATH + 0),
    new MenuItem('Thông tin chi tiết', this.MENU_PATH + 1),
    new MenuItem('Liên hệ', this.MENU_PATH + 2),
  ], 'VỀ CHÚNG TÔI');
  constructor() { }
  ngOnInit(): void {
  }
}
