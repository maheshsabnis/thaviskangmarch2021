import { DataTableComponent } from './directives/componentdirective/datatabledirective/app.datattable.component.directive';
import { ProductComponent } from './component/productcomponent/app.product.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// FormsModule used for Two-Way binding to execute ngModel directive
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent, DataTableComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
