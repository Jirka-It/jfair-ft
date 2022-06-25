import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageManagerService {
  constructor(private http:HttpClient){}

  async getImage(url):Promise<any>{
    const image = await fetch(url);
    const blob = await image.blob();
    return new Promise((resolve, reject) => {
      let reader  = new FileReader();
      reader.addEventListener("load", function () {
          resolve(reader.result);
      }, false);
      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }
}