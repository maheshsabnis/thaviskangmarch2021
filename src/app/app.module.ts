import { ElementConsumerComponent } from './component/elementconsumer/app.elementconsumer.component';
import { ListElementComponent } from './elements/app.list.element';
import { ProductReactiveFormComponent } from './component/productreactivefromcomponent/app.productreactiveform.component';
import { LifecycleParentComponent, LifecycleChildComponent } from './component/lifecycle/app.lifecycle.component';
import { DataTableComponent } from './directives/componentdirective/datatabledirective/app.datattable.component.directive';
import { ProductComponent } from './component/productcomponent/app.product.component';

// Injector, this will be used to inject the component as custom HTML element
// created using 'createCustomElement()' into the registry
// CUSTOM_ELEMENTS_SCHEMA, the object used by angular to
// load, render and use the custom HTML element (form angular or from third party apps)
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// FormsModule used for Two-Way binding to execute ngModel directive
// ReactiveFormsModule, the module that provides an execution for Angular Reactive form
// and also provides resolution for following objects
// FormGroup, mapped with <form></form> by implicitely using 'ngForm' directive
// the [formGroup], the attribute directive that will bind 'formControls' to <form> tag
// FormControl, represend an editable element inside <form> in case of ReactiveForms
// The 'formControlName' an attribute that is used to map the editable element in the <form> tag
// with the FormGoroup ans its controls collection that is mapped with public property from Model class
// The Validators class is also provided by ReactiveFormsModule class
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// impoprt the directive
import { ColorDirective } from "./directives/customattributedirective/app.color.directive";

// tyhe method used to register the Component as Custom HTML Element
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent, DataTableComponent,
    LifecycleParentComponent, LifecycleChildComponent,
    ProductReactiveFormComponent, ColorDirective,
    ListElementComponent,
    ElementConsumerComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  // the NgModule can used custom elements and reder it
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //  the entryComponent will create a seperate registry
  // in NgModule so that some of the components will be
  // exposed as custom HTML element
  entryComponents:[ListElementComponent],
  providers: [],
  bootstrap: [ElementConsumerComponent]
})
export class AppModule {
  constructor(private injector: Injector){
    // convert the component as HTML element
    // and ,ake it ready to inject in customElementRegistry
    const listElement = createCustomElement(ListElementComponent, {injector: this.injector});
    // define a developer friendly custom tag for it
    customElements.define('list-element', listElement);
  }
}
