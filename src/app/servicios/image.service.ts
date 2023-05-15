import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
// despues de instalar la librería descomentar la linea de arriba, también en editar-sobreMi.

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url:string = '';

  constructor(
    private storage: Storage
  ) { }

  // Funcion para subir img a firebase
  public uploadImg($event:any, name){
    const file = $event.target.files[0];
    console.log("file", file);
    // var de referencia que tiene la ruta de firebase pide como params:
    //  el servicio de storage y la url del archivo
    const imgRef = ref(this.storage, 'imagen/' + name);
    uploadBytes(imgRef, file)
    .then(response => { this.getImages()})
    .catch(error => console.log("error del uploadImg", error))

  }

  // Funcion para traer imagen
  getImages(){
    const imagesRef = ref(this.storage, 'imagen/')
    list(imagesRef)
    .then(async response =>{
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("la url es " + this.url );
      }
    })
    .catch(error => console.log("error del getImages", error))
  }

}
