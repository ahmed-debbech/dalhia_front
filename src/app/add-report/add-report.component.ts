import { Component, OnInit } from '@angular/core';
import { ReportService } from '../shared/report.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {

  constructor(public service:ReportService) { }
  experts:any;
  ngOnInit(): void {
  }

  onSubmit(){
    this.service.addReport().subscribe(
      (res: any) => {
        
          
          this.service.formModel.reset();
          
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }



}
