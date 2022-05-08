import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/model/user';
import { AppointmentService } from 'app/shared/appointment.service';
import { BestexpertService } from 'app/shared/bestexpert.service';

@Component({
  selector: 'app-expertdetails',
  templateUrl: './expertdetails.component.html',
  styleUrls: ['./expertdetails.component.scss']
})
export class ExpertdetailsComponent implements OnInit {

  constructor(public service:AppointmentService, public exs :BestexpertService ,private router:Router,private ac:ActivatedRoute) { }
  exp:User;
  experts: any;
myParam;
  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=Number(res.get('id')),
        this.service.getExpertDetails(this.myParam).subscribe(result=>this.exp=result)
        });

    
  }

}

