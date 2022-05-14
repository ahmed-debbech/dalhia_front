import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseuDetailsComponent } from './phaseu-details.component';

describe('PhaseuDetailsComponent', () => {
  let component: PhaseuDetailsComponent;
  let fixture: ComponentFixture<PhaseuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaseuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
