import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Offer } from 'app/model/offer';
@Injectable({
  providedIn: 'root'
})
 
export class OfferService {
  server="http://localhost:8089/api/v1/Offer/";
  
  constructor(private http: HttpClient) { }


  getOffers() {
    return this.http.get<Offer>(this.server+"retrieve-all-offers",{responseType: 'json'});
  }

  addOffer(offer:any,idCategory){
    return this.http.post<any>(this.server+"add-offer/"+idCategory,offer);

  }
  OfferDelete(id:number){
    return this.http.delete<Offer>(this.server+"remove-offer/"+id);
  }

  getOfferById(id:string){
    return this.http.get<Offer>(this.server+"retrieve-offer/"+id,{responseType: 'json'});
  }
  updateOffer(offer){
    return this.http.put<any>(this.server+"modify-offer",offer);
  }

}
