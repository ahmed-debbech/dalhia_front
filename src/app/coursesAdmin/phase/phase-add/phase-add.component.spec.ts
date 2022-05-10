import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseAddComponent } from './phase-add.component';

describe('PhaseAddComponent', () => {
  let component: PhaseAddComponent;
  let fixture: ComponentFixture<PhaseAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaseAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
