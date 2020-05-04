import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent} from './app.component';
import {ActivitiesComponent,EffortsComponent,CommentsComponent,TagsComponent,
        ProjectComponent,ProjectsDashboardComponent,UserComponent,EnterTaskComponent,TaskComponent,
        TaskListContainerComponent,ProjectContainerComponent} from './dashboard/components';
import { LoginComponent, AuthComponent} from './auth/components';

import { ServicesModule} from './services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularMaterialModule} from './angular-material-module';
import { AppRoutingModule } from './app-routing.module';

import { CheckboxComponent,ToggleComponent,NavigationComponent,NavigationItemComponent,NavigationSectionComponent,
  TabsComponent,EditorComponent } from './shared/components/components';
import { TaskListComponent } from './dashboard/components/tasks/task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './dashboard/components/nav-menu/nav-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    EffortsComponent,
    TagsComponent,
    CommentsComponent,
    LoginComponent,
    AuthComponent,
    ProjectComponent,
    ProjectsDashboardComponent,
    UserComponent,
    TaskComponent,
    EnterTaskComponent,
    CheckboxComponent,
    TaskListComponent,
    ToggleComponent,
    TaskListContainerComponent,
    NavigationItemComponent,
    NavigationSectionComponent,
    NavigationComponent,
    TabsComponent,
    EditorComponent,
    ProjectContainerComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
