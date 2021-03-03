import { ProductInfo } from './app.productinfo.model';
export class Logic {
  private products:Array<ProductInfo>;
  constructor(){
    this.products = new Array<ProductInfo>();

    this.products.push(
      new ProductInfo(1, 'Prd-001', 'Laptop', 'Electronics', 'HP', 'Gaming', 120000)
    );
    this.products.push(
      new ProductInfo(2, 'Prd-002', 'Iron', 'Electrical', 'Bajaj', 'Power Press', 2000)
    );
    this.products.push(
      new ProductInfo(3, 'Prd-003', 'Lays', 'Food', 'TATA', 'Energy Food', 20)
    );
  }

  getProducts():Array<ProductInfo> {
    return this.products;
  }
  addProduct(prd:ProductInfo):Array<ProductInfo> {
    this.products.push(prd);
    return this.products;
  }
}
