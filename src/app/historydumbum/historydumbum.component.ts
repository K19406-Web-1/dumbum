import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';

@Component({
  selector: 'app-historydumbum',
  templateUrl: './historydumbum.component.html',
  styleUrls: ['./historydumbum.component.scss']
})
export class HistoryDumbumComponent implements OnInit {
  menuHistory: Menu = new Menu([
    new MenuItem('Giới thiệu DumBum','intro-page'),
    new MenuItem('Lịch sử hình thành', 'historydumbum'),
    new MenuItem('Liên hệ', 'contact-us')
  ], 'VỀ CHÚNG TÔI');
  constructor() { }

  ngOnInit(): void {
  }

}
