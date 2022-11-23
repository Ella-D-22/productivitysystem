import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseURL = "http://localhost:8080/api/v1/registration";

  createAccount(data: any): Observable<any> {
    let API_URL = `${this.baseURL}/registration`;
    return this.http.post(API_URL, data, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  
  /*editAccount(id:any): Observable<any> {
    let API_URL = `${this.baseURL}/employee/${id}`;
    return this.http.put(API_URL, { headers: this.headers, withCredentials: false }).pipe(map(res => {
      return res || {}
    }),
      catchError(this.errorMgmt)
    )
  }
  */
  // Error handling
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

postEmployee(data:  any){
  return this.http.post<any>(this.baseURL+"/registration",data)
}
getEmployee(){
 return this.http.get<any>(this.baseURL+"/employees")
}
putEmployee(data : any,id:number){
  return this.http.put<any>(this.baseURL+"employee/"+id ,data)
}
deleteEmployee(id:number){
  return this.http.delete<any>(this.baseURL+"employee/"+id);
}}


