import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from 'src/app/business.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private bs: BusinessService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.angForm = this.fb.group({
      person_name: ['', Validators.required],
      business_name: ['',Validators.required],
      business_gst_number: ['',Validators.required]
    })
  }

  addBusiness(person_name, busines_name, business_gst_number) {
    console.log(person_name, busines_name, business_gst_number);
    this.bs.addBusiness(person_name, busines_name, business_gst_number);
  }

}
