import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Logic } from "../../models/app.productinfo.logic";
import { ProductInfo } from "../../models/app.productinfo.model";
import { Categories,Manufacturers } from "../../models/app.constants";
import { CustomValidator } from "./app.custom.validator";
@Component({
  selector: 'app-productreactiveform-component',
  templateUrl: 'app.productreactiveform.view.html'
})
export class ProductReactiveFormComponent implements OnInit, OnChanges {
  product:ProductInfo;
  products: Array<ProductInfo>;
  private logic: Logic;
  // store values from constants in the local public properties of the component
  categories = Categories;
  manufacturers = Manufacturers;
  coloumnHeaders:Array<string>;
  depts:Array<any>;

  frmgpProduct: FormGroup;


  constructor() {
    this.product = new ProductInfo(0,'','','','','',0);
    this.products = new Array<ProductInfo>();
    this.logic  =new Logic();
    this.coloumnHeaders = new Array<string>();
    this.depts = new Array<any>();
    this.depts.push({id:10,name:'IT'});
    this.depts.push({id:20,name:'HRD'});
    // map public properties of ProductInfo class (the model class) with
    // formGrpup
    // Keep 'key' same as the name of the pub;ic prowperty from the model class
    // this will be easy to maintenencae
    // FormControl, represent the 'state' (aka data) entered intio the form element
    // the 'key' will be bound with editable elements using 'formControlName' directive
    this.frmgpProduct = new FormGroup({
      ProductRowId: new FormControl(this.product.ProductRowId,
         Validators.compose(
           [
              Validators.required,
              Validators.minLength(4),
              Validators.maxLength(8),
              Validators.pattern('[0-9]+'),
              CustomValidator.checkEven // custom validator
          ]
         )),
      ProductId: new FormControl(this.product.ProductId),
      ProductName: new FormControl(this.product.ProductName),
      CategoryName: new FormControl(this.product.CategoryName),
      Manufacturer: new FormControl(this.product.Manufacturer),
      Description: new FormControl(this.product.Description),
      BasePrice: new FormControl(this.product.BasePrice)
    });
  }

  // the method will be executed for each change that takes place on the UI
  // for the data-bpund property. These changes will be received by the
  // component and then component will decide if the UI changes are needed
  ngOnChanges():void {
      console.log(`Value is changed`);
  }

  // 1. write the time-consuming logic which we cannot write in constructor
  // 2. subscription to the events to commucate across component
  // 3. subscribe to route parameters when parameterized routing is execute
  // 4. call the method that internnaly contains long running promise based operations e.g. HTTP calls
  ngOnInit() {
    console.log('On Init called');
    // read all properteis (aka keys) of ProductInfo class
    // and store them in coloumnHeaders
    this.coloumnHeaders = Object.keys(this.product);

    this.products = this.logic.getProducts();

  }

  clear():void {
    this.product = new ProductInfo(0,'','','','','',0);
  }
  save():void {
    // to read the posted value from the form use
    // 'value' property of the FormGroup
    this.product = this.frmgpProduct.value;
    this.products = this.logic.addProduct(this.product);
  }
  getSelectedProduct(prd:ProductInfo):void {
    // Object.assign(target, source)
    // create a new object by compying the schema and values
    // of source to targets
    this.product = Object.assign({},prd);
  }
  onSelectedProduct(event:any):void {
    // use the 'setValue()' method of the FormGroup
    // assign value to it
    this.frmgpProduct.setValue(event);
    // this.product = Object.assign({},event);
  }
}
