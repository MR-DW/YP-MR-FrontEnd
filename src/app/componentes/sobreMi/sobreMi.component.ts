import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobreMi.component.html',
  styleUrls: ['./sobreMi.component.css']
})
export class SobreMiComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", "", "");

  constructor(public personaService: PersonaService,
    ){

  }

  ngOnInit(): void{
    this.cargarPersona();
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
