import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:Skills[]=[];
  porcentajeString : string = '';

  constructor(private Sskills: SkillsService,
    ){}

  ngOnInit(): void{
    this.listarSkills();
  }

  listarSkills():void{
    this.Sskills.lista().subscribe(data => {
      this.skills = data;
      console.log("skills", this.skills);
    });
  }

  borrar(id: number){
    if(id != undefined){
      this.Sskills.delete(id).subscribe(
        data => {
          this.listarSkills();
        }, err => {
          alert("no se pudo borrar la skill")
        }
      )
    }
  }

}
