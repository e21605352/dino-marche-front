import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsetNavigationComponent } from './handset-navigation.component';

describe('HandsetNavComponent', () => {
  let component: HandsetNavigationComponent;
  let fixture: ComponentFixture<HandsetNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandsetNavigationComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandsetNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
