import {  Injectable } from '@angular/core';
import { Sendmail } from '../models/sendmail';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SendmailService {
  [x: string]: any;
    serverUrl = 'http://localhost/dev/blogger/';

    constructor(private http: HttpClient) { }

    getSendmails() {
        return this.http.get<Sendmail>(this.serverUrl + 'api/sendmail').pipe(
            catchError(this.handleError)
        );
    }

    getSendmail(id: number) {
        return this.http.get<Sendmail>(this.serverUrl + 'api/sendmail/' + id).pipe(
            catchError(this.handleError)
        );
    }

    createSendmail(sendmail) {
        return this.http.post<any>(this.serverUrl + 'api/createSendmail', sendmail)
        .pipe(
            catchError(this.handleError)
        );
    }

    updateSendmail(blog, id: number) {
        return this.http.post<any>(this.serverUrl + 'api/updateSendmail/' + id, Sendmail)
        .pipe(
          catchError(this.handleError)
        );
    }

    deleteSendmail(id: number) {
        return this.http.delete(this.serverUrl + 'api/deleteSendmail/' + id)
        .pipe(
          catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {

          // A client-side or network error occurred. Handle it accordingly.

          console.error('An error occurred:', error.error.message);
        } else {

          // The backend returned an unsuccessful response code.

          // The response body may contain clues as to what went wrong.

          console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }

        // return an observable with a user-facing error message

        return throwError('Something bad happened. Please try again later.');
      }
}
