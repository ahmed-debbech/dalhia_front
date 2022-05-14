import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Appointment } from 'app/model/appointment';

@Injectable({
  providedIn: 'root'
})
export class MyappointmentsService {

  paramMap: any;

  constructor(private http: HttpClient,private fb: FormBuilder) { }

  readonly BaseURI = 'http://localhost:8089/api/v1';

  getMyAppointments(id:number){
    
    return this.http.get<Appointment>(this.BaseURI+ '/appointment/retrieve-my-appointments/'+id);
  }
  
}
