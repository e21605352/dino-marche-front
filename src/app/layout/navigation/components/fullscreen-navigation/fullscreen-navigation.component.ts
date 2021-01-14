import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

import { HandsetLayoutService } from 'src/app/shared/services/handset-layout.service';

@Component({
  selector: 'app-fullscreen-navigation',
  templateUrl: './fullscreen-navigation.component.html',
  styleUrls: ['./fullscreen-navigation.component.scss']
})
export class FullscreenNavigationComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  isHandset$: Observable<boolean> = this.handsetLayoutService.isHandset$;

  items = [
    { link: '', title: 'Dinosaures' },
    { link: '', title: 'Nourriture' },
    { link: '', title: 'Goodies' },
    { link: '', title: 'Contact' },
    { link: '', title: 'A propos' },
    { link: '', title: 'FAQ' }
  ];

  constructor(private handsetLayoutService: HandsetLayoutService) {}
}
