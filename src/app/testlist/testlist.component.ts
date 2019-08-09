import { Component, OnInit } from '@angular/core';
import { Tests } from '../services/tests';
import { TestsService } from '../services/tests.service';

@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.css']
})
export class TestlistComponent implements OnInit {

  tests: Tests[];

  constructor(private testsService: TestsService) { }

  ngOnInit(): void {
    this.getTests();
  }

  getTests() {
    return this.testsService.gettests()
                .subscribe(
                  tests => {
                    console.log(tests);
                    this.tests = tests;
                  }
                );
  }
}
