import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phase } from 'app/models/Phase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  constructor( private http:HttpClient ) { }

  baseUrl = "http://localhost:8089/api/v1/course/phase";

  getAllPhases(id : string): Observable<any>{
    return this.http.get<any>(this.baseUrl + "/listPhasesByCourse/" + id);
  }

  getPhase(id: number): Observable<Phase> {
    return this.http.get<Phase>(`${this.baseUrl}/${id}`);}

  addPhase(phase: Object): Observable<Object> {
    return this.http.post<Phase>(this.baseUrl+ "/addphases" , phase);
  }

  updatePhase(phase : Phase): Observable<Phase> {
    return this.http.put<Phase>(this.baseUrl + "/" + phase.id , phase);
  }

  deletePhase(id: number , idd : number) : Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id + "/"+ idd)
  }
}
