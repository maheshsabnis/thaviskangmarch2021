import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  message:string;
  name:string;
  heros:Array<string>;
  names:Array<any>;
  selectedHero:string;
  canShow:boolean;
  constructor(){
    this.message = 'Hello Angular!!!!!';
    this.name = "";
    this.heros = new Array<string>();
    this.heros.push('James Bond');
    this.heros.push('Ethan Hunt');
    this.heros.push('Jason Bourn');
    this.heros.push('Indiana Jones');
    this.heros.push('Jack Recher');
    this.selectedHero = '';

    this.names  =new Array<any>();
    this.names.push({Id:1, name:'A'});
    this.names.push({Id:2, name:'B'});
    this.names.push({Id:3, name:'C'});
    this.names.push({Id:4, name:'D'});

    this.canShow = true;
  }

  display():void {
     // alert('Button is clicked');
    this.message += 'The Event Binding!!';
    this.heros.pop();
  }

  displayWithEventParameter(event:any):void {

    // event, an event raised on UI element
    // event.target, the UI element object on which an event is raised
    // event.target.value, is the 'value' attribute of HTML elemnt
    this.message += `The Event Binding!! ${event.target.value}`;
    this.heros.push('Iron Man');
  }

  toggle():void {
    if(this.canShow) {
      this.canShow = false;
    } else {
      this.canShow = true;
    }
  }
}
