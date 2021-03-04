import { Component, OnInit,Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-parent-component',
  template: `
    <h2>The Parent Component</h2>
    <input type="text" class="form-control"
     [(ngModel)]="parentMeesage">
     <hr>
     <input type="button" value="toggle" (click)="toggle()">
     <br>
     <div *ngIf="canShow">
       <h4>Rendering the Child Component</h4>
     <app-lifecycle-child-component [message]="parentMeesage"></app-lifecycle-child-component>
     </div>

  `
})
export class LifecycleParentComponent implements OnInit {
  parentMeesage:string;
  canShow:boolean;
  constructor() {
    this.parentMeesage = '';
    this.canShow = true;
    console.log('Parent Constructor Called');

  }

  ngOnInit(): void {
    console.log('Parent nOnInit');
  }

  toggle():void {
    if(this.canShow) {
      this.canShow = false;
    } else {
      this.canShow = true;
    }

  }
}


@Component({
  selector: 'app-lifecycle-child-component',
  template: `
    <h2>The Child Component</h2>
    <div>
       Data Received from Parent = {{message}}
    </div>
    <br>
    <div>
      <strong>
        The Data received from Parent will be processed {{strData}}
      </strong>
    </div>
    <br>
    <div>
       <strong>
         x-Position: {{x}} &&& y-Position: {{y}}
       </strong>
    </div>
  `
})
export class LifecycleChildComponent implements OnInit, OnChanges, OnDestroy {

  @Input() message:string;
  strData:string;
  x:number;
  y:number;
  constructor() {
    this.message = '';
    this.x = 0;
    this.y = 0;
    this.strData = '';
    console.log('Child Constructor Called');
    window.addEventListener('mousemove',this.dettectMousePositions);
  }


  dettectMousePositions=(evt:any)=>{
    this.x =  evt.clientX;
    this.y =  evt.clientY;
  }

  // this will be changed for evenry changed received from UI
  // use this method to perform logical process operations
  // on data received from UI
  ngOnChanges():void {
    console.log(`The Child Received Changes`);
    this.strData = this.message.toUpperCase();
  }

  // will be invoked only-once
  ngOnInit(): void {

    console.log('Child nOnInit');
  }

  ngOnDestroy():void {
    console.log('Child Component is Destroyed');
    // releae the event
    window.removeEventListener('mousemove',this.dettectMousePositions);
  }
}



