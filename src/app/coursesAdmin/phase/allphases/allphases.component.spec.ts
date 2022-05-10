import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllphasesComponent } from './allphases.component';

describe('AllphasesComponent', () => {
  let component: AllphasesComponent;
  let fixture: ComponentFixture<AllphasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllphasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllphasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
