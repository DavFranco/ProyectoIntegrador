import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServeUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<educacion[]>{
    return this.http.get<educacion[]>(`${this.apiServeUrl}/educacion/traer`);
    
  }

  public addEducacion(Educacion: educacion): Observable<educacion>{
    return this.http.post<educacion>(`${this.apiServeUrl}/educacion/crear`,Educacion);
  }

  public updateEducacion(Educacion:educacion): Observable<educacion>{
    return this.http.put<educacion>(`${this.apiServeUrl}/educacion/editar`,Educacion);
  }

  public deleteEducacion(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/educacion/borrar/${id}`);
  }
}
