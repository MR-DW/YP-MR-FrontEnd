import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit{

  nombreSkills: string = '';
  porcentajeSkills: number = null;

  constructor(private sSkills: SkillsService, private router: Router){}

  ngOnInit(): void {

  }

  //crea una nueva Skills
  onCreate(): void{
    const s = new Skills(this.nombreSkills, this.porcentajeSkills);
    this.sSkills.save(s).subscribe(data =>{
      alert("Skills Guardada");
      this.router.navigate(['/portfolio']);
    }, err => {
      alert("No es posible crear su nueva Skills");
      this.router.navigate(['/portfolio']);
    }
    )
  }

  retorno():void{
    this.router.navigate(['/portfolio'])
  }

}


