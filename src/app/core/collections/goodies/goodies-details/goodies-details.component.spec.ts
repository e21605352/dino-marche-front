import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodiesDetailsComponent } from './goodies-details.component';

describe('GoodiesDetailsComponent', () => {
  let component: GoodiesDetailsComponent;
  let fixture: ComponentFixture<GoodiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodiesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
