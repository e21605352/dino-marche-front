import { Component } from '@angular/core';
import { NavigationBarService } from 'src/app/shared/services/navigation-bar.service';

@Component({
  selector: 'app-handset-navigation',
  templateUrl: './handset-navigation.component.html',
  styleUrls: ['./handset-navigation.component.scss']
})
export class HandsetNavigationComponent {
  constructor(private navigationBarService: NavigationBarService) {}

  toggleDrawer(): void {
    this.navigationBarService.toggle();
  }
}
