import { Component, OnInit } from '@angular/core';
import { UserregsService } from '../services/userregs.service';
import { Userregs } from '../models/userregs';
import { Location } from '@angular/common';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userregs: Userregs[];
  location: Location;
  constructor(private userregsService: UserregsService) {}

  ngOnInit(): void {
    this.getUserregs();
    this.getUserid();
    this.getAlluserregs();
  }

  getUserregs() {
    return this.userregsService.getuserregs()
                .subscribe(
                  userregs => {
                    console.log(userregs);
                    this.userregs = userregs;
                  });
  }

  getUserid() {
    return this.userregsService.getuserregs()
               .subscribe(
                 userregs => {
                  console.log(userregs);
                  this.userregs = userregs;
                 });
  }

  getAlluserregs() {
    return this.userregsService.getuserregs()
               .subscribe(
                 userregs => {
                   console.log(userregs);
                   this.userregs = userregs;
                 });
  }
}
