import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sort } from '../../types/Sort';

@Component({
  selector: 'app-product-list-sort',
  templateUrl: './product-list-sort.component.html',
  styleUrls: ['./product-list-sort.component.scss']
})
export class ProductListSortComponent {
  @Input() productsNumber!: number;
  @Output() sort: EventEmitter<Sort> = new EventEmitter();

  sortChanged(selectedSort: string): void {
    this.sort.emit(selectedSort as Sort);
  }
}
