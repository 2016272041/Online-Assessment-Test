import { Component, OnInit } from '@angular/core';
import { Sendmail } from '../models/sendmail';
import { FormBuilder } from '@angular/forms';
import { SendmailService } from '../services/sendmail.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent {
  id: number;
  form: any;
  formbuilder: FormBuilder;
  sendmail = new Sendmail();
  submitted = false;

  constructor(
    private sendmailService: SendmailService,
    private location: Location
  ) { }

  newsendMail(): void {
    this.submitted = true;
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
