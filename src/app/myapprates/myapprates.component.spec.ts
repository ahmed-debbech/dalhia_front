import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappratesComponent } from './myapprates.component';

describe('MyappratesComponent', () => {
  let component: MyappratesComponent;
  let fixture: ComponentFixture<MyappratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyappratesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
