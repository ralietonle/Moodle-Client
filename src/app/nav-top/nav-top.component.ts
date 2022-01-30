import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {
  name: string = "";
  username: string = "";
  isServOn: boolean = this.courseService.isServOn;
  isSyncing: boolean = this.courseService.isSync;
  titleSync: string = "";
  titleServ:string = "";
  constructor(private authService: AuthService, private courseService:CourseService) { }

  ngOnInit(): void {
    this.name = this.authService.name;
    this.username = this.authService.username;
    if(this.isSyncing){
      this.titleSync = "Data are syncing";
    } else {
      this.titleSync = "Start the sync";
    }
    if(this.isServOn){
      this.titleServ = "Stop the backend server";
    } else {
      this.titleServ = "Start the backend server";
    }
  }
  onSignOut() {
    this.authService.signOut();
  }
  onSync(): void{

  }
  onClickServ():void{
    this.courseService.toggleServer();
    this.isServOn = this.courseService.isServOn;
    if (this.courseService.isServOn) {
      this.titleServ = "Stop the backend server";
      this.courseService.turnOnServer();
    } else {
      this.titleServ = "Start the backend server";
      this.courseService.turnOffServer();
    }
  }
  
  onClickSync():void{
    this.courseService.toggleSync();
    this.isSyncing = this.courseService.isSync; //Once the sync is started, the only thing which can stop it is the network default
    if (this.courseService.isSync) {
      this.courseService.turnOnSync();
    }

  }

}
