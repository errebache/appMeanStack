import { Injectable } from "@angular/core"
import { Task } from '../models/task';

@Injectable()

export class  TasksService {

    private tasks: Task[] = [
        {id: 1, title: 'Task 1', done: false},
        {id: 2, title: 'Task 2', done: false},
        {id: 3, title: 'Task 3', done: true},
        {id: 4, title: 'Task 4', done: false}
      ];
      
     constructor() {

     }
  
      getTasks():Task[] {
          return this.tasks.slice();
      }


      addTasks(task:Task){
        this.tasks.push({
            ...task,
            id:this.tasks.length + 1
        })
      }

     updateTask(task:Task){
         const index = this.tasks
         .findIndex((x) => x.id === task.id)
         this.tasks[index] = task;
     }



}
