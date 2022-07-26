import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiServeUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getSkill(): Observable<skill[]>{
    return this.http.get<skill[]>(`${this.apiServeUrl}/skill/traer`);
    
  }

  public addSkill(Skill: skill): Observable<skill>{
    return this.http.post<skill>(`${this.apiServeUrl}/skill/crear`,Skill);
  }

  public updateSkill(Skill:skill): Observable<skill>{
    return this.http.put<skill>(`${this.apiServeUrl}/skill/editar`,Skill);
  }

  public deleteSkill(idS:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/skill/borrar/${idS}`);
  }
}