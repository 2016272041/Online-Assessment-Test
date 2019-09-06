import { Component, OnInit } from '@angular/core';
import { Questions } from '../services/questions';
import { QuestionsService } from '../services/questions.service';
import { Dataaccess } from '../models/dataaccess';
@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class MCQComponent implements OnInit {
  dataAccess: any;
  questions: any;
  message: any;
  Questions: Questions[];
  Dataaccess: Dataaccess[];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.dataAccess.getQuestions()
    .subscribe(
      questions => {
        this.questions = questions.questions;
        console.log(questions);
      },
      error => this.message.push(error)
    );
  }

  getQuestions() {
    return this.questionsService.getquestions()
               .subscribe(
                 questions => {
                  console.log(questions);
                  this.questions = questions;
                 }
                );
 }
}
