import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
// import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  experiencia: Experiencia[]=[];
  data: any;

  constructor(private sExperiencia:SExperienciaService,
    // private tokenService: TokenService
    ){

  }

  isLogged = false;

  ngOnInit(): void{
    //llama a la funcion que trae las experiencias
    this.cargarExperiencia();

     //Valida si está loggeado
    // if(this.tokenService.getToken()){
    //   this.isLogged = true;

    // }else{
    //   this.isLogged = false;
    // }
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
