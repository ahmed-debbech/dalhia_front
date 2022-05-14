import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentRate } from 'app/model/appointment-rate';
import { AppointmentReport } from 'app/model/appointment-report';
import { AppointmentService } from 'app/shared/appointment.service';

@Component({
  selector: 'app-myapprates',
  templateUrl: './myapprates.component.html',
  styleUrls: ['./myapprates.component.scss']
})
export class MyappratesComponent implements OnInit {

  constructor(public service:AppointmentService,private ac:ActivatedRoute) { }
  ar:AppointmentRate=null;
  apprates:any;
  myParam;
  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=Number(res.get('id'))
        });
    
    

  }

  rateApp(id:any,stars ){
    this.ar= new AppointmentRate(stars);
    this.service.rateAppointment(id,this.ar).subscribe(res=>{
      
      console.log("appointment rated.");
    })
        }

        deleteAppRate(id:any){
          this.service.deleteAppRate(id).subscribe(
            (res: any) => {
              this.ngOnInit();
                
              
            },
                err => {
                  console.log(err);
                }
              
            
            
          );
        }

}
