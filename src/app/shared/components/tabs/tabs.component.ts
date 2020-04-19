import { Component, ViewEncapsulation, EventEmitter,ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { Tab } from '../../../models/models';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TabsComponent {

  @Input() tabs: Tab[];
  @Input() activeTab : Tab;
  @Output() outActivateTab  = new EventEmitter<Tab>();
 
  
  activateTab(tab: Tab) {
   this.outActivateTab.emit(tab);
  }
   
}
