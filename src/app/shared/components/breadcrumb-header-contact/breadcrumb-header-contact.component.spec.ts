import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbHeaderContactComponent } from './breadcrumb-header-contact.component';

describe('BreadcrumbHeaderContactComponent', () => {
  let component: BreadcrumbHeaderContactComponent;
  let fixture: ComponentFixture<BreadcrumbHeaderContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbHeaderContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbHeaderContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
