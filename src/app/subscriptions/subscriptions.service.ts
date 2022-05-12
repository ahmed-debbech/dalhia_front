import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriptions } from 'app/models/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  url ="http://localhost:8089/api/v1/subscriptions/"
  constructor(private http : HttpClient) { }

  getSubscriptions() {
     return this.http.get<Subscriptions[]>(this.url)
  }

  addSubscription(sub : Subscriptions) {
    return this.http.post<Subscriptions>(this.url,sub)
  }

  updateSubscription(id : string , sub : Subscriptions) {
    return this.http.put<Subscriptions>(this.url+id,sub);
  }
  getById(id : string) {
    return this.http.get<Subscriptions>(this.url+id)
  }
  deleteSubscription(id :string) {
    return this.http.delete(this.url+id)
  }
}
