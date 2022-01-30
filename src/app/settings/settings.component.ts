import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  name: string = "";
  username: string = "";
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.name = this.authService.name;
    this.username = this.authService.username;
  }
  onSubmit(form: NgForm) {
    const name = form.value['port'];
    const sync = form.value['sync'];
    console.log(name)
    console.log(sync)
  }

}
