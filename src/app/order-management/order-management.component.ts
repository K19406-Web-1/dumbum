import { Component, OnInit } from '@angular/core';
import { InvoiceApi } from 'src/models/invoice';
import { InvoiceService } from 'src/services/invoice.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent implements OnInit {

  invoices: InvoiceApi[] = []

  constructor(private _invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this._invoiceService.getAll().subscribe(
      (data) => {
        this.invoices = data;
      });
  }

}
