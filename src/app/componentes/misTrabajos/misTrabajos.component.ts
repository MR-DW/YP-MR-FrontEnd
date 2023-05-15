import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
// import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-misTrabajos',
  templateUrl: './misTrabajos.component.html',
  styleUrls: ['./misTrabajos.component.css']
})

export class MisTrabajosComponent implements OnInit{

  proyectos:Proyectos [] = [];

  constructor(private proyectosS:ProyectosService,
    // private tokenService:TokenService
    ){ }

  // isLogged = false;

  ngOnInit(): void{
    this.cargarProyectos();
    // if(this.tokenService.getToken()){
    //   this.isLogged = true;
    // }else{
    //   this.isLogged = false;
    // }
  }

  cargarProyectos(): void{
    this.proyectosS.lista().subscribe(
      data=>{
        this.proyectos = data;
        console.log("proyectos", this.proyectos);
      }
    )
  }

  borrar(id:number):void{
    if( id != undefined){
      this.proyectosS.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}
