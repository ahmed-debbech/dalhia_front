import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'app/services/application/application.service';

@Component({
  selector: 'app-application-front',
  templateUrl: './application-front.component.html',
  styleUrls: ['./application-front.component.scss']
})
export class ApplicationFrontComponent implements OnInit {

  constructor(private applicationService : ApplicationService) { }
  myApplication:any=[];
  userId=2;
  ngOnInit(): void {
    this.getAllApplicationsbyUser();
  }
  getAllApplicationsbyUser(){
    this.applicationService.getApplicationByUserId(this.userId).subscribe(res=>{
      this.myApplication=res;
    })
  }

}
