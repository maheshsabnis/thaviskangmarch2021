import { ProductInfo } from './../../models/app.productinfo.model';
import { HttpService } from './../../services/app.http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpservice-component',
  templateUrl: 'app.httpservice.view.html'
})

export class HttpServiceComponent implements OnInit {
  product:ProductInfo;
  products:Array<ProductInfo>;
  message:string;
  constructor(private serv:HttpService) {
    this.product = new ProductInfo(0,'','','','','',0);
    this.products = new Array<ProductInfo>();
    this.message = '';
  }

  ngOnInit() {
    this.loadData();
  }

  // call grtData() method from service

  loadData():void {
      this.serv.getData().subscribe((response)=>{
        this.products = response;
        this.message = JSON.stringify(this.products);
        this.message += '\n Data Fertch is successful';

      },(error:any)=>{
        this.message = `Error Occured ${error}`;
      });
  }


  save():void {
    this.product = new ProductInfo(0,'Prd003','Parle','Food','TATA','Power Press',220);
    this.serv.postData(this.product).subscribe((response)=>{
      this.products.push(response);
      this.message = JSON.stringify(this.products);
      this.message += '\n Data is Posted successfully';
    },(error:any)=>{
      this.message = `Error Occured ${error}`;
    });
}
}
