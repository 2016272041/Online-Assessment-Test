import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from './questions';
import { Mcqquiz } from '../models/mcqquiz';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class McqService {
  constructor(private http: HttpClient) { }

  private questionsUrl = 'http://localhost:8080/api/questions';
  addOptions(mcq: any) {
    throw new Error('Method not implemented.');
  }
  getmcq() {
    throw new Error('Method not implemented.');
  }

  getquestions(): Observable<Questions[]> {
    return this.http.get<Questions[]>(this.questionsUrl);
  }

  getQuestions(id: number): Observable<Questions> {
    const url = `${this.questionsUrl}/${id}`;
    return this.http.get<Questions>(url);
  }

  get(url: string) {
    return this.http.get(url);
  }

  getUrl(url: string) {
    return this.get('http://localhost:8080/api/questions');
  }

  getAll() {
    return [
      { id: '/questions', name: 'Questions', url: 'http://localhost:8080/api/questions' },
      { id: '/tests', name: 'Tests', url: 'http://localhost:8080/api/Tests' }
    ];
  }
}
