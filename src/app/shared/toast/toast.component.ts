import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast',
  template: `<p-toast key="toast"></p-toast>`,
  providers: [MessageService]  
})
export class ToastComponent implements OnInit {
  @Input() message;
  @Input() display;

  constructor(private service: MessageService) {   
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(this.display == true){this.showErrorViaToast()};
    
  }

  ngOnInit(): void { }

  showInfoViaToast() {
    this.service.add({key: 'toast', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
  }
  
  showWarnViaToast() {
      this.service.add({key: 'toast', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
  }
  
  showErrorViaToast() {
      this.service.add({ key: 'toast', severity: 'error', summary: 'Error Message', detail: this.message });
  }
  
  showSuccessViaToast() {
      this.service.add({ key: 'toast', severity: 'success', summary: 'Success Message', detail: 'Message sent' });
  }

}
