import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnquiryService } from '../../_core/services/enquiry.service';


// import { Contact }    from '../../../../../angular-forms/src/app/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(public fb: FormBuilder, private enquiryService: EnquiryService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      message: ['']
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.enquiryService.contact(this.contactForm.value)
        .subscribe((response) => {
          console.log(response);
        }, (err) => {
          console.error('error');
        });
    } else {
      alert('please fill in the form');
    }
  }

  loadContactData() {

  }


  ngOnInit() {
  }


}
