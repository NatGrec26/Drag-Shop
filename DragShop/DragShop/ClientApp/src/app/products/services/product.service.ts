import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ProductHome } from '../models/products-home.interface';
import { ProductAll } from '../models/products-all.interface';
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(
    private http: HttpClient
  ) { }


  getProductsHome(): Observable<ProductHome[]> {
    return this.http.get<ProductHome[]>(`${environment.apiEndpoint}/product/home`);
  }
  getProduct(): Observable<ProductAll[]> {
    //  return this.http.get<Beneficted>(`${environment.apiEndPoint}/benefited/${benefictedId}/2`);
    return this.http.get<ProductAll[]>(`${environment.apiEndpoint}/product/productbyId`);
     }
}
