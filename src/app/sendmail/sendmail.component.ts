import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sendmail } from '../models/sendmail';
import { SendmailService } from '../services/sendmail.service';
import 'rxjs/add/operator/take';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {
  sendmail: FormGroup;
  model = new Sendmail;
  submitted = false;
  error: {};
  addmessage: any;

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

  get message() {
    return this.addmessage.get('message').value;
  }

  gotoHome() {
    this. router.navigate(['/']);
  }
}
