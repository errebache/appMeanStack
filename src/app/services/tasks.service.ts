import { Injectable } from "@angular/core"
import { Task } from '../models/task';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class  TasksService {

    // private tasks: Task[] = [
    //     {id: 1, title: 'Task 1', done: false},
    //     {id: 2, title: 'Task 2', done: false},
    //     {id: 3, title: 'Task 3', done: true},
    //     {id: 4, title: 'Task 4', done: false}
    //   ];
      
    private task = new BehaviorSubject<Task>([]);
  

     constructor(private http: HttpClient) {

     }
     
     private loadTasks() {
       this.http.get('api/tasks')
       .subscribe(() => this.tasks.next(tasks));
     }


      getTasks():Task[] {
          return this.tasks.asObservale();
      }


      addTasks(task:Task){
         return this.http
         .post('api/tasks',task)
         .subscribe(() => this.loadTasks);
      }

     updateTask(task:Task){
         return this.http
         .post(`/api/tasks/${task.id}`,task)
         .subscribe(() => this.loadTasks());
     }



}
