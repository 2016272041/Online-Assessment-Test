import { Component, OnInit } from '@angular/core';
import { Sendmail } from '../models/sendmail';
import { SendmailService } from '../services/sendmail.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent {
  id: number;
  sendmail = new Sendmail();
  submitted = false;

  constructor(
    private sendmailService: SendmailService,
    private location: Location
  ) { }

  newsendMail(): void {
    this.submitted = false;
    this.sendmail = new Sendmail();
  }

  sendMail() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.sendMail);
    this.sendmailService.sendMail(this.sendmail)
    .subscribe();
  }
}
