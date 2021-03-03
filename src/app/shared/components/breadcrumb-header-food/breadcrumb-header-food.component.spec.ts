import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbHeaderFoodComponent } from './breadcrumb-header-food.component';

describe('BreadcrumbHeaderFoodComponent', () => {
  let component: BreadcrumbHeaderFoodComponent;
  let fixture: ComponentFixture<BreadcrumbHeaderFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbHeaderFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbHeaderFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
