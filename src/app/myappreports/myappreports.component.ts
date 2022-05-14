import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentReport } from 'app/model/appointment-report';
import { AppointmentService } from 'app/shared/appointment.service';

@Component({
  selector: 'app-myappreports',
  templateUrl: './myappreports.component.html',
  styleUrls: ['./myappreports.component.scss']
})
export class MyappreportsComponent implements OnInit {

  constructor(public service:AppointmentService,private ac:ActivatedRoute) { }
  apr:AppointmentReport=null;
  appreps:any;
  myParam;
  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=Number(res.get('id'))
        });
    
    

  }

  reportApp(id:any,report ){
    this.apr= new AppointmentReport(report);
    this.service.reportAppointment(id,this.apr).subscribe(res=>{
      
      console.log("appointment reported.");
    })
        }


        deleteAppReport(id:any){
          this.service.deleteAppReport(id).subscribe(
            (res: any) => {
              this.ngOnInit();
                
              
            },
                err => {
                  console.log(err);
                }
              
            
            
          );
        }

}
