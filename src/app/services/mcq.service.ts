import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mcq } from '../models/mcq';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})
export class McqService {
    private mcqUrl = 'http://localhost:8080/api/mcqs';
    constructor(private http: HttpClient) { }

    getmcq(): Observable<Mcq[]> {
        return this.http.get<Mcq[]>(this.mcqUrl);
    }

    getMcq(id: number): Observable<Mcq> {
        const url = `${this.mcqUrl}/${id}`;
        return this.http.get<Mcq>(url);
    }

    submitOptions(mcq: Mcq): Observable<Mcq> {
        return this.http.post<Mcq>(this.mcqUrl, mcq, httpOptions);
    }
}
