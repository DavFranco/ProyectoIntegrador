import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServeUrl='https://portfoliodmf.herokuapp.com';

  constructor(private http:HttpClient) { }

  public getExperiencia(): Observable<experiencia[]>{
    return this.http.get<experiencia[]>(`${this.apiServeUrl}/experiencia/traer`);
    
  }

  public addExperiencia(Experiencia: experiencia): Observable<experiencia>{
    return this.http.post<experiencia>(`${this.apiServeUrl}/experiencia/crear`,Experiencia);
  }

  public updateExperiencia(Experiencia:experiencia): Observable<experiencia>{
    return this.http.put<experiencia>(`${this.apiServeUrl}/experiencia/editar`,Experiencia);
  }

  public deleteExperiencia(idExp:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/experiencia/borrar/${idExp}`);
  }
}
