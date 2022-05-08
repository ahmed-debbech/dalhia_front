import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Review } from 'app/model/review';
import { ReviewService } from 'app/shared/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  
  constructor(public service:ReviewService, public dialog: MatDialog) { }
  
  revs:any;
  rv : Review;
  ngOnInit(): void {
    this.service.getReviews().subscribe(
      res =>{
        this.revs = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
/*
  openDialog() {
    const dref = this.dialog.open(AddAppointmentComponent);
    
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }*/
  deleteReview(rv:Review){
    let conf=confirm
    (
        "Are you sure ?"
        );
    if
    (conf)
    this.service.deleteReview(rv.reviewId).subscribe(()=>
    {
    console.log("review removed" );
    this.deleteReviewfromTable(rv);
    }

  
    )
  }

  
deleteReviewfromTable(rv:Review)
{
this.revs.forEach((cur,index)=>
{
if
(rv.reviewId===cur.reviewId)
{
this.revs.splice(index,1);
}
});
}

}
