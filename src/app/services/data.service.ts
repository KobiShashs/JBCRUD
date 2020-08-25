import { Product } from './../../models/Products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public products: Product[];
  public constructor() { }


  public setProducts(products: Product[]): void{
    this.products = products;
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
