import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestworstexpertComponent } from './bestworstexpert.component';

describe('BestworstexpertComponent', () => {
  let component: BestworstexpertComponent;
  let fixture: ComponentFixture<BestworstexpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestworstexpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestworstexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
