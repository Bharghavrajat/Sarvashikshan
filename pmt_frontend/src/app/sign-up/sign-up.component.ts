import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface CountryCode {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  signUpForm: FormGroup;
  hide: boolean = true;

  countryCode: CountryCode[] = [
    {value: '+86', viewValue: 'India (+91)'},
    {value: '+1"', viewValue: 'USA (+1)   '},
    {value: '+44', viewValue: 'UK (+44)   '},
    {value: '+81', viewValue: 'Japan (+81)'},
    {value: '+86', viewValue: 'China (+86)'},
  ];
  
  constructor() {}

  ngOnInit(): void {
      this.signUpForm = new FormGroup(
        {
          email: new FormControl('',[Validators.required,Validators.email]),
          password: new FormControl('',[Validators.required,Validators.minLength(6)]),
          lastName: new FormControl('',[Validators.required]),
          firstName: new FormControl('',[Validators.required]),
          phoneNumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)])
        }
      )

      
}

onSignUp() {

}
}