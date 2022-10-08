import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {EmailService} from "../email.service";


@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  name = 'Feedback';
  feedbackForm = new FormGroup({
    email: new FormControl('', Validators.email),
    feedback: new FormControl('', Validators.min(10)),
  });
  constructor(private email: EmailService) {
  }


  onSubmit(FormData: any) {
    this.email.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
    this.feedbackForm.reset()
  }


  ngOnInit(): void {
  }

}
