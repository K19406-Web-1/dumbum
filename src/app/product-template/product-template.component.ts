import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductBase } from 'src/models/product';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.scss']
})
export class ProductTemplateComponent implements OnInit {

  @Input() product!: ProductBase;
  @Output() seeMore = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
