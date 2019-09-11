import { Component, OnInit } from '@angular/core';
import { Questions } from '../services/questions';
import { QuestionsService } from '../services/questions.service';
import { Dataaccess } from '../models/dataaccess';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class MCQComponent implements OnInit {
  [x: string]: any;
  dataAccess: any;
  message: any;
  Questions: Questions[];
  tabs: any[];
  Dataaccess: Dataaccess[];
  Answers: string[];
  selectedQuestions: string[];

  constructor(private questionsService: QuestionsService, private httpService: HttpClient) {}
  questions: string[];

  onSubmit(ques: Questions) {
    this.selectedQuestionsText = ques.answers;
    this.selectedQuestions = ques.questions;
  }
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
    this.dataAccess.onSelect('http://localhost:8080/api/questions/answers').subscribe(
      answers => {
        this.questions = answers();
        console.log(answers);
      },
      error => this.message.push(error)
    );
  }
}
