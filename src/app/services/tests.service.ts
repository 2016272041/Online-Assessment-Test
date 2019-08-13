import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tests } from './tests';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  private testsUrl = 'http://localhost:8080/api/tests';  // URL to web api
  constructor(private http: HttpClient) { }
  gettests (): Observable<Tests[]> {
    return this.http.get<Tests[]>(this.testsUrl);
  }

  getTests(id: number): Observable<Tests> {
    const url = `${this.testsUrl}/${id}`;
    return this.http.get<Tests>(url);
  }

  addTests (tests: Tests): Observable<Tests> {
    return this.http.post<Tests>(this.testsUrl, tests, httpOptions);
  }

  deleteTests (tests: Tests | number): Observable<Tests> {
    const id = typeof tests === 'number' ? tests : tests.id;
    const url = `${this.testsUrl}/${id}`;

    return this.http.delete<Tests>(url, httpOptions);
  }

  updateTests (tests: Tests): Observable<any> {
    return this.http.put(this.testsUrl, tests, httpOptions);
  }
}
