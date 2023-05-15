import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
// import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:Skills[]=[];
  porcentajeString : string = '';

  constructor(private Sskills: SkillsService,
    // private tokenService: TokenService
    ){}

  // isLogged = false;

  ngOnInit(): void{
    this.listarSkills();
    // if(this.tokenService.getToken()){
    //   this.isLogged = true;
    // }else{
    //   this.isLogged = false;
    // }
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
