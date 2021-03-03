import {
  Component,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

import { INavigationItem } from '../interfaces/INavigation';
import { FullscreenNavigationComponent } from '../components/fullscreen-navigation/fullscreen-navigation.component';
import { SideNavigationComponent } from '../components/side-navigation/side-navigation.component';

import { HandsetLayoutService } from 'src/app/shared/services/handset-layout.service';
import { NavigationBarService } from 'src/app/shared/services/navigation-bar.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild(FullscreenNavigationComponent)
  fullScreenNavigation!: FullscreenNavigationComponent;
  @ViewChild(SideNavigationComponent)
  sideNavigation!: SideNavigationComponent;

  isHandset$: Observable<boolean> = this.handsetLayoutService.isHandset$;
  items: INavigationItem[] = [
    { route: '/accueil', title: 'Accueil' },
    { route: '/collections/dinosaures', title: 'Dinosaures' },
    { route: '/collections/nourriture', title: 'Nourriture' },
    { route: '/collections/goodies', title: 'Goodies' },
    { route: '/collections/contact', title: 'Contact' },
  ];

  constructor(
    private handsetLayoutService: HandsetLayoutService,
    private navigationBarService: NavigationBarService,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.navigationBarService.setDrawer(this.drawer);
    this.fullScreenNavigation.setItems(this.items);
    this.sideNavigation.setItems(this.items);

    this.isHandset$.subscribe((handset) => {
      if (!handset && this.drawer.opened) {
        this.drawer.toggle();
      }
    });

    // Call manually change detection
    this.cd.detectChanges();
  }
}
