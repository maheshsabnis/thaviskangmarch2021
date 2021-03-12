import {TestBed, getTestBed} from '@angular/core/testing';
// HttpClientTestingModule, provides Http Call Infra while testing Angular Service that is making Http Calls
// HttpTestingController: Used for Mocking
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { ProductInfo } from './../models/app.productinfo.model';
import {HttpService} from './app.http.service';
// create a dummy data for test
const dummyProductsResponse: Array<ProductInfo> =
   [
      {
          ProductRowId: 2,
          ProductId: "PR002",
          ProductName: "router",
          Manufacturer: "IBM",
          CategoryName: "Electronics",
          Description: "internet device",
          BasePrice: 3500
      },
      {
          ProductRowId: 5,
          ProductId: "101",
          ProductName: "n",
          Manufacturer: "Bajaj",
          CategoryName: "Electronics",
          Description: "hhh",
          BasePrice: 10
      },
      {
          ProductRowId: 6,
          ProductId: "101",
          ProductName: "n",
          Manufacturer: "Bajaj",
          CategoryName: "Electronics",
          Description: "hhh",
          BasePrice: 10
      },
      {
          ProductRowId: 7,
          ProductId: "102",
          ProductName: "Iron",
          Manufacturer: "Bajaj",
          CategoryName: "Electronics",
          Description: "xyz",
          BasePrice: 25000
      }
  ];


const dummyProductDetails ={
  data: {
    ProductRowId: 13,
    ProductId: "PR0051",
    ProductName: "router",
    Manufacturer: "IBM",
    CategoryName: "Electronics",
    Description: "internet device",
    BasePrice: 3500
 }
};

// the test suit
describe('HttpServeice', () => {
  // define the objects
  let injector: TestBed;
  let httpService: HttpService;
  // the mock object to mock all the Http Calls
  let httpMock: HttpTestingController;

  beforeEach(() => {
  //the testing env. configuration
  TestBed.configureTestingModule({
    // manage the Http Mocking Requests using Controller
    // HttpClientTestingModule, will also resolve the HttpClient injection
    // in the actual HttpServeiceService class
     imports: [HttpClientTestingModule],
     // the HttpServiceService will be registered in Testing Module Dependency
     // configuration 'configureTestingModule()' and will get the resolved
     // HttpClient injected in it
     providers: [HttpService]
  });

  // get the Injectables from the TestBed so that the extarnal calls are managed
  injector = getTestBed();
  // get the HttpServiceService instance from the TestBed and create and get
  // of the HttpServiceService for the testing
  // httpService, will have an instance of 'HttpServiceService' class with all of its
  // injected dependencies e.g. 'HttpClient'
  httpService =  injector.get(HttpService);
  // define the the Mock for the HttpClientTestingModule to manage Http Calls
  httpMock = injector.get(HttpTestingController);
});

// flush all the Http after the calls are over to verify that Http has been executed
// successfully

  afterEach(() => {
    httpMock.verify();
  });

  // actual test cases
  it('getData() sould return array of Product', () => {
    // calling the getData() method
    // act
    httpService.getData().subscribe((res) => {
      // assertion
      expect(res).toEqual(dummyProductsResponse);
    });
    // define mock
    // arrange
    const request = httpMock.expectOne('https://apiapptrainingnewapp.azurewebsites.net/api/Products');
    expect(request.request.method).toBe('GET');
    // help the request to be flush
    request.flush(dummyProductsResponse);
  });


  it('postData() sould POST and return Product', () => {
    // calling the postData() method
    const prd = new ProductInfo(0, 'Prd9012', 'Mobile', 'Electronics', 'ASUS', '64GB', 12000);
    // act
    httpService.postData(prd).subscribe((res) => {
      // assertion
      prd.ProductRowId = 5; // the identity key that will be generated after the call
      expect(res).toEqual(prd);
    });
    // define mock
    // arrange
    const request = httpMock.expectOne('https://apiapptrainingnewapp.azurewebsites.net/api/Products');
    expect(request.request.method).toBe('POST');
    // help the request to be flush
    request.flush(prd);
  });

});
