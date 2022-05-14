import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Review } from 'app/model/review';

@Injectable({
  providedIn: 'root'
})
export class MyreviewsService {

  paramMap: any;
  constructor(private http: HttpClient,private fb: FormBuilder) { }
  

  readonly BaseURI = 'http://localhost:8089/api/v1';

  getMyReviews(id:number){
    
    return this.http.get<Review>(this.BaseURI+ '/review/retrieve-my-reviews/'+id);
  }
}
