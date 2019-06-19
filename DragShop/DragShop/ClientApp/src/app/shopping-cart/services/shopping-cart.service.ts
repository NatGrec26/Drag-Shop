import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PictureShop } from '../models/picture-shop.interface';



@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(
    private http: HttpClient
  ) { }

  getPictureShop(productId: number): Observable<PictureShop> {
    return this.http.get<PictureShop>(`${environment.apiEndpoint}/shoppingCart/${productId}`);
  }
}
