
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  URL = environment.urldesarrollo + 'proyectos/'

  constructor(private HttpClient:HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.HttpClient.get<Proyectos[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<Proyectos>{
    return this.HttpClient.get<Proyectos>(this.URL + `detail/${id}`);
  }

  public update(id:number, proyectos:Proyectos): Observable<any>{
    return this.HttpClient.put<any>(this.URL + `update/${id}`, proyectos);
  }

  public save(proyectos:Proyectos): Observable<any>{
    return this.HttpClient.post<any>(this.URL + 'create', proyectos);
  }

  public delete(id:number): Observable<any>{
    return this.HttpClient.delete<any>(this.URL + `delete/${id}`);
  }
}

