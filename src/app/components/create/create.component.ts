import { Component, OnInit } from '@angular/core';
import {from} from 'rxjs';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { NgForm, NgModel } from '@angular/forms'  
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public save_project;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) { 
    this.title = "Crear proyecto";
    this.project = new Project('','','','',2020,'','');
  }

  ngOnInit(): void{
  }

  onSubmit(form){
//Guardar los datos 

    //console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        if(response.project){
          

          //Subir la imagen
          this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id, [], this.filesToUpload, 'image' ).then((result:any) => {
            this.status = 'success';
            this.save_project = result.project;
            form.reset();
          });

          
        }else{
          this.status = 'failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }


  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
