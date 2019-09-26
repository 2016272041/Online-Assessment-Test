import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Updatetests } from './updatetests';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class UpdatetestsService {
    private updatetestsUrl = 'http://localhost:8080/api/updatetests';
    constructor(private http: HttpClient) { }

    getupdatetests(): Observable<Updatetests[]> {
        return this.http.get<Updatetests[]>(this.updatetestsUrl);
    }

    getUpdatetests (updatetests: Updatetests): Observable<Updatetests> {
        const url = `${this.updatetestsUrl}/${updatetests.updatetestsid}`;
        return this.http.get<Updatetests>(url);
    }

    addUpdatetests(updatetests: Updatetests): Observable<Updatetests> {
        return this.http.post<Updatetests>(this.updatetestsUrl, updatetests, httpOptions);
    }

    deleteUpdatetests (updatetests: Updatetests | number): Observable<Updatetests> {
        const id = typeof updatetests === 'number' ? updatetests : updatetests.updatetestsid;
        const url = `${this.updatetestsUrl}/${id}`;
        return this.http.delete<Updatetests>(url, httpOptions);
      }

    updateCompanies (updatetests: Updatetests): Observable<any> {
        return this.http.put(this.updatetestsUrl, this.updatetestsUrl, httpOptions);
      }
}
