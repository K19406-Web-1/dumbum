import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductTracking } from 'src/models/product';
import { ProductTrackingService } from 'src/services/product-tracking.service';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  productTrackings: ProductTracking[] = [];


  constructor(private _productTrackingService: ProductTrackingService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this._productTrackingService.getAll().subscribe(
      (data) => {
        this.productTrackings = data;
      }
    );
  }

  openAddProduct() {
    this._dialog.open(AddProductComponent, { width: "350" });
  }

}
