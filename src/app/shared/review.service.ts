import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Review } from 'app/model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient,private fb: FormBuilder) { }


  readonly BaseURI = 'http://localhost:8089/api/v1';

  formModel = this.fb.group({
   
    reviewBody: [''],
    reviewDate: [''],
    reviewHeader: [''],
    stars:[''],
   
    
  });


  /*addReview(id:any) {
    var body = {
      
      
    reviewBody:this.formModel.value.reviewBody,
    reviewDate:this.formModel.value.reviewDate,
    reviewHeader:this.formModel.value.reviewHeader,
    stars:this.formModel.value.stars,
      
    };
    return this.http.post(this.BaseURI + '/review/add-review/'+ id,body);
  }*/

  addReview(id:any, r:Review) {
    /* var body = {
       appDate: this.formModel.value.appDate,
       appHour: this.formModel.value.appHour,
       
       
     };*/
     return this.http.post(this.BaseURI + '/review/add-review/'+ id, r);
   }

  getReviews(){
    
    return this.http.get<Review>(this.BaseURI+ '/review/retrieve-all-reviews');
  }

  deleteReview(id:number){
    return this.http.delete(this.BaseURI+ '/review/remove-review/'+ id);

  }
}
