import { Component } from '@angular/core';
import { NavigationBarService } from 'src/app/shared/services/navigation-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-handset-navigation',
  templateUrl: './handset-navigation.component.html',
  styleUrls: ['./handset-navigation.component.scss']
})
export class HandsetNavigationComponent {
  constructor(private navigationBarService: NavigationBarService, private router: Router) { }

  toggleDrawer(): void {
    this.navigationBarService.toggle();
  }

  onSubmitLogin() {
    this.router.navigateByUrl('/login');
  }

  onSubmitCart() {
    this.router.navigateByUrl('/collections/shopping-cart');
  }
}
