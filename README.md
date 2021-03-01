# Language Used for Angular
1. TypeScript
   1. ES 6 Based Programming Language
      1. The Block Scope using 'let'my-ang-app  
      2. Data Types
         1. number, string, date, Array<T>, boolean
         2. Object
         3. any, purely late binding
         4. Union Type
            1. let x: number|string;
      3. Template String
         1. Building an 'immutable' string object
         2. New Syntax for String Concatination
            1. `${String1} ${String2}...`
               1. String1 + ' ' + String2 
      4. Arrow Operator
         1. =>
            1. When a function accepts input parameter as callback function then pass arrow operator as input
      5. spread operator aka rest parameter
         1. ...variable
      6. OOPs
2. ES 6 Modules
   1. Export Type e.g. Class, Function, Constant from obne TypeScript file and Import it in another TypeScript file and ts-node alomg with tslib paackages are responsible to compile them 
      1. e.g. File1.ts
         1. export class MyClass{.......}
      2. File2.ts
         1. import {MyClass} from 'File1';
3. TypeScript Source Code --> TypeScript Transpiler --> JavaScript Script
4. Installing TypeScript in global scope
   1. npm install -g typescript
   2. sudo npm install -g typescript
      1. THis will install 'tsc' CLI to 
         1. Transpile TypeScript files into JavaScript files

# Angular CLI Installation
1. npm install -g @angular/cli
   1. sudo npm install -g @angular/cli
   2. install the 'ng' CLI on command line
      1. ng new <PROJECT-NAME> to create angular project
2. Important Files
   1. package.json
      1. The file is created using following command
         1. npm init -y
      2. files that contains following
         1. List of dependencies needed to develop, build and test aplication using 'devDepednencies' section
            1. npm install --save-dev <PACKAGE-NAME>
         2. List of dependencies need while executing the Angular app using 'dependencies' section
            1. npm install --save <PACKAGE-NAME>
         3. List of Command switched to perform following operations
            1. Build
               1. ng build, the command is 'npm run build'
            2. Test
               1. ng test, the command is 'npm run test'
            3. Run
               1. ng serve, the cmmmand is 'npm run start'
   2. tsconfig.json
      1. TypeScript transpialtion settings for the application
      2. The file is created using following command 
         1. tsc -init  
   3. angular.json
      1. Like web.config file for ASP.NET / ASP.NET MVC Apps
      2. Build Settings
         1. Compilation Settings
         2. Third party CSS and Script settings  
      3. Host and Serv Settings
         1. CReate a dummy Node.js host to accept HTTP request for Angular all and serv output files
      4. Test Settings
      5. Internationlization Settings
      6. Lint Settings  
   4. main.ts
      1. EntryPoint to Angular Coding


# Angular Eco-System with Standard Package
1. @angular/compiler
   1. Help TypeScript  Transpiler
      1. For Compiling Standard Angular Object Model into JavaScript
      2. For Compiling the Developer COde into JavaScript
   2. Just-In-Time Compiler (JIT)
      1. Compiled Code when it is required to be executed in browser
   3. Ahead-of-Time (AOT) compilation
      1. Compile complete Applicatio Code (Standard Objects + Developer Code) into JavaScript and Load it in browser
   4. Angular IVy
      1. Ccompilation of HTML Template into JavaScript Object Model
2. @angular/platfor-browser-dynamic
   1. Loads the Entrypoint (aka Entry Module) of Angular App in Browser 
   2. Provides the 'platformBrowserDynmaic()' object and its bootstrapModule() method
3. @angular/platform-browser
   1. Manage the bootstraping of the First Component (aka Bootstrap Component of Angular Module) into the browser and Render it
      1. The 'BrowserModule' class is responsible for it.
4. @angular/common
   1. Loads all required modules in the browser for executing the application
   2. @angular/common/http
      1. Loads the HttpClientModule in Angular App for HTTP calls
5. @angular/core
   1. Contains Most of the Angular Standard Objects
      1. NgModule, to define angular module
      2. Component, to define component
      3. Injectable, to define service
      4. Directive, to define Directive
      5. Pipe, to define pipe
   2. Input, Output, HostListener, ViewChild, Rendere2, ElementRef, EventEmitter<T>, ect. 
6. @angular/forms
   1. for working with Databinding
   2. ReactiveForms, like Strongly-Types View in ASP.NET MVC
7. @angular/router
   1. USed for Single Page App
8. @angular/elements
   1. Sharing Component as Custom HTML element to other Angular or third party JavaScript app
9. @angular/animations
   1.  Used by Angular Material

# Angular Third-Party Mandatory dependencies
1. rxjs
   1. Reactive Extensions for JavaScript.
   2. Provides
      1. Observable class as a replacemenent for Promises
2. tslib
   1. TypeScript Code Management  during transpilation
      1. ES 6 --> JavaScript
3. zone.js
   1. Used for In-Browser Runtime Error Reporting    
# installing BootStrap as dependency for runtime
  npm install --save bootstrap
# Angular Decorators   
1. They are the predefined Angular Classes those are used to define behavior for classes / methods / properties in angular application.
2. They are applied as @<DECORATOR-NAME>
3. @NgModule, applied on class to use it as Angular Module 
4. @Component, applied on class to use it as Angular Component
5. @Injectable, applied on class to use it as Angular Service  
6. @Directive, applied on class to use it as Angular Directive
7. @Pipe, applied on class to use it as Angular Pipe
8. @Input, applied on public property of component / directive class to accept data from its parent
9. @Output, applied on EventEmitter property of comppnent class to emit event
10. ....and many more  
