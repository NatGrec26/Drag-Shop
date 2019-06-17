import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Product } from '../models/product.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceDetail {
  constructor(
    private http: HttpClient
   ) { }

   getProduct(productId: number): Observable<Product> {
  //  return this.http.get<Beneficted>(`${environment.apiEndPoint}/benefited/${benefictedId}/2`);
  return this.http.get<Product>(`${environment.apiEndpoint}/product/${productId}`);
   }
}
