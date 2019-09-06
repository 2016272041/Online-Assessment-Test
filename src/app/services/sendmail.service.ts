import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sendmail } from '../models/sendmail';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SendmailService {
  private sendmailUrl = 'http://localhost:8080/api/sendmail';
  sendMail: any;
  constructor(private http: HttpClient) { }

  getsendmail(): Observable<Sendmail[]> {
    return this.http.get<Sendmail[]>(this.sendmailUrl);
  }

  getSendmail(id: number): Observable<Sendmail> {
    const url = '${this.sendmailUrl}/${id}';
    return this.http.get<Sendmail>(url);
  }

  sendmail(id, name, email, message): Observable<any> {
    const obj = {
      id: id,
      name: name,
      email: email,
      message: message,
    };
    return this.http.post(this.sendmailUrl, obj);
  }
}
