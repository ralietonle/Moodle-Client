import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-single-course-assignment',
  templateUrl: './single-course-assignment.component.html',
  styleUrls: ['./single-course-assignment.component.scss']
})
export class SingleCourseAssignmentComponent implements OnInit {

  constructor(private courseService: CourseService,  private route: ActivatedRoute) { }
  assignments:any[] = [];
  idCourse: string = "";
  ngOnInit(): void {
    this.idCourse = this.route.parent!.parent!.snapshot.params['id']; //id of the course
    console.log(this.idCourse)
    this.assignments = this.courseService.getAssignmentCourse(this.idCourse)
    
  }

}
