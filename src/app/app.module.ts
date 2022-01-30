import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SigninComponent } from './signin/signin.component';
import { PasswordDirective } from './directives/password.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { CourseService } from './services/course.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavSideComponent } from './nav-side/nav-side.component';

import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewSingleCourseComponent } from './view-single-course/view-single-course.component';
import { SingleCourseAssignmentComponent } from './single-course-assignment/single-course-assignment.component';
import { SingleCourseRessourceComponent } from './single-course-ressource/single-course-ressource.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    PasswordDirective,
    FourOhFourComponent,
    DashboardComponent,
    NavTopComponent,
    NavSideComponent,
    ViewCourseComponent,
    ViewSingleCourseComponent,
    SingleCourseAssignmentComponent,
    SingleCourseRessourceComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuardService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
