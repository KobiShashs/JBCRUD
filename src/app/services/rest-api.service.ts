import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from '../../models/Products';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  public constructor(private httpClient: HttpClient) { }


  public getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('../../assets/json/products.json');
  }

  public deleteProduct(id: number): Observable<any>{
    return this.httpClient.delete<any>('../../assets/json/products.json');
  }

  public addProduct(product: Product): Observable<any>{
    return this.httpClient.post<any>('../../assets/json/products.json', product);
  }

  public updateProduct(product: Product): Observable<any>{
    return this.httpClient.put<any>('../../assets/json/products.json', product);
  }
}
