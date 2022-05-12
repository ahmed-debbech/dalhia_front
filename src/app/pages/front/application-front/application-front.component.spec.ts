import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFrontComponent } from './application-front.component';

describe('ApplicationFrontComponent', () => {
  let component: ApplicationFrontComponent;
  let fixture: ComponentFixture<ApplicationFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
