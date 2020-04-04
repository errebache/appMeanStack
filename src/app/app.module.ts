import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent} from './app.component';
import {ActivitiesComponent,EffortsComponent,CommentsComponent,TagsComponent,
        ProjectComponent,ProjectsDashboardComponent,UserComponent,EnterTaskComponent,TaskComponent} from './dashboard/components';
import { LoginComponent } from './auth/components';

import { ServicesModule} from './services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularMaterialModule} from './angular-material-module';

import { CheckboxComponent,ToggleComponent } from './shared/components/components';
import { TaskListComponent } from './dashboard/components/tasks/task-list/task-list.component';
import { TaskListContainerComponent } from './dashboard/components/container/task-list-container/task-list-container.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    EffortsComponent,
    TagsComponent,
    CommentsComponent,
    LoginComponent,
    ProjectComponent,
    ProjectsDashboardComponent,
    UserComponent,
    TaskComponent,
    EnterTaskComponent,
    CheckboxComponent,
    TaskListComponent,
    ToggleComponent,
    TaskListContainerComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
