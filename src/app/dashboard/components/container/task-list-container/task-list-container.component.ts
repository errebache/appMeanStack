import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { Task, TaskListFilterType } from 'src/app/models/models';
import { TasksService } from 'src/app/services/services';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.scss']
})
export class TaskListContainerComponent implements OnInit {

  tasks: Observable<Task[]>;
  filteredTask: Observable<Task[]>;
  taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];
  activateTaskFilterType = new BehaviorSubject<TaskListFilterType>('all');

  constructor(private taskService: TasksService) { 

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
  }

  addTask(title: string) {
    const task: Task = {
      title, done: false
    };
    this.taskService.addTasks(task);
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
  }
}
