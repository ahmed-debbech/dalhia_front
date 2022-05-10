import { Component, Inject, OnInit } from '@angular/core';
import { Topic } from 'app/models/Topic';
import { Comment } from 'app/models/Comment';
import { TopicService } from 'app/services/topic.service';
import { CommentService } from 'app/services/comment.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommentReaction } from 'app/models/CommentReaction';
import { Router } from '@angular/router';

@Component({
  selector: 'forum-news-feed',
  templateUrl: './forum-news-feed.component.html',
  styleUrls: ['./forum-news-feed.component.scss']
})
export class ForumNewsFeedComponent implements OnInit {

  onhover : number = undefined;
  onReplyCmt : number = undefined;

  constructor(public dialog: MatDialog, private ts : TopicService, private cs : CommentService) { }

  listPosts : Topic[] = [];
  ngOnInit(): void {
    this.onhover = undefined
    this.showAll()
  }

  showAll(){
    this.ts.getAllTopics().subscribe(res => {this.listPosts = res; console.log(this.listPosts)})
  }

  openDialog(cmt : number) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        cmt_id: cmt
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

  onReply(tex : string, cmt : number){
    this.onReplyCmt = undefined;
    var comment = new Comment();
    comment.text = tex
  console.log(cmt);
      
    this.cs.writeReply(comment, cmt).subscribe(res => {console.log(res); this.showAll()})
  }
  openReply(cmt_id : number){
    if(this.onReplyCmt == undefined){
      this.onReplyCmt = cmt_id;
    }else{
      this.onReplyCmt = undefined;
    }
  }

  postTheDay(){
    this.ts.getPostOfDay().subscribe(res => {console.log(res); this.listPosts = []; this.listPosts.push(res)})
  }
  onComment(tex : string, id : number){
    console.log(tex);
    var comment = new Comment();
    comment.text = tex
    this.cs.writeComment(comment, id).subscribe(res => {console.log(res); this.showAll()})
  }
}

export interface DialogData {
  reacts: 'Wow' | 'Crying' | 'Angry' | 'Love' | 'Care' | 'Haha' | 'Like',
  cmt_id : 2
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './dialog.html',
})
export class DialogDataExampleDialog {
  constructor(private router : Router, private cs : CommentService, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.done = false;
  }

  done : boolean = false;

  react(r : string){
    var cmt_rct = new CommentReaction();
    cmt_rct.reactionType = r;
    this.cs.sendReaction(cmt_rct, this.data.cmt_id).subscribe(res => {console.log("reaction sent");})
    this.done = true;
    console.log(this.done);
    
  }
}