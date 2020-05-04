import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectService, TasksService,AuthenticationService } from '../../../services/services';
import { Observable } from 'rxjs';
import { Project, Task, User, UserResponse } from '../../../models/models';

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
  curentUser: UserResponse;
  user:User;
  tasks:Observable<any>;
  loading = false;
  currenttest:Observable<User>;
  constructor(private projectService: ProjectService, 
    private taskService: TasksService,private authenticateSevice: AuthenticationService) {
  
  }

  ngOnInit() {

    this.loading = true;
    this.curentUser = this.authenticateSevice.currentUserValue;

    this.user = this.curentUser.user;
    
    console.log(this.user);
    
    this.projects = this.projectService.getProjects();
    
    this.selectedProject = this.projectService.getSelectedProject();
  }

   
  selectProject(id: string) {
    this.projectService.selectProject(id);

 }
}
