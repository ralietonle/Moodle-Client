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
  name:string | undefined= "";
  description:string = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim."
  
  constructor(private route: ActivatedRoute, private courseService:CourseService) { }

  ngOnInit(): void {
    console.log(this.name);
    this.id = this.route.snapshot.params['id'];
    this.courseService.getOneCourse(this.id);
  }
  ngOnDestroy(): void {
    this.name = '';
    this.id = '';
  }
}
