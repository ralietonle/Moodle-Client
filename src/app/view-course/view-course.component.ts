import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {
  courses: any[] = []
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.courses;
  }

}
