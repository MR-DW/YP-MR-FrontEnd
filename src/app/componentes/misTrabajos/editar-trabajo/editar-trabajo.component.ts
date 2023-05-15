import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editar-trabajo',
  templateUrl: './editar-trabajo.component.html',
  styleUrls: ['./editar-trabajo.component.css']
})
export class EditarTrabajoComponent implements OnInit {

  proyectos : Proyectos;

  constructor(private sProyectos: ProyectosService,
    private activatedRouter: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    console.log("detail ", this.sProyectos.detail(id));
    this.sProyectos.detail(id).subscribe(
      data => {
        this.proyectos = data;
        console.log("data ", this.proyectos)
      }, err =>{
        console.log("aca es el error")
        alert("Error al modificar proyecto");

        this.router.navigate(['/portfolio']);
      }
    )

  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    console.log("update ", this.sProyectos.update(id, this.proyectos));
    console.log(this.proyectos)
    this.sProyectos.update(id, this.proyectos).subscribe(
      data => {
        alert("Proyecto Modificado");
        this.router.navigate(['/portfolio']);
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['/portfolio']);
      }
    )
  }

  retorno():void{
    this.router.navigate(['/portfolio'])
  }
}
