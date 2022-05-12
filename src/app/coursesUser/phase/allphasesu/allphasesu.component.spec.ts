import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllphasesuComponent } from './allphasesu.component';

describe('AllphasesuComponent', () => {
  let component: AllphasesuComponent;
  let fixture: ComponentFixture<AllphasesuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllphasesuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllphasesuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
