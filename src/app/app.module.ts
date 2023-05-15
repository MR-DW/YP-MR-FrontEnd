import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from  '@angular/router';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { InterceptorProvider, InterceptorService } from './servicios/serviciosABorrar/interceptor.service';
// import { DatosPorfolioService } from './servicios/serviciosABorrar/datos-porfolio.service';
import { HeaderSocialComponent } from './componentes/header-social/header-social.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion/edit-educacion.component';
import { NeweducacionComponent } from './componentes/educacion/new-educacion/new-educacion.component';
import { NewSkillsComponent } from './componentes/skills/new-skills/new-skills.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills/edit-skills.component';
import { EditarSobreMiComponent } from './componentes/sobreMi/editar-sobre-mi/editar-sobre-mi.component';
import { NuevoTrabajoComponent } from './componentes/misTrabajos/nuevo-trabajo/nuevo-trabajo.component';
import { EditarTrabajoComponent } from './componentes/misTrabajos/editar-trabajo/editar-trabajo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    IniciarSesionComponent,
    PorfolioComponent,
    HeaderSocialComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditEducacionComponent,
    NeweducacionComponent,
    NewSkillsComponent,
    EditSkillsComponent,
    EditarSobreMiComponent,
    NuevoTrabajoComponent,
    EditarTrabajoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    // RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [
    // DatosPorfolioService,
    // InterceptorProvider,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
