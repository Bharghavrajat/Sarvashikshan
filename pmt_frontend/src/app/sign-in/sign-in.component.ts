import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  hide: boolean = false;
  
  user={
    email:"",
    password:""
  }

  constructor(private router:Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
      this.signInForm = new FormGroup(
        {
          email: new FormControl('',[Validators.required,Validators.email]),
          password: new FormControl('',[Validators.required,Validators.minLength(6)])
        }
      )
  }

  message:string = "Registration successful!";
  action:string = "close";

  onSignIn() {
    if(this.user.email === "admin@gmail.com" && this.user.password === "12345678") {

        this._snackBar.open(this.message,this.action);
      
        this.router.navigate(['/select-project']);
    }
  }

}