import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddNewTimeLogComponent } from './add-new-time-log/add-new-time-log.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { RoleMasterComponent } from './role-master/role-master.component';
import { EmployeemasterComponent } from './employeemaster/employeemaster.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    NavBarComponent,
    AddNewTimeLogComponent,
    ViewDetailsComponent,
    RoleMasterComponent,
    EmployeemasterComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
