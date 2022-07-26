import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiServeUrl=environment.apiBaseUrl;
 
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(`${this.apiServeUrl}/persona/id/1`);    
  }
  public updatePersona(Persona:persona):Observable<persona>{
    return this.http.put<persona>(`${this.apiServeUrl}/persona/editar`,Persona);
  }
}