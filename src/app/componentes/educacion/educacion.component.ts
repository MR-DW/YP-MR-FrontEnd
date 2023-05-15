import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
// import { DatosPorfolioService } from 'src/app/servicios/serviciosABorrar/datos-porfolio.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
// import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{

  educacion:Educacion [] = [];
  educacionList:any;

  constructor(private educacionS:EducacionService,
    // private tokenService:TokenService
    ){ }

  isLogged = false;

  ngOnInit(): void{
    this.cargarEducacion();
    // if(this.tokenService.getToken()){
    //   this.isLogged = true;
    // }else{
    //   this.isLogged = false;
    // }
  }

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data=>{
        this.educacion = data;
        console.log("educacion", this.educacion);
      }
    )
  }

  borrar(id:number):void{
    if( id != undefined){
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }


}
