import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hasError = false;
  errorMessage = '';
  constructor(public loginService:LoginService) {
    this.loginService.getBackGroundImage().subscribe((response: any) => {
      console.log('response', response);
    },(error:any)=>{
      debugger;
      console.error(error.message);
    })
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailFormControl : new FormControl('', [Validators.required, Validators.email]),
      passwordFormControl : new FormControl('', [Validators.required])
    })
  }
  /*custom code for login functionality*/
  logIn(): any{
    debugger;
      if(this.loginForm.value.emailFormControl == "" || this.loginForm.value.passwordFormControl == ""){
        this.hasError = true;
        this.errorMessage = 'Please, type your login and password in form above';
      }
      if(this.loginForm.value.passwordFormControl !== "" && this.loginForm.value.passwordFormControl !== ""){
        this.loginService.login(this.loginForm.value.emailFormControl,this.loginForm.value.passwordFormControl).subscribe((response: any) => {
          debugger;
          console.log(response);
        },(error:any)=>{
          debugger;
          console.error(error.message);
        })
      }
  }
}
