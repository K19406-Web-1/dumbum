import { Component, OnInit } from '@angular/core';
import { ProductTracking } from 'src/models/product';
import { ProductTrackingService } from 'src/services/product-tracking.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  productTrackings: ProductTracking[] = [];


  constructor(private _productTrackingService: ProductTrackingService) { }

  ngOnInit(): void {
    this._productTrackingService.getAll().subscribe(
      (data) => {
        this.productTrackings = data;
      }
    );
  }


}
