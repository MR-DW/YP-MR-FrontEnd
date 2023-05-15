export class Educacion {

  id?:number;
  nombreEdu: string;
  descripcionEd: string;


  constructor( nombreEdu: string, descripcionEd: string){
    this.nombreEdu=nombreEdu;
    this.descripcionEd = descripcionEd;
  }
}
