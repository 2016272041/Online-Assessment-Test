import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminComponent } from '../admin/admin.component';
import { AssignersComponent } from '../assigners/assigners.component';
import { UpdatetestsComponent } from '../admin/updatetests/updatetests.component';
import { DeletetestsComponent } from '../admin/deletetests/deletetests.component';

@NgModule({
    declarations: [
        AdminComponent,
        AssignersComponent,
        UpdatetestsComponent,
        DeletetestsComponent
    ],

    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        HttpClientModule
    ],

    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AdminModule { }
