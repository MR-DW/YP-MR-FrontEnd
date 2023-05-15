import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  miPorfolio: any;

  isLogged = false;

  constructor(private router:Router, private tokenService:TokenService){

  }

  ngOnInit(): void{

    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  login(){
    this.router.navigate(['/iniciar-sesion']);
  }

  volverAlMenuPrincipal(){
    this.router.navigate(['/portfolio']);
  }

}
