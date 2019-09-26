import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deletetests } from './deletetests';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class DeletetestsService {
    private deletetestsUrl = 'http://localhost:8080/api/deletetests';
    constructor(private http: HttpClient) { }

    getdeletetests(): Observable<Deletetests[]> {
        return this.http.get<Deletetests[]>(this.deletetestsUrl);
    }

    getDeletetests (deletetests: Deletetests): Observable<Deletetests> {
        const url = `${this.deletetestsUrl}/${deletetests.deletetestsid}`;
        return this.http.get<Deletetests>(url);
    }

    addDeletetests(deletetests: Deletetests): Observable<Deletetests> {
        return this.http.post<Deletetests>(this.deletetestsUrl, deletetests, httpOptions);
    }

    deleteUpdatetests (deletetests: Deletetests | number): Observable<Deletetests> {
        const id = typeof deletetests === 'number' ? deletetests : deletetests.deletetestsid;
        const url = `${this.deletetestsUrl}/${id}`;
        return this.http.delete<Deletetests>(url, httpOptions);
      }

    updatedeletetests (deletetests: Deletetests): Observable<any> {
        return this.http.put(this.deletetestsUrl, this.deletetestsUrl, httpOptions);
      }
}
