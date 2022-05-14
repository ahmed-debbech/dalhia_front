import { Component, Input, OnInit } from '@angular/core';
import { AppointmentService } from '../shared/appointment.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'app/model/appointment';
import { User } from 'app/model/user';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {

  
  appDate:any;
  appHour:number;
  model: NgbDateStruct;
  
  experts:any;
  apps: any;

  a:Appointment=null;


  constructor(public service:AppointmentService,private ac:ActivatedRoute) { }

  myParam;
  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=Number(res.get('id'))
        });
    
    

  }

  /*onSubmit(id:any, a:Appointment){

    this.service.addAppointment(id,a).subscribe(
      (res: any) => {
        
          
          this.service.formModel.reset();
          
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }*/

  addApp(id:any,appDate,appHour ){
    this.a= new Appointment(appDate,appHour);
    this.service.addAppointment(id,this.a).subscribe(res=>{
      
      console.log("appointment added.");
    })
        }

  getExperts() {
    this.service.getExperts().subscribe(res=>{
      this.experts=res;
      console.log(this.experts);
    })
  }

}
