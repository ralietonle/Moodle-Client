import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AuthGuardService} from '../services/auth-guard.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm : FormGroup = this.fb.group({ });
  submitted = false;
  signinMessage: string = '';
  authMessage: string = '';
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router:Router,
              private authGuardService: AuthGuardService) { 

  }
  get email(){
    return this.signinForm.get('email');
  }
  get password(){
    return this.signinForm.get('password');
  }
  onSubmit(): void {
    var phone = this.signinForm.get('email')!.value;
    var password = this.signinForm.get('password')!.value;
    this.authService.signInUser(phone,password).then(
      
      () => {
        console.log('Hello');
        this.router.navigate(['/core']);
      },
      (error) => {
        this.signinMessage = "message d'erreur venant du backend ";
        this.router.navigate(['/auth/signup']);
      }
    );
    
  }
  initForm(){
    this.signinForm = this.fb.group({
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    this.authMessage = this.authGuardService.authMessage;
    this.initForm();
  }

}
