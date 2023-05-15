import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';


@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NeweducacionComponent implements OnInit{
  nombreEdu: string = '';
  descripcionEd: string = '';

  constructor(private sEducacion: EducacionService, private router: Router){}

  ngOnInit(): void {

  }

  //crea una nueva educacion
  onCreate(): void{
    const edu = new Educacion(this.nombreEdu, this.descripcionEd);
    this.sEducacion.save(edu).subscribe(data =>{
      alert("educacion Guardada");
      this.router.navigate(['/portfolio']);
    }, err => {
      alert("No es posible crear su nueva educacion");
      this.router.navigate(['/portfolio']);
    }
    )
  }

  retorno():void{
    this.router.navigate(['/portfolio'])
  }

}
