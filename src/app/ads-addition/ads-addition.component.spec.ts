import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsAdditionComponent } from './ads-addition.component';

describe('AdsAdditionComponent', () => {
  let component: AdsAdditionComponent;
  let fixture: ComponentFixture<AdsAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
