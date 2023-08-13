import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:8080/api/v1/user';
  constructor( private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl+'/all');
  }

  createUser(userData: User): Observable<User>{
    return this.http.post<User>(this.apiUrl+'/create', userData);
  }

  updateUser(userData: User): Observable<User>{
    return this.http.put<User>(this.apiUrl+'/edit', userData);
  }
}
