import { Component, OnInit } from '@angular/core';
import { Questions } from '../services/questions';
import { QuestionsService } from '../services/questions.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addedquesdetails',
  templateUrl: './addedquesdetails.component.html',
  styleUrls: ['./addedquesdetails.component.css']
})
export class AddedquesdetailsComponent implements OnInit {

  customer = new Questions() ;
  submitted = false;
  message: string;
  questions: Questions;

  constructor(
    private questionsService: QuestionsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questionsService.getQuestions(id)
      .subscribe(questions => this.questions = questions);
  }

  update(): void {
    this.submitted = true;
    this.questionsService.updateQuestions(this.questions)
        .subscribe(result => this.message = 'Questions Updated Successfully!');
  }

  delete(): void {
    this.submitted = true;
    this.questionsService.deleteQuestions(this.questions)
        .subscribe(result => this.message = 'Questions Deleted Successfully!');
  }

  goBack(): void {
    this.location.back();
  }
}
