import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MyreviewsService } from 'app/shared/myreviews.service';
import { ReviewService } from 'app/shared/review.service';

@Component({
  selector: 'app-myreviews',
  templateUrl: './myreviews.component.html',
  styleUrls: ['./myreviews.component.scss']
})
export class MyreviewsComponent implements OnInit {

  constructor(public service:ReviewService,public src:MyreviewsService, public dialog: MatDialog,private ac:ActivatedRoute) { }
  
  revs:any;
  myParam:any;
  ngOnInit(): void {

    this.ac.paramMap.subscribe(
      (res: any)=>{
       
        this.service.getReviews().subscribe(result=>this.revs=result)
        });
  }



  deleteReview(id:any){
    this.service.deleteReview(id).subscribe(
      (res: any) => {
        this.ngOnInit();
          
        
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }

}
