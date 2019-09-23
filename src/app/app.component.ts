import { Component } from '@angular/core';
import { ErrorHandlerService } from './services/error-handler.service';
import { QuizComponent } from './quiz/quiz.component';
import { TestsComponent } from './tests/tests.component';
import { QuestionsComponent } from './questions/questions.component';
import { AddedquesComponent } from './addedques/addedques.component';
import { CompaniesComponent } from './companies/companies.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
