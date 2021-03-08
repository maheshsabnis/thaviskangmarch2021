import { UtilityService } from './../../services/app.utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilityservice-component',
  template: `
    <h2>Utility Service</h2>
    <div class="container">
        <strong>
          The Length of {{str}} is = {{length}}
        </strong>
        <hr>
        <strong>
          The Reverse of {{str}} is = {{res}}
        </strong>
    </div>
  `
})

export class UtilityServiceComponent implements OnInit {
  str:string;
  length:number;
  res:string;
  // inject the service using Constructor Injection
  constructor(private serv:UtilityService) {
    this.str = 'The Angular Service';
    this.length = 0;
    this.res = '';
  }

  ngOnInit() {
    this.length = this.serv.getLength(this.str);
    this.res = this.serv.reverse(this.str);
  }
}
