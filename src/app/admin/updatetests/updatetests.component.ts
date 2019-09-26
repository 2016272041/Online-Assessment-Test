import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UpdatetestsService } from '../updatetests.service';
import { Router } from '@angular/router';
import { Updatetests } from '../updatetests';

@Component({
  selector: 'app-updatetests',
  templateUrl: './updatetests.component.html',
  styleUrls: ['./updatetests.component.css']
})
export class UpdatetestsComponent implements OnInit {
  [x: string]: any;
  updatetestsid: number;
  tabSub: Subscription;
  tab: string;
  updatedtests: Updatetests;

  constructor() { }

  ngOnInit() {
    // subscribe to query params to watch for tab changes
    this.tabSub = this.route.queryParams
        .subscribe(queryParams => {
          this.tab = queryParams['tab'] || 'edit';
        });
  }

  // destroy functions

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.tabSub.unsubscribe();
  }
}
