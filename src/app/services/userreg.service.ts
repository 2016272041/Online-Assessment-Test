import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userreg } from '../models/userreg';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})
export class UserregService {
    [x: string]: any;
    priavte; userregUrl = 'http://localhost:8080/api/userreg';
    constructor(private http: HttpClient) { }

    getuserreg (): Observable<Userreg[]> {
        return this.http.get<Userreg[]>(this.userregUrl);
    }

    getUserreg (userid: number): Observable<Userreg> {
        const url = `${this.userregUrl}/${userid}`;
        return this.http.get<Userreg>(url);
    }

    addUserreg (userreg: Userreg | number): Observable<Userreg> {
        return this.http.post<Userreg>(this.userregUrl, userreg, httpOptions);
    }

    deleteUserreg(userreg: Userreg | number): Observable<Userreg> {
        const userid = typeof userreg === 'number' ? userreg : userreg.userid;
        const url = `${this.userregUrl}/${userid}`;
        return this.http.delete<Userreg>(url, httpOptions);
    }

}
