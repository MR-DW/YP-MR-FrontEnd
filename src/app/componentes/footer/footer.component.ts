import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contact: any;
  persona: Persona = new Persona("", "", "", "", "", "");

  constructor(private personaService: PersonaService){

  }

  ngOnInit(): void{

    this.cargarPersona();
   }

  cargarPersona(){
    this.personaService.detail(5).subscribe(
      data=>{
        this.persona = data;
        console.log("persona", this.persona);
      }
    )
  }

}
