import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assigners } from '../models/assigners';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AssignersService {
  [x: string]: any;
    private assignerUrl = 'http://localhost:8080/api/assigners';
    constructor(private http: HttpClient) { }

    getassigners(): Observable<Assigners[]> {
        return this.http.get<Assigners[]>(this.assignersUrl);
    }

    getAssigners(id: number): Observable<Assigners> {
        const url = `${this.assignersUrl}/${id}`;
        return this.http.get<Assigners>(url);
    }

    addAssigners(assigners: Assigners): Observable<Assigners> {
        return this.http.post<Assigners>(this.assignersUrl, assigners, httpOptions);
    }

    deleteAssigners(assigners: Assigners | number): Observable<Assigners> {
        const id = typeof assigners === 'number' ? assigners : assigners.userid;
        const url = `${this.assignersUrl}/${id}`;

        return this.http.delete<Assigners>(url, httpOptions);
    }

    updateAssigners(assigners: Assigners): Observable<any> {
        return this.http.put(this.assignersUrl, assigners, httpOptions);
    }
}
