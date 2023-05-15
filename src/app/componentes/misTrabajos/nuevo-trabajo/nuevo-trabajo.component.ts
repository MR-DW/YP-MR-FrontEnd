import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-nuevo-trabajo',
  templateUrl: './nuevo-trabajo.component.html',
  styleUrls: ['./nuevo-trabajo.component.css']
})
export class NuevoTrabajoComponent implements OnInit{
  nombreProyectos: string = '';
  descripcionProyectos: string = '';
  urlProyectos: string = '';

  constructor(private sProyectos: ProyectosService, private router: Router){}

  ngOnInit(): void {

  }

  //crea una nueva experiencia
  onCreate(): void{
    const proyecto = new Proyectos(this.nombreProyectos, this.descripcionProyectos, this.urlProyectos);
    this.sProyectos.save(proyecto).subscribe(data =>{
      alert("Proyecto Guardado");
      this.router.navigate(['/portfolio']);
    }, err => {
      alert("No es posible crear su nuevo proyecto");
      this.router.navigate(['/portfolio']);
    }
    )
  }

  retorno():void{
    this.router.navigate(['/portfolio'])
  }
}
