import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { ExistingProduct } from '../models/existing-product.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductIdService {
  constructor(
    private http: HttpClient
  ) { }

  getExistingProduct(productId: number): Observable<ExistingProduct> {
    return this.http.get<ExistingProduct>(`${environment.apiEndpoint}/product/${productId}`);
  }
}
