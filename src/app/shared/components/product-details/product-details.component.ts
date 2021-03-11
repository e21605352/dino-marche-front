import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReviewFormComponent } from '../review-form/review-form.component';

import { IProduct } from '../../interfaces/IProduct';
import { TokenManager } from 'src/app/authentication/tokenManager/TokenManager';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  quantity = 1;
  public token: any;

  constructor(
    private reviewForm: MatDialog,
    private tokenManager: TokenManager
  ) {
    this.token = tokenManager.retrieve();
  }

  doPlus(): void {
    this.quantity++;
  }

  doMinus(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  openReviewForm(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';

    const dialogRef = this.reviewForm.open(ReviewFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'send') {
        console.log('REFRESH');
      }
    });
  }
}
