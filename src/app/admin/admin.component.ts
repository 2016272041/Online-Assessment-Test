import { Component, OnInit } from '@angular/core';
import { UserregsService } from '../services/userregs.service';
import { TestsService } from '../services/tests.service';
import { McqService } from '../services/mcq.service';
import { Userregs } from '../models/userregs';
import { Tests } from '../services/tests';
import { Mcq } from '../models/mcq';
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
  mcq: Mcq[];
  location: Location;
  constructor(
    private userregsService: UserregsService,
    private testsService: TestsService,
    private mcqService: McqService
    ) {}

  ngOnInit(): void {
    this.getUserregs();
    this.getUserid();
    this.getAlluserregs();
    this.getTests();
    this.getMcq();
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

  getMcq() {
    return this.mcqService.getmcq()
               .subscribe(
                  mcq => {
                    console.log(mcq);
                    this.mcq = mcq;
                  });
  }
}
