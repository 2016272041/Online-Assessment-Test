import { Component, OnInit } from '@angular/core';
import { Companies } from '../services/companies';
import { CompaniesService } from '../services/companies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
  companies = new Companies();
  submitted = false;

  constructor(
    private companiesservice: CompaniesService,
    private location: Location
  ) { }

  newCompanies(): void {
    this.submitted = false;
    this.companies = new Companies();
  }

  addCompanies() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.companies);
    this.companiesservice.addCompanies(this.companies)
        .subscribe();
  }
}
