import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {
  menuPolicy: Menu = new Menu([
    new MenuItem('Chính sách đổi trả','chinhsach'),
    new MenuItem('Chính sách bảo mật', 'policy'),
    new MenuItem('Điều khoản dịch vụ', 'dieukhoandv')
  ], 'CHÍNH SÁCH');
  constructor() { }

  ngOnInit(): void {
  }

}
