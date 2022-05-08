import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Review } from 'app/model/review';
import { ReviewService } from 'app/shared/review.service';



@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  reviewDate:any;
  reviewHeader:any;
  reviewBody:any;
  stars:number;
  model: NgbDateStruct;

  
  constructor(public service:ReviewService,private ac:ActivatedRoute) { }
  reps:any;
  myParam;
  r:Review=null;
  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=Number(res.get('id'))
        });
    
    

  }

  addReview(id:any,reviewBody,reviewDate,reviewHeader,stars){
    this.r= new Review(reviewBody,reviewDate,reviewHeader,stars);
    this.service.addReview(id,this.r).subscribe(res=>{
      
      console.log("review added.");
    })
        }

  /*onSubmit(id:any){
    this.service.addReview(id).subscribe(
      (res: any) => {
        
          
          this.service.formModel.reset();
          
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }*/
}
