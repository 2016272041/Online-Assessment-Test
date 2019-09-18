import { Component, OnInit } from '@angular/core';
import { UserregService } from '../services/userreg.service';
import { Userreg } from '../models/userreg';
import { Location } from '@angular/common';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {

  userreg = new Userreg();
  submitted = false;

  constructor(
    private userregservice: UserregService,
    private location: Location
    ) { }

  newUserreg(): void {
    this.submitted = false;
    this.userreg = new Userreg();
  }

  addUserreg() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.submitted = true;
    this.save();
  }

 private save(): void {
    console.log(this.userreg);
    this.userregservice.addUserreg(this.userreg)
        .subscribe();
  }

}
