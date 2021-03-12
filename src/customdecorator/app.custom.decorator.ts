// the custom decorator must have followijg
// 1. target, the type on which it will be applied (class)
// 2. key, the method on which the decorator will be applied ( / method / property)
// 3. a property of the type 'PropertyDescriptor' this will be used access the define
// metadata of the method (or type) on which the decorator is applied
// define logic

export function logMethod(){
  // define a method decorator
  return function(
    target: Object, // class of whihc method will be targeted by applying the decorator
    key: string, // the target method to apply the decorator
    descriptor:PropertyDescriptor // methdo with its arguments i.e. metadata
  ){
     // logic for the decorator
     // create a log on a method that will be called from the component


     // set the iterator flag so that all method on which decorator is applied
     // the decorator will be executed at once for all
      descriptor.enumerable = true;

     // if the decorator is null (means not applied) then skip execution
     // else use it for the execution
     const decorator = descriptor?.value;

    // define a actual logic for the custion decorator
     descriptor.value = function(){
       // get the class name by calling its constructor
       const targetName = target.constructor.name;

       // get arguments of the method
       // arguments, is a defualt JavaScript object that represents
       // list of arguments passed to the method
       const args = JSON.stringify(arguments);
       // log the information
       console.log(`Calling metod ${targetName}.${key} with arguments ${args}`);
       // inform the transpiler that transpile thde decorator when applied inside the
       // angular component / directive / service, etc.
       const result = decorator.apply();
       return result;
     }

     return descriptor;
  }
}
