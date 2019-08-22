import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sendmail } from '../models/sendmail';
import { SendmailService } from '../services/sendmail.service';
@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {

  model = new Sendmail();
  submitted = false;
  error: {};

  constructor(
    private router: Router,
    private sendmailService: SendmailService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    return this.sendmailService.sendmailForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error,
    );
  }

  gotoHome() {
    this. router.navigate(['/']);
  }
}
