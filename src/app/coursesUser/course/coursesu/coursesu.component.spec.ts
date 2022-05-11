import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesuComponent } from './coursesu.component';

describe('CoursesComponent', () => {
  let component: CoursesuComponent;
  let fixture: ComponentFixture<CoursesuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
