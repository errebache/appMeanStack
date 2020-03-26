import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent} from './app.component';
import {ActivitiesComponent,EffortsComponent,CommentsComponent,TasksComponent,TagsComponent,
        ProjectComponent,ProjectsDashboardComponent,UserComponent} from './dashboard/components';
import { LoginComponent } from './auth/components';

import { ServicesModule} from './services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularMaterialModule} from './angular-material-module';
@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    EffortsComponent,
    TagsComponent,
    CommentsComponent,
    TasksComponent,
    LoginComponent,
    ProjectComponent,
    ProjectsDashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
