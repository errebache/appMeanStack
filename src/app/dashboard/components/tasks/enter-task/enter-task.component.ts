import { Component,EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-enter-task',
  templateUrl: './enter-task.component.html',
  styleUrls: ['./enter-task.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EnterTaskComponent {
  
  @Output() inputTask = new EventEmitter<string>();
    
  enterTask(titleInput:HTMLInputElement){
     this.inputTask.emit(titleInput.value);
     titleInput.value = '';
     titleInput.focus();
  }

}
