import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Userregs } from '../models/userregs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class Adminservice {
    constructor(private httpService: HttpClient) {
    }

    public getUserregs(userid: number): Observable<Userregs> {
        return this.httpService.get<Userregs>('http://localhost:8080/userregs/${userid}').pipe(
            map(data => new Userregs().deserialize(data)),
            catchError(() => throwError('Userregs not found'))
        );
    }

    public getAllUserregs(): Observable<Userregs[]> {
        return this.httpService.get<Userregs>('http://localhost:8080/userregs').pipe(
            map(data => new Userregs().deserialize(data)),
            catchError(() => throwError('AllUsers not found'))
        );
    }
    public getUserid(userid: number): Observable<Userregs> {
        return this.httpService.get<Userregs>('http://localhost:8080/userregs/${userid}').pipe(
            map(data => new Userregs().deserialize(data)),
            catchError(() => throwError('userid not found'))
        );
    }
}
