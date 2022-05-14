import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Report } from 'app/model/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient,private fb: FormBuilder) { }

  readonly BaseURI = 'http://localhost:8089/api/v1';

  formModel = this.fb.group({
   
    

    category:[''],
    reportBody: [''],
    reportDate: [''],
    status:[''],
   
    
  });


  addReport() {
    var body = {
      
      
    category:this.formModel.value.category,
    reportBody:this.formModel.value.reportBody,
    reportDate:this.formModel.value.reportDate,
    status:this.formModel.value.status,
      
    };
    return this.http.post(this.BaseURI + '/report/add-report/', body);
  }

  getReports(){
    
    return this.http.get<Report>(this.BaseURI+ '/report/retrieve-all-reports');
  }

  deleteReport(id:number){
    return this.http.delete(this.BaseURI+ '/report/remove-report/'+ id);

  }
  
}
