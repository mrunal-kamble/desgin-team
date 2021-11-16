import { ThrowStmt } from "@angular/compiler";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IEmployee } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({
    templateUrl: './employee-list.component.html',
    styleUrls:['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit,OnDestroy {
    employeelist :string ="Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage : boolean= false;
    errorMessage :string ='';
    sub!: Subscription ;

    private _listFilter: string ='';
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        console.log('In setter',value);
        this.filteredEmployees=this.performFilter(value);
    }
    filteredEmployees: IEmployee[]=[];
    employees: IEmployee[] = [];
    constructor(private employeeService: EmployeeService){

    }
    performFilter(filterby:string):IEmployee[]{
        filterby=filterby.toLocaleLowerCase();
        return this.employees.filter((employee:IEmployee) => 
        employee.employeeName.toLocaleLowerCase().includes(filterby));
    }
    toggleImage(): void {
        this.showImage=!this.showImage
    }
    ngOnInit():void{
        this.sub = this.employeeService.getEmployees().subscribe({
            next:employees =>{
                this.employees = employees;
                this.filteredEmployees = this.employees;
            } ,
            error:err =>this.errorMessage =err
        });
        this.filteredEmployees= this.employees;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onRatingClicked( message:string):void{
        this.employeelist = 'Employee list:'+message;
        
        
    }
}