import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'app/models/Comment'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl : string = "http://localhost:8089/api/v1/forum"

  constructor(private http : HttpClient) { }

  writeComment(cmt : Comment, topicid : number) : Observable<Comment>{
    return this.http.post<Comment>(this.baseUrl + "/topics/" + topicid + "/comments", cmt)
  }
}
