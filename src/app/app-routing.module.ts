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
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BlogformComponent } from './blogform/blogform.component';
import { ManageBlogsComponent } from './manageblogs/manageblogs.component';
import { ManagecategoriesComponent } from './managecategories/managecategories.component';
import { ManagepagesComponent } from './managepages/managepages.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { ProductComponent } from './product/product.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { PriceComponent } from './price/price.component';
import { MCQComponent } from './mcq/mcq.component';
import { AnswersComponent } from './answers/answers.component';
import { UserregsComponent } from './userregs/userregs.component';
import { AssignersComponent } from './assigners/assigners.component';
import { UpdatetestsComponent } from './admin/updatetests/updatetests.component';
import { DeletetestsComponent } from './admin/deletetests/deletetests.component';
import { AsslistComponent } from './assigners/asslist/asslist.component';
import { AsslistFooterComponent } from './assigners/asslist-footer/asslist-footer.component';
import { AsslistHeaderComponent } from './assigners/asslist-header/asslist-header.component';
import { AsslistItemComponent } from './assigners/asslist-item/asslist-item.component';
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
    path: 'admin',
    component: AdminComponent,
    children: [
        {
            path: 'assigners',
            component: AssignersComponent
        },
        {
            path: 'updatetests',
            component: UpdatetestsComponent
        },
        {
            path: 'deletetests',
            component: DeletetestsComponent
        }
    ]
},

{
    path: 'admindashboard',
    component: AdmindashboardComponent
},

{
    path: 'blogs',
    component: ManageBlogsComponent
},

{
    path: 'blogs/create',
    component: BlogformComponent
},

{
    path: 'blogs/create/:id',
    component: BlogformComponent
},

{
    path: 'categerious',
    component: ManagecategoriesComponent
},

{
    path: 'pages',
    component: ManagepagesComponent
},

{
    path: 'sendmail',
    component: SendmailComponent
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
    path: 'product',
    component: ProductComponent
},

{
    path: 'formupload',
    component: FormUploadComponent
},

{
    path: 'listupload',
    component: ListUploadComponent
},

{
    path: 'detailsupload',
    component: DetailsUploadComponent
},

{
    path: 'mcq',
    component: MCQComponent
},

{
    path: 'price',
    component: PriceComponent
},

{
    path: 'userregs',
    component: UserregsComponent
},

{
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
},

{
    path: '**',
    redirectTo: ''
},

{
    path: 'answers',
    component: AnswersComponent
},

{
    path: 'asslist',
    component: AsslistComponent
},

{
    path: 'asslistfooter',
    component: AsslistFooterComponent
},

{
    path: 'asslistheader',
    component: AsslistHeaderComponent
},

{
    path: 'asslistitem',
    component: AsslistItemComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
