import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Truefalse } from '../models/truefalse';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class TruefalseService {
    private truefalseUrl = 'http://localhost:8080/api/truefalse';
    constructor(private http: HttpClient) { }

    gettruefalse (): Observable<Truefalse[]> {
        return this.http.get<Truefalse[]>(this.truefalseUrl);
    }

    getTruefalse(id: number): Observable<Truefalse> {
        const url = '${this.truefalseUrl}/${id}';
        return this.http.get<Truefalse>(url);
    }

    addTruefalse(truefalse: Truefalse ): Observable<Truefalse> {
        return this.http.post<Truefalse>(this.truefalseUrl, truefalse, httpOptions);
    }

    deleteTruefalse(truefalse: Truefalse | number): Observable<Truefalse> {
        const id = typeof truefalse === 'number' ? truefalse : truefalse.id;
        const url = `${this.truefalseUrl}/${id}`;

        return this.http.delete<Truefalse>(url, httpOptions);
    }
}
