import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../services/answers.service';
import { Answers } from '../models/answers';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  [x: string]: any;
  answers: Answers[];

  constructor(
    private answersService: AnswersService
    ) {}

  ngOnInit(): void {
    this.getAnswers();
    this.selectedAnswers();
  }

  get Answers() {
    return this.AnswersService.getanswers()
               .subscribe(
                 answers => {
                   console.log(answers);
                   this.answers = answers;
                 }
               );
  }

  getAnswers() {
    return this.AnswersService.getanswers()
               .subscribe(
                 answers => {
                   console.log(answers);
                   this.answers = answers;
                 });
  }

  selectedAnswers() {
    return this.AnswersService.getanswers()
               .subscribe(
                answers => {
                  console.log(answers);
                  this.answers = answers;
                }
               );
  }
}
