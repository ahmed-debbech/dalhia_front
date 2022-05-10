import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'app/models/Comment'
import { CommentReaction } from 'app/models/CommentReaction';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl : string = "http://localhost:8089/api/v1/forum"

  constructor(private http : HttpClient) { }

  writeComment(cmt : Comment, topicid : number) : Observable<Comment>{
    return this.http.post<Comment>(this.baseUrl + "/topics/" + topicid + "/comments", cmt)
  }
  writeReply(reply : Comment, cmt : number) : any{
    return this.http.post<any>(this.baseUrl + "/comments/" + cmt + "/replies", reply)
  }
  sendReaction(rct : CommentReaction, topicid : number) : any{
    return this.http.post<any>(this.baseUrl + "/comments/" + topicid + "/reactions", rct)
  }
  banComment(id : number){
    return this.http.put<any>(this.baseUrl + "/comments/" + id + "/bans", {})
  }
}
