import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = environment.urldesarrollo + 'educacion/'

  constructor(private HttpClient:HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.HttpClient.get<Educacion[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<Educacion>{
    return this.HttpClient.get<Educacion>(this.URL + `detail/${id}`);
  }

  public update(id:number, educacion:Educacion): Observable<any>{
    return this.HttpClient.put<any>(this.URL + `update/${id}`, educacion);
  }

  public save(educacion:Educacion): Observable<any>{
    return this.HttpClient.post<any>(this.URL + 'create', educacion);
  }

  public delete(id:number): Observable<any>{
    return this.HttpClient.delete<any>(this.URL + `delete/${id}`);
  }


}
