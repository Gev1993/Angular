import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewesComponent } from './reviewes.component';

describe('ReviewesComponent', () => {
  let component: ReviewesComponent;
  let fixture: ComponentFixture<ReviewesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
