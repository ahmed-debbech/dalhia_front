import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppointmentRate } from 'app/model/appointment-rate';

@Injectable({
  providedIn: 'root'
})
export class AppointmentRateService {

  paramMap: any;

  constructor(private http: HttpClient,private fb: FormBuilder) { }

  readonly BaseURI = 'http://localhost:8089/api/v1';
  

  getAppRate(id:number){
    return this.http.get<AppointmentRate>(this.BaseURI+'/appointment/retrieve-app-rates/'+ id);
  }
}
