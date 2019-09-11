import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AnswersService } from '../services/answers.service';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  url = 'http://localhost:8080/answers';
  res = [];
  public answers: Answers[];

  constructor(private http: HttpClient) {
      http.get(this.url).subscribe(result => {
        this.answers = result as Answers[];
      }, error => console.error(error));
   }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(data => {
      this.res = [];
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-Side error occured.');
        } else {
          console.log('Server-Side error occured.');
        }
      });
  }

}
