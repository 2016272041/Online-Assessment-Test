import { Injectable } from '@angular/core';
import { Asslist } from './asslist';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Subscription  } from 'rxjs';

@Injectable()
export class AsslistDataService {

  isLoading: Boolean = true;
  constructor(
    private api: ApiService
  ) {
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
