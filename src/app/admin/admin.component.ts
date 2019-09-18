import { Component, OnInit } from '@angular/core';
import { UserregService } from '../services/userreg.service';
import { Userreg } from '../models/userreg';
import { Questions } from '../services/questions';
import { QuestionsService } from '../services/questions.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public userid: number;
  public name: string;
  public username: string;
  userreg: Userreg[];
  questions: Questions[];
  Userreg: Userreg;
  constructor(
    private userregService: UserregService,
    private questionsService: QuestionsService
    ) { }

    public getUserid() {
      this.userregService.getUserreg(this.userid).subscribe(userreg => this.Userreg = userreg);
    }

    public getAllUserreg() {
      this.userregService.getAllUserreg().subscribe(userreg => this.userreg = userreg);
    }

  ngOnInit(): void {
    this.getQuestions();
  }

  assign() {
    return this.questionsService.getassign()
      .subscribe(
        questions => {
          console.log(questions);
          this.assign = questions;
        });
  }

  getUserreg() {
    return this.userregService.getuserreg()
               .subscribe(
                 userreg => {
                    console.log(userreg);
                    this.userreg = userreg;
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
