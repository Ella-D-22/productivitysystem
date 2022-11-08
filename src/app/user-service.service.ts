import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()

export class UserService {
private usersUrl: string ;

  constructor (private http: HttpClient) 
 { this.usersUrl= 'http://localhost:4200/users';
}
public findAll(): Observable<User[]> {
  return this.http.get<User[]> (this.usersUrl);
}

public save(user: User){
  return this.http.post<User>(this.usersUrl, user)
}
}
