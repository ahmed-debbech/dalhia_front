import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentReportService } from 'app/shared/appointment-report.service';
import { AppointmentService } from 'app/shared/appointment.service';
import { BestexpertService } from 'app/shared/bestexpert.service';
import { ReviewService } from 'app/shared/review.service';

@Component({
  selector: 'app-appointment-report',
  templateUrl: './appointment-report.component.html',
  styleUrls: ['./appointment-report.component.scss']
})
export class AppointmentReportComponent implements OnInit {

  constructor(public service:AppointmentReportService, public ss :AppointmentService, public rs: ReviewService ,private router:Router,private ac:ActivatedRoute) {}
  appreports:any;
myParam;

ngOnInit(): void {
  this.ac.paramMap.subscribe(
    res=>{
      this.myParam=Number(res.get('id')),
      this.service.getAppReport(this.myParam).subscribe(result=>this.appreports=result)
      });

    }

    deleteAppReport(id:any){
      this.ss.deleteAppReport(id).subscribe(
        (res: any) => {
          this.ngOnInit();
            
          
        },
            err => {
              console.log(err);
            }
          
        
        
      );
    }

  
}
