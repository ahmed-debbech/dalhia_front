import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'app/services/application/application.service';

@Component({
  selector: 'app-all-application',
  templateUrl: './all-application.component.html',
  styleUrls: ['./all-application.component.scss']
})
export class AllApplicationComponent implements OnInit {

  constructor(private applicationService : ApplicationService) { }
  allApplication:any=[];
  ngOnInit(): void {
    this.getAllApplications();
  }
  getAllApplications(){
    this.applicationService.getAllApplications().subscribe(res=>{
      this.allApplication=res;
    })
  }

  validateApplication(id){
    console.log(id);
    this.applicationService.validateApplication(id).subscribe(res=>{
      this.getAllApplications();
    })
  }
}
