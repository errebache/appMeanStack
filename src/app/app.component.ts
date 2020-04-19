import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectService } from './services/services';
import { Observable } from 'rxjs';
import { Project } from './models/models';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'appMeanStack';
  projects: Observable<Project[]>;
  selectedProjet: Observable<Project>;
  idSelected: string;
  test:any;
  constructor(private projectService: ProjectService) {
    this.projects = projectService.getProjects();
    this.selectedProjet = this.projectService.getSelectedProject();
  }


  selectProject(id: string) {
    this.projectService.selectProject(id);
    this.selectedProjet.forEach(e=> {
      this.idSelected =  e._id;
    });
  }
}
