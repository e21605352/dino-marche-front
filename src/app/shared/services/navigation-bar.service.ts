import { Injectable } from '@angular/core';
import type { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class NavigationBarService {
  private drawer!: MatDrawer;

  setDrawer(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

  toggle(): void {
    this.drawer.toggle();
  }

  opened(): boolean {
    return this.drawer.opened;
  }       
}
