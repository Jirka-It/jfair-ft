import { HttpParams } from '@angular/common/http';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { IComercial } from './commercial.metadata';
import { CustomerService } from 'src/app/demo/service/customerservice';
import { CommercialSectionService } from 'src/app/pages/comercial/services/commercial-section.service';

enum TYPE_REGISTER {HISTORIAL=0,VIGENTE=1};

@Component({
  selector: 'app-table-event',
  templateUrl: './table-commercial.component.html', 
  
})
export class TableEventComponent implements OnInit {
  @Output('options') optionSelected:EventEmitter<any> = new EventEmitter();
  constructor(
    private commmercialSectionService: CommercialSectionService,
  ) { }
  //TODO cambiar nombres{}
  commercialDataSource:IComercial[] = [];
  historicalDataSource:IComercial[] = [];

  customers1: any[];
  customers2: any[];
  selectedCustomers1: any[];
  selectedCustomers2: any[];
  tabMenuItems: any[];

  ngOnInit(): void {
    this.getSections(TYPE_REGISTER.VIGENTE  );
    this.getSections(TYPE_REGISTER.HISTORIAL);
    this.customers1 = []
    this.customers2 = []
      // @ts-ignore
    this.customers1.forEach(customer => {
      customer.openDate = new  Date(customer.openDate)
      customer.closeDate = new Date(customer.closeDate)    
    });
  
   }
   getSections(type:TYPE_REGISTER) {
    let param = new HttpParams;
    param = param.append('state', String(type));  
    
    this.commmercialSectionService.seach(param).subscribe(data => { 
      type == TYPE_REGISTER.VIGENTE ? 
      this.commercialDataSource = data.content :
      this.historicalDataSource = data.content;
            
      this.fixedDates(type);
        
    });  
   }
   fixedDates(type:TYPE_REGISTER){
    type == TYPE_REGISTER.VIGENTE ?
    this.commercialDataSource.forEach(comercial => {
      comercial.openDate = new  Date(comercial.openDate)
      comercial.closeDate = new Date(comercial.closeDate)    
    }) :
    this.historicalDataSource.forEach(comercial => {
      comercial.openDate = new  Date(comercial.openDate)
      comercial.closeDate = new Date(comercial.closeDate)    
    })       
   }

   openOptions(optionKey:string,idEvent:number){
    this.optionSelected.emit(JSON.stringify({optionKey,idEvent}));
   }
}
