import { Component, OnInit } from '@angular/core';
import { Questions } from '../services/questions';
import { QuestionsService } from '../services/questions.service';
import { Dataaccess } from '../models/dataaccess';
import { McqService } from '../services/mcq.service';
import { Mcq } from '../models/mcq';
import { Location } from '@angular/common';
@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class MCQComponent implements OnInit {
  id: number;
  mcq = new Mcq();
  submitted = false;

  questions: Questions[];
  location: any;
  constructor(
    private questionsService: QuestionsService,
    private mcqService: McqService
    ) {}

  newMcq() {
    this.submitted = false;
    this.mcq = new Mcq;
  }

  submitOptions() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.mcq);
    this.mcqService.submitOptions(this.mcq)
        .subscribe();
  }

  ngOnInit(): void {
    this.getQuestions();
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
