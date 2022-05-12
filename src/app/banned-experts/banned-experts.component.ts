import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/model/user';
import { AppointmentService } from 'app/shared/appointment.service';
import { BestexpertService } from 'app/shared/bestexpert.service';

@Component({
  selector: 'app-banned-experts',
  templateUrl: './banned-experts.component.html',
  styleUrls: ['./banned-experts.component.scss']
})
export class BannedExpertsComponent implements OnInit {

  constructor(public service:AppointmentService, public exs :BestexpertService ,private router:Router) {};
  currId : User;
  exps:any;
  exp:User;
  ngOnInit(): void {
    this.service.getExperts().subscribe(
      res =>{
        this.exps = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
}


