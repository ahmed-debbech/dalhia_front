import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from 'app/models/Topic';
import { TopicService } from 'app/services/topic.service';

@Component({
  selector: 'add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.scss']
})
export class AddTopicComponent implements OnInit {

  constructor(private router : Router, private ts : TopicService) { }

  ngOnInit(): void {
  }

  add(tit : string, tex : string){
    console.log(tit + tex);
    var top  = new Topic();
      top.title = tit
      top.text = tex
      top.tag = "DISCUSSION"   
      this.ts.addNewTopic(top).subscribe(res => {console.log(res)})
      //this.router.navigate(['feed']);
  }
}
