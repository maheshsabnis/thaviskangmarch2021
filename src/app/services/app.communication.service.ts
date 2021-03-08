import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CommunicationService {
  // event that will be emitted when sender send data
  // service. THis event will be subscribed by theb
  // receiver
  receiveData:EventEmitter<any>;
  // the object that will hold the data
  data:any;
  constructor() {
    this.receiveData = new EventEmitter<any>();
  }

  // the method will be invoked by sende to send data
  passData(d:any):void {
    this.data = d;
    this.receiveData.emit(this.data);
  }

}
