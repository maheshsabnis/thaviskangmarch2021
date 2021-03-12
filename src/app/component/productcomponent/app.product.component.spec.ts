import { ProductInfo } from './../../models/app.productinfo.model';
// the spec file to test the ProductComponent's HTML template
// for siapatching the event

// TestBed:  provide a container for registering all standard angular modules
// components and services exactly like @NgModule

// ComponentFixture: Provide instance of component by compiling it, validate HTML template
// and also detect Binding Changes

//  async: used for executing the test asynchronously


import { TestBed, ComponentFixture, async } from "@angular/core/testing";

import { FormsModule } from "@angular/forms";

import { ProductComponent } from "./app.product.component";
import { DataTableComponent } from "./../../directives/componentdirective/datatabledirective/app.datattable.component.directive";
import { ColorDirective } from "./../../directives/customattributedirective/app.color.directive";

// define a test suit

describe('Testing Product Component', ()=>{

  // define redernecs for ComponentFixture, Componet Class and the HTML element

  let component:ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let button: HTMLElement;

  // define the dependency objects those are required to execute the ProductComponent

  beforeEach(async()=>{
      TestBed.configureTestingModule({
        declarations:[ProductComponent,DataTableComponent,ColorDirective],
        imports:[FormsModule]
      }).compileComponents(); // valdiate component's code and its HTML template
  });

  // define the Component instance thatb will be used for each
  // test and also monitor the HTML of the component for initial databainding

  beforeEach(()=>{
    // create a component instance with Code and HTML Template
    fixture = TestBed.createComponent(ProductComponent);
    // just use the code (public properties and events)
    component = fixture.componentInstance;
    // subscribe to any changes in HMTL because of Databinding
    fixture.detectChanges();
  });

  // write a test case
  it('should calculate tax as 2% of the BasicPrice when save button is clicked', ()=>{
      // arrange
      let product = new ProductInfo(0,'','','','','',0);
      product.BasePrice = 2000;
      // setting value for the product property of the component
      component.product = product;
      // refer to the HTML Template of the component
      const htmlTemplate = fixture.nativeElement;
      // read the button that has the class 'btn-success'
      button = htmlTemplate.querySelector('.btn-success');
      // act
      // dipatch the event that will invoke 'save()' method with 'click' binding
      const event = button.dispatchEvent(new Event('click'));
      // monitor any changes occured in HTML template
      fixture.detectChanges();
      // assert
      // compare result 2000 with 2% is 40 rupees
      expect(htmlTemplate.querySelector('input[disabled]').value).toEqual('40');
  });
});
