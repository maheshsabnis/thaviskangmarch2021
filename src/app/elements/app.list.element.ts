import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  templateUrl: 'app.list.element.view.html'
})

export class ListElementComponent implements OnInit {
  private _Items:Array<any>;
  @Output()
  selectItem:EventEmitter<any>;
  constructor() {
    this._Items = new Array<any>();
    this.selectItem = new EventEmitter<any>();
   }

  ngOnInit() { }

  @Input()
  set Items(value:Array<any>){
    this._Items = value;
  }
  get Items():Array<any>{
    return this._Items;
  }

  onSelectItem(event:any):void {
     this.selectItem.emit(event.target.value);
  }
}
