import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-elementconsumer-component',
  templateUrl: 'app.elementconsumer.view.html'
})

export class ElementConsumerComponent implements OnInit {
  names:Array<string>;
  value:string;
  constructor() {
    this.names = new Array<string>();
    this.names.push("Tejas");
    this.names.push("Mahesh");
    this.names.push("Ramesh");
    this.names.push("Ram");
    this.names.push("Sabnis");
    this.value = "";
  }

  ngOnInit() { }

  getSelectedName(event:any):void {
    // since the component is subscribing to the
    // custom HTML element, the data emitted by this element
    // will be read by the Angular component using
    // event.detail
    // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
    this.value = event.detail;
  }
}
