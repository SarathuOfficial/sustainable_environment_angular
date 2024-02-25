import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupForm: FormGroup = new FormGroup({});
  submitted = false;
  
  constructor(private fb: FormBuilder,
    private customValidator: CustomvalidationService) {
     
    }
  
  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      district: ['', Validators.required],
      city: ['', Validators.required],
      phoneNo: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', Validators.required],
    },
    {
      validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
    });  }
  get signupFormControl(){
    return this.signupForm.controls;
  }
  hide = true;
  togglePassword(){
    this.hide=!this.hide;
  }
  onSubmit(): void {
   
    // You can perform your registration logic here
  }
  }