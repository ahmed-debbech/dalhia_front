import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumNewsFeedComponent } from './forum-news-feed.component';

describe('ForumNewsFeedComponent', () => {
  let component: ForumNewsFeedComponent;
  let fixture: ComponentFixture<ForumNewsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumNewsFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumNewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
