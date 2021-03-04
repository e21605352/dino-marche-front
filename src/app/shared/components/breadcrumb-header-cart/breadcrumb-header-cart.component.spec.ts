import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbHeaderCartComponent } from './breadcrumb-header-cart.component';

describe('BreadcrumbHeaderCartComponent', () => {
  let component: BreadcrumbHeaderCartComponent;
  let fixture: ComponentFixture<BreadcrumbHeaderCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbHeaderCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbHeaderCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
