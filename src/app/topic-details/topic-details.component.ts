import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from 'app/models/Topic';
import { CommentService } from 'app/services/comment.service';
import { TopicService } from 'app/services/topic.service';

@Component({
  selector: 'topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.scss']
})
export class TopicDetailsComponent implements OnInit {

  topic : Topic;

  constructor(private route : ActivatedRoute, private ts : TopicService, private cs : CommentService) { }

  ngOnInit(): void {
    this.ts.getTopicById(this.route.snapshot.paramMap.get('id')).subscribe(res => {this.topic = res; console.log(this.topic)})
  }

  bancmt(id : number){
    this.cs.banComment(id).subscribe(res => {console.log(res);});
  }
}
