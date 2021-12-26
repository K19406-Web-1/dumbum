import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';

@Component({
  selector: 'app-chinhsach',
  templateUrl: './chinhsach.component.html',
  styleUrls: ['./chinhsach.component.scss']
})
export class ChinhsachComponent implements OnInit {
  menuchinhsach: Menu = new Menu([
    new MenuItem('Chính sách đổi trả','chinhsach'),
    new MenuItem('Chính sách bảo mật', 'policy'),
    new MenuItem('Điều khoản dịch vụ', 'dieukhoandv')
  ], 'CHÍNH SÁCH');
  constructor() { }

  ngOnInit(): void {
  }

}
