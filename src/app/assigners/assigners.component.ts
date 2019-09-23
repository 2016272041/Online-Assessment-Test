import { Component, OnInit } from '@angular/core';
import { AssignersService } from '../services/assigners.service';
import { Assigners } from '../models/assigners';
import { UserregsService } from '../services/userregs.service';
import { Userregs } from '../models/userregs';
import { QuestionsService } from '../services/questions.service';
import { Questions } from '../services/questions';

@Component({
  selector: 'app-assigners',
  templateUrl: './assigners.component.html',
  styleUrls: ['./assigners.component.css']
})
export class AssignersComponent implements OnInit {
  questions: Questions[];
  userregs: Userregs[];
  assigners: Assigners[];
  constructor(
    private assignersService: AssignersService,
    private userregsService: UserregsService,
    private questionsService: QuestionsService
    ) { }

    ngOnInit(): void {
      this.getAll();
      this.getQuestions();
      this.getUserregs();
    }

    getAll() {
      return this.assignersService.getall()
                 .subscribe(
                  assigners => {
                    console.log(assigners);
                    this.assigners = assigners;
                  });
    }

    getQuestions() {
      return this.questionsService.getquestions()
                  .subscribe(
                    questions => {
                      console.log(questions);
                      this.questions = questions;
                    });
    }

    getUserregs() {
      return this.userregsService.getuserregs()
                 .subscribe(
                   userregs => {
                     console.log(userregs);
                     this.userregs = userregs;
                   });
    }
}
