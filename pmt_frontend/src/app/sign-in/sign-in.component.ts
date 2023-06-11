import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
// import { ReCaptchaV3Service } from 'ng-recaptcha';


@Component({ 
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'] 
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  hide: boolean = false;
  // // captchaResponse: string;


  user = {
    email: "", 
    password: ""
  }

  constructor( 
    private router: Router,
    private _snackBar: MatSnackBar,
    private http: HttpClient
    // private recaptchaV3Service: ReCaptchaV3Service
  ) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup(
      {
        email: new FormControl(''),
        password: new FormControl('')
      }
    );
  }

  onSignIn() {
    const loginData = {
      emailId: this.user.email,
      password: this.user.password
    };

    this.http.post('http://localhost:8080/api/v1/login', loginData, { responseType: 'text' }).subscribe(
      (response:any) => {
        // Login successful, handle the response
        this._snackBar.open(response, 'Close');

        if(response === "Login successful"){
          this.router.navigate(['/select-project']);
        }
        
      },
      (error) => {
        // Login failed, handle the error
        console.error(error);
        this._snackBar.open(error.error, 'Close');
      }
    );
  }
}
