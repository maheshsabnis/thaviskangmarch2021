import { CommunicationService } from './../../services/app.communication.service';
import { Departments } from './../../models/app.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sender-component',
  template: `
     <h2>The Sender Component</h2>
     <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>DeptNo</th>
            <th>DeptName</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let d of depts"
           (click)="getSelectedDepartment(d)">
            <td>{{d.DeptNo}}</td>
            <td>{{d.DeptName}}</td>
          </tr>
        </tbody>
     </table>
  `
})

export class SenderComponent implements OnInit {
  depts=Departments
  constructor(private serv:CommunicationService) { }

  ngOnInit() { }

  getSelectedDepartment(dept:any):void {
     // invoke method from the service
     this.serv.passData(dept.DeptNo);
  }
}
