import { Component, OnInit } from '@angular/core';
import { Companies } from '../services/companies';
import { CompaniesService } from '../services/companies.service';


@Component({
  selector: 'app-addedcompany',
  templateUrl: './addedcompany.component.html',
  styleUrls: ['./addedcompany.component.css']
})

export class AddedcompanyComponent  implements OnInit {

  companies: Companies[];

  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.getCompanies();
 }

  getCompanies() {
    return this.companiesService.getcompanies()
               .subscribe(
                 companies => {
                  console.log(companies);
                  this.companies = companies;
                 }
                );
 }
}
