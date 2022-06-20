import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

constructor() { }

handleErrorAuth(status:number,name:string,type:string){
  return  {
    message: this.findStatusErrors(status),
    header:`Error Codigo: ${status} ${type}`,
    detail:`Detalle del error: ${name}`
  }
}

private findStatusErrors(status:number):string{
  switch (status) {
    case 404: return 'Recurso no encontrado';
    case 403: return 'Credenciales invalidas';
    case 400: return 'Credenciales invalidas';
    case -1: return 'Los campos deben ser completados con informacion valida';
    case 500: return 'Fallo del servidor';
    default: return 'Imposible conectar con el servidor';      
  }
}

}
