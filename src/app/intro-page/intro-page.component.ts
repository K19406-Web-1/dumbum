import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {
  intro: Menu = new Menu([
    new MenuItem('Giới thiệu DumBum', 'intro'),
    new MenuItem('Thông tin chi tiết'),
    new MenuItem('Liên hệ')
  ], 'VỀ CHÚNG TÔI');
  constructor() { }

  ngOnInit(): void {
  }

}
