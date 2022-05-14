import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertdetailsComponent } from './expertdetails.component';

describe('ExpertdetailsComponent', () => {
  let component: ExpertdetailsComponent;
  let fixture: ComponentFixture<ExpertdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
