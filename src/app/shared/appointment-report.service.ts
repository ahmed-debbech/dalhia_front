import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppointmentReport } from 'app/model/appointment-report';

@Injectable({
  providedIn: 'root'
})
export class AppointmentReportService {

  paramMap: any;

  constructor(private http: HttpClient,private fb: FormBuilder) { }

  readonly BaseURI = 'http://localhost:8089/api/v1';
  


  getAppReport(id:number){
    return this.http.get<AppointmentReport>(this.BaseURI+'/appointment/retrieve-app-reports/'+ id);
  }
}
