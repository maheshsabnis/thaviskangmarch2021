import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class UtilityService {
  getLength(str:string):number {
    return str.length;
  }
  reverse(str:string):string {
    let res = '';
    for(let i=str.length-1; i>=0;i--) {
        res+=str[i];
    }
    return res;
  }
}
