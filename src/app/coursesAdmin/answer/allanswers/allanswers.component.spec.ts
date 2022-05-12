import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllanswersComponent } from './allanswers.component';

describe('AllanswersComponent', () => {
  let component: AllanswersComponent;
  let fixture: ComponentFixture<AllanswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllanswersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllanswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
