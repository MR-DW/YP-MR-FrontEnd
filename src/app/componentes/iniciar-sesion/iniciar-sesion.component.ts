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

  // isLogged = false;
  // isLoginFail = false;
  // loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  // roles: string[] = [];
  // errMsj!: string;
  // form!:FormGroup;

  mensajeErr:string = '';
  nUsuario:string = 'adminmatias123';
  contrasena:string = 'AM123';

  constructor(private router: Router
    // private tokenService: TokenService,
    // private authService: AuthService,
    ) { }
    // , private formModule:FormModule
  // private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router




  ngOnInit(): void {

    // if (this.tokenService.getToken()){
    //   this.isLogged = true;
    //   this.isLoginFail = false;
    //   this.roles = this.tokenService.getAuthorities();
    // };

    // this.form = this.formBuilder.group({
    //   email:['',[Validators.required, Validators.email]],
    //   password:['',[Validators.required, Validators.minLength(8)]],
    //   deviceInfo:this.formBuilder.group({
    //     deviceId: ["17867868768"],
    //     deviceType: ["DEVICE_TYPE_ANDROID"],
    //     notificationToken:["6765757eececc34"]
    //   })
    // })
  }

  onLogin(): void {
    if(this.nUsuario == this.nombreUsuario && this.contrasena == this.password){
      this.router.navigate(['/portfolio']);
    }else{
      this.mensajeErr = 'Usuario y/o contraseña incorrecta';
      this.router.navigate(['/']);
    }

    // this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    // this.authService.login(this.loginUsuario).subscribe(
    //   data => {
    //     this.isLogged = true;
    //     this.isLoginFail = false;
    //     this.tokenService.setToken(data.token);
    //     this.tokenService.setUserName(data.nombreUsuario);
    //     this.tokenService.setAuthorities(data.authorities);
    //     this.roles = data.authorities;
    //     this.router.navigate(['/portfolio']);
    //   }, err => {
    //     this.isLogged = false;
    //     this.isLoginFail = true;
    //     this.errMsj = err.error.mensaje;
    //     console.log(this.errMsj);
    //   }

    // );
  }



  // get Email(){
  //   return this.form.get('email');
  // }

  // get Password(){
  //   return this.form.get('password');
  // }

  // onEnviar(event:Event){
  //   event.preventDefault;
  //   this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
  //     console.log("DATA: " + JSON.stringify(data));
  //     this.ruta.navigate(['/portfolio']);
  //   })
  // }

}
