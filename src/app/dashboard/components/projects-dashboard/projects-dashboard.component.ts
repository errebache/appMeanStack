import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectService, TasksService } from '../../../services/services';
import { Observable } from 'rxjs';
import { Project, Task } from '../../../models/models';

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ProjectsDashboardComponent implements OnInit {

  title = 'appMeanStack';
  projects: Observable<Project[]>;
  selectedProject: Observable<Project>;
  idSelected: string;
  test:any;
  tasks:Observable<any>
  constructor(private projectService: ProjectService, private taskService: TasksService) {
  
  }

  ngOnInit() {
    
    this.projects = this.projectService.getProjects();
    
    this.selectedProject = this.projectService.getSelectedProject();
  }

   
  selectProject(id: string) {
    this.projectService.selectProject(id);

 }
}
