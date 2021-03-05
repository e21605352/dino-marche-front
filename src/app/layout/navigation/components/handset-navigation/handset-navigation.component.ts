import { Component } from '@angular/core';
import { NavigationBarService } from 'src/app/shared/services/navigation-bar.service';
import { Router } from '@angular/router';
import { TokenManager } from 'src/app/authentication/tokenManager/TokenManager';

@Component({
  selector: 'app-handset-navigation',
  templateUrl: './handset-navigation.component.html',
  styleUrls: ['./handset-navigation.component.scss']
})
export class HandsetNavigationComponent {

  public token: any;
  constructor(private navigationBarService: NavigationBarService, private router: Router, private tokenManager: TokenManager) {
    this.token = tokenManager.retrieve();
  }

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
