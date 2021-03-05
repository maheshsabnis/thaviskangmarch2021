import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datatable-component',
  templateUrl: './app.datatable.component.view.html'
})
export class DataTableComponent implements OnInit {
  private _DataSource:Array<any>;
  columnHeaders:Array<string>;
  color:string;

  // EventEmitter<any>, used to emit an event from component
  // <T> is a generic parameter that represent 'event arguments'
  // @Output decorator on EventEmitter, will be used to subscribe
  // the event by parent using event binding
  // (selectRow) and the event data emitted will be
  // listened by parent using $event object
  @Output()
  selectRow:EventEmitter<any>;
  constructor() {
    this._DataSource = new Array<any>();
    this.columnHeaders = new Array<string>();
    this.selectRow = new EventEmitter<any>();
    this.color='';
  }

  ngOnInit(): void {
      this.columnHeaders = Object.keys(this._DataSource[0]);
  }
  // the @Input decorated property will be used by the patent for property binding
  // e.g.[DataSource]
  @Input()
  set DataSource(value:Array<any>) {
    this._DataSource = value;
  }
  get DataSource():Array<any> {
    return this._DataSource;
  }
  // a method that will emit event
  onSelectRow(row:any):void {
    this.selectRow.emit(row);
  }
}
