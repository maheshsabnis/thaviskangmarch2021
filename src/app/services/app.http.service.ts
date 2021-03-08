import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProductInfo } from "./../models/app.productinfo.model";
@Injectable({providedIn: 'root'})
export class HttpService {

  private url:string;

  // the HttpClient is injected in the Angular Service.
  // this is resolved by HttpClienyModule that is
  // inported in 'imports:[]' array of NgModule
  constructor(private http:HttpClient) {
    this.url="https://apiapptrainingnewapp.azurewebsites.net/api/Products";
  }

  getData():Observable<ProductInfo[]> {
     let response:Observable<ProductInfo[]>;
     response = this.http.get<ProductInfo[]>(this.url);
     return response;
  }

  postData(prd:ProductInfo):Observable<ProductInfo> {
    let response:Observable<ProductInfo>;
    response = this.http.post<ProductInfo>(this.url, prd, {
      headers: {
        "Content-Type":"application/json"
      }
    });
    return response;
 }
 putData(id:number,prd:ProductInfo):Observable<ProductInfo> {
  let response:Observable<ProductInfo>;
  response = this.http.put<ProductInfo>(`${this.url}/${id}`, prd, {
    headers: {
      "Content-Type":"application/json"
    }
  });
  return response;
}

deleteData(id:number):Observable<ProductInfo> {
  let response:Observable<ProductInfo>;
  response = this.http.delete<ProductInfo>(`${this.url}/${id}`);
  return response;
}


}
