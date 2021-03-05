import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {
  reviewForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ReviewFormComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initFormBuilder();
  }

  private initFormBuilder(): void {
    this.reviewForm = this.formBuilder.group({
      rate: [1],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  sendReview(): void {
    if (this.reviewForm.valid) {
      this.dialogRef.close({ event: 'send' });
    }
  }

  closeDialog(): void {
    this.dialogRef.close({ event: 'cancel' });
  }
}
