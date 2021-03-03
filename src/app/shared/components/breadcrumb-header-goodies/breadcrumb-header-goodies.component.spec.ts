import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbHeaderGoodiesComponent } from './breadcrumb-header-goodies.component';

describe('BreadcrumbHeaderGoodiesComponent', () => {
  let component: BreadcrumbHeaderGoodiesComponent;
  let fixture: ComponentFixture<BreadcrumbHeaderGoodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbHeaderGoodiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbHeaderGoodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
