import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

  skill: Skills = null;


  constructor(private sSkill: SkillsService,
    private activatedRouter: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    console.log("detail ", this.sSkill.detail(id));
    this.sSkill.detail(id).subscribe(
      data => {
        this.skill = data;
        console.log("data ", this.skill)
      }, err =>{
        console.log("aca es el error")
        alert("Error al modificar experiencia");

        this.router.navigate(['/portfolio']);
      }
    )

  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    console.log("update ", this.sSkill.update(id, this.skill));
    console.log(this.skill)
    this.sSkill.update(id, this.skill).subscribe(
      data => {
        alert("skill Modificada");
        this.router.navigate(['/portfolio']);
      }, err => {
        alert("Error al modificar skill");
        this.router.navigate(['/portfolio']);
      }
    )
  }

  retorno():void{
    this.router.navigate(['/portfolio'])
  }

}
