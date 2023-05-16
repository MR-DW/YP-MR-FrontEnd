import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  miPorfolio: any;

  isLogged = false;

  constructor(private router:Router,
    // private tokenService:TokenService
    ){

  }

  ngOnInit(): void{
    this.isLoginPage();
  }

  login(){
    this.router.navigate(['/iniciar-sesion']);
  }

  volverAlMenuPrincipal(){
    this.router.navigate(['/sobre-mi']);
  }

  isLoginPage(): boolean {
  return this.router.url === '/iniciar-sesion';
}

}
