import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{
  nombreExp: string = '';
  descripcionExp: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router){}

  ngOnInit(): void {

  }

  //crea una nueva experiencia
  onCreate(): void{
    const expe = new Experiencia(this.nombreExp, this.descripcionExp);
    this.sExperiencia.save(expe).subscribe(data =>{
      alert("Experiencia Guardada");
      this.router.navigate(['/portfolio']);
    }, err => {
      alert("No es posible crear su nueva experiencia");
      this.router.navigate(['/portfolio']);
    }
    )
  }

  retorno():void{
    this.router.navigate(['/portfolio'])
  }

}
