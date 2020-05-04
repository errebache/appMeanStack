import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectContainerComponent, ProjectsDashboardComponent } from './dashboard/components';
import { NavMenuComponent } from './dashboard/components/nav-menu/nav-menu.component';
import { AuthComponent, LoginComponent } from './auth/components';


const routes: Routes = [
    {
        path: 'dashboard',
        component: NavMenuComponent,
        children: [
               { path: 'projects', component: ProjectsDashboardComponent }
        ]
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: '**', redirectTo: 'login' }
        ]
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }