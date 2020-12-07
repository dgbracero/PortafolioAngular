import { Component, OnInit } from '@angular/core';
import { from} from 'rxjs';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { NgForm, NgModel } from '@angular/forms'  

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;

  constructor(
    private _projectService: ProjectService
  ) { 
    this.title = "Crear proyecto";
    this.project = new Project('','','','',2020,'','');
  }

  ngOnInit(): void{
  }

  onSubmit(form:NgForm){
    //console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}
