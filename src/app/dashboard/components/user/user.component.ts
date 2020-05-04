import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/models';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit ,OnChanges{
  
  @Input() user: User;
  // @Input() openTasksCount: number;
  pictureSafeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user) {
      this.pictureSafeUrl = this.sanitizer
        .bypassSecurityTrustResourceUrl(this.user.pictureUrl);
    }
  }

}
