import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = environment.urldesarrollo + 'personas/';

  constructor(private HttpClient:HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.HttpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<Persona>{
    return this.HttpClient.get<Persona>(this.URL + `detail/${id}`);
  }

  public update(id:number, persona:Persona): Observable<any>{
    return this.HttpClient.put<any>(this.URL + `update/${id}`, persona);
  }

}
