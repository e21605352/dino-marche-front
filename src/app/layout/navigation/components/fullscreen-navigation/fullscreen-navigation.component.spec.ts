import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenNavigationComponent } from './fullscreen-navigation.component';

describe('FullscreenNavigationComponent', () => {
  let component: FullscreenNavigationComponent;
  let fixture: ComponentFixture<FullscreenNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullscreenNavigationComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
