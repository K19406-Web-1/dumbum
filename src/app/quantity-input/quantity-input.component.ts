import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss']
})
export class QuantityInputComponent implements OnInit {

  @Input() quantity: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  minus() {
    if (this.quantity > 1)
      this.quantity -= 1;
  }
  plus() {
    this.quantity += 1;
  }


}
