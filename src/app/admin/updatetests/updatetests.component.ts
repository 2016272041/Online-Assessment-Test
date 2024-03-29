import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UpdatetestsService } from '../updatetests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Updatetests } from '../updatetests';

@Component({
  selector: 'app-updatetests',
  templateUrl: './updatetests.component.html',
  styleUrls: ['./updatetests.component.css']
})
export class UpdatetestsComponent implements OnInit {
  [x: string]: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private updatetestsService: UpdatetestsService
    ) { }
  updatetestsid: number;
  tabSub: Subscription;
  tab: string;
  updatedtests: Updatetests;

  ngOnInit() {
    this.tabSub = this.route.queryParams
        .subscribe(queryParams => {
          this.tab = queryParams['tab'] || 'edit';
        });
        console.log(this.tab);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.tabSub.unsubscribe();
  }
}
