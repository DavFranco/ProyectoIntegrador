import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 
  public Persona : persona | undefined;
  public editPersona : persona | undefined;
  
  constructor(private personaService : PersonaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.getPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
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
  public OpenModal(mode:String, persona?: persona):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='editar'){
      this.editPersona=persona;
      button.setAttribute('data-target','#editarPersonaModal')
    }
    container?.appendChild(button);
    button.click();
  }

  public EditarPersona(persona:persona){
    this.editPersona=persona;
    document.getElementById('editar-persona-form')?.click();
    this.personaService.updatePersona(persona).subscribe({
      next:(response:persona) =>{
        console.log(response);
        this.getPersona();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}

