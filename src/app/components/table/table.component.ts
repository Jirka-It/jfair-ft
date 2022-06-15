import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/demo/service/customerservice';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html', 
  
})
export class TableComponent implements OnInit {
  constructor() { }
  //TODO cambiar nombres
  customers1: any[];
  customers2: any[];
  selectedCustomers1: any[];
  selectedCustomers2: any[];
  tabMenuItems: any[];

  ngOnInit(): void {
    this.tabMenuItems = [
      {label: 'Activo', icon: 'pi pi-fw pi-check'},
      {label: 'Historico', icon: 'pi pi-fw pi-history'},      
  ];  
    this.customers1 = [
      {
        code:87,
        name:'Banpro',
        openDate:"2022-01-13",
        closeDate:"2022-03-01",
      },
      {
        code:21,
        name:'LaFair',
        openDate:"2022-02-25",
        closeDate:"2022-06-14",
      },
      {
        code:87,
        name:'Banpro',
        openDate:"2022-01-13",
        closeDate:"2022-03-01",
      },
      {
        code:21,
        name:'LaFair',
        openDate:"2022-02-25",
        closeDate:"2022-06-14",
      },
      {
        code:87,
        name:'Banpro',
        openDate:"2022-01-13",
        closeDate:"2022-03-01",
      },
      {
        code:21,
        name:'LaFair',
        openDate:"2022-02-25",
        closeDate:"2022-06-14",
      },
      {
        code:87,
        name:'Banpro',
        openDate:"2022-01-13",
        closeDate:"2022-03-01",
      },
      {
        code:21,
        name:'LaFair',
        openDate:"2022-02-25",
        closeDate:"2022-06-14",
      },
      {
        code:87,
        name:'Banpro',
        openDate:"2022-01-13",
        closeDate:"2022-03-01",
      },
      {
        code:21,
        name:'LaFair',
        openDate:"2022-02-25",
        closeDate:"2022-06-14",
      },
      {
        code:87,
        name:'Banpro',
        openDate:"2022-01-13",
        closeDate:"2022-03-01",
      },
      {
        code:21,
        name:'LaFair',
        openDate:"2022-02-25",
        closeDate:"2022-06-14",
      },
      {
        code:87,
        name:'Banpro',
        openDate:"2022-01-13",
        closeDate:"2022-03-01",
      },
      {
        code:21,
        name:'LaFair',
        openDate:"2022-02-25",
        closeDate:"2022-06-14",
      },
      {
        code:87,
        name:'Banpro',
        openDate:"2022-01-13",
        closeDate:"2022-03-01",
      },
      {
        code:21,
        name:'LaFair',
        openDate:"2022-02-25",
        closeDate:"2022-06-14",
      },
      {
        code:87,
        name:'Banpro',
        openDate:"2022-01-13",
        closeDate:"2022-03-01",
      },
      {
        code:21,
        name:'LaFair',
        openDate:"2022-02-25",
        closeDate:"2022-06-14",
      },
      {
        code:87,
        name:'Banpro',
        openDate:"2022-01-13",
        closeDate:"2022-03-01",
      },
      {
        code:21,
        name:'LaFair',
        openDate:"2022-02-25",
        closeDate:"2022-06-14",
      },
      {
        code:87,
        name:'Banpro',
        openDate:"2022-01-13",
        closeDate:"2022-03-01",
      },
      {
        code:21,
        name:'LaFair',
        openDate:"2022-02-25",
        closeDate:"2022-06-14",
      },
      {
        code:87,
        name:'Banpro',
        openDate:"2022-01-13",
        closeDate:"2022-03-01",
      },
      {
        code:21,
        name:'LaFair',
        openDate:"2022-02-25",
        closeDate:"2022-06-14",
      },
    ]
    this.customers2 = [
      {
        code:17,
        name:'calips',
        openDate:"2022-01-13",
        closeDate:"2022-03-01",
      },
      {
        code:3,
        name:'ExpoCotelco',
        openDate:"2022-02-25",
        closeDate:"2022-06-14",
      }
    ]
      // @ts-ignore
    this.customers1.forEach(customer => {
      customer.openDate = new  Date(customer.openDate)
      customer.closeDate = new Date(customer.closeDate)    
    });
  
   }
}
