// LitElement, the base class for creating litElements
// provides the HTML Template rendering based on properties
// used to load and apply CSS in rendering
// used to define properties

// html, the html template that redes the HTML inside shadow DOM
// based on properties

// property, the decorator used to define 'public properties' for
// lit elements

// css, used to define CSS for HTML

// cuastomElement, the class decorator for definisn a
// custom tag so that lit element can be registered in CustomElementRgistry
// use it in Browser DOM

import { LitElement, html, property,css, customElement } from "lit-element";
@customElement('first-litelement')
export class FirstLitElement extends LitElement{

  // define a property using property decorators
  // type: String} the type initialized that must be
  // followed by any W3C library that wants to use the LitElement
  @property({type: String})data:string;
  @property({type: Array}) names:[];
  @property({type: String})name:string;
  // defining properties using 'properties()'  readonly (aka getter) property

  // static get properties(){
  //   return {
  //     v1:{type:String},
  //     v2:{type:String}
  //   }
  // }


  // define an inline style. This will be encapsulated in shadow DOM

  static get styles(){
    return css
    `
    div {color: red;}
    input[type='button']{background-color:yellow; width:100px; height:200px}
    select{width:300px}
    `;
  }

  /**
   *
   */
  constructor() {
    super();
    this.data = '';
    this.names = [];
    this.name = '';
    // this.v1 = '';
    // this.v2 = '';
  }
  // a method that will be bound with the
  // click event of the button and will be used to emit data to its parent

  emitData(){
    // the lit element will emit an event to the parent using
    // CustoEvent object of ES 6
    // the subscriber will subscribe to the event
    // using 'on-btn-click'
    const myevent = new CustomEvent('btn-click', {
      // the event data
      detail:{
         message: this.data
      },
      // bubble-up from child to the subscriber
      bubbles:true,
      // the subscribet has to subscribe to read data
      // and event listener will concluded (aka released)
      composed: true
    });
    // dispatch event
    this.dispatchEvent(myevent);
  }


  emitName(evt:any){

    const myevent = new CustomEvent('selectItem', {
      detail:{
         message: evt.target.value
      },
      bubbles:true,
      composed: true
    });

    this.dispatchEvent(myevent);
  }


  // rendering the HTML DOM
   render(){
     return html `
      <div>
         <h2>The Fisrt List Element</h2>
         <div>
           <strong>The Message from Caller is = ${this.data}</strong>
           <br/>
          <input type="button" value="click me" @click="${this.emitData}"/>
         </div>
         <br/>
         <select @change="${this.emitName}">
           ${this.names.map(n=> html `
               <option value="${n}">${n}</option>
           `)}
         </select>
      </div>
     `;
   }
}
