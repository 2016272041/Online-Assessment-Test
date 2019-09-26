import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DeletetestsService } from '../deletetests.service';
import { Deletetests } from '../deletetests';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deletetests',
  templateUrl: './deletetests.component.html',
  styleUrls: ['./deletetests.component.css']
})
export class DeletetestsComponent implements OnDestroy {
  [x: string]: any;
  deletetestsid: Number;
  deletetests: Deletetests;
  confirmDelete: string;
  deleteSub: Subscription;
  submitting: boolean;
  error: boolean;

  constructor(
    private deletetestsService: DeletetestsService,
    private router: Router
    ) { }

    RemoveTests() {
      this.submitting = true;
      // DELETE tests by ID
      this.deleteSub = this.api
          .deleteTest$(this.event.deletetestsid)
          .subscribe(
            res => {
              this.submitting = false;
              this.error = false;
              console.log(res.message);
              this.router.navigate(['/admin']);
            }
          );
    }

    ngOnDestroy() {
      if (this.deleteSub) {
        this.deleteSub.unsubscribe();
      }
    }
}
