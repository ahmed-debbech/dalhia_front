import { Component, OnInit } from '@angular/core';
import { Topic } from 'app/models/Topic';
import { TopicService } from 'app/services/topic.service';

@Component({
  selector: 'forum-news-feed',
  templateUrl: './forum-news-feed.component.html',
  styleUrls: ['./forum-news-feed.component.scss']
})
export class ForumNewsFeedComponent implements OnInit {

  constructor(private ts : TopicService) { }

  listPosts : Topic[] = [];
  ngOnInit(): void {
    this.showAll()
  }

  showAll(){
    this.ts.getAllTopics().subscribe(res => {this.listPosts = res; console.log(this.listPosts)})
  }

}
