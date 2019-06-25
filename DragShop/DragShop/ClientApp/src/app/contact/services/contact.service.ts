import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SendEmail } from '../models/send-email';
import { defaultHttpOptions } from 'src/app/utils/http';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(
        private http: HttpClient
    ) { }

    sendEmailCustomer(sendEmail: SendEmail): Observable<SendEmail> {
        return this.http.post<SendEmail>(`${environment.apiEndpoint}/contact/sendemail`, sendEmail, defaultHttpOptions);
    }
}
