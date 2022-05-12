import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'app/model/appointment';
import { AppointmentService } from 'app/shared/appointment.service';
import { MyappointmentsService } from 'app/shared/myappointments.service';

@Component({
  selector: 'app-myappointments',
  templateUrl: './myappointments.component.html',
  styleUrls: ['./myappointments.component.scss']
})
export class MyappointmentsComponent implements OnInit {

  constructor(public service:AppointmentService,public src:MyappointmentsService, public dialog: MatDialog,private ac:ActivatedRoute) { }
  myParam;
  apps:any;
  app : Appointment;

  
  ngOnInit(): void {
    this.ac.paramMap.subscribe(
     
     
      (res: any)=>{
      
        this.service.getAppointments().subscribe(result=>this.apps=result)
        });
    
  }

  
  
  deleteAppointment(id:any){
    this.service.deleteApp(id).subscribe(
      (res: any) => {
        this.ngOnInit();
          
        
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }
  
  


}
