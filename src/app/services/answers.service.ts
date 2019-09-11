import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from 'inspector';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})
export class AnswersService {
    [x: string]: any;
    private answersUrl = 'http://localhost:8080/api/answers';
    constructor(private http: HttpClient) { }

    getanswers(): Observable<Answers[]> {
        return this.http.get<Answers[]>(this.answersUrl);
    }

    getAnswers(id: number): Observable<Answers> {
        // tslint:disable-next-line:no-shadowed-variable
        const url = `${this.answersUrl}/${id}`;
        return this.http.get<Answers>(url);
    }

    addAnswers(answers: Answers): Observable<Answers> {
        return this.http.post<Answers>(this.answersUrl, answers, httpOptions);
    }

    updateAnswers(answers: Answers): Observable<any> {
        return this.http.put(this.answersUrl, answers, httpOptions);
    }
}
