import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'app/model/user';

@Injectable({
  providedIn: 'root'
})
export class BestexpertService {

  constructor(private http: HttpClient,private fb: FormBuilder) { }

  readonly BaseURI = 'http://localhost:8089/api/v1';

  formModel = this.fb.group({
   
    id: [''],
    first_name: [''],
    last_name: [''],
    address:[''],
    job:[''],
    phone:[''],
    
  });

  getBestExpert(){
    return this.http.get(this.BaseURI+ '/appointment/retrieve-most-visited-expert');
  }

  getWorstExpert(){
    return this.http.get(this.BaseURI+ '/appointment/retrieve-least-visited-expert');
  }

   getBestScored(){
    return this.http.get(this.BaseURI+ '/review/retrieve-best-scored');

   }

  getWorstScored(){
    return this.http.get(this.BaseURI+ '/review/retrieve-worst-scored');

  }

  getBestScore(){
    return this.http.get(this.BaseURI+ '/review/retrieve-best-score');

   }

  getWorstScore(){
    return this.http.get(this.BaseURI+ '/review/retrieve-worst-score');

  }

  

  getBanExpert(){
    return this.http.get(this.BaseURI + '/appointment/ban-reported-expert');
  }

  getAssocs(){
    return this.http.get<User>(this.BaseURI+ '/appointment/retrieve-all-experts');

  }

}
