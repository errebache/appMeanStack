import { Injectable } from "@angular/core"
import { Task } from '../models/task';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Project } from '../models/models';

@Injectable()

export class  TasksService {

     url: string = "http://localhost:3000/tasks";
    // private tasks: Task[] = [
    //     {id: 1, title: 'Task 1', done: false},
    //     {id: 2, title: 'Task 2', done: false},
    //     {id: 3, title: 'Task 3', done: true},
    //     {id: 4, title: 'Task 4', done: false}
    //   ];
      
    private tasks = new BehaviorSubject<Task[]>([]);
  

     constructor(private http: HttpClient) {
         
     }
     
     private loadTasks() {
       this.http.get<Task[]>(`${this.url}/list`)
       .subscribe((tasks) => this.tasks.next(tasks));
     }


      getTasks(): Observable<Task[]> {
          return this.tasks.asObservable();
      }


      addTasks(task:Task){
         return this.http
         .post(`${this.url}/add`,task)
         .subscribe(() => this.loadTasks);
      }

    //  updateTask(task:Task){
    //      return this.http
    //      .post(`/api/tasks/${task.id}`,task)
    //      .subscribe(() => this.loadTasks());
    //  }

    getProjectTasks(projectId: string):Observable<Task[]> {
          
      return this.http.get<Task[]>(`${this.url}/${projectId}`);

    }



}
