import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses = [{name:"Arduino",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.",id:"ard1"},{name:"Machine Learning",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.",id:"ml23232"},{name:"Network Administration",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.",id:"na23232"},{name:"English",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.",id:"ens23232"}]
  ressources= [{name: "Chapter one", section:[{name:"Section 1",url:"s1.pdf"},{name:"section 2",url:"s2.pdf"}]}, {name: "Chapter Two", section:[{name:"Section 1",url:"s1.pdf"},{name:"section 2",url:"p2.pdf"}]}];
  assignments = [
    {idCourse: "ard1",name:"Report of the first chapter",description:"Make a report for the first chapter of this course",id:"ass1"},
    {idCourse: "ard1",name:"Coffee Machine",description:"Write an arduino code for making coffee. Warning: The coffee must have milk in it!",id:"ass2"}
  ]
  assignmentFile=[];
  isSync = false;
  isServOn = false;
  constructor() { }
  
  getCourses(): any[]{
    return this.courses;
  }
  toggleServer():void{
    this.isServOn = !this.isServOn;
  }
  toggleSync():void{
    this.isSync = !this.isSync;
  }
  turnOnServer():void{

  }
  turnOffServer():void{

  }
  turnOnSync(): void{

  }
  turnOffSync():void {
    
  }
  getOneCourse(id:string){
    //async function
    return this.courses.find(course => course.id == id)
  }
  getRessourceCourse(idCourse: string){ //to get all the ressources of a single course. Id is the id of the course
    return this.ressources;
  }
  getAssignmentCourse(idCourse: string){ //to get all the assignments of a single course. Id is the id of the course
    return this.assignments.filter(ass => ass.idCourse === idCourse);
  }
  getOneAssignementCourse(idCourse:string, idAssignment: string){
    return this.getAssignmentCourse(idCourse).find(ass => ass.id == idAssignment);
  }
  getOneAssignmentFile(idCourse:string, idAssignment:string):any[]{
    return this.assignmentFile
  }
}
