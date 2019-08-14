import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Companies } from './companies';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private companiesUrl = 'http://localhost:8080/api/companies';  // URL to web api
  constructor(private http: HttpClient) { }

  getcompanies (): Observable<Companies[]> {
    return this.http.get<Companies[]>(this.companiesUrl);
  }

  getCompanies(id: number): Observable<Companies> {
    const url = `${this.companiesUrl}/${id}`;
    return this.http.get<Companies>(url);
  }

  addCompanies (companies: Companies): Observable<Companies> {
    return this.http.post<Companies>(this.companiesUrl, companies, httpOptions);
  }

  deleteCompanies (companies: Companies | number): Observable<Companies> {
    const id = typeof companies === 'number' ? companies : companies.id;
    const url = `${this.companiesUrl}/${id}`;

    return this.http.delete<Companies>(url, httpOptions);
  }

  updateCompanies (companies: Companies): Observable<any> {
    return this.http.put(this.companiesUrl, companies, httpOptions);
  }
}
