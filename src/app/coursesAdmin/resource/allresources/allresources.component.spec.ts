import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllresourcesComponent } from './allresources.component';

describe('AllresourcesComponent', () => {
  let component: AllresourcesComponent;
  let fixture: ComponentFixture<AllresourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllresourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
