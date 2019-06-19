import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Picture } from '../models/picture.interface';
@Injectable({
  providedIn: 'root'
})
export class DescriptionPictureService {
  constructor(
    private http: HttpClient
  ) { }

  getPicture(productId: number): Observable<Picture[]> {
    return this.http.get<Picture[]>(`${environment.apiEndpoint}/product/${productId}/1`);
  }

  getPictureDeco(productId: number): Observable<Picture[]> {
    return this.http.get<Picture[]>(`${environment.apiEndpoint}/benefited/${productId}/3`);
  }
}
