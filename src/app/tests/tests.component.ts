import { Component } from '@angular/core';
import { Tests } from '../services/tests';
import { TestsService } from '../services/tests.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent {
  id: number;
  tests = new Tests();
  submitted = false;

  constructor(
    private testsservice: TestsService,
    private location: Location,
  ) { }

  newTests(): void {
    this.submitted = false;
    this.tests = new Tests();
  }

  addTests() {
    this.submitted = true;
    this.save();
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
