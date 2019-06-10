import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HandleError, HttpErrorHandler } from './http-error-handler.service';

export abstract class ServiceBase {
    apiEndpoint: string;
    handleError: HandleError;

    constructor(
        protected readonly httpClient: HttpClient,
        protected readonly serviceName: string,
        protected readonly httpErrorHandler: HttpErrorHandler
    ) {
        this.apiEndpoint = environment.apiEndpoint;
        this.handleError = httpErrorHandler.createHandleError(serviceName);
    }
}
