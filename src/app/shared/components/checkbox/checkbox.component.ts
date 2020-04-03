import { Component, OnInit, Input ,EventEmitter, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CheckboxComponent {

  @Input() label:string;
  @Input() checked:boolean;
  @Output() outCheck = new EventEmitter<boolean>();


  check(checked:boolean){
    this.outCheck.emit(checked);
  }
}
