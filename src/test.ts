// define the test configuration so that the DOM map is generated
// in memory and it will linked with jest using
// jset-preset-angular
// this will be an in-memory DOM that will be used to instantiate
// and load the component's HTML template with its Databinding and events

import 'jest-preset-angular';

// define a CSS property for window object in memory
// this will be used as CSS selector for extrating DOM
// element in test case e.g. dispatching event on element

Object.defineProperty(window,'CSS', {value:null});
// define a DOCType for setting the pointer for DOM in memory while testing
Object.defineProperty(document, 'doctype', {
  value: '!<<DOCTYPE html>>'
}); 

// define an iteration on DOM so that events can be dispatched
// and changes can be monitored in memory

Object.defineProperty(document.body.style, 'transform', {
  value:()=>{
    return {
      enumerable:true, // monitor the DOM changed when any node is updated
      configurable:true // allow the DOM changed for databinding and events 
    }
  }
})