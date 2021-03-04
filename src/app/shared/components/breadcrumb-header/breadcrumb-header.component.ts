import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-header',
  templateUrl: './breadcrumb-header.component.html',
  styleUrls: ['./breadcrumb-header.component.scss']
})
export class BreadcrumbHeaderComponent {
  @Input() title!: string;
  @Input() background!: string;

  getBackgroundImage(): string {
    return `url('${this.background}');`;
  }
}
