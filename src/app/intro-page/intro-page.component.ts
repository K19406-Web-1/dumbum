import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {
  menuIntro: Menu = new Menu([
    new MenuItem('Giới thiệu DumBum','intro-page'),
    new MenuItem('Lịch sử hình thành', 'historydumbum'),
    new MenuItem('Liên hệ', 'contact-us')
  ], 'VỀ CHÚNG TÔI');
  constructor() { }

  ngOnInit(): void {
  }

}
