import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/demo/service/customerservice';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',  
})
export class TableComponent implements OnInit {
  constructor(private _tableService:CustomerService) { }
  customers1: any[];
  selectedCustomers1: any[];

  ngOnInit(): void {
    this._tableService.getCustomersLarge().then(customers => {
      this.customers1 = customers;
      // @ts-ignore
      this.customers1.forEach(customer => customer.date = new Date(customer.date));
  });
   }
}
