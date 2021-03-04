import { ProductReactiveFormComponent } from './component/productreactivefromcomponent/app.productreactiveform.component';
import { LifecycleParentComponent, LifecycleChildComponent } from './component/lifecycle/app.lifecycle.component';
import { DataTableComponent } from './directives/componentdirective/datatabledirective/app.datattable.component.directive';
import { ProductComponent } from './component/productcomponent/app.product.component';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent, DataTableComponent,
    LifecycleParentComponent, LifecycleChildComponent,
    ProductReactiveFormComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductReactiveFormComponent]
})
export class AppModule { }
