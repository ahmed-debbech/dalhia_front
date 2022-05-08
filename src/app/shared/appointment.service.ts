import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Appointment } from 'app/model/appointment';
import { User } from 'app/model/user';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {

  constructor(private http: HttpClient,private fb: FormBuilder) { }

  readonly BaseURI = 'http://localhost:8089/api/v1';

  formModel = this.fb.group({
   
    appId: [''],
    appDate: [''],
    appHour: [''],
   
    
  });

  addAppointment(id:any, a:Appointment) {
   /* var body = {
      appDate: this.formModel.value.appDate,
      appHour: this.formModel.value.appHour,
      
      
    };*/
    return this.http.post(this.BaseURI + '/appointment/add-appointment/'+ id, a);
  }

  getAppointments(){
    
    return this.http.get<Appointment>(this.BaseURI+ '/appointment/retrieve-all-appointments');
  }

  deleteAppointment(id:number){
    return this.http.delete(this.BaseURI+ '/appointment/remove-appointment/'+ id);

  }
  getExperts(){
    return this.http.get<User>(this.BaseURI+ '/appointment/retrieve-all-experts');

  }

  getExpertDetails(id:number){
    return this.http.get<User>(this.BaseURI+'/appointment/retrieve-expert-details/'+ id);
  }
  

}
