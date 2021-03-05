import { Component, Input, OnInit } from '@angular/core';
import { IReview as Review } from '../../interfaces/IReview';

@Component({
  selector: 'app-review-list-item',
  templateUrl: './review-list-item.component.html',
  styleUrls: ['./review-list-item.component.scss']
})
export class ReviewListItemComponent {
  @Input() review!: Review;
}
