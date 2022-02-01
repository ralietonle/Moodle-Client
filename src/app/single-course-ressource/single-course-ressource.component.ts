import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-single-course-ressource',
  templateUrl: './single-course-ressource.component.html',
  styleUrls: ['./single-course-ressource.component.scss']
})
export class SingleCourseRessourceComponent implements OnInit {
  
  constructor(private courseService: CourseService, private route: ActivatedRoute) { }
  ressources:any[] = [];
  idCourse: string = "";
  ngOnInit(): void {
    this.idCourse = this.route.parent!.snapshot.params['id']; //id of the course
    console.log(this.idCourse)
    this.ressources = this.courseService.getRessourceCourse(this.idCourse);
  }

}
