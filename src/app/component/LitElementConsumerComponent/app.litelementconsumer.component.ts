import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-litelementconsumer-component',
  templateUrl: 'app.litelementconsumer.view.html'
})

export class LitElementConsumerComponent implements OnInit {
  message:string;
  names:Array<string>;
  constructor() {
    this.message= "";
    this.names = new Array<string>();
    this.names.push('A');
    this.names.push('B');
    this.names.push('C');
    this.names.push('D');
  }

  ngOnInit() { }

  onButtonClick(event:any):void {
    this.message = event.detail.message;
  }

  selectedName(event:any):void {

    this.message = event.detail.message;
  }
}

