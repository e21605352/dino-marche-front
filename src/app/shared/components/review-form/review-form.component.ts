import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BarRating } from 'ngx-bar-rating';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {
  reviewForm!: FormGroup;
  rate = 1;

  constructor(
    @Inject(MAT_DIALOG_DATA) public productId: string,
    public dialogRef: MatDialogRef<ReviewFormComponent>,
    private formBuilder: FormBuilder,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.initFormBuilder();
  }

  private initFormBuilder(): void {
    this.reviewForm = this.formBuilder.group({
      rating: [3],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  sendReview(): void {
    if (this.reviewForm.valid) {
      this.reviewService
        .postReview(this.productId, this.reviewForm.value)
        .subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
      this.dialogRef.close({ event: 'sent' });
    }
  }

  closeDialog(): void {
    this.dialogRef.close({ event: 'cancel' });
  }
}
