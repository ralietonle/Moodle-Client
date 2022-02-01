import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-single-assignment',
  templateUrl: './single-assignment.component.html',
  styleUrls: ['./single-assignment.component.scss']
})
export class SingleAssignmentComponent implements OnInit {
  description:string = "This is an assignment";
  constructor(private courseService:CourseService,  private route: ActivatedRoute) { }
  idCourse: string = "";
  idAssignment: string = "";
  assignment: any = {};
  assignmentFile:any[] = []
  isAssSubmitted: boolean = false;

  onSubmit(form: NgForm):void{
    const file = form.value['assFile'];
  }

  ngOnInit(): void {
    
    this.idAssignment = this.route.snapshot.params['id']; //id of the assignment in the course idCourse
    this.idCourse = this.route.parent!.parent!.snapshot.params['id']; //id of the course
    this.assignment = this.courseService.getOneAssignementCourse(this.idCourse,this.idAssignment) //Name and description of the assignment
    this.assignmentFile = this.courseService.getOneAssignmentFile(this.idCourse, this.idAssignment); //files submitted yet
    if(this.assignmentFile.length == 0){
      this.isAssSubmitted = false;
    } else{
      this.isAssSubmitted = true;
    }
    
    
  }

}
