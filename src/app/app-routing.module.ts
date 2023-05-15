import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMiComponent } from './componentes/sobreMi/sobreMi.component';
import { MisTrabajosComponent } from './componentes/misTrabajos/misTrabajos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/new-educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion/edit-educacion.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills/edit-skills.component';
import { NewSkillsComponent } from './componentes/skills/new-skills/new-skills.component';
import { EditarSobreMiComponent } from './componentes/sobreMi/editar-sobre-mi/editar-sobre-mi.component';
import { NuevoTrabajoComponent } from './componentes/misTrabajos/nuevo-trabajo/nuevo-trabajo.component';
import { EditarTrabajoComponent } from './componentes/misTrabajos/editar-trabajo/editar-trabajo.component';

// import { GuardGuard } from './servicios/serviciosABorrar/guard.guard';

const routes: Routes = [
  // canActivate:[GuardGuard]
  {path:'portfolio', component:PorfolioComponent, },
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'', redirectTo:'iniciar-sesion', pathMatch:'full'},
  {path:'nuevaexperiencia', component:NewExperienciaComponent},
  {path:'editarexperiencia/:id', component:EditExperienciaComponent},
  {path:'nuevaeducacion', component:NeweducacionComponent},
  {path:'editareducacion/:id', component:EditEducacionComponent},
  {path:'editarskills/:id', component:EditSkillsComponent},
  {path:'nuevaskill', component:NewSkillsComponent},
  {path:'editarsobremi/:id', component:EditarSobreMiComponent},
  {path:'nuevoproyecto', component:NuevoTrabajoComponent},
  {path:'editarproyecto/:id', component:EditarTrabajoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


export const routingComponents = [
  SobreMiComponent,
  MisTrabajosComponent,
  SkillsComponent,
  ExperienciaComponent,
  EducacionComponent
]
