import { Component, OnInit } from '@angular/core';
import { UserregsService } from '../services/userregs.service';
import { TestsService } from '../services/tests.service';
import { McqService } from '../services/mcq.service';
import { QuestionsService } from '../services/questions.service';
import { Userregs } from '../models/userregs';
import { Tests } from '../services/tests';
import { Questions } from '../services/questions';
import { Location } from '@angular/common';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userid: Number;
  userregs: Userregs[];
  tests: Tests[];
  questions: Questions[];
  location: Location;
  constructor(
    private userregsService: UserregsService,
    private testsService: TestsService,
    private mcqService: McqService,
    private questionsService: QuestionsService
    ) {}

  ngOnInit(): void {
    this.getUserregs();
    this.getUserid();
    this.getAlluserregs();
    this.getTests();
    this.getQuestions();
  }

  getUserregs() {
    return this.userregsService.getuserregs()
                .subscribe(
                  userregs => {
                    console.log(userregs);
                    this.userregs = userregs;
                  });
  }

  getUserid() {
    return this.userregsService.getuserregs()
               .subscribe(
                 userregs => {
                  console.log(userregs);
                  this.userregs = userregs;
                 });
  }

  getAlluserregs() {
    return this.userregsService.getuserregs()
               .subscribe(
                 userregs => {
                   console.log(userregs);
                   this.userregs = userregs;
                 });
  }

  getTests() {
    return this.testsService.gettests()
               .subscribe(
                 tests => {
                   console.log(tests);
                   this.tests = tests;
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
}
