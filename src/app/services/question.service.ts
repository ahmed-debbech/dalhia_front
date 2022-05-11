import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'app/models/Question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor( private http:HttpClient) { }

  baseUrl = "http://localhost:8089/api/v1/course/question";

  getAllQuestions(id:number): any{
    return this.http.get<any>(`${this.baseUrl}`+"/"+ id + "/questionListByQuiz");
  }

  getQuestion(id: number): any{
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  addQuestion(question: Question, idquiz : number): Observable<Question> {
    return this.http.post<Question>(this.baseUrl+ "/" + idquiz + "/add" , question);
  }

  updateQuestion(question : Question): Observable<Question> {
    return this.http.put<Question>(this.baseUrl + "/" + question.id , question);
  }

  deleteQuestion(id: number) : Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id)
  }
}
