import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  server="http://localhost:8089/api/v1/Application/";
  constructor(private http: HttpClient) { }


  getAllApplications() {
    return this.http.get<any>(this.server+"retrieve-all-applications",{responseType: 'json'});
  }
  addApplication(application,idOffer,idUser){
    return this.http.post<any>(this.server+"add-application/"+idOffer+"/"+idUser,application);

  }
  getApplicationById(id:string){
    return this.http.get<any>(this.server+"retrieve-application/"+id,{responseType: 'json'});
  }
  getApplicationByUserId(id){
    return this.http.get<any>(this.server+"applications/"+id,{responseType: 'json'});
  }
  
}
