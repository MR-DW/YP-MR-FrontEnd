export class Proyectos {

  public id?: number;
  public nombreProyectos: string;
  public descripcionProyectos:string;
  public urlProyectos:string;

  constructor(nombreProyectos: string, descripcionProyectos:string, urlProyectos:string){

    this.nombreProyectos = nombreProyectos;
    this.descripcionProyectos = descripcionProyectos;
    this.urlProyectos = urlProyectos;

  }

}
