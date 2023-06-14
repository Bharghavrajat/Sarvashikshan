import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError,throwError } from 'rxjs';
import { Retrospection } from '../classes/retrospection';

@Injectable({
  providedIn: 'root'
})
export class RetrospectionService {

  private baseURL ="http://localhost:8086/api/v1/retrospection";

  constructor(private http: HttpClient) { }
  
  getretrospection(): Observable<Retrospection[]>{
    return this.http.get<Retrospection[]>(`${this.baseURL}`);
  }
  }
