import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FileUploadModule } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { AlertComponent } from './directives/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/alert.authenticate';
import { ApiService } from './assigners/api.service';
import { ApiMockService } from './assigners/api-mock.service';
import { AsslistDataService } from './assigners/asslist-data.service';
import { UserService } from './services/user.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BlogformComponent } from './blogform/blogform.component';
import { ManageBlogsComponent } from './manageblogs/manageblogs.component';
import { ManagecategoriesComponent } from './managecategories/managecategories.component';
import { ManagepagesComponent } from './managepages/managepages.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { AlertModule } from 'ngx-bootstrap';
import { ProductComponent } from './product/product.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './error-pages/notfound/notfound.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { MyInterceptor } from './my-interceptor';
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
import { Mock } from 'protractor/built/driverProviders';

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
    TruefalseComponent,
    AlertComponent,
    HomeComponent,
    AdminComponent,
    AdmindashboardComponent,
    BlogformComponent,
    ManageBlogsComponent,
    ManagecategoriesComponent,
    ManagepagesComponent,
    SendmailComponent,
    ProductComponent,
    InternalServerComponent,
    NotfoundComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    PriceComponent,
    MCQComponent,
    AnswersComponent,
    UserregsComponent,
    AssignersComponent,
    UpdatetestsComponent,
    DeletetestsComponent,
    AsslistComponent,
    AsslistFooterComponent,
    AsslistHeaderComponent,
    AsslistItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    AlertModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'tests', component: TestsComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: '404', component: NotfoundComponent },
      { path: '500', component: InternalServerComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '', redirectTo: '/Tests', pathMatch: 'full'},
      { path: '', redirectTo: '/Companies', pathMatch: 'full' },
      { path: '**', redirectTo: '/404', pathMatch: 'full' }
    ])
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    ApiService,
    ApiMockService,
    AsslistDataService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    fakeBackendProvider,
    MyInterceptor
  ],

  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
