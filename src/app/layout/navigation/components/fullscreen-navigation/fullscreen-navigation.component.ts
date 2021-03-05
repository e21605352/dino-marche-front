import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HandsetLayoutService } from 'src/app/shared/services/handset-layout.service';
import { INavigationItem } from '../../interfaces/INavigation';
import { TokenManager } from 'src/app/authentication/tokenManager/TokenManager';

@Component({
  selector: 'app-fullscreen-navigation',
  templateUrl: './fullscreen-navigation.component.html',
  styleUrls: ['./fullscreen-navigation.component.scss']
})
export class FullscreenNavigationComponent {
  isHandset$: Observable<boolean> = this.handsetLayoutService.isHandset$;
  items!: INavigationItem[];

  public token: any;
  public tokenInfo: any;

  constructor(private handsetLayoutService: HandsetLayoutService, private router: Router, private tokenManager: TokenManager) {
    this.token = tokenManager.retrieve();
    if (this.token != null) {
      this.tokenInfo = tokenManager.getDecodedAccessToken();
    }
  }

  setItems(items: INavigationItem[]): void {
    this.items = items;
  }

  onSubmitLogin() {
    this.router.navigateByUrl('/login');
  }

  onSubmitCart() {
    this.router.navigateByUrl('/collections/shopping-cart');
  }
}
