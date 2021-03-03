export class ProductInfo {
  // define an indexer that will
  // allow to read property values
  // dynamically
  // x, will be name of the property
  // string is the data type of the x
  // any: means any proeprty of the object
  // which can be read dynamically
  [x:string]:any;
  constructor(
    public ProductRowId:number,
    public ProductId:string,
    public ProductName: string,
    public CategoryName:string,
    public Manufacturer: string,
    public Description:string,
    public BasePrice:number
  ){}
}
