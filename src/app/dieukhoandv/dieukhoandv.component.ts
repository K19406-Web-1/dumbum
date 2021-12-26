import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';

@Component({
  selector: 'app-dieukhoandv',
  templateUrl: './dieukhoandv.component.html',
  styleUrls: ['./dieukhoandv.component.scss']
})
export class DieukhoandvComponent implements OnInit {
  menudieukhoan: Menu = new Menu([
    new MenuItem('Chính sách đổi trả','chinhsach'),
    new MenuItem('Chính sách bảo mật', 'policy'),
    new MenuItem('Điều khoản dịch vụ', 'dieukhoandv')
  ], 'CHÍNH SÁCH');
  constructor() { }

  ngOnInit(): void {
  }

}
