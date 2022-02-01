import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewCourseComponent } from './view-course/view-course.component';


import { ViewSingleCourseComponent } from './view-single-course/view-single-course.component';
import { SingleCourseAssignmentComponent } from './single-course-assignment/single-course-assignment.component';
import { SingleCourseRessourceComponent } from './single-course-ressource/single-course-ressource.component';
import { SettingsComponent } from './settings/settings.component';
import { SingleAssignmentComponent } from './single-assignment/single-assignment.component';
import { ViewSingleCourseAssignmentComponent } from './view-single-course-assignment/view-single-course-assignment.component';

const routes: Routes = [
  { path: '' ,component:SigninComponent },
  { path: 'signin',component: SigninComponent},
  { path: 'course', component: DashboardComponent , children: [
    { path: 'options', component: SettingsComponent},
    {path: '', component:ViewCourseComponent },
    {path:':id', component: ViewSingleCourseComponent,
            children:[
              {path:'ressources', component:SingleCourseRessourceComponent},
              {path: 'assignments', component:ViewSingleCourseAssignmentComponent, children:[
                {path: '',component: SingleCourseAssignmentComponent},
                {path: ':id',component:SingleAssignmentComponent }
              ]}
            ]},
    
  ]},
  
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
