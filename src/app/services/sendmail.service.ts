import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sendmail } from '../models/sendmail';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable ({
  providedIn: 'root'
})

export class SendmailService {
  [x: string]: any;
  private sendmailUrl = 'http://localhost:8080/api/sendmail';
  constructor(private http: HttpClient) { }

  getsendmail(): Observable<Sendmail[]> {
    return this.http.get<Sendmail[]>(this.sendmailUrl);
  }

  getSendmail(id: number): Observable<Sendmail> {
    const url = `${this.sendmailUrl}/${id}`;
    return this.http.get<Sendmail>(url);
  }

  sendMail (sendmail: Sendmail): Observable<Sendmail> {
    return this.http.post<Sendmail>(this.sendmailUrl, sendmail, httpOptions);
  }
}
