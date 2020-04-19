import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { Task, TaskListFilterType, Project } from 'src/app/models/models';
import { TasksService, ProjectService } from 'src/app/services/services';
import { map, switchAll, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListContainerComponent implements OnInit {
  selectedProject:Observable<Project>;
  tasks: Observable<Task[]>;
  filteredTask: Observable<Task[]>;
  taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];
  activateTaskFilterType = new BehaviorSubject<TaskListFilterType>('all');
  projectId:string;
  constructor(private taskService: TasksService,private projectService:ProjectService) { 
    
    this.selectedProject = this.projectService.getSelectedProject();
  
    this.tasks = this.selectedProject.pipe(
      switchMap((project) => this.taskService.getProjectTasks(project._id))
    )
    

    this.filteredTask = combineLatest(this.tasks,this.activateTaskFilterType)
    .pipe(
      map(([tasks,activatTaskFilterType]) => {
        return  tasks.filter((task: Task) => {
          if (activatTaskFilterType === 'all') {
            return true;
          } else if (activatTaskFilterType === 'open') {
            return !task.done;
          } else {
            return task.done;
          }
        });
      })
    )


  }
 
  ngOnInit() {

  }

  activateFilterType(type: TaskListFilterType) {
    this.activateTaskFilterType.next(type);
    console.log(this.activateTaskFilterType);
  }

  addTask(title: string) {
    const task: Task = {
      title, done: false
    };
    this.taskService.addTasks(task);
    console.log('add');
  }

  // updateTask(task: Task) {
  //   this.taskService.updateTask(task);
  // }
}
