import { Component, OnInit } from '@angular/core';
import { AssignersService } from '../services/assigners.service';
import { Assigners } from '../models/assigners';
import { UserregsService } from '../services/userregs.service';
import { Userregs } from '../models/userregs';
import { QuestionsService } from '../services/questions.service';
import { Questions } from '../services/questions';
import { TestsService } from '../services/tests.service';
import { Tests } from '../services/tests';
import { AsslistDataService } from './asslist-data.service';
import { Asslist } from '../assigners/asslist';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assigners',
  templateUrl: './assigners.component.html',
  styleUrls: ['./assigners.component.css']
})
export class AssignersComponent implements OnInit {
  Userid: Number;
  X: String;
  Forms: FormsModule;
  questions: Questions[];
  tests: Tests[];
  userregs: Userregs[];
  assigners: Assigners[];
  testid: Number;
  testdate: Date;
  userid: string = '_' + Math.random().toString(40).substr(2, 10);
  id: string = '_' + Math.random().toString(32).substring(2, 10);
  selected: any;
  asslist: any;
  asslists: any;

  quesAssigner() {
    const id = document.getElementById(this.id) as HTMLSelectElement;
    const userid = document.getElementById(this.userid) as HTMLSelectElement;
    let value: number = + Element.name;

    if (value = 0) {
      alert('Make a selection');
      return false;
    }

    this.selected = value;
  }
  constructor(
    private assignersService: AssignersService,
    private userregsService: UserregsService,
    private questionsService: QuestionsService,
    private testsService: TestsService,
    private asslistDataService: AsslistDataService,
    private formsModule: FormsModule
    ) { }

    ngOnInit(): void {
      this.getAll();
      this.getQuestions();
      this.getUserregs();
      this.quesAssigner();
      this.getTests();
      this.assignersService.getUserregs().subscribe((userregs) => {
        console.log(userregs.userid);
      });
      this.asslistDataService.getAllAsslist().subscribe(
        (asslists) => {
          this.asslist = asslists;
        }
      );
    }

    onAddAsslists(asslists) {
      this.asslistDataService.addAsslist(asslists).subscribe(
        (newAsslist) => {
          this.asslists = this.asslists.concat(newAsslist);
        }
      );
    }

    onToggleAsslistComplete(asslist) {
      this.asslistDataService.toggleAsslistComplete(asslist).subscribe(
        (updatedAsslist) => {
          asslist = updatedAsslist;
        }
      );
    }

    onRemoveAsslsist(asslist) {
      this.asslistDataService.deleteAsslistById(asslist.id).subscribe(
        (_) => {
          this.asslists = this.asslists.filter((a) => a.id !== asslist.id);
        }
      );
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

    getquesAssigner() {
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
}
