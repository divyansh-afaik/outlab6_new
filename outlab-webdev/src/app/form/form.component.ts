import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  feedbackForm = this.fb.group({
    name: [''],
    email: [''],
    feedback: [''],
    comments: ['']
  })

  constructor(private fb: FormBuilder){}

  onSubmit() {
    console.log('Name', this.feedbackForm.value.name);
    console.log('Email', this.feedbackForm.value.email);
    console.log('Feedback', this.feedbackForm.value.feedback);
    console.log('Comments', this.feedbackForm.value.comments);
  }
}
