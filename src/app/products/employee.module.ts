import { NgModule } from '@angular/core';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { RouterModule } from '@angular/router';
import { EmployeeDetailGuard } from './employee-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    RouterModule.forChild([{ path:'employees', component: EmployeeListComponent },
    { 
      path:'employees/:id',
      canActivate: [EmployeeDetailGuard],
      component:EmployeeDetailComponent}]),
      SharedModule
  ]
})
export class ProductModule { }
