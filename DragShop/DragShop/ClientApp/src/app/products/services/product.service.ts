import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';

import { ProductHome } from '../models/products-home.interface';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }


  getProductsHome(): Observable<ProductHome[]> {
    return this.http.get<ProductHome[]>(`${environment.apiEndpoint}/product/home`);
  }

}
