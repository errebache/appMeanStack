import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TagsService ,TasksService , ProjectService} from "./services";


@
NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    
  ],
  providers: [TagsService,TasksService,ProjectService],
})
export class ServicesModule { }
