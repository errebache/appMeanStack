import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TagsService } from "./services";
import { TasksService } from "./services"


@
NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
  ],
  providers: [TagsService,TasksService],
})
export class ServicesModule { }
