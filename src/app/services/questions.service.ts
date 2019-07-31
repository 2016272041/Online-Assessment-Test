import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from './questions';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questionsUrl = 'http://localhost:8080/api/questions';  // URL to web api
  constructor(private http: HttpClient) { }

  getquestions (): Observable<Questions[]> {
    return this.http.get<Questions[]>(this.questionsUrl);
  }

  getQuestions(id: number): Observable<Questions> {
    const url = `${this.questionsUrl}/${id}`;
    return this.http.get<Questions>(url);
  }

  addQuestions (questions: Questions): Observable<Questions> {
    return this.http.post<Questions>(this.questionsUrl, questions, httpOptions);
  }

  deleteQuestions (questions: Questions | number): Observable<Questions> {
    const id = typeof questions === 'number' ? questions : questions.id;
    const url = `${this.questionsUrl}/${id}`;

    return this.http.delete<Questions>(url, httpOptions);
  }

  updateQuestions (questions: Questions): Observable<any> {
    return this.http.put(this.questionsUrl, questions, httpOptions);
  }
}
