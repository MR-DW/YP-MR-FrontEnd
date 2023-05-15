import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  expLab : Experiencia;

  constructor(private sExperiencia: SExperienciaService,
    private activatedRouter: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    console.log("detail ", this.sExperiencia.detail(id));
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.expLab = data;
        console.log("data ", this.expLab)
      }, err =>{
        console.log("aca es el error")
        alert("Error al modificar experiencia");

        this.router.navigate(['/portfolio']);
      }
    )

  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    console.log("update ", this.sExperiencia.update(id, this.expLab));
    console.log(this.expLab)
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        alert("Experiencia Modificada");
        this.router.navigate(['/portfolio']);
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['/portfolio']);
      }
    )
  }

  retorno():void{
    this.router.navigate(['/portfolio'])
  }

}
