import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Picture } from '../models/picture.interface';

@Injectable({
  providedIn: 'root'
})
export class DescriptionPictureService {
  constructor(
    private http: HttpClient
  ) { }

  getPicture(productId: number): Observable<Picture[]> {
    return this.http.get<Picture[]>(`${environment.apiEndpoint}/product/pictures/${productId}/1`);
  }

  getPictureDeco(productId: number): Observable<Picture[]> {
    return this.http.get<Picture[]>(`${environment.apiEndpoint}/product/pictures/${productId}/2`);
  }
}
