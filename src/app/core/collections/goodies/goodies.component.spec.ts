import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodiesComponent } from './goodies.component';

describe('GoodiesComponent', () => {
  let component: GoodiesComponent;
  let fixture: ComponentFixture<GoodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
