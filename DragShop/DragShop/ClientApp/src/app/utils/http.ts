import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface ErrorResponse {
  errorType: string;
  errorMessage: string;
}

export const defaultHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export const formUrlencodedHttpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};

export function formatUrlencodedParams(obj: any): HttpParams {
  const searchParams = new HttpParams();
  Object.keys(obj).forEach(e => searchParams.append(e, obj[e]));
  return searchParams;
} // urlencoded

