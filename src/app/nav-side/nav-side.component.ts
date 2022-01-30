import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.scss']
})
export class NavSideComponent implements OnInit {
  courses: any[] = this.courseService.getCourses();
  constructor(private courseService: CourseService) { }
  
  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }


}
