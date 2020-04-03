import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Task, TaskListFilterType } from '../../../../models/models';
import { TasksService } from '../../../../services/services';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent {

  tasks: Task[];
  filteredTasks: Task[];
  taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];
  activeTaskFilterType: TaskListFilterType = 'all';

  constructor(private taskService: TasksService) {
    this.tasks = taskService.getTasks();
    this.filterTasks();
  }

  activateFilterType(type: TaskListFilterType) {
    this.activeTaskFilterType = type;
    this.filterTasks();
  }

  filterTasks() {
    this.filteredTasks = this.tasks
      .filter((task: Task) => {
        if (this.activeTaskFilterType === 'all') {
          return true;
        } else if (this.activeTaskFilterType === 'open') {
          return !task.done;
        } else {
          return task.done;
        }
      });
  }

  addTask(title: string) {
    const task: Task = {
      title, done: false
    };
    this.taskService.addTasks(task);
    this.tasks = this.taskService.getTasks();
    this.filterTasks();
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
    this.tasks = this.taskService.getTasks();
    this.filterTasks();
  }

}
