import { Component, OnInit } from '@angular/core';
import { Company } from '../services/company';
import { CompanyService } from '../services/company.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  name = new FormControl('');
  companyid: Number;
  companyname: Text;
  testname: Text;
  testdate: Date;
  submitted = false;
  company: Company;

  constructor(
    private companyservice: CompanyService,
    private location: Location

  ) { }

  newtests(): void {
    this.submitted = false;
    this.company = new Company();
  }

  testCreation() {
    this.submitted = false;
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.company);
    this.companyservice.addCompany(this.company)
        .subscribe();
  }
}
