import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'app/model/review';
import { User } from 'app/model/user';
import { AppointmentService } from 'app/shared/appointment.service';
import { BestexpertService } from 'app/shared/bestexpert.service';
import { ReviewService } from 'app/shared/review.service';

@Component({
  selector: 'app-expertdetails',
  templateUrl: './expertdetails.component.html',
  styleUrls: ['./expertdetails.component.scss']
})
export class ExpertdetailsComponent implements OnInit {

  constructor(public service:AppointmentService, public exs :BestexpertService, public rs: ReviewService ,private router:Router,private ac:ActivatedRoute) { }
  exp:User;
  revs:any;
  score:any;
  experts: any;
myParam;
  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=Number(res.get('id')),
        this.service.getExpertDetails(this.myParam).subscribe(result=>this.exp=result)
        });

    
        this.ac.paramMap.subscribe(
          res=>{
            this.myParam=Number(res.get('id')),
            this.rs.getReviewsByExp(this.myParam).subscribe(result=>this.revs=result)
            });
    
        
      

      this.ac.paramMap.subscribe(
        res=>{
          this.myParam=Number(res.get('id')),
          this.rs.getExpertScore(this.myParam).subscribe(result=>this.score=result)
          });
  
      
    }


    deleteReview(id:any){
      this.rs.deleteReview(id).subscribe(
        (res: any) => {
          this.ngOnInit();
            
          
        },
            err => {
              console.log(err);
            }
          
        
        
      );
    }

}
  



