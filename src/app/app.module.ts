import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/employee.module';
import { EmployeeListComponent } from './products/employee-list.component';
import { EmployeeDetailComponent } from './products/employee-detail.component';
import { EmployeeDetailGuard } from './products/employee-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'employees', component: EmployeeListComponent},
      {
        path:'employees/:id',
        canActivate: [EmployeeDetailGuard],
        component:EmployeeDetailComponent
      },
      {path: 'welcome', component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path: '**',redirectTo:'welcome',pathMatch:'full'}

    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
