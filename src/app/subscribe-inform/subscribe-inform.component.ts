import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductBase } from 'src/models/product';

@Component({
  selector: 'app-subscribe-inform',
  templateUrl: './subscribe-inform.component.html',
  styleUrls: ['./subscribe-inform.component.scss']
})
export class SubscribeInformComponent implements OnInit {

  @Input() product!: ProductBase;
  @Output() seeMore = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}


