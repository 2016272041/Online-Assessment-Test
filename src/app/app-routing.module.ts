import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestsComponent } from './tests/tests.component';
import { TestlistComponent } from './testlist/testlist.component';
import { QuizComponent } from './quiz/quiz.component';
import { HelperService } from './services/helper.service';
import { QuizService } from './services/quiz.service';
import { CompaniesComponent } from './companies/companies.component';
import { AddedcompanyComponent } from './addedcompany/addedcompany.component';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddedquesComponent } from './addedques/addedques.component';
import { AddedquesdetailsComponent } from './addedquesdetails/addedquesdetails.component';
import { TruefalseComponent } from './truefalse/truefalse.component';
import { AlertComponent } from './directives/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{
  path: 'tests',
  component: TestsComponent
},

{
    path: 'quiz',
    component: QuizComponent
},

{
    path: 'companies',
    component: CompaniesComponent
},

{
    path: 'HelperService',
    component: HelperService
},

{
    path: 'questions',
    component: QuestionsComponent
},

{
    path: 'QuizService',
    component: QuizService
},

{
    path: 'login',
    component: LoginComponent
},

{
    path: 'signup',
    component: SignupComponent
},

{
    path: 'addedques',
    component: AddedquesComponent
},

{
    path: 'addedquesdetails',
    component: AddedquesdetailsComponent
},

{
    path: 'addedcompany',
    component: AddedcompanyComponent
},

{
    path: 'testlist',
    component: TestlistComponent
},

{
    path: 'truefalse',
    component: TruefalseComponent
},

{
    path: 'directives',
    component: AlertComponent
},

{
    path: 'authguard',
    component: AuthGuard
},

{
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
},

{
    path: '**',
    redirectTo: ''
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
