import { AbstractControl } from "@angular/forms";

// customm validator class must have static method
// this method can accept AbstractControl or premptive types
// if the validation is successfull thne method will return 'null'
// else it will return a JSON object with 'invalidation data'

export class CustomValidator {
   static checkEven(ctrl: AbstractControl):any {
      let value  = ctrl.value;

      if(parseInt(value) % 2 === 0) {
        return null; // valid
      } else {
      return {even:false};}
   }
}
