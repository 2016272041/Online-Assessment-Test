import { Component, OnInit } from '@angular/core';
import { Questions } from '../services/questions';
import { QuestionsService } from '../services/questions.service';


@Component({
  selector: 'app-addedques',
  templateUrl: './addedques.component.html',
  styleUrls: ['./addedques.component.css']
})

export class AddedquesComponent  implements OnInit {

  questions: Questions[];

  constructor(private questionsService: QuestionsService) {}

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
