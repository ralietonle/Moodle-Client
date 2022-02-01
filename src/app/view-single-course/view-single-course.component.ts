import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-view-single-course',
  templateUrl: './view-single-course.component.html',
  styleUrls: ['./view-single-course.component.scss']
})
export class ViewSingleCourseComponent implements OnInit, OnDestroy {
  id:string='';
  assignment: any = {}
  
  constructor(private route: ActivatedRoute, private courseService:CourseService) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.assignment = this.courseService.getOneCourse(this.id);
  }
  ngOnDestroy(): void {
    console.log('a')
    this.assignment = {};
  }
}
