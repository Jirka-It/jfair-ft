import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const enum STATES {ACTIVE=1,INACTIVE=0}
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  formEvent:FormGroup;
  valColor:string;
  state:string = 'activo';
  statesName = [
    {name:"activo"  ,value:1},
    {name:"inactivo",value:0},
  ]
  filtrateStates = []

  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit() {
    this.generateForm();
  }
  filterState(event){
    const filterResult = [...this.statesName
      .filter(filt => filt.name.toLowerCase().indexOf(event.query.toLowerCase()) >= 0 ) 
    ];
    this.filtrateStates = filterResult;
  }

  generateForm(){
    this.formEvent = this.formBuilder.group({
      name:        [null, [Validators.required]],
      sigla:       [null, [Validators.required]],
      summary:     [null, [Validators.required, Validators.maxLength(250)]],
      description: [null, [Validators.required]],
      terms:       ['', []],
      openDate:    [null, [Validators.required]],
      closeDate:   [null, [Validators.required]],
      image:       [null, [Validators.required]],
      plan:        [null, [Validators.required]],
      info:        [null, [Validators.required]],
      color:       [null, [Validators.required]],
      state:       [null, [Validators.required]],
      eventId:     [null, [Validators.required]]
    });
  }

}
