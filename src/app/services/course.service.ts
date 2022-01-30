import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses = [{name:"Arduino",id:"ard1"},{name:"Machine Learning",id:"ml23232"},{name:"Network Administration",id:"na23232"},{name:"English",id:"ens23232"}]
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
  }
}
