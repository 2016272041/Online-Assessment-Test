import { Component, OnInit } from '@angular/core';
import { Questions } from '../services/questions';
import { QuestionsService } from '../services/questions.service';
import { Dataaccess } from '../models/dataaccess';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class MCQComponent implements OnInit {
  dataAccess: any;
  message: any;
  Questions: Questions[];
  tabs: any[];
  Dataaccess: Dataaccess[];
  Answers: string[];

  constructor(private questionsService: QuestionsService, private httpService: HttpClient) {}
  questions: string[];
  ngOnInit() {
    this.httpService.get('http://localhost:8080/api/questions').subscribe(
      data => {
        this.questions = data as string [];
      }
    );

    this.httpService.get('http://localhost:8080/api/questions/answers').subscribe(
      data => {
        this.Answers = data as string [];
      }
    );
    this.dataAccess.getQuestions()
    .subscribe(
      questions => {
        this.questions = questions.questions;
        console.log(questions);
      },
      error => this.message.push(error)
    );

    this.httpService.get('http://localhost:8080/api/questions/answers').subscribe(
      data => {
        this.Answers = data as string [];
      }
    );
  }
}
