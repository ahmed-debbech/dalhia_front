import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plans } from 'app/models/plans';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private http : HttpClient) { }

  url ="http://localhost:8089/api/v1/plans/"

  getPlans() {
    return this.http.get<Plans[]>(this.url)
  }

  addPlan(plan : Plans) {
    return this.http.post<Plans>(this.url,plan)
  }

  getPlanById(id: number) {
    return this.http.get<Plans>(this.url+id)
  }
  updateUser(id:number, plan: Plans) {
    return this.http.put<Plans>(this.url+id,plan);
  }

  deletePlan(id:number) {
    return this.http.delete(this.url+id)
  }
}
