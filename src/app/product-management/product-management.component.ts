import { Component, OnInit } from '@angular/core';
import { ProductTracking } from 'src/models/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  productTrackings: ProductTracking[]=[];


  constructor(private _productService: ProductService) { }

  ngOnInit(): void {


  }
  getAllProducts(){
    this._productService.getById().subscribe({
      next: data => this.productTrackings = data,
    })
  }


}
