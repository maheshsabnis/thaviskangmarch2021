import { CommunicationService } from './../../services/app.communication.service';
import { Departments, Employees } from './../../models/app.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receiver-component',
  template: `
     <h2>The Receiver Component</h2>
     <table class="table table-bordered table-striped">
        <thead>
          <tr>
          <th>EmpNo</th>
          <th>EmpName</th>
            <th>DeptNo</th>

          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let e of FilteredEmployees">
          <td>{{e.EmpNo}}</td>
          <td>{{e.EmpName}}</td>
            <td>{{e.DeptNo}}</td>

          </tr>
        </tbody>
     </table>
  `
})

export class ReceiverComponent implements OnInit {
  emps=Employees
  dno:number;
  private _filteredEmployees:Array<any>;
  constructor(private serv:CommunicationService) {
    this.dno = 0;
    this._filteredEmployees = new Array<any>();
   }

  // subscribe to the event once
  ngOnInit() {
    this.serv.receiveData.subscribe((data)=>{
      this.dno = data;
      console.log(`Data Receivd is = ${this.dno}`);
    });
  }

  // read-only property taht will be executed
  // when the 'dno' is changed (execution od ngOnChanges)
  get FilteredEmployees():Array<any> {
    this._filteredEmployees = new Array<any>();
    if(this.dno > 0) {
       // filter data based on dno
       this._filteredEmployees = this.emps.filter((e,i)=>{
         return e.DeptNo === this.dno;
       });
    } else {
      this._filteredEmployees  =this.emps;
    }
    return this._filteredEmployees;
  }
}
