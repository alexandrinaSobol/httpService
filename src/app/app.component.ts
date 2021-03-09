import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {

  employeeName: string;
  employeeAge: number;

  employees: Employee[] = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getEmployee().subscribe(data => this.employees = data);
    //this.http.get('assets/employees.json').subscribe(data => this.employees = data["employees"]);
  }

  addEmployee() {
    this.http.addEmployee(this.employeeName, this.employeeAge).subscribe(data => console.log(data));
  }
}
