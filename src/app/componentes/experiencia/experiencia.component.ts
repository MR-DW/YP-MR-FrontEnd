import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  experiencia: Experiencia[]=[];
  data: any;

  constructor(private sExperiencia:SExperienciaService,
    ){

  }

  isLogged = false;

  ngOnInit(): void{
    //llama a la funcion que trae las experiencias
    this.cargarExperiencia();
  }

  //trae las experiencias
  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(
      data => {
        this.experiencia = data;
        console.log("experiencia",this.experiencia);
      }
    );
  }

  borrar(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data =>{
          this.cargarExperiencia();
        }, err => {
          alert("No es posible eliminar la experiencia");
        }
      )
    }

  }

}
