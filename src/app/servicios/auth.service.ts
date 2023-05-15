// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { NuevoUsuario } from '../model/nuevo-usuario';
// import { Observable } from 'rxjs';
// import { LoginUsuario } from '../model/login-usuario';
// import { JwtDto } from '../model/jwt-dto';
// import { environment } from 'src/environments/environment.development';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   // authURL = 'http://localhost:8080/auth/';


//   URL = environment.urldesarrollo + 'auth/'



//   constructor(private httpClient: HttpClient) { }

//   public nuevo(nuevoUsuario:NuevoUsuario):Observable<any>{
//     return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUsuario);
//   }

//   public login(loginUsuari:LoginUsuario):Observable<JwtDto>{
//     return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuari);
//   }

// }
