import { Component, OnInit } from '@angular/core';
import { Topic } from 'app/models/Topic';
import { TopicService } from 'app/services/topic.service';

@Component({
  selector: 'topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  constructor(private ts : TopicService) { }

  listTopics : Topic[] = [];

  ngOnInit(): void {
    this.showAll()
  }
  showAll(){
    this.ts.getAllTopics().subscribe(res => {this.listTopics = res; console.log(this.listTopics)})
  }
  unban(id: string){
    this.ts.unbanTopic(id).subscribe(res => {
      console.log("unbanned!");
      this.showAll()
    })
  }
  ban(id : string){
    this.ts.banTopic(id).subscribe(res => {
      console.log("banned!");
      this.showAll()
    })
  }
  remove(id : string){
    this.ts.removeTopic(id).subscribe(res => {
      console.log("deleted!");
      this.showAll()
    })
  }
}
