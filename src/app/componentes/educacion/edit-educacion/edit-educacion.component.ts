import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  edu : Educacion;

  constructor(private sEducacion: EducacionService,
    private activatedRouter: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    console.log("detail ", this.sEducacion.detail(id));
    this.sEducacion.detail(id).subscribe(
      data => {
        this.edu = data;
        console.log("data ", this.edu)
      }, err =>{
        console.log("aca es el error")
        alert("Error al modificar educación");

        this.router.navigate(['/portfolio']);
      }
    )

  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    console.log("update ", this.sEducacion.update(id, this.edu));
    console.log(this.edu)
    this.sEducacion.update(id, this.edu).subscribe(
      data => {
        alert("Educación Modificada");
        this.router.navigate(['/portfolio']);
      }, err => {
        alert("Error al modificar educación");
        this.router.navigate(['/portfolio']);
      }
    )
  }

  retorno():void{
    this.router.navigate(['/portfolio'])
  }

}
