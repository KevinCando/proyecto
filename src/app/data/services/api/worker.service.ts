import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../../interfaces/worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private apiUrl = 'http://localhost:8080/api/v1/worker';
  
  constructor( private http: HttpClient) { }

  getWorkers(): Observable<Worker[]>{
    return this.http.get<Worker[]>(this.apiUrl+'/all');
  }

  createWorker(workerData: Worker): Observable<Worker>{
    return this.http.post<Worker>(this.apiUrl+"/create", workerData);
  }

  updateWorker(workerData: Worker): Observable<Worker>{
    return this.http.put<Worker>(this.apiUrl+"/edit", workerData);
  }
}
