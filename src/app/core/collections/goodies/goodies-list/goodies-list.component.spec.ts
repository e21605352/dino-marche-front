import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodiesListComponent } from './goodies-list.component';

describe('GoodiesListComponent', () => {
  let component: GoodiesListComponent;
  let fixture: ComponentFixture<GoodiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
