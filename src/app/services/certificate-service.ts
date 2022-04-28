import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private _http:HttpClient) { }

  baseUrl = "http://localhost:8089/api/v1/course/";

  getAllCertificates(id : string): Observable<any>{
    return this._http.get<any>(this.baseUrl+ id+"/certificate");
  }
}
