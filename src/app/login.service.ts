import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 

  constructor( private httpClient: HttpClient) { }

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseUrl: any = `${environment.logAPI}`;

 userLogin(user: User): Observable<object>{
  console.log(user);
  
  return this.httpClient.post(`${this.baseUrl}`,user, { headers: this.headers, withCredentials: false }).pipe(map(res => {
    return res || {}
  }),
  catchError(this.errorMgmt)
   );
}
errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `${error.error.message}`;
  }
  return throwError(errorMessage);
}


}
