import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';



@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  

  public educaciones:educacion[] = [];
  public editarEducacion:educacion | undefined;
  public borrarEducacion:educacion | undefined;

  

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.getEducaciones();
  }
  public getEducaciones(): void{
    this.educacionService.getEducacion().subscribe({
      next:(Response:educacion[]) => {
        this.educaciones=Response;
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  public OpenModal(mode:String, educaciones?: educacion):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='crear'){
      button.setAttribute('data-target','#crearEducacionModal')
    }else if(mode==='borrar'){
      this.borrarEducacion=educaciones;
      button.setAttribute('data-target','#borrarEducacionModal');
    }else if(mode==="editar"){
      this.editarEducacion=educaciones;
      button.setAttribute('data-target','#editarEducacionModal');
    }
    container?.appendChild(button);
    button.click();
  }
  
  public AgregarEducacion(addForm: NgForm){
    document.getElementById('crear-educacion-form')?.click();
    this.educacionService.addEducacion(addForm.value).subscribe({
      next:(response:educacion)=>{
        console.log(response);
        this.getEducaciones();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      } 
    })
  }

  public EditarEducacion(Educacion:educacion){
    this.editarEducacion=Educacion;
    document.getElementById('crear-educacion-form')?.click();
    this.educacionService.updateEducacion(Educacion).subscribe({
      next:(response:educacion) =>{
        console.log(response);
        this.getEducaciones();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public BorrarEducacion(id:number): void{
    this.educacionService.deleteEducacion(id).subscribe({
      next: (response:void) =>{
        console.log(response);
        this.getEducaciones();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  }

