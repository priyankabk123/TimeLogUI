import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddNewTimeLogComponent } from './add-new-time-log/add-new-time-log.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { RoleMasterComponent } from './role-master/role-master.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default redirect to login
  { path: 'login', component: LoginComponent },
  { path: 'Homepage', component: HomepageComponent },
  { path: 'AddNewTimelog', component: AddNewTimeLogComponent }, // Add Time Log page
  { path: 'ViewDetails', component: ViewDetailsComponent},
  { path: 'RoleMaster', component: RoleMasterComponent},
  { path: '**', redirectTo: '/Homepage' } // Wildcard route for undefined paths
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
