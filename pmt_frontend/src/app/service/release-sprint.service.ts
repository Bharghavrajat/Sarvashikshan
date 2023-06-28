import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReleaseSprint } from '../classes/release-sprint';

@Injectable({
  providedIn: 'root'
})
export class ReleaseSprintService {

  private baserURL = "http://localhost:8080/api/v1/releasesprint"
  constructor(private httpClient: HttpClient) { }

  //------------------ get Release API ------------------
  getReleaseSprint(): Observable<ReleaseSprint[]> {
    return this.httpClient.get<ReleaseSprint[]>(`${this.baserURL}`);
  }

  //------------------ get Release BY ID API ------------------

  getReleaseSprintById(id: number): Observable<ReleaseSprint> {
    return this.httpClient.get<ReleaseSprint>(`${this.baserURL}/${id}`);
  }

}
