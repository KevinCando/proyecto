import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from '../../interfaces/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private apiUrl = 'http://localhost:8080/api/v1/area';

  constructor( private http: HttpClient) { }

  getAreas():Observable<Area[]>{
    return this.http.get<Area[]>(this.apiUrl+'/all');
  }

  createArea(areaData: Area):Observable<Area>{
    return this.http.post<Area>(this.apiUrl+'/create',areaData);
  }

  updateArea(areaData: Area): Observable<Area>{
    return this.http.put<Area>(this.apiUrl+'/edit',areaData);
  }
}
