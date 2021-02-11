import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { INavigationItem } from '../../interfaces/INavigation';
import { HandsetLayoutService } from 'src/app/shared/services/handset-layout.service';

@Component({
  selector: 'app-fullscreen-navigation',
  templateUrl: './fullscreen-navigation.component.html',
  styleUrls: ['./fullscreen-navigation.component.scss']
})
export class FullscreenNavigationComponent {
  isHandset$: Observable<boolean> = this.handsetLayoutService.isHandset$;
  items!: INavigationItem[];

  constructor(private handsetLayoutService: HandsetLayoutService) {}

  setItems(items: INavigationItem[]): void {
    this.items = items;
  }
}
