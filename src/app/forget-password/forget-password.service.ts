import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  constructor(private http : HttpClient) { }

  reqForgetPassword(email : string) {
    return this.http.post('http://localhost:8089/api/v1/users/password-reset-request',{
      email :email
  })

  }

  changePassword(password : string,token: string) {
    return this.http.post('http://localhost:8089/api/v1/users/password-reset' , {
      password : password ,
      token : token
    })
  }
}
