import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public Persona : persona | undefined;
  public editPersona : persona | undefined;
  
  constructor(private personaService : PersonaService) { }

  ngOnInit(): void {
    this.getPersona();
  }
  public getPersona():void{
    this.personaService.getPersona().subscribe({
      next:(response: persona)=>{
        this.Persona=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
