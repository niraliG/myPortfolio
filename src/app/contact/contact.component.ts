import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { MustMatch } from '../_helpers/must-match.validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  contactForm : FormGroup;
   submitted = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
      this.contactForm = this.formBuilder.group({
        firstName : ['', Validators.required],
        lastName : ['', Validators.required],
        email : ['', Validators.required],
        message : ['', Validators.required]
      });
  }

  get f() {return this.contactForm.controls; }

  onSubmit(){
    this.submitted = true;
  
    if(this.contactForm.invalid)
    return;
  
    alert('SUCESS\n' + JSON.stringify(this.contactForm.value, null, 4));
  }

  onReset(){
    this.submitted =false;
    this.contactForm.reset();
  }
}


