import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProjectService {
   
    private projects = new BehaviorSubject<Project[]>([]);
    private selectedProjectId = new BehaviorSubject<string>(null);
    private selectedProject: Observable<Project>;

    url: string = "http://localhost:3000/projects";

    constructor(private http: HttpClient) {
        this.loadProject();
        this.selectedProject = combineLatest(this.projects,this.selectedProjectId)
        .pipe(
            map(([projects,selectProjectId]) => 
            projects.find((project) => project._id === selectProjectId)
            )
        )
    }


    private loadProject() {
        this.http.get<Project[]>(`${this.url}/list`).
        subscribe((projects) => this.projects.next(projects));
    }
    
    getSelectedProject() {
        return this.selectedProject;     
    }

    getProjects() {
     return this.projects.asObservable();
    }

    selectProject(id: string) {
        this.selectedProjectId.next(id);
    }

    
  updateProject(project: Project) {
    if(project) {
        this.http.put(`${this.url}/update/${project._id}`,project)
          .subscribe(() => this.loadProject());
    }  
  }

}