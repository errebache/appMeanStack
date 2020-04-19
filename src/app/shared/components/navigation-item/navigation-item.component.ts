import { Component, Input, Output ,EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, HostListener} from '@angular/core';


@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NavigationItemComponent {

  @Input() title:string;
  @Input() navId:string;
  @Output() outActivateNavigationItem = new EventEmitter<any>();


  @HostListener('click')
  activateNavigationItem() {
    this.outActivateNavigationItem.emit(this.navId);
  }
}
