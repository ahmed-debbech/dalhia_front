import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { User } from 'app/models/user';
import { exhaustMap, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url ="http://localhost:8089/api/v1/users/"
  constructor(private http:HttpClient , private authService : AuthService) { }


   getUsers(): Observable<User[]> {
     //exhaust map tkhadem 2 observable : tlanci loula tkmlha o taamlelha unsubscribe o bead tlanci thenya
   
      return this.http.get<User[]>(this.url+ "get-users")
     
    
  }

  addUser(user : User) {
    
    return this.http.post<User>(this.url,user);
  }

  deleteUser(id:string){
    
    return this.http.delete<User>(this.url+id
     )
 
  }

  getById(id:string) {
    return this.http.get<User>(this.url+id);
  }

  updateUser(id:string, user: User) {
    return this.http.put<User>(this.url+id,user);
  }

  getUsersPdf() {
    return this.http.get(this.url+"get-users-pdf")
  }
}
