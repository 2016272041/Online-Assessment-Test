import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from './questions';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private questionsUrl = 'http://localhost:8080/api/questions';
  constructor(private http: HttpClient) { }

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
      { id: 'data/javascript.json', name: 'JavaScript' },
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' },
      { id: 'data/tradefinance.json', name: 'Trade Finance' },
      { id: '/questions', name: 'Questions'},
      { id: '/questions', name: 'http://localhost:8080/api/questions' },
      { id: '/tests', name: 'http://localhost:8080/api/tests' }
    ];
  }
}
