import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ComplaintvalidationService {

  constructor() { }
  static getValidatorErrorMessage(_validatorName: string, validatorValue?: any) {
    const config = {
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      invalidPhone: 'Please enter a valid phone number',
      minlength: `Minimum length ${validatorValue.requiredLength}`
    };

    return;
  }
  static emailValidator(control: AbstractControl): {[key: string]: any} | null {
    // Email regex pattern
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

    // Check if email is valid
    const valid = emailPattern.test(control.value);

    return valid ? null : { invalidEmail: true };
  }
  
  static phoneValidator(control: AbstractControl): {[key: string]: any} | null {
    // Phone number regex pattern
    const phonePattern = /^\d{10}$/;

    // Check if phone number is valid
    const valid = phonePattern.test(control.value);

    return valid ? null : { invalidPhone: true };
  }
}
