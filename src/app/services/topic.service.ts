import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from 'app/models/Topic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {


  baseUrl : string = "http://localhost:8089/api/v1/forum/topics"
  constructor(private http : HttpClient) { }

  addNewTopic(topic : Topic) : Observable<Topic>{
    return this.http.post<Topic>(this.baseUrl, topic);
  }
  getAllTopics() : Observable<Topic[]>{
    return this.http.get<Topic[]>(this.baseUrl+"")
  }
  getTopicById(id : string) : Observable<Topic> {
    return this.http.get<Topic>(this.baseUrl+ "/" + id);
  }
  banTopic(id : string) : Observable<any>{
    return this.http.put<any>(this.baseUrl + "/" + id + "/bans/true", {});
  }
  unbanTopic(id : string) : Observable<any>{
    return this.http.put<any>(this.baseUrl + "/" + id + "/bans/false", {});
  }
  removeTopic(id: string) : Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id)
  }
  upvote(id : number) : any{
    return this.http.put<any>(this.baseUrl + "/" + id + "/rate/" + "UPVOTE", {})
  }
  downvote(id : number) : any{
    return this.http.put<any>(this.baseUrl + "/" + id + "/rate/" + "DOWNVOTE", {})
  }
  getPostOfDay() : Observable<Topic>{
    return this.http.get<Topic>(this.baseUrl + "/topicOfTheDay")
  }
}
