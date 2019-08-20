import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
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
import { HomeComponent } from './home/home.component';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/alert.authenticate';
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
import { FileuploadComponent } from './fileupload/fileupload.component';
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
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
