import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseResumeComponent } from './purchase-resume.component';

describe('PurchaseResumeComponent', () => {
  let component: PurchaseResumeComponent;
  let fixture: ComponentFixture<PurchaseResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
