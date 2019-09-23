import { Component, OnInit } from '@angular/core';
import { UserregsService } from '../services/userregs.service';
import { Userregs } from '../models/userregs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-userregs',
  templateUrl: './userregs.component.html',
  styleUrls: ['./userregs.component.css']
})
export class UserregsComponent {

  userregs = new Userregs();
  submitted = false;

  constructor(
    private userregsservice: UserregsService,
    private location: Location
    ) { }

  newUserregs(): void {
    this.submitted = false;
    this.userregs = new Userregs();
  }

  addUserregs() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.submitted = true;
    this.save();
  }

 private save(): void {
    console.log(this.userregs);
    this.userregsservice.addUserregs(this.userregs)
        .subscribe();
  }
}
