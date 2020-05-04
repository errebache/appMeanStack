import { Component, OnInit, Input,EventEmitter, Output, HostBinding, ViewEncapsulation } from '@angular/core';
import { Task } from '../../../../models/models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() outUpdateTask = new EventEmitter<Task>();
  @Output() outDeleteTask = new EventEmitter<Task>();
  constructor() { }

  ngOnInit() {

  }

  @HostBinding('class.done')
  get done() {
    return this.task && this.task.done;
  }

  updateTask(done: boolean) {
    this.outUpdateTask.emit({
      ...this.task,
      done
    });
  }

  updateTitle(title: string) {
    this.outUpdateTask.emit({
      ...this.task,
      title
    });
  }

 deleteTask(title: string) {
   this.outDeleteTask.emit({
     ...this.task,
     title
   })
 }

}
