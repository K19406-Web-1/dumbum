import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/models/menu';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent implements OnInit {

  @Input() menu!: Menu;

  constructor() { }

  ngOnInit(): void {
  }

}
