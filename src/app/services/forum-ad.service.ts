import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForumAd } from 'app/models/ForumAd';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumAdService {


  baseUrl : string = "http://localhost:8089/api/v1/forum/ads"

  constructor(private http : HttpClient) { }

  addNewAd(ad : ForumAd) : Observable<ForumAd>{

    return this.http.post<ForumAd>(this.baseUrl, ad);
  }
  getAds() : Observable<ForumAd[]>{
    return this.http.get<ForumAd[]>(this.baseUrl);
  }
}
