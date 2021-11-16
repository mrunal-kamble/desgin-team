import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError,map, tap } from "rxjs/operators";
import { IEmployee } from "./employee";

@Injectable({
    providedIn : 'root'
})
export class EmployeeService{
    private employeeUrl = 'api/employees/employees.json';

    constructor(private http : HttpClient) {}
    
    getEmployees(): Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.employeeUrl).pipe(
          tap(data => console.log('All',JSON.stringify(data))),
          catchError(this.handleError)
        );
    }
    getEmployee(id:number):Observable<IEmployee | undefined>{
      return this.getEmployees()
      .pipe(
        map((employees:IEmployee[])=> employees.find(emp => emp.employeeId === id))
      );
    }
    private handleError(err: HttpErrorResponse) {
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        errorMessage = `an error ocurred: $(err.error.message)`;
      } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.log(errorMessage)
      return throwError(errorMessage); 
    }
}