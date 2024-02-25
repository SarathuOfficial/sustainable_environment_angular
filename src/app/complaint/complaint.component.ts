import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComplaintvalidationService } from '../services/complaintvalidation.service';
@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit{
 
  water: boolean = false;
  sanitation: boolean = false;
  drainage: boolean = false;
  garbage: boolean = false;

  complaintForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private complaintvalidator: ComplaintvalidationService ) {
    
  }
  ngOnInit() {
    this.complaintForm = this.formBuilder.group({
      email: ['', [Validators.required, ComplaintvalidationService.emailValidator]],
      mobile: ['', [Validators.required, ComplaintvalidationService.phoneValidator]],
      name: ['', [Validators.required]],
      city: ['',[Validators.required]],
      district: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      systems: ['',[Validators.required]],
      photo: ['',[Validators.required]],
      describe: ['',[Validators.required]]

    });  }
  onFileSelected(event: any){

  }
  get signupFormControl(){
    return this.complaintForm.controls;
  }
}