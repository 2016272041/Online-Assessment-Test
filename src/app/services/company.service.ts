import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) { }
  private companyUrl = 'http://localhost:8080/api/company';  // URL to web api
  companyRegister(company: any) {
    throw new Error('Method not implemented.');
  }

  getcompany (): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }

  getCompany(companyid: number): Observable<Company> {
    const url = `${this.companyUrl}/${companyid}`;
    return this.http.get<Company>(url);
  }

  addCompany (company: Company): Observable<Company> {
    return this.http.post<Company>(this.companyUrl, company, httpOptions);
  }

  deleteCompany (company: Company | number): Observable<Company> {
    const id = typeof company === 'number' ? company : company.companyid;
    const url = `${this.companyUrl}/${id}`;

    return this.http.delete<Company>(url, httpOptions);
  }

  updateTests (company: Company): Observable<any> {
    return this.http.put(this.companyUrl, company, httpOptions);
  }
}
