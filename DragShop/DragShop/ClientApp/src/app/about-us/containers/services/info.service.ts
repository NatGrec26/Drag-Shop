import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyInformation } from '../../models/company-information.interface';
@Injectable({
  providedIn: 'root'
})

export class InfoService {

  constructor(
    private http: HttpClient
  ) { }

  getInfo(infoID: number): Observable<CompanyInformation> {
    return this.http.get<CompanyInformation>(`${environment.apiEndpoint}/aboutus/${infoID}`);
  }
/*
  
  getHistory(): Observable<CompanyInformation> {
    return this.http.get<CompanyInformation>(`${environment.apiEndpoint}/aboutus/1`);
  }
  getMision(): Observable<CompanyInformation> {
    return this.http.get<CompanyInformation>(`${environment.apiEndpoint}/aboutus/2`);
  }
  getVision(): Observable<CompanyInformation> {
    return this.http.get<CompanyInformation>(`${environment.apiEndpoint}/aboutus/3`);
  }*/
}
