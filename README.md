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


# Angular {Programming

1. The 'Component'
   1. The Angular Component have following properties
      1. The 'selector', of the type string, used to define a 'CUSTOM HTML TAG' using which component will be used for rendering on index.html or HTML template of other component 
      2. The 'templateUrl' and 'template'
         1. The property that contains extenal HTML file path (recommended) or inline HTML respectively that defines UI for the component
      3. The 'styleUrls' and 'styles'
         1. Exteranl CSS file and inline CSS respectively
2. Data Binding
   1. Exposing Public members (prperties and methods) of Component to HTML UI elements
   2. Types of Databinding
      1. Interpolation aka Expression binding
         1. Binding public property of component to Read-Only HTML element e.g. div, td, etc.
         2. Syntax
            1. <div>{{<PUBLIC-PROPERTY-OF-COMPONENT>}}</div>
            2. e.g.
               1. <div>{{message}}</div>
                  1. The 'message' is public property of component
         3. The {{<PROPERTY>}} will be evaluated (processed based on login if any) and rendered as HTML
            1. {{200+300}} --> 500
      2. Porperty Binding
         1. Binding public properties of COmponent with Attributes of HTML element
         2. One-Way from Component to UI
         3. Syntax
            1. [<ATTRIBUTE-OF-HTML-ELEMENT>]="<PUBLIC-PROPERTY-OF-COMPONENT>"
            2. e.g.
               1. <input type="text" [value]="message">
                  1. [href], [disabled] [readonly], [checked], etcc

# Angular Programming
1. Create a Project using Angular CLI
    - Command Line Tool to
        - Create Angular Project
            - Commands for Adding
                - Component
                - Services
                - Directives
                - Pipes
        - Build Project
        - Test Project
        - Create Production Build
2. Install Angular CLI using Node Package Manager (npm) from Command Prompt
    - npm install -g @angular/cli, on windows
    - sudo npm install -g @angular/cli on Linux and MacOS
    - Angular CLI Provides 'ng' command Line tool
        - ng new <ANGULAR-PROJECT-NAME>
        - ng serve to run the project in Node Environment for developer and test and serve Build JS libraries to Browser 
            - ng serve --prod, to run the project in Node Environment for production and serve Build JS libraries to Browser     
        - ng test
            - Execute Test Cases         

# Angular Project Structure
1. package.json
    - Each JS Front-App is package and this is deployed or distributed as Package
    - This package must contains package.json file 
        - created using 'npm init -y' command 
    - Sections of pcakegs.json
        - 'name', name of the package used during deployment or districution
        - 'versoin', the version of package when distributed using respository
            - git
            - https://www.npmjs.com
        - devDependencies
            - List of dependencies used by the package while developing and/or testing the package   
                - all dev dependant packages will be installed using following command
                    - npm install --save-dev <PACKAGE-NAME>  
        - dependencies
            - List of all dependencies needed for production and execution of the package
                - all dependencies will be isnatlled using following command
                    - npm install --save <PACKAGE-NAME>       
        - scripts
            - defines command for package operations
                - excution
                    - start, npm run start command
                - build
                    - build, npm run build
                - test                    
                    - test, npm run test         
2. tsconfig.json
    - tsconfig.app.json
      - Extends tsconfig.json for Angular Application Compilation for Angular Classes e.g. Modules, Components, Directives, Services and Pipes 
    - tsconfig.spec.json
    - File that manages TypeScript Code COmpilation into JavaScript
      - Angular TS Setings
        - "strict": true,
          - Each variable must be declared
          - "noImplicitReturns": true, 
            - If method returns value then the return-type must be defined in method declaration
          -  "noFallthroughCasesInSwitch": true,
            - The switch..case must use 'default'
          - "experimentalDecorators": true,   
            - The 'Angular Decorator(?)' must be compiled and executed first befor executing the TypeScript code that is compiled into JavaScript  
          - "moduleResolution": "node",
            - Implicitely perform file-path look-up using Node.js 'path' module
3. karma.config.js
  - Karma Engine for Testing
4. tslint.json
  - TyepScript Langugae Quality Settings
5. angular.json
  - Like Web.Config file of AS.NET  /ASP.NET MVC
6. src folder
    - app folder
        - app.module.ts
        - app-routing.module.ts
    - main.ts
    - polyfills.ts
    - test.ts   

# Understanding Angular Packages
1. @angular/compiler
    - Provides compilation for Angular app for Build and Execution
        - Development Build
            - Just-In-Time (JIT) Build (Default upto Angular 9)
                - The JavaScrtipt code will be loaded in browser and the code ill be compiled and executed based on demand e.g. CLick the button and execute a function  
        - Deployment aka Production build (AOT is default true from Angular 9+)
            - Ahead-of-Time Compiler (AOT)
                - Code is compiled on Server (ng serv --prod) and compiled minidied code is loaded in browser       
            - AOT + Ivy (Angular 10+)
                - Compilation and Minification of HTML code into JavaScript object and upto 80% compression for the build code
                    - ng serve --prod
2. @angular/common
    - Provide the facility of Angular standard Module loading and the Angular Application Rendering in the browser
        - Offers 'CommonModule'
            - Manages loading of ThirdParty Angular Modules into the main Angular Application
    - @angular/common/http
        - Provides 'HttpClientModule' that provides an Infrastructure for all HTTP Communications from Angular Application          
3. @angular/platform-browser-dynamic
    - Provides 'platformBrowserDynamic()' method to bootstarp (aka load) angular app in browser for the fisrt time                          
4. @angular/platform-browser
    - Provides 'BrowserModule' that mamanages the rendering of Angular UI in browser once app is loaded in browser    
        - 'Only One Instance' of BrowserModule is possible per Angular App
5. @angular/core
    - The most impoprtant module that contains most of the  standard important Angular Classes     
    - Classes for
        - CReating  Angular Module, NgModule
        - Component, Component
        - Serveice, Injectable
        - Directive, Directive
        - Pipe,  Pipe
        - Commucation Across COmponents wity Parent Child Relationship 
            - Input and Output  
        - Parent Component contains multipe Children
            - ViewChild and ViewChildren
        - Custom Directive Rendering
            - Renderer2 and ElementRef
        - Custom Events
            - EventEmitter<T>
        - Linking a method with Event
            - HostListener             
6. @angular/forms
    - Working with HTML Forms as Angular Forms
        - FormsModule
            - Two-Way Binding
        - ReactiveFormsModule
            - Line-of-Business Forms with Model Binding like ASP.NET MVC Strongly-Type View    
7. @angular/router
    - Used for Angular Routing for Single-Page-Application (SPA)
    - RouterModule class
8. @angular/elements
    - Distributing Angular Component as 'Custom HTML element' to third party JavaScript Apps for Micro-FrontEnd Apps                

# Angular Dependencies

1. rxjs
    - Provides 'Observable' class for State Management for HTTP Responses
2. tslib
    - Manages the TypeScript Transpilation (ES 6) to Browser Compatible JavaScript, ES 6 to ES 5 (Default)
    - Internally uses tsconfoig.json
3. zone.js
    - Manages the Code Execution and DOM Errors in Browser during Angular APp execution in browser       

# Programming with Angular
1. Install Boostrtap Framework as 'dependency' for runtine
  - npm install --save bootstrap
    - Run the command from the command prompt from Angular Application path

2. platformBrowserDynamic
    - platformBrowserDynamic.bootstrap(<Angular-Module>)
        - What is Angular Module(?)
        - Loads the Angular Application in the Browser for Execution
            - Creating necessary Objects
            - Rendering
            - Dependency Injection
            - Databinding
            - Forms
            - Routing
            - Pipe
            - Directive execution 
3. Angular Decorators
    - @NgModule
        - @angular/core
        - Applied on class to use the class as Angular Module   
    - @Component
         - @angular/core
        - Applied on class to use the class as Angular Component
        - Properties
            - The 'selector', the string property, that is used to define 'csutom html tag' to refer / use the component in HTML markup of other component or in index.html 
            - The 'templateUrl', the string property, used to contains path pf external HTML file thst contains UI for the current component
            - The  'template', the string property, used to define 'inline HTML Temnplate' in the component class file
            - The 'styleUrls', array and 'styles', a string used to define external CSS style files and inline CSS respectively that is used by HTML UI of the component 
    - @Injectable
         - @angular/core
        - Applied on class to use the class as Angular Service    
    - @Directive
        - @angular/core            
        - Applied on class to use the class as Anular Directice 
    - @Pipe
        - @angular/core
        - Applied on class to use the class as Angular Custom Pipe       
    - @Input, @Output, @HostLinsener    

# Anguar Programming
1. Create Component
    - Data Binding
        - Interpolation
            - Binding public data member of the component to the Read-Only UI element as expression
            - Syntax
                - {{<PUBLIC-DATA-MEMBER-OF-COMPONENT>}}
                - read-only UI elements
                    - div, p, span, label, td, th, etc.
                - E.g.
                    - <div>{{name}}</div>
                        - The 'name' is the public data member of the class    
            - The interpolation is parsed as Expression and render as HTML element
            - if the interpolation contains Numeric mathematical expression then Angular will invoke JavaScript 'evel()' function to eveluate the expression in interpoilation            
        - Property Binding
            - Binding public data members of the component with attributes of HTML elements
            - Syntax:
                - [<ATTROIBUTE-NAME>]="<PUBLIC-DATA-MEMBER-OF-COMPONENT>"
                - e.g.
                    - <input type="text" [value]="message">
                        - 'message' is public data member of the component
                - Most of the standard attributes if HTML UI elements are parsed by Angular for Property Binding
                    - e.g., [value], [href], [disabled], [hidden], etc.         
        - Event Binding
            - Binding an event of the HTML element to the public metghod of the component
            - Syntax
                - (<EVENT-NAME>) = "F1()"
                    - THE 'F1()' is a public function of Component
                - e.g.
                    - <input type="button" (click)="display()">    
            - If the event of UI element wants to pass the attribute values of the UI element to the method, then use '$event' object
                - The '$event' is a JavaScript object that represents the event occured on Element
                    - $event.target represent the UI element on which an event is raised
                    - $event.target.<ATTRIBUTE-NAME>
                        - will be used to read the value of attribute of UI element on whihc an event is raised      
            - (click), (change), (blur), (keyup), etc.               
        - Two-Way Binding
            - Combination of Property Binding + Event Binding
            - Syntax
                - [(ngModel)]="<PUBLIC-DATA-MEMBER-OF-COMPONENT>"
                - ngModel, is a standard Angular 'attribute directive' (custom attribute for HTML elements) used for Two-Way Binding
                - To Execute 'ngModel', the NgModule must import 'FormsModule' in its 'imports' array from the @angular/forms package  
                - ngModel will listen to the default event of UI element on which it is applied
                    - e.g. <input> element has default event as 'keyUp' that results in 'change' event
                - This default event will invoke 'ngModelChanged' event on ngModel directive and will read changed value of UI element  
                - THis updaed value of the bound property will be passed to the Component
                - The component will call its 'ngOnChanges' internal method and will accept updated value from UI
                - This value will be processed (if any logic iss written for it), this value will be send back to UI to elements where this property is bound (with property binding / two-way binding / interpolation)   
    - Angular Directives
        - Directive
            - A class that is used to define a custom re-usable UI or custom bechaior for exisitng HTML element
        - Component Directive
            - Each component is Directive and this component can be used as custom HTML UI for reusability
        - Atrribute Directive
            - It is a type that is used to define a custom behavior for exisditng HTML element
                - ngModel, formGroup, formControlName     
        - Structural Directive
            - Used to dynamically add/remove HTML UI elements from DOM    
            - e.g.
                - *ngFor, this execute a for..of loop to generate DOM elements based on collection       
                - *ngIf, the if condition, evaluate a if statement to add or remove HTML element 
                - *ngSwitch ngSwitchCase     
    - Optimize component using following features
        - Do not write complex or time-consuming code in Constructoer
            - Lifecycle methods
                - ngOnChange(), OnChnage interface
                    -  executed when the property is changed with Two-Way binding 
                - ngOnInit(), OnInit interface
                    - Executed 'only once' after the constructor is executed
                    - Use this method to write logng running process logic
                        - Heavy Collection Operations  
                        - Calls to External Services
                        - One-Time Event Subscription
                - ngDestroy()
        - If the Complex UI e.g. select, ul, table are repeated in components's UI template then think of creating custom re-usable complex elements
            - UI Composition is a process of dividing a UI in-to small and autonomous Angular Components
                - Parent Component contains Multiple Child Components
                    - the selector of child component is used in HTML template of parent component
                - Parent Components instantiate child components explicitely
                    - Use @ViewChild to instantiate the child comoponent in parent
        - Eliminate the hard-coding of propeties on UI for structural directive                 
    - Communication Across Components
        - Component as Reusable-Component-Ditective
            - Parent - Child Components
                - Child component MUST have @Input decorated property with get/set. This will be used for property binding by parent component
                - CHild component MUST have @Output decorated event of the type EventEmitter<T>. This will bubble-up (aka emit) event with values from child to parent of the type 'T' 
            - Component Reusability
                - COnsideratoins for Re-usable component
                    - UI requirements for HTML definitions
                    - Properties for accepting data from parent
                    - Events using which data will be emitted to parent



2. Angular Forms
    - Reactive Forms
        - @angular/forms
            - ReactiveFormsModule
                - The class that is used to manage the <form> tag as Reactive Forms by mapping it implicitely to ngForm directive of Angular 
                - This must be imported in 'imports' array of NgModule
            - This class will manage lifecycle of following classes
                - FormGroup
                    - The class derived from 'AbstractControl' class.
                    - AbstractControl, represents each UI element on HTML template
                    - FormGroup
                        - Represent the <form> that will accpet data from UI and manipulate it
                        - It is collection of FormControls which is editable elements mapped with public properties of Model class 
                        - The '[formGroup]' attribute directive will be used to map the FormGroup imstance to the <form> tag
                        - The 'value' property of FormGroup represent the data posted from <form> that map with the Model class
                            - formGroup.value map with an instance of the Model class mapped with the formGroup
                            - e.g. If Model class is 'Product' then formGroup.value will represent an isnatnce of Product class
                        - The 'setValue()' method that can be directly passed with an instance of Model class
                            - e.g. formGroup.setValue(this.product)    
                - FormControl
                    - The class that map a single public property of Model class with the single editable UI element
                        - formControl.value will represent each property from the Model class
                        - formControl.setValute(), accept a value for single property of the Model class
                    - The  'formControlName' a attribute directive that map the FormControl with UI element 
                - Validators
                    - Used to provide Static methods for Input Field Validations containing the 'formContolName' attribute
                        - requred(AbstractControl)
                        - requredTrue(AbstractControl)
                        - pattern(string | RegEx)
                        - min(number) / max(number)
                        - minLength(number) / maxLength(number)
                        - email(AbstractControl)
                        - nullable()
                        - compose(Validation Array to apply validations on UI element)
                    Note: All validators accepting 'AbstractControl' are directly linked with UI element using formControlName and these mathods will be executed as callback    
                - To evaluate and display validation errors use the FormGroup object model(?)
                    - Check if the UI element / formControl is changed
                        - <formGroup>.controls.<formControlName>.dirty
                    - Check if the value is invalid after the formControl is changed
                        - <formGroup>.controls.<formControlName>.invalid OR !<formGroup>.controls.<formControlName>.valid        
                    - Check which validator is failed
                        - <formGroup>.controls.<formControlName>.errors.<Validation-Rule-Failed> 
                        - e.g. 
                            - <formGroup>.controls.<formControlName>.errors.pattern   



    - Validation
        - Custom Validations
            - The method must be static
            - The method can accept eithe AbstractControl or premptive type as input parameter
            - Since the method return 'null' if value is value or will return JSON object for invalid value, the return type of the method must be 'any'
                - {invalid:true}, {valid:false}, {even:false}

3. Angular Services
    - Utilities
    - Pub/Sub Communication across Components using Angular Services
    - HTTP Calls
        - CRUD Operations
        - Token Based Secure Calls
    ``` javascript
    import { Injectable } from "@angular/core";

    @Injectable()
    export class UtilityService {
    getLength(str:string):number{
        return str.length;
    }
    changeCase(str:string, c:string):string{
        if(c == "U") return str.toUpperCase();
        if(c == "L") return str.toLowerCase();
        return str;
    }
}
    ```


    - Creating HttpInterceptor
      - @angular/common/http
        - HttpClientModule
          - HttpClient class
            - get<T>,post<T>,put<T>, delete<T>
              - All Returns Observable<T>
          - HttpInterceptor Interface
            - Must be implemented by class
            - This class must be constructor injected by the Angular Service that is making HTTP Calls
            - The interface has 'intecept(HttpRequest<T>, HttpHandler)' method   and returns Observable<HttpEvent<any>>
              - HttpRequest
                - Represents the current Http Request
              - HttpHandler
                - Manage the Request Forwarding and collecting the response
                  - Used to commit the request modification by the interceptor to that the modified request can be forwarded to the server
              - HttpEvent
                - Represent the status of the Request after modification
                  - Headers values
                - Contains the received response with
                  - Success
                  - Failure
              - finally configure the Interceptor service in NgModule so that the Module knows that Angular Services making HTTP class must be intercepted
                - HTTP_INTERCEPTORS, the class that manages a DI registration of Http Interceptor in Angular Module
  ``` javascript
                                    providers: [{
                        provide:HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi:true
                    }]
  ```  
                -  provide: the object that define the Injection for Http Interceptor
                -  useClass: the interceptor class
                -  multi:  intercept all outgoing calls
1. Single Page Application (SPA)
    - Routing
        - Parameterized Routing
        - Child Routing
        - Lazy Loading  
    - DEMO: for Route Guards
            - Auth Guards   

2. Creating Custom Directives
    - These are the custom attribute directives used for defining custom behavior on HTML elements of Angular Components
        - These will be interactive based on Property Binding
        - These will be activated based on events 
    - Attribute Directives are used for Property Binding by defining the @Input Decorated property in the Custom Directive class
    - The Class must be decorated with the @Directive Decorator from @angular/core
    - The The custom directive must have a 'selector' that will be applied on the HTML element
    - The directive must define methods to activate / deactivate directive based on methods applied with @HostListener decorator from @angular/core       
        - @HostListener
            - This is used to listen events raised on UI and accorindly execute methods to activate and deactivate custom directive
    - The directive is constructor injected in custome directive class using following two classes
        - ElementRef
            - @angular/core
            - This represents the HTML element on which the directive is applied
        - Renderer2
            - @angular/core
            - This represents the rendering of HTML element when the directive is activated
        - These injected classes will be resolved by BrowserModule             
    - The custom directive must be declared in 'declarations:[]' array of NgModule            

3. Testing                   






# Hands-on-lab
1. Create a Angular Component that will have UI and functionality of standard Calculator 
2. Modify the ProductComponent for Following operations (Immediate)
    - Generate the ProductRowId as Auto-Increament from the last record's ProductRowId
    - Generate a 'delete' button for each table row showing Products List. When this button is clicked the record must be deleted
    - Add two radio buttons on the top of Product List  table for following operations
        - Sort and Reverse the Product List base on Prouct Name and Base Price

3. Create a re-usable DropDownComponent as 'app-list-data' selector which will render the 'select' element with 'option'. The options will be generated by accepting data from parent in 'DataSource' property and the selected option value will be emitted back to parent using 'SelectedItem' event. (Immediately today)


4. Create a Component that will show list of Categories in Table as following
    - CategoryId, CategoryName, Manufacturer
    - Create a Component that will show list of Products as ProductId, ProductName, Price, CategoryId. This component will be chid of the CategoryListComponent. 
    - When an End-uased selects a Category Row from the Parent Component, the ProductList compoent should show only those products matche with the selected CategoryId from the parent component 
5. Create a Custom Validator that will make sure that the ProductId us not repeated (In Lab Time)

# Day 5 Lab
# Validations

6. Complete applying validators on Product Properties based on Following rules (In Lab Time)
    - The ProductId is must and must Alphanumeric
    - The ProductId length must not be more that 15 Characheters
    - The ProductId must start from 'Prd-'
    - The ProductName must start from UpperCase character and must not have special Character
        - Use Regular Expression pattern
    - BasePrice must be +ve     
        - Use Regular Expression

# Custom Validations

7. Create a custom Validation Summary Component that will be used to display all error messages at the bootom of the Component. (Show it on Monday i.e. 01-03-2021)        

# Using Angular Service for Communication Across Components

8. Create 3 Components as follows
   1. The Component that will show list of Electronics Products with followjng information
      1. ProductId
      2. ProductName
      3. Price
   2. Component that will show list of House Appliances Products
      1. ProductName
      2. Price
   3. Component that will show list of Food Items
      1. ProductName
      2. Price
   4. Makes sure that these 3 components reads data from the same collection but data is shown across 3 components based of Products Category
   5. Create an Angular Service that will have an array of Products that will show, list of products purchased by the user and the total price of the selected Product
   6. The Fourth component that will show the List of purchased products with the total bill 

# Angular Service
9. Modify the ProductReactiveFormComponent for using Angular Service to Make HTTP calls for CURD Operations (today)
10. Create a Custom Validator that will make sure that The ProductId is not repeated by making call from the server  (Important)

