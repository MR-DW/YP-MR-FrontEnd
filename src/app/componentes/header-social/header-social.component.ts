import { Component, OnInit } from '@angular/core';
// import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-header-social',
  templateUrl: './header-social.component.html',
  styleUrls: ['./header-social.component.css']
})
export class HeaderSocialComponent implements OnInit {

  contact: any;

  constructor(
    // private datosPorfolio: DatosPorfolioService
    ){

  }

  ngOnInit(): void{
    // this.datosPorfolio.obtenerDatos().subscribe(data => {
    //   console.log(data);
    //   this.contact = data;
    // });

  }
}
