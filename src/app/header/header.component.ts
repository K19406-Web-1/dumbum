import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mainPages: Menu = new Menu([
    new MenuItem('Trang chủ', ''),
    new MenuItem('Tin tức'),
    new MenuItem('Liên hệ'),
    new MenuItem('Hỗ trợ')
  ]);

  categories: Menu = new Menu([
    new MenuItem('Thịt sấy khô'),
    new MenuItem('Hải sản khô'),
    new MenuItem('Da chiên'),
    new MenuItem('Cơm cháy'),
    new MenuItem('Đồ chay'),
    new MenuItem('Kẹo mứt')
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
