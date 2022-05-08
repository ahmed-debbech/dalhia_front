import { Component, OnInit } from '@angular/core';
import { Topic } from 'app/models/Topic';
import { Comment } from 'app/models/Comment';
import { TopicService } from 'app/services/topic.service';

@Component({
  selector: 'forum-news-feed',
  templateUrl: './forum-news-feed.component.html',
  styleUrls: ['./forum-news-feed.component.scss']
})
export class ForumNewsFeedComponent implements OnInit {

  onhover : number = undefined;

  constructor(private ts : TopicService) { }

  listPosts : Topic[] = [];
  ngOnInit(): void {
    this.onhover = undefined
    this.showAll()
  }

  showAll(){
    this.ts.getAllTopics().subscribe(res => {this.listPosts = res; console.log(this.listPosts)})
  }

  upvote(id : number){
    this.ts.upvote(id).subscribe(res => {console.log(res);
      this.showAll();
    })
  }

  downvote(id : number){
    this.ts.downvote(id).subscribe(res => {    this.showAll();
      console.log(res);
    })
  }
  showComments(onIdHover : number){
    
    if(this.onhover == undefined){
      this.onhover = onIdHover;
    }else{
      this.onhover = undefined;
    }
    console.log(this.onhover);
  }

  onComment(tex : string){
    console.log(tex);
    var comment = new Comment();
    comment.text = tex
    this.ts.addNewComment(top).subscribe(res => {console.log(res)})
  }
}
