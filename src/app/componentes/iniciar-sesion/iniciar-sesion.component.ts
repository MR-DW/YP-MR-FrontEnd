import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
// import { AutenticacionService } from 'src/app/servicios/autenticacion.service'; //
// import { AuthService } from 'src/app/servicios/auth.service';
// import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  nombreUsuario!: string;
  password!: string;

  mensajeErr:string = '';
  nUsuario:string = 'adminmatias123';
  contrasena:string = 'AM123';

  constructor(private router: Router ) { }
  ngOnInit(): void {

  }

  onLogin(): void {
    if(this.nUsuario == this.nombreUsuario && this.contrasena == this.password){
      this.router.navigate(['/sobre-mi']);
    }else{
      this.mensajeErr = 'Usuario y/o contraseña incorrecta';
      this.router.navigate(['/']);
    }


  }

}
