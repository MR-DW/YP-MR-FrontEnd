import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-sobre-mi',
  templateUrl: './editar-sobre-mi.component.html',
  styleUrls: ['./editar-sobre-mi.component.css']
})
export class EditarSobreMiComponent {

persona:Persona = null;

constructor(private sPersona: PersonaService,
  private activatedRouter: ActivatedRoute, private router: Router,
  ){

}

ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['id'];

  this.sPersona.detail(id).subscribe(
    data => {
      this.persona = data;
      console.log("sobremi editado ", this.persona);
    }, err =>{
      console.log("aca es el error")
      alert("Error al modificar información personal");

      this.router.navigate(['/sobre-mi']);
    }
  )

}

onUpdate(){
  const id = this.activatedRouter.snapshot.params['id'];
  this.sPersona.update(id, this.persona).subscribe(
    data => {
      this.router.navigate(['/sobre-mi'])
    }, err =>{
      alert("Error al modificar información personal");
      this.router.navigate(['/sobre-mi']);
    }
  )

}

retorno(){
  this.router.navigate(['/sobre-mi']);

}

}
