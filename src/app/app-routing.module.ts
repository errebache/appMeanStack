import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectContainerComponent } from './dashboard/components';
import { NavMenuComponent } from './dashboard/components/nav-menu/nav-menu.component';


const routes: Routes = [
    { path: 'projects', component: ProjectContainerComponent},
    {
        path: 'dashboard',
        component: NavMenuComponent,
        children: [
               // -------- SIDEBAR MENU
               { path: 'projects', component: ProjectContainerComponent }
        ]
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }