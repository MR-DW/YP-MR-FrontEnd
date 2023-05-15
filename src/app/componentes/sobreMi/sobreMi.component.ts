import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
// import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobreMi.component.html',
  styleUrls: ['./sobreMi.component.css']
})
export class SobreMiComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", "", "");
  // isLogged: boolean;

  constructor(public personaService: PersonaService,
    // private tokenService: TokenService
    ){

  }

  ngOnInit(): void{
    this.cargarPersona();
    // if(this.tokenService.getToken()){
    //   this.isLogged = true;
    // }else{
    //   this.isLogged = false;
    // }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(
      data=>{
        this.persona = data;
        console.log("persona", this.persona);
      }
    )
  }

}
