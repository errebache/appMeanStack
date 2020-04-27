import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter } from '@angular/core';
import { Task, TaskListFilterType } from '../../../../models/models';
import { TasksService } from '../../../../services/services';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent {
  
  @Input() tasks : Task[];
  @Input() taskFilterTypes: TaskListFilterType[];
  @Input() activeTaskFilterType: TaskListFilterType;
  @Output() outAddTask = new  EventEmitter<string>();
  @Output() outActiveTaskFilterType = new EventEmitter<TaskListFilterType>();
  @Output() outUpdateTask = new EventEmitter<Task>();

  constructor(private taskService: TasksService) {
    
  }


  addTask(title: string) {
     this.outAddTask.emit(title);
  }

  activateFilterType(type: TaskListFilterType) {
    this.outActiveTaskFilterType.emit(type);
  }

  updateTask(task: Task) {
   this.outUpdateTask.emit(task);
  }


}
