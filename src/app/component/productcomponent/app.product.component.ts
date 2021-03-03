import { Component, OnInit } from '@angular/core';
import { Logic } from "./../../models/app.productinfo.logic";
import { ProductInfo } from "./../../models/app.productinfo.model";
import { Categories,Manufacturers } from "./../../models/app.constants";
// OnInit: The Lifeccyle Interface for Component
// provides ngOnInit() method. Thsi will be immediately invoked after the
// constructor execution. If Component implements 'OnChanges' interface
// then the 'ngOnChanges()' method will be executed after constructor
// and then ngOnInit() method will be invoked
@Component({
  selector: 'app-product-component',
  templateUrl: 'app.product.view.html'
})
export class ProductComponent implements OnInit {
  product:ProductInfo;
  products: Array<ProductInfo>;
  private logic: Logic;
  // store values from constants in the local public properties of the component
  categories = Categories;
  manufacturers = Manufacturers;
  coloumnHeaders:Array<string>;
  depts:Array<any>;
  constructor() {
    this.product = new ProductInfo(0,'','','','','',0);
    this.products = new Array<ProductInfo>();
    this.logic  =new Logic();
    this.coloumnHeaders = new Array<string>();
    this.depts = new Array<any>();
    this.depts.push({id:10,name:'IT'});
    this.depts.push({id:20,name:'HRD'});
    console.log('Constructor called');
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
    this.products = this.logic.addProduct(this.product);
  }
  getSelectedProduct(prd:ProductInfo):void {
    // Object.assign(target, source)
    // create a new object by compying the schema and values
    // of source to targets
    this.product = Object.assign({},prd);
  }
  onSelectedProduct(event:any):void {
    this.product = Object.assign({},event);
  }
}
