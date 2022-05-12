import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferFrontComponent } from './offer-front.component';

describe('OfferFrontComponent', () => {
  let component: OfferFrontComponent;
  let fixture: ComponentFixture<OfferFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
