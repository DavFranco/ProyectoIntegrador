import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

  public skills : skill[]=[];
  public editarSkill:skill | undefined;
  public borrarSkill:skill | undefined;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.getSkill();
  }
  public getSkill(): void{
    this.skillService.getSkill().subscribe({
      next:(Response:skill[]) => {
        this.skills=Response;
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  public OpenModal(mode:string, skills?: skill):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='crear'){
      button.setAttribute('data-target','#crearSkillModal')
    }else if(mode==="borrar"){
      this.borrarSkill=skills;
      button.setAttribute('data-target','#borrarSkillModal');
    }else if(mode==="editar"){
      this.editarSkill=skills;
      button.setAttribute('data-target','#editarSkillModal');
    }
    container?.appendChild(button);
    button.click();
  }
  
  public AgregarSkill(addForm: NgForm){
    document.getElementById('crear-skill-form')?.click();
    this.skillService.addSkill(addForm.value).subscribe({
      next:(response:skill)=>{
        console.log(response);
        this.getSkill();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      } 
    })
  }

  public EditarSkill(Skill:skill){
    this.editarSkill=Skill;
    document.getElementById('crear-skill-form')?.click();
    this.skillService.updateSkill(Skill).subscribe({
      next:(response:skill) =>{
        console.log(response);
        this.getSkill();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public BorrarSkill(idS:number): void{
    this.skillService.deleteSkill(idS).subscribe({
      next: (response:void) =>{
        console.log(response);
        this.getSkill();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })

  }


}
