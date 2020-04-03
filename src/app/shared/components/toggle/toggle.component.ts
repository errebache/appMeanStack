import { Component, Input, Output,EventEmitter, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToggleComponent implements OnInit{
 
  @Input() buttonList:string[];
  @Input() activeButton: string;
  @Output() outActivate = new EventEmitter<string>();



 ngOnInit(){
   if(!this.activeButton){
     this.activeButton = this.buttonList[0];
   }

 }

 activate(button: string){
   this.outActivate.emit(button);
 }


}
