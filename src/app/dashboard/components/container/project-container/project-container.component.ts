import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectService } from 'src/app/services/services';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/models';
import { Tab } from '../../../../models/models'; 

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectContainerComponent {
  selectedProject: Observable<Project>;
  element:Project;
  tabs: Tab[] = [
    {id: 'tasks', title: 'Tasks'},
    {id: 'comments', title: 'Comments'},
    {id: 'activities', title: 'Activities'}
  ];
  activeTab: Tab = this.tabs[0];

  constructor(private projectService: ProjectService) {
    this.selectedProject = projectService.getSelectedProject();
    this.selectedProject.forEach(e=> {
      this.element = e;
    })
  }

  activateTab(tab: Tab) {
    this.activeTab = tab;
  }

  updateProject(project: Project) {
    this.projectService.updateProject(project);
  }


}
