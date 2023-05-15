import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';


// import { ImageService } from 'src/app/servicios/image.service';
// despues de instalar la librería descomentar la linea de arriba, también en editar-sobreMi.




@Component({
  selector: 'app-editar-sobre-mi',
  templateUrl: './editar-sobre-mi.component.html',
  styleUrls: ['./editar-sobre-mi.component.css']
})
export class EditarSobreMiComponent {

persona:Persona = null;

constructor(private sPersona: PersonaService,
  private activatedRouter: ActivatedRoute, private router: Router,
  // public imageService: ImageService
  ){

}

ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['id'];

  // console.log("detail ", this.sPersona.detail(id));
  this.sPersona.detail(id).subscribe(
    data => {
      this.persona = data;
      console.log("sobremi editado ", this.persona);
    }, err =>{
      console.log("aca es el error")
      alert("Error al modificar información personal");

      this.router.navigate(['/portfolio']);
    }
  )

}

// Devuelve la url de la imagen
uploadImg($event:any){
  // const id = this.activatedRouter.snapshot.params['id'];
  // const name = "perfil_" + id;
  // this.imageService.uploadImg($event, name);

}

// Captura la url de la imagen
onUpdate(){
  // const id = this.activatedRouter.snapshot.params['id'];
  // this.persona.img = this.imageService.url;
  // this.sPersona.update(id, this.persona).subscribe(
  //   data => {
  //     this.router.navigate(['/portfolio'])
  //   }, err =>{
  //     alert("Error al modificar información personal");
  //     this.router.navigate(['/portfolio']);
  //   }
  // )

}

retorno(){
  this.router.navigate(['/portfolio']);

}

}
