import { Component, EventEmitter, Output } from '@angular/core';
import { INavigationItem } from '../../interfaces/INavigation';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {
  @Output() close: EventEmitter<void> = new EventEmitter();
  items!: INavigationItem[];

  closeNav(): void {
    this.close.emit();
  }

  setItems(items: INavigationItem[]): void {
    this.items = items;
  }
}
