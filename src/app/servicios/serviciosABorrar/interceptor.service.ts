// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpHandler, HTTP_INTERCEPTORS, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { TokenService } from '../token.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class InterceptorService {

//   constructor(private tokenService:TokenService) { }

//   intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{

//     let intReq = req;
//     const token = this.tokenService.getToken();
//     if(token!=null){
//       intReq = req.clone({
//         headers: req.headers.set('Authorization', 'Bearer' + token)
//       });
//     }

//     console.log("Interceptor está corriendo, IntReq: "+ intReq);
//     return next.handle(intReq);
//   }

// }


// export const InterceptorProvider = [{
//   provide: HTTP_INTERCEPTORS,
//   useClass: InterceptorService,
//   multi: true
// }]
