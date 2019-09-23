import { Component, OnInit } from '@angular/core';
import { UserregsService } from '../services/userregs.service';
import { TestsService } from '../services/tests.service';
import { Userregs } from '../models/userregs';
import { Tests } from '../services/tests';
import { Location } from '@angular/common';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userregs: Userregs[];
  tests: Tests[];
  location: Location;
  constructor(
    private userregsService: UserregsService,
    private testsService: TestsService
    ) {}

  ngOnInit(): void {
    this.getUserregs();
    this.getUserid();
    this.getAlluserregs();
    this.getTests();
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
}
