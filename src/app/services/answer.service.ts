import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from 'app/models/Answer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor( private http:HttpClient ) { }

  baseUrl = "http://localhost:8089/api/v1/course/answer";

  getAllAnswers(id : string): Observable<any>{
    return this.http.get<any>(this.baseUrl + "/answerListByQuestion/" + id);
  }

  getAnswer(id: number): Observable<Answer> {
    return this.http.get<Answer>(`${this.baseUrl}/${id}`);}

  addAnswer(answer: Object, idquestion): Observable<Object> {
    return this.http.post<Answer>(this.baseUrl+ "/" + idquestion + "/add" , answer);
  }

  updateAnswer(answer : Answer): Observable<Answer> {
    return this.http.put<Answer>(this.baseUrl + "/" + answer.id , answer);
  }

  deleteAnswer(id: number , idd : number) : Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + idd + "/"+ id)
  }
}
