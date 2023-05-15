export class Persona{

  id?: number;
  nombre: string;
  apellido: string;
  img: string;
  profesion: string;
  edad: string;
  descripcion: string;


  constructor(nombre: string, apellido:string, img: string, profesion: string, edad: string,descripcion: string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.profesion = profesion;
    this.edad = edad;
    this.descripcion  = descripcion;
  }

}
