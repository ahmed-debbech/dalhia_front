import { Component, Inject, OnInit } from '@angular/core';
import { Topic } from 'app/models/Topic';
import { Comment } from 'app/models/Comment';
import { TopicService } from 'app/services/topic.service';
import { CommentService } from 'app/services/comment.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'forum-news-feed',
  templateUrl: './forum-news-feed.component.html',
  styleUrls: ['./forum-news-feed.component.scss']
})
export class ForumNewsFeedComponent implements OnInit {

  onhover : number = undefined;

  constructor(public dialog: MatDialog, private ts : TopicService, private cs : CommentService) { }

  listPosts : Topic[] = [];
  ngOnInit(): void {
    this.onhover = undefined
    this.showAll()
  }

  showAll(){
    this.ts.getAllTopics().subscribe(res => {this.listPosts = res; console.log(this.listPosts)})
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
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

  onComment(tex : string, id : number){
    console.log(tex);
    var comment = new Comment();
    comment.text = tex
    this.cs.writeComment(comment, id).subscribe(res => {console.log(res); this.showAll()})
  }
}

export interface DialogData {
  reacts: 'Wow' | 'Crying' | 'Angry' | 'Love' | 'Care' | 'Haha' | 'Like';
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}