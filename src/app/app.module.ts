import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { TestsComponent } from './tests/tests.component';
import { CompaniesComponent } from './companies/companies.component';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddedquesComponent } from './addedques/addedques.component';
import { AddedquesdetailsComponent } from './addedquesdetails/addedquesdetails.component';
import { AddedcompanyComponent } from './addedcompany/addedcompany.component';
import { TestlistComponent } from './testlist/testlist.component';
import { TruefalseComponent } from './truefalse/truefalse.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    TestsComponent,
    CompaniesComponent,
    QuestionsComponent,
    LoginComponent,
    SignupComponent,
    AddedquesComponent,
    AddedquesdetailsComponent,
    AddedcompanyComponent,
    TestlistComponent,
    TruefalseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
