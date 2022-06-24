import { Component, Input, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-manager',
  templateUrl: './image-manager.component.html',
  styleUrls: ['./image-manager.component.scss']
})
export class ImageManagerComponent implements OnInit {
  @Input() keyImage;
  displayCrop:boolean = false;
  imageBase64:any;
  croppedImage: any = '';  
  imageChangedEvent: any = '';
  
  constructor() { }

  ngOnInit() {
  }
  isImageLoaded() :boolean {return this.imageBase64?true:false;}    
  uploadImage()   :void    {document.getElementById(this.keyImage).click();}
  
  fileChangeEvent(event: any) :void {
    this.imageChangedEvent = event;        
    this.displayCrop = true;
  }

  editImage(){
    this.displayCrop = true;
  }

  imageCropped(event: ImageCroppedEvent) {      
    this.setPreview(event.base64);
    this.croppedImage = event.base64;      
  }

  imageLoaded(image: LoadedImage) {    
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
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
}
