import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionsService } from '../services/questions.service';
import { Questions } from '../services/questions';
import { UserregsService } from '../services/userregs.service';
import { Userregs } from '../models/userregs';
import { TestsService } from '../services/tests.service';
import { Tests } from '../services/tests';
import { Assigners } from '../models/assigners';
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AssignersService {
  [x: string]: any;
    private assignersUrl = 'http://localhost:8080/api/assigners';
    private questionsUrl = 'http://localhost:8080/api/questions';
    private testsUrl = 'http://localhost:8080/api/tests';
    private userregsUrl = 'http://localhost:8080/api/userregs';
    constructor(private http: HttpClient) { }

    getAll(): Observable<Assigners[]> {
        return this.http.get<Assigners[]>(this.assignersUrl);
    }

    getassigners(): Observable<Assigners[]> {
        return this.http.get<Assigners[]>(this.assignersUrl);
    }

    getquestions(): Observable<Questions[]> {
        return this.http.get<Questions[]>(this.questionsUrl);
    }

    gettests(): Observable<Tests[]> {
        return this.http.get<Tests[]>(this.testsUrl);
    }

    getuserregs(): Observable<Userregs[]> {
        return this.http.get<Userregs[]>(this.userregsUrl);
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

    getUserregs() {
        return this._http.get('http://randomuserregs.me/api/?inc=userid,name,username,email')
        .map(res => res.json());
    }

    getQuestions() {
        // tslint:disable-next-line:max-line-length
        return this._http.get('http://questions.me/api/?inc=id,questions1,questions2,questions3,questions4,questions5,option1,option2,option3,option4')
        .map(res => res.json());
    }
}
