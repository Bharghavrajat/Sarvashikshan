import { Injectable } from '@angular/core';
import { Retrospection } from './classes/retrospection';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetrospectionService {

  private apiUrl ="http://localhost:7825/api/v1/retrospection";

  constructor(private http: HttpClient) { }
  
  getretrospection(): Observable<Retrospection[]>{
    return this.http.get<Retrospection[]>(`${this.apiUrl}`);
  }

  openretrospection(retrospection: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, retrospection);
  }


  }
