import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../../interfaces/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl = 'http://localhost:8080/api/v1/role';
  
  constructor( private http: HttpClient) { }

  getRoles():Observable<Role[]>{
    return this.http.get<Role[]>(this.apiUrl+'/all')
  }
}
