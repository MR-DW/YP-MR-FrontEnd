import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-misTrabajos',
  templateUrl: './misTrabajos.component.html',
  styleUrls: ['./misTrabajos.component.css']
})

export class MisTrabajosComponent implements OnInit{

  proyectos:Proyectos [] = [];

  constructor(private proyectosS:ProyectosService,
    ){ }

  ngOnInit(): void{
    this.cargarProyectos();
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
