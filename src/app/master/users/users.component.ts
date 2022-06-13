import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../demo/service/productservice';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AppBreadcrumbService } from '../../app.breadcrumb.service';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [MessageService, ConfirmationService]
  })
  export class UsersComponent implements OnInit {

    lang: string = "en";
    modalDialog: boolean;
    records: any[];
    record: any;
    selectedRecords: any[];
    submitted: boolean;
    state:number;
    
    generalTraslate: any;

    constructor(
        private recordService: ProductService, 
        private messageService: MessageService,
        private confirmationService: ConfirmationService, 
        private breadcrumbService: AppBreadcrumbService,
        public translate: TranslateService
    ){
        translate.addLangs(['en', 'fr']);
        const browserLang = translate.getBrowserLang();
        let lang = browserLang.match(/es|fr/) ? browserLang : 'en';
        console.log("Lengiaje: "+lang)
        this.changeLang(lang);
     
        this.translate.get('general').subscribe(data => {
            this.generalTraslate = data;
            this.breadcrumbService.setItems([
                { label: this.generalTraslate.ttlrecords },
                { label: this.generalTraslate.sttrecords, routerLink: ['/analytics/master/records'] }
            ]);
        }); 
    }

    changeLang(lang: string):void {
        this.translate.use(lang);
    }    

    ngOnInit()
    {
        this.recordService.getProducts().then(data => this.records = data);
    }

    public saveOrUpdate():void
    {
        if (!this.record.name) {
            this.messageService.add({severity: 'error', summary:  this.generalTraslate.ttlError, detail: this.generalTraslate.lblName+' '+ this.generalTraslate.lblRequired, life: 3000});
            return
        }

        if (!this.record.description) {
            this.messageService.add({severity: 'error', summary:  this.generalTraslate.ttlError, detail: this.generalTraslate.lblDescription+' '+ this.generalTraslate.lblRequired, life: 3000});
            return
        }

        this.submitted = true;

        if (this.record.name.trim()) {
            if (this.record.id) {
                this.records[this.findIndexById(this.record.id)] = this.record;
                this.messageService.add({severity: 'success', summary: this.generalTraslate.ttlSuccess, detail: this.generalTraslate.conUpdate, life: 3000});
            }
            else {
                this.record.id = this.createId();
                this.record.image = 'product-placeholder.svg';
                this.records.push(this.record);
                this.messageService.add({severity: 'success', summary: this.generalTraslate.ttlSuccess, detail: this.generalTraslate.conSave, life: 3000});
            }

            this.records = [...this.records];
            this.modalDialog = false;
            this.record = {};
        }
    }


    public delete(record: any):void
    {   
        this.confirmationService.confirm({
            message: this.generalTraslate.msgDelete +' ' + record.name + '?',
            header: this.generalTraslate.ttlDelete,
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.records = this.records.filter(val => val.id !== record.id);
                this.record = {};
                this.messageService.add({severity: 'success', summary: this.generalTraslate.ttlSuccess, detail: this.generalTraslate.conDelete, life: 3000});

            }
        });
    }

 

    public deleteSelected() :void
    {
        this.confirmationService.confirm({
            message:  this.generalTraslate.msgDelete,
            header: this.generalTraslate.ttlDelete,
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.records = this.records.filter(val => !this.selectedRecords.includes(val));
                this.selectedRecords = null;
                this.messageService.add({severity: 'success', summary: this.generalTraslate.ttlSuccess, detail: this.generalTraslate.conDelete, life: 3000});
            }
        });
    }

    public getById(value:number):void
    {

    }
    

    public searchFor(state:number, searchParam:String):void
    {

    }


    //Aditional fuctions

    public openNewModal():void
    {
        this.record = {};
        this.submitted = false;
        this.modalDialog = true;
    }


    public editModal(record: any) :void
    {
        this.record = {...record};
        this.modalDialog = true;
    }


    public hideModalDialog():void
    {
        this.modalDialog = false;
        this.submitted = false;
    }


    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.records.length; i++) {
            if (this.records[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( let i = 0; i < 5; i++ ) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    public handleTabsChange(e) :void
    {
        this.state = 1; //State active
        if(e.index==1){
            this.state = 0; //State Inactive
        }

    }
}
