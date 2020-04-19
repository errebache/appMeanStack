import { Component, Input ,Output,EventEmitter, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import { Project, Tab } from 'src/app/models/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProjectComponent {
  
@Input() project: Project;
@Output() outUpdateProject = new EventEmitter<Project>();
@Input() tabs: Tab[];
@Input() activeTab : Tab;
@Output() outActivateTab  = new EventEmitter<Tab>();



 activateTab(tab: Tab) {
  this.outActivateTab.emit(tab);
 }

 updateTitle(title: string) {
   this.outUpdateProject.emit({
     ...this.project,
     title
   });
 }
 
updateDescription(description: string) {
  this.outUpdateProject.emit({
    ...this.project,
    description
  })
}


}
