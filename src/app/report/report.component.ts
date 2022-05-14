import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReportService } from 'app/shared/report.service';
import { Report } from 'app/model/report';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  
  constructor(public service:ReportService, public dialog: MatDialog) { }
  
  reps:any;
  rp : Report;
  ngOnInit(): void {
    this.service.getReports().subscribe(
      res =>{
        this.reps = res;
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
  deleteReport(rp:Report){
    let conf=confirm
    (
        "Are you sure ?"
        );
    if
    (conf)
    this.service.deleteReport(rp.reportId).subscribe(()=>
    {
    console.log("report removed" );
    this.deleteReportfromTable(rp);
    }

  
    )
  }

  
deleteReportfromTable(rp:Report)
{
this.reps.forEach((cur,index)=>
{
if
(rp.reportId===cur.reportId)
{
this.reps.splice(index,1);
}
});
}


}
