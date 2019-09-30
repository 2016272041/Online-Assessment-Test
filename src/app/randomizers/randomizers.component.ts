import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Questions } from '../services/questions';
import { UserregsService } from '../services/userregs.service';
import { Userregs } from '../models/userregs';
import { TestsService } from '../services/tests.service';
import { Tests } from '../services/tests';

@Component({
  selector: 'app-randomizers',
  templateUrl: './randomizers.component.html',
  styleUrls: ['./randomizers.component.css']
})
export class RandomizersComponent implements OnInit {
  row: any;
  questions: Questions[];
  tests: Tests[];
  userregs: Userregs[];

  constructor(
    private questionsService: QuestionsService,
    private userregsService: UserregsService,
    private testsService: TestsService
  ) { }

  ngOnInit() {
    this.AssignQues();
  }

  AssignQues() {
    return this.questionsService.getquestions()
                .subscribe(
                  questions => {
                    console.log(questions);
                  });
  }

  GetTests() {
    return this.testsService.gettests()
                .subscribe(
                  tests => {
                    console.log(tests);
                  });
  }
}
