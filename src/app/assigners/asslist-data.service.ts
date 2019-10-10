import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Asslist } from './asslist';
import { Assigners } from '../models/assigners';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Subscription  } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AsslistDataService {

  private assignersUrl = 'http://localhost:8080/api/assigners';
  isLoading: Boolean = true;
  constructor(
    private api: ApiService,
    private http: HttpClient
  ) { }

  // get Assigners data in via http access
  getassigners(): Observable<Assigners[]> {
    return this.http.get<Assigners[]>(this.assignersUrl);
  }

  // get assigners data access via userid access
  getAssigners(userid: number): Observable<Assigners> {
    const url = `${this.assignersUrl}/${userid}`;
    return this.http.get<Assigners>(url);
  }

  // Simulate POST/Asslist
  addAsslist(asslist: Asslist): Observable<Asslist> {
    return this.api.createAsslist(asslist);
  }

  // Simulate Asslist DELETE: id
  deleteAsslistById(asslistId: number): Observable<Asslist> {
    return this.api.getAsslsistById(asslistId);
  }

  // Simulate Asslist UPDATE: id
  updateAsslist(asslist: Asslist): Observable<Asslist> {
    return this.api.updateAsslist(asslist);
  }

  // Simulate GET Asslist
  getAllAsslist(): Observable<Asslist[]> {
    return this.api.getAllAsslist();
  }

  // Simulate GET /asslist:id
  getAsslistById(asslistId: number): Observable<Asslist> {
    return this.api.getAsslsistById(asslistId);
  }

  // Toggle complete
  toggleAsslistComplete(asslist: Asslist) {
    Asslist.complete = !asslist.complete;
    return this.api.updateAsslist(asslist);
  }
}
