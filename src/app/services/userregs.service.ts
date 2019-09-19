import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userregs } from '../models/userregs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})
export class UserregsService {
    [x: string]: any;
    private userregsUrl = 'http://localhost:8080/api/userregs';
    constructor(private http: HttpClient) { }

    getuserregs (): Observable<Userregs[]> {
        return this.http.get<Userregs[]>(this.userregsUrl);
    }

    getUserregs (userid: number): Observable<Userregs> {
        const url = `${this.userregsUrl}/${userid}`;
        return this.http.get<Userregs>(url);
    }

    addUserregs (userregs: Userregs | number): Observable<Userregs> {
        return this.http.post<Userregs>(this.userregsUrl, userregs, httpOptions);
    }

    deleteUserregs(userregs: Userregs | number): Observable<Userregs> {
        const userid = typeof userregs === 'number' ? userregs : userregs.userid;
        const url = `${this.userregsUrl}/${userid}`;
        return this.http.delete<Userregs>(url, httpOptions);
    }

    updateUserregs (userregs: Userregs): Observable<any> {
        return this.http.put(this.userregsUrl, userregs, httpOptions);
    }
}
