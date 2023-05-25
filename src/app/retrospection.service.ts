import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError,throwError } from 'rxjs';
import { Retrospection } from './classes/retrospection';

@Injectable({
  providedIn: 'root'
})
export class RetrospectionService {
  // getretrospection(){
  //   return this.http.get('https://localhost:57426/api/v1/retrospection').pipe(
  //     catchError((error:any)=>{
  //       console.error(error);
  //       return throwError('An error occured while retreiving the retrospection.');
  //     })
  //   );;
  // }

  private baseURL ="http://localhost:8086/api/v1/retrospection";

  constructor(private http: HttpClient) { }
  
  getretrospection(): Observable<Retrospection[]>{
    return this.http.get<Retrospection[]>(`${this.baseURL}`);
  }
  }
 