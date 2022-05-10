import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentRateService } from 'app/shared/appointment-rate.service';
import { AppointmentService } from 'app/shared/appointment.service';
import { BestexpertService } from 'app/shared/bestexpert.service';
import { ReviewService } from 'app/shared/review.service';

@Component({
  selector: 'app-appointment-rate',
  templateUrl: './appointment-rate.component.html',
  styleUrls: ['./appointment-rate.component.scss']
})
export class AppointmentRateComponent implements OnInit {


  constructor(public service:AppointmentRateService, public exs :BestexpertService, public rs: ReviewService ,private router:Router,private ac:ActivatedRoute) {}
  apprates:any;
  score:any;
  experts: any;
myParam;

ngOnInit(): void {
  this.ac.paramMap.subscribe(
    res=>{
      this.myParam=Number(res.get('id')),
      this.service.getAppRate(this.myParam).subscribe(result=>this.apprates=result)
      });

    }

}
