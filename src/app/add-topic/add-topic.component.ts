import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  checkTitle(title: string){
    if(title.length == 0){
      return false;
    }
    if(title.length < 2){
      return true;
    }
    return false;
  }
  checkText(text : string){
    if(text.length == 0){
      return false;
    }
    if(text.length <= 10){
      return true;
    }
    return false;
  }
  add(tit : string, tex : string){
    console.log(tit + tex);
    if(this.checkText(tex) || this.checkTitle(tit)){
      return;
    }
    var top  = new Topic();
    top.title = tit
    top.text = tex
    top.tag = "DISCUSSION"   
    this.ts.addNewTopic(top).subscribe(res => {console.log(res)})
    this.router.navigateByUrl("/forum/feed");
  }
}
