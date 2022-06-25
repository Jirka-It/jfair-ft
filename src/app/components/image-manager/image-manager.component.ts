import { Component, Input, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { HttpClient } from '@angular/common/http';
import { ImageManagerService } from './image-manager.service';
@Component({
  selector: 'app-image-manager',
  templateUrl: './image-manager.component.html',
  styleUrls: ['./image-manager.component.scss']
})
export class ImageManagerComponent implements OnInit {
  @Input() keyImage;
  @Input() image;

  displayCrop:boolean = false;
  imageBase64:any;
  croppedImage: any = '';  
  imageChangedEvent: any = '';
  
  constructor(private _imageService:ImageManagerService) {
    
  }

  ngOnInit() {
  }
  isImageLoaded() :boolean {return this.imageBase64?true:this.image?true:false;}    
  uploadImage()   :void    {document.getElementById(this.keyImage).click();}  

  fileChangeEvent(event: any) :void {
    this.imageChangedEvent = event;   
    console.log(this.imageChangedEvent);     
    this.displayCrop = true;
  }

  async editImage(){    
    if(this.image){
      
    }   
    this.displayCrop = true;
  }

  imageCropped(event: ImageCroppedEvent) {     
    this.setPreview(event.base64);
    this.croppedImage = event.base64;          
  }

  imageLoaded(image: LoadedImage) {    
      console.log('Imagen cargada');
  }
  cropperReady() {
      console.log('Imagen Lista');
  }
  loadImageFailed() {
      console.log('Load Imagen')
  }
  
  enableCropByPreview(){
    this.displayCrop = true;
  }

  disableCropByPreview(){
    this.displayCrop = false;
  }

  setPreview(base64Img){
    this.imageBase64 = base64Img;    
  }

  urlImg(){
    return this.imageBase64 ?this.imageBase64:  
    this.image?this.image:'assets/layout/images/no-images/no-image_1.png';
  }
}
