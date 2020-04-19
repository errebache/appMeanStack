import { Component, EventEmitter,ViewEncapsulation, ChangeDetectionStrategy, OnChanges, AfterViewInit, ViewChild, ElementRef, Output, Input, SimpleChange, SimpleChanges, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class EditorComponent  implements OnChanges,AfterViewInit{
 @ViewChild('editableContentElement',{static:true}) editableContentElement : ElementRef;
 @HostBinding('class.edit-mode') editMode:boolean;
 @Input() content:string;
 @Input() showControls:boolean;
 @Output() outSaveEdit = new EventEmitter<string>();
 @Output() outCancelEdit = new EventEmitter<never>();

 ngOnChanges(change: SimpleChanges) {
   if(change.content && this.editableContentElement) {
     this.setEditableContent(this.content);
   }
 }

 ngAfterViewInit() {
  this.setEditableContent(this.content);
 }

 @HostListener('click')
 focusEditableContent() {
   if(this.editMode) {
     this.editableContentElement.nativeElement.focus();
   }
 }

  saveEdit() {
    this.editMode = false;
    this.outSaveEdit.emit(this.getEditableContent());
  }

  cancelEdit() {
    this.editMode = false;
    this.setEditableContent(this.content);
    this.outCancelEdit.emit();
  }

 beginEdit() {
   this.editMode = true
 }

 private getEditableContent() {
   return this.editableContentElement.nativeElement.textContent;
 }

 private setEditableContent(content: string) {
   this.editableContentElement.nativeElement.textContent = content
 }


}
