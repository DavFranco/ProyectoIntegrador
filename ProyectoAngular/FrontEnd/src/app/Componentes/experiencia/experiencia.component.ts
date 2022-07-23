import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencias:experiencia[] = [];
  public editarExperiencia:experiencia | undefined;
  public borrarExperiencia:experiencia | undefined;

  constructor(private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.getExperiencias();
  }

  public getExperiencias(): void{
    this.experienciaService.getExperiencia().subscribe({
      next:(Response:experiencia[]) => {
        this.experiencias=Response;
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public OpenModal(mode:string, experiencias?: experiencia):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='crear'){
      button.setAttribute('data-target','#crearExperienciaModal')
    }else if(mode==="borrar"){
      this.borrarExperiencia=experiencias;
      button.setAttribute('data-target','#borrarExperienciaModal');
    }else if(mode==="editar"){
      this.editarExperiencia=experiencias;
      button.setAttribute('data-target','#editarExperienciaModal');
    }
    container?.appendChild(button);
    button.click();
  }
  
  public AgregarExperiencia(addForm: NgForm){
    document.getElementById('crear-experiencia-form')?.click();
    this.experienciaService.addExperiencia(addForm.value).subscribe({
      next:(response:experiencia)=>{
        console.log(response);
        this.getExperiencias();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      } 
    })
  }

  public EditarExperiencia(Experiencia:experiencia){
    this.editarExperiencia=Experiencia;
    document.getElementById('crear-experiencia-form')?.click();
    this.experienciaService.updateExperiencia(Experiencia).subscribe({
      next:(response:experiencia) =>{
        console.log(response);
        this.getExperiencias();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public BorrarExperiencia(idExp:number): void{
    this.experienciaService.deleteExperiencia(idExp).subscribe({
      next: (response:void) =>{
        console.log(response);
        this.getExperiencias();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })

  }
 

}
