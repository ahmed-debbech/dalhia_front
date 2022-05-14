import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannedExpertsComponent } from './banned-experts.component';

describe('BannedExpertsComponent', () => {
  let component: BannedExpertsComponent;
  let fixture: ComponentFixture<BannedExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannedExpertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannedExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
