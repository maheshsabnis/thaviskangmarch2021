import { UtilityService } from './../../services/app.utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-component',
  template: `
    <h2>The Component from Share Module</h2>
    <h5>I am from Share Module</h5>
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

export class DisplayComponent implements OnInit {
  str:string;
  length:number;
  res:string;
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
