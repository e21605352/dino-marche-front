import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

import { HandsetLayoutService } from 'src/app/shared/services/handset-layout.service';
import { NavigationBarService } from 'src/app/shared/services/navigation-bar.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  isHandset$: Observable<boolean> = this.handsetLayoutService.isHandset$;

  constructor(
    private handsetLayoutService: HandsetLayoutService,
    private navigationBarService: NavigationBarService
  ) {}

  ngAfterViewInit(): void {
    this.navigationBarService.setDrawer(this.drawer);
    this.isHandset$.subscribe((handset) => {
      if (!handset && this.drawer.opened) {
        this.drawer.toggle();
      }
    });
  }
}
