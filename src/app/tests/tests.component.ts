import { Component, OnInit } from '@angular/core';
import { Tests } from '../services/tests';
import { TestsService } from '../services/tests.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent {
  name = new FormControl('');
  testid: Number;
  testname: Text;
  testcreator: Text;
  submitted = false;
  tests: Tests;

  constructor(
    private testsservice: TestsService,
    private location: Location

  ) { }

  newtests(): void {
    this.submitted = false;
    this.tests = new Tests();
  }

  testCreation() {
    this.submitted = false;
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.tests);
    this.testsservice.addTests(this.tests)
        .subscribe();
  }
}
