import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseuDetailsComponent } from './courseu-details.component';

describe('CourseDetailsComponent', () => {
  let component: CourseuDetailsComponent;
  let fixture: ComponentFixture<CourseuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
