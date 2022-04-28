import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from 'app/models/Topic';
import { TopicService } from 'app/services/topic.service';

@Component({
  selector: 'topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.scss']
})
export class TopicDetailsComponent implements OnInit {

  topic : Topic;

  constructor(private route : ActivatedRoute, private ts : TopicService) { }

  ngOnInit(): void {
    this.ts.getTopicById(this.route.snapshot.paramMap.get('id')).subscribe(res => {this.topic = res; console.log(this.topic)})
  }

}
