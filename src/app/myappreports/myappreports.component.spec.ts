import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappreportsComponent } from './myappreports.component';

describe('MyappreportsComponent', () => {
  let component: MyappreportsComponent;
  let fixture: ComponentFixture<MyappreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyappreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
