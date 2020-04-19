import { Component, ViewEncapsulation, Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-navigation-section',
  templateUrl: './navigation-section.component.html',
  styleUrls: ['./navigation-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationSectionComponent {

  @Input() title: string;

}
