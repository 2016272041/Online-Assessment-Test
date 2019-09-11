import { Component, OnInit } from '@angular/core';
import { Questions } from '../services/questions';
import { QuestionsService } from '../services/questions.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  id: number;
  formdata: any;
  questions = new Questions();
  submitted = false;
  tabs: any[];

  constructor(
    private questionsservice: QuestionsService,
    private location: Location
  ) { }

  newQuestions(): void {
    this.submitted = false;
    this.questions = new Questions();
  }

  addQuestions() {
    this.submitted = true;
    this.save();
  }
  addAnswers() {
    this.submitted = true;
    this.save();
  }

  addOptions() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.questions);
    this.questionsservice.addQuestions(this.questions)
        .subscribe();
  }
}
