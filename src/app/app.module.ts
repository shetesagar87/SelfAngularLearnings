import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 

import { EmployeeService } from './employees/employee.service';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employee/display-employee.component';
import  { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-gaurd.service';
import { NgGridComponent } from './AngularEx/ng-grid/ng-grid.component';

// All this code is angular practicals that i performed during my 
//  angular learnings. 

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent, canDeactivate: [CreateEmployeeCanDeactivateGuardService] },
  { path: 'ngGrid', component: NgGridComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    NgGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    //AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [EmployeeService,
    CreateEmployeeCanDeactivateGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
