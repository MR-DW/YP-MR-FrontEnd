import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Skills } from '../model/skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = environment.urldesarrollo + 'skills';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.URL + '/lista');

  }

  public detail(id: number):Observable<Skills>{
    return this.httpClient.get<Skills>(this.URL + `/detail/${id}`);
  }

  public save(skill: Skills):Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', skill);
  }

  public update(id: number, skills:Skills):Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, skills);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }


}
