import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from '../shared/appointment.service';
import { AddAppointmentComponent } from '../add-appointment/add-appointment.component';
import { Appointment } from 'app/model/appointment';
import { Router } from 'express';
import { User } from 'app/model/user';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor(public service:AppointmentService, public dialog: MatDialog) { }
  experts:any;
  apps:any;
  app : Appointment;
  ngOnInit(): void {
    this.service.getAppointments().subscribe(
      res =>{
        this.apps = res;
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
  deleteAppointment(app:Appointment){
    let conf=confirm
    (
        "Are you sure ?"
        );
    if
    (conf)
    this.service.deleteAppointment(app.appId).subscribe(()=>
    {
    console.log("appointment removed" );
    this.deleteAppointmentfromTable(app);
    }

  
    )
  }

  
deleteAppointmentfromTable(ap:Appointment)
{
this.apps.forEach((cur,index)=>
{
if
(ap.appId===cur.appId)
{
this.apps.splice(index,1);
}
});
}






}

