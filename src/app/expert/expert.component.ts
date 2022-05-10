import { Component, OnInit, ContentChildren } from '@angular/core';
import { User } from 'app/model/user';
import { AppointmentService } from '../shared/appointment.service';
import { Router } from '@angular/router'; 
import { AddAppointmentComponent } from 'app/add-appointment/add-appointment.component';
import { BestexpertService } from 'app/shared/bestexpert.service';
import { BannedExpertsComponent } from 'app/banned-experts/banned-experts.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit {

  

  constructor(public service:AppointmentService, public exs :BestexpertService ,private router:Router,public dialog: MatDialog) {};
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

 /* expertDetails(id:number){
    this.router.navigate(['add-appointment', id]);
  }*/


  openDialog() {
    const dref = this.dialog.open(BannedExpertsComponent);
    
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }
  
  getBanExpert(){
  this.exs.getBanExpert().subscribe(
    res =>{
      this.exps = res;
this.openDialog();
    },
    err =>{
      console.log(err);
    }

  );


  

  }


}
