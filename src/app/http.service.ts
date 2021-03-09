import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from './employee'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.http.get('assets/employees.json').pipe(map(data => {
      let employeeList = data["employees"];
      return employeeList.map(function (employee: any) {
        return { name: employee.name, age: employee.age };
      });
    }));
  }

  addEmployee(name: string, age: number): Observable<any> {
    return this.http.get('assets/employees.json').pipe(map(data => {
      data["employees"].push({ name: name, age: age })
      
      // fs.writeFile('assets/employees.json', JSON.stringify(data), function(err) {
      //   if (err) {
      //     throw err;
      //   };
      //   return 'update completed';
      // })

      return data;
    }));
  }
}
